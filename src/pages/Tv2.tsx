import { useEffect, useState, useRef, useCallback } from 'react';
import ReactPlayer from 'react-player';
import './Tv2.css'; // Import CSS file for styles
// import { sendNotification } from '../utils/notifications';
import { appConfig } from '@/appConfig';
import NotificationButtons from '@/components/NotificationButtons';
import { useLocalStorage } from '@uidotdev/usehooks';

// Server configuration
const videoServerUrl = "http://localhost:3537";

export default function Tv2Page() {
    const [localVideos, setLocalVideos] = useState<string[]>([]);
    const [currentVideo, setCurrentVideo] = useState<string | null>(null);
    const [playerError, setPlayerError] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [autoplayBlocked, setAutoplayBlocked] = useState(false); const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    // Volume control variables
    const minVolume = 0;
    const maxVolume = 1;
    const volumeSteps = 10;
    const volumeStepSize = maxVolume / volumeSteps;
    const [volume, setVolume] = useLocalStorage('volume', 0.5); // Initial volume at 50%
    // const [showMoveReminder, setShowMoveReminder] = useState(false);
    // const [moveReminderStartTime, setMoveReminderStartTime] = useState<Date | null>(null);
    // const [lastDismissedTimestamp, setLastDismissedTimestamp] = useState<Date | null>(null); // Changed state
    const playerRef = useRef<ReactPlayer>(null);
    const [showOverlay, setShowOverlay] = useState(false);

    // Function to calculate duration of activity break in seconds
    // const calculateActivityDuration = (): number => {
    //     if (!moveReminderStartTime) return 0;

    //     const now = new Date();
    //     // Calculate duration in seconds
    //     return Math.round((now.getTime() - moveReminderStartTime.getTime()) / 1000);
    // };

    // New function to handle dismissing the move reminder
    // const handleDismissMoveReminder = (notificationMessage: string) => {
    //     const durationSeconds = calculateActivityDuration();
    //     const durationText = durationSeconds > 60
    //         ? `${Math.floor(durationSeconds / 60)} minutes and ${durationSeconds % 60} seconds`
    //         : `${durationSeconds} seconds`;
    //     sendNotification(`${notificationMessage} (Duration: ${durationText})`, 'fyi');
    //     setShowMoveReminder(false);
    //     setMoveReminderStartTime(null);
    //     setLastDismissedTimestamp(new Date()); // Set last dismissed timestamp
    //     // Resume video playback
    //     setIsPlaying(true);
    //     startPlaying();
    // };

    // New function to start playing using playerRef
    const startPlaying = () => {
        if (!playerRef.current) return;

        try {
            const internalPlayer = playerRef.current.getInternalPlayer();
            if (internalPlayer && typeof internalPlayer.play === 'function') {
                internalPlayer.muted = false; // Ensure it's not muted

                // Try playing with a small delay to ensure DOM is ready
                setTimeout(() => {
                    try {
                        const playPromise = internalPlayer.play();
                        if (playPromise !== undefined) {
                            playPromise.catch((_error: Error) => {
                                // If play fails, reset the playing state
                                setIsPlaying(false);
                                // Check if it's an autoplay restriction
                                if (_error.message?.includes("play() failed because the user didn't interact")) {
                                    setAutoplayBlocked(true);
                                }
                            });
                        }
                    } catch (_err) {
                        console.error("Error playing video:", _err);
                        setIsPlaying(false);
                    }
                }, 50);
            }
        } catch (_e) {
            // Handle access error silently
            setIsPlaying(false);
        }
    };

    // New function to stop playing using playerRef
    const stopPlaying = () => {
        if (!playerRef.current) return;

        try {
            const internalPlayer = playerRef.current.getInternalPlayer();
            if (internalPlayer && typeof internalPlayer.pause === 'function') {
                internalPlayer.pause();
            }
        } catch (_e) {
            // Handle access error silently
        }
    };

    // Helper function for improved randomization using timestamp
    const getRandomIndex = (max: number) => {
        // Use current timestamp in milliseconds as part of the seed
        const timestamp = new Date().getTime();
        // Create a more random value by combining Math.random with the timestamp
        const randomValue = Math.sin(timestamp) * 10000;
        // Get a value between 0 and 1 by using the decimal part
        const normalizedRandom = Math.abs(randomValue - Math.floor(randomValue));
        // Scale to the max value and floor to get an integer index
        return Math.floor(normalizedRandom * max);
    };

    useEffect(() => {
        fetch(`${videoServerUrl}/list-videos`)
            .then(res => res.json())
            .then(files => {
                // Process all video paths immediately to normalize them
                const processedVideos = files.map((videoPath: string) => {
                    // If the path already has the server URL, use it as is
                    if (videoPath.startsWith('http://')) {
                        return videoPath;
                    } else {
                        // Make sure to avoid double slashes by removing any leading slash
                        const cleanPath = videoPath.startsWith('/') ? videoPath.substring(1) : videoPath;
                        return `${videoServerUrl}/${cleanPath}`;
                    }
                });

                setLocalVideos(processedVideos);

                // Load a random video at startup
                if (processedVideos.length > 0) {
                    const randomIndex = getRandomIndex(processedVideos.length);
                    setCurrentVideo(processedVideos[randomIndex]);
                    setIsPlaying(true);
                    setAutoplayBlocked(false);
                }
            })
            .catch(_error => {
                console.error("Failed to load videos:", _error);
                // No dummy videos fallback anymore
                setLocalVideos([]);
            });
    }, []);

    const handleVideoSelect = (videoPath: string, autoPlay: boolean = false) => {
        // Reset states
        setPlayerError(null); // Reset any previous errors
        setIsPlaying(autoPlay); // Update UI state
        setIsLoading(true); // Set loading state to true when selecting a new video
        setAutoplayBlocked(false); // Clear autoplay blocked state when selecting a new video

        // Since all video paths in localVideos are already fully formed URLs,
        // we can just set the current video directly
        setCurrentVideo(videoPath);

        // If autoPlay is requested, we'll try to play after the video loads in onPlayerReady
    };

    const handleLoadRandomVideo = () => {
        if (localVideos.length === 0) return;

        // If we only have one video, there's nothing to change to
        if (localVideos.length === 1) {
            handleVideoSelect(localVideos[0], true);
            return;
        }

        // Get all videos except the current one
        const availableVideos = localVideos.filter(video => video !== currentVideo);

        if (availableVideos.length === 0) return;

        // Select a random video from the available videos using improved randomization
        const randomIndex = getRandomIndex(availableVideos.length);
        const randomVideo = availableVideos[randomIndex];
        handleVideoSelect(randomVideo, true); // Auto-play when loading a random video
    };

    const onPlayerError = (error: any) => {
        setIsLoading(false); // Stop loading state on error

        // Check if the error is related to autoplay restrictions
        const errorMessage = error?.message || '';
        const isAutoplayError = errorMessage.includes("play() failed because the user didn't interact");

        if (isAutoplayError) {
            // This is an autoplay restriction, not a true error
            setAutoplayBlocked(true);
            setPlayerError(null); // Clear any previous error
        } else {
            // This is a genuine error
            setAutoplayBlocked(false);

            // Get detailed error information for genuine errors
            let detailedError = "Failed to play video from server.";
            if (error?.target?.error?.code) {
                // Handle media error codes
                const errorCode = error.target.error.code;
                switch (errorCode) {
                    case 1:
                        detailedError += " The video was aborted.";
                        break;
                    case 2:
                        detailedError += " Network error occurred.";
                        break;
                    case 3:
                        detailedError += " Problem decoding the video.";
                        break;
                    case 4:
                        detailedError += " Video not found or access denied.";
                        break;
                    default:
                        detailedError += ` Error code: ${errorCode}`;
                }
            } else if (error?.message) {
                detailedError += ` ${error.message}`;
            } setPlayerError(detailedError);
        }
    }; const onPlayerReady = () => {
        // Keep loading state for a moment after video is ready
        setTimeout(() => {
            setIsLoading(false);

            // Initialize volume
            if (playerRef.current) {
                const internalPlayer = playerRef.current.getInternalPlayer();
                if (internalPlayer && typeof internalPlayer.volume === 'number') {
                    internalPlayer.volume = volume;
                }
            }

            // If autoplay was requested (isPlaying is true), try to start playing
            if (isPlaying) {
                startPlaying();

                // Check if play actually worked after a short delay
                setTimeout(() => {
                    if (playerRef.current) {
                        const internalPlayer = playerRef.current.getInternalPlayer();
                        // Only check if paused, don't use current time as it can be unreliable
                        const isVideoActuallyPlaying = internalPlayer &&
                            (internalPlayer.paused === false);

                        // Only set autoplay blocked if we're very sure it's blocked
                        if (!isVideoActuallyPlaying && !autoplayBlocked && isPlaying) {
                            setAutoplayBlocked(true);
                        }
                    }
                }, 500);
            }
        }, 1500);
    };

    const onPlayerDuration = (duration: number) => {
        setDuration(duration);
    };

    const handleTogglePlayPause = () => {
        // If autoplay was blocked, clear that state when user interacts
        if (autoplayBlocked) {
            setAutoplayBlocked(false);
        }

        // Toggle the playing state
        const newPlayingState = !isPlaying;
        setIsPlaying(newPlayingState);

        // Use the direct methods to control playback
        if (newPlayingState) {
            startPlaying();
        } else {
            stopPlaying();
        }
    };

    const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        setProgress(time);
    }; const handleSeekMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
        const time = parseFloat((e.target as HTMLInputElement).value);
        playerRef.current?.seekTo(time);
    };

    const updatePlayerVolume = useCallback((newVolume: number) => {
        if (playerRef.current) {
            const internalPlayer = playerRef.current.getInternalPlayer();
            if (internalPlayer && typeof internalPlayer.volume === 'number') {
                internalPlayer.volume = newVolume;
            }
        }
    }, []);

    const handleVolumeUp = useCallback(() => {
        setVolume(prevVolume => {
            const newVolume = Math.min(maxVolume, prevVolume + volumeStepSize);
            updatePlayerVolume(newVolume);
            return newVolume;
        });
    }, [maxVolume, volumeStepSize, updatePlayerVolume]);

    const handleVolumeDown = useCallback(() => {
        setVolume(prevVolume => {
            const newVolume = Math.max(minVolume, prevVolume - volumeStepSize);
            updatePlayerVolume(newVolume);
            return newVolume;
        });
    }, [minVolume, volumeStepSize, updatePlayerVolume]);

    const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        updatePlayerVolume(newVolume);
    }, [updatePlayerVolume]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                e.preventDefault();
                handleTogglePlayPause();
            } else if (e.code === 'ArrowUp') {
                e.preventDefault();
                handleVolumeUp();
            } else if (e.code === 'ArrowDown') {
                e.preventDefault();
                handleVolumeDown();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isPlaying, handleVolumeUp, handleVolumeDown, updatePlayerVolume]);

    // Add timer to check for 15 and 45 minute marks
    // useEffect(() => {
    //     const checkTimeForMoveReminder = () => {
    //         console.log
    //         if (!isPlaying) return; // Only check when video is playing

    //         const now = new Date();
    //         const currentMinutes = now.getMinutes();

    //         // Check if it's the 15th or 45th minute of the hour and if it hasn't been dismissed in the last minute
    //         if (
    //             (currentMinutes === 15 || currentMinutes === 45) &&
    //             (!lastDismissedTimestamp || now.getTime() - lastDismissedTimestamp.getTime() >= 60000) // 60000 ms = 1 minute
    //         ) {
    //             setShowMoveReminder(true);
    //             // Set the start time for timing the activity break
    //             setMoveReminderStartTime(new Date());
    //             // Pause the video
    //             setIsPlaying(false);
    //             stopPlaying();

    //             // No longer auto-hide the reminder - user must dismiss it
    //         }
    //     };

    //     // Check every 10 seconds (reduced from 15 for slightly faster checks, can be adjusted)
    //     const intervalId = setInterval(checkTimeForMoveReminder, 10000);

    //     return () => clearInterval(intervalId);
    // }, [isPlaying, lastDismissedTimestamp]);

    // Handler for close (X) button
    const handleShowOverlay = () => {
        setShowOverlay(true);
        if (isPlaying) {
            setIsPlaying(false);
            stopPlaying();
        }
    };

    // Handler for mouse movement to hide overlay with delay
    useEffect(() => {
        if (!showOverlay) return;
        let canDismiss = false;
        const enableDismissTimeout = setTimeout(() => {
            canDismiss = true;
        }, 5000);
        const handleMouseMove = () => {
            if (canDismiss) {
                setShowOverlay(false);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            clearTimeout(enableDismissTimeout);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [showOverlay]);

    return (
        <div className="tv-container">
            {showOverlay && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    background: '#000',
                    zIndex: 10001, // higher than the X button
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}>
                    {/* No text, just a black overlay */}
                </div>
            )}
            <button
                onClick={handleShowOverlay}
                aria-label="Close"
                style={{
                    position: 'fixed',
                    top: 2,
                    right: 2,
                    background: '#e81123',
                    border: 'none',
                    color: 'white',
                    borderRadius: '2px',
                    width: '32px',
                    height: '32px',
                    fontSize: '1.5em',
                    fontWeight: 'bold',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.2s',
                    zIndex: 10000, // lower than overlay
                    padding: 0,
                    lineHeight: 1,
                }}
            >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                    <line x1="4.5" y1="4.5" x2="13.5" y2="13.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <line x1="13.5" y1="4.5" x2="4.5" y2="13.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>
            <div className="video-display">
                {currentVideo ? (
                    <div className="player-wrapper" onClick={handleTogglePlayPause}>
                        <ReactPlayer
                            ref={playerRef} className="react-player"
                            url={currentVideo}
                            width="100%"
                            height="100%"
                            controls={false}
                            onError={onPlayerError}
                            onProgress={(state) => {
                                // Update progress without re-rendering too often
                                setProgress(state.playedSeconds);
                                // Update isPlaying based on player's actual state if we can detect it
                                if (playerRef.current) {
                                    const player = playerRef.current.getInternalPlayer();
                                    if (player && player.paused !== undefined) {
                                        if (isPlaying !== !player.paused) {
                                            setIsPlaying(!player.paused);
                                        }
                                    }
                                }
                            }} onDuration={onPlayerDuration}
                            onReady={onPlayerReady}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            onEnded={handleLoadRandomVideo} // Add this line
                            volume={volume}
                            config={{
                                file: {
                                    forceVideo: true,
                                    attributes: {
                                        crossOrigin: "anonymous"
                                    },
                                    hlsOptions: {
                                        enableWorker: true,
                                        xhrSetup: function (xhr: XMLHttpRequest) {
                                            xhr.withCredentials = false;
                                        }
                                    }
                                }
                            }}
                        />
                        {isLoading && (
                            <div className="loading-overlay">
                                <div className="spinner"></div>
                                <p>Loading Video...</p>
                            </div>)}                        {playerError && (
                                <div className="player-error">
                                    <p>{playerError}</p>
                                    <p className="small">Please select another video</p>
                                </div>
                            )}

                    </div>
                ) : (
                    <div className="no-video-message">
                        <h2>Select a video to play</h2>
                    </div>
                )}
            </div>
            <div className="video-controls">
                <div className="playback-controls">
                    {currentVideo && (
                        <>
                            <input
                                type="range"
                                min="0"
                                max={duration}
                                step="0.1"
                                value={progress}
                                onChange={handleSeekChange}
                                onMouseUp={handleSeekMouseUp}
                                className="seek-bar"
                            />
                        </>)}

                    <div className="control-buttons">
                        {currentVideo && (<button
                            onClick={handleTogglePlayPause}
                            className={`play-pause-btn ${autoplayBlocked ? 'throbbing' : ''}`}
                            aria-label={isPlaying ? "Pause video" : "Play video"}
                        >
                            {isPlaying ? "⏸︎ Pause" : "▶ Play"}
                        </button>)}


                        <button onClick={handleLoadRandomVideo}>Something Else</button>


                        <div className="volume-controls-row" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span className="volume-label">Volume</span>
                            <input
                                type="range"
                                min={minVolume}
                                max={maxVolume}
                                step={volumeStepSize}
                                value={volume}
                                onChange={handleVolumeChange}
                                className="volume-slider"
                                aria-label="Volume level"
                            />
                        </div>

                        <NotificationButtons />


                    </div>
                </div>
            </div>            {/* {showMoveReminder && (
                <div className="move-overlay">
                    <div style={{ padding: '20px' }}>
                        From Ben:
                        Mom,<br /><br />
                        It is <b><i>very important</i></b> to stand up every 30 minutes to:
                        <ul>
                            <li>Save me time</li>
                            <li>Ease your back pain</li>
                        </ul>
                        <hr />
                        <ol>
                            <li>Turn your chair around and get out of your desk</li>
                            <li>Stand or walk around for a minute</li>
                            <li>Get back in your desk chair</li>
                            <li>Use your mouse to click the currect button below</li>
                        </ol>
                    </div>
                    <div className="control-buttons">
                        <button
                            onClick={() => {
                                handleDismissMoveReminder("Suzanne did the activity break");
                            }}
                        >
                            I Did It
                        </button>

                        {/* <button
                            onClick={() => {
                                handleDismissMoveReminder("Suzanne skipped an activity break");
                            }}
                        >
                            Skip this time
                        </button> * /}
                    </div>
                </div>
            )} */}

            <div style={{ position: 'absolute', bottom: 2, right: 2, color: 'white', opacity: 0.1, fontSize: '0.75em' }}>
                {appConfig.version}
            </div>
        </div >
    );
}
