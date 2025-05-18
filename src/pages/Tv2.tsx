import { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import './Tv2.css'; // Import CSS file for styles
import NotificationButtons from '../components/NotificationButtons';
import { sendNotification } from '../utils/notifications';
import { appConfig } from '@/appConfig';

// Server configuration
const videoServerUrl = "http://localhost:3537";

export default function Tv2Page() {
    const [localVideos, setLocalVideos] = useState<string[]>([]);
    const [currentVideo, setCurrentVideo] = useState<string | null>(null);
    const [playerError, setPlayerError] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [autoplayBlocked, setAutoplayBlocked] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showMoveReminder, setShowMoveReminder] = useState(false);
    const [moveReminderStartTime, setMoveReminderStartTime] = useState<Date | null>(null);
    const [lastDismissedTimestamp, setLastDismissedTimestamp] = useState<Date | null>(null); // Changed state
    const playerRef = useRef<ReactPlayer>(null);

    // Function to calculate duration of activity break in seconds
    const calculateActivityDuration = (): number => {
        if (!moveReminderStartTime) return 0;

        const now = new Date();
        // Calculate duration in seconds
        return Math.round((now.getTime() - moveReminderStartTime.getTime()) / 1000);
    };

    // New function to handle dismissing the move reminder
    const handleDismissMoveReminder = (notificationMessage: string) => {
        const durationSeconds = calculateActivityDuration();
        const durationText = durationSeconds > 60
            ? `${Math.floor(durationSeconds / 60)} minutes and ${durationSeconds % 60} seconds`
            : `${durationSeconds} seconds`;
        sendNotification(`${notificationMessage} (Duration: ${durationText})`);
        setShowMoveReminder(false);
        setMoveReminderStartTime(null);
        setLastDismissedTimestamp(new Date()); // Set last dismissed timestamp
        // Resume video playback
        setIsPlaying(true);
        startPlaying();
    };

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

    useEffect(() => {
        // Dummy data to use if fetch fails
        const dummyVideos = [
            "C:/Videos/nature_documentary.mp4",
            "C:/Videos/vacation_2024.mp4",
            "C:/Videos/family_gathering.mp4",
            "C:/Videos/tutorial_react.mp4",
            "C:/Videos/concert_recording.mp4"
        ];

        fetch(`${videoServerUrl}/list-videos`)
            .then(res => res.json())
            .then(files => {
                setLocalVideos(files);

                // Load a random video at startup
                if (files.length > 0) {
                    const randomIndex = Math.floor(Math.random() * files.length);
                    handleVideoSelect(files[randomIndex], true);
                }
            })
            .catch(_error => {
                // Use dummy data if fetch fails
                setLocalVideos(dummyVideos);

                // Load a random dummy video
                if (dummyVideos.length > 0) {
                    const randomIndex = Math.floor(Math.random() * dummyVideos.length);
                    handleVideoSelect(dummyVideos[randomIndex], true);
                }
            });
    }, []);

    const handleVideoSelect = (videoPath: string, autoPlay: boolean = false) => {
        // Reset states
        setPlayerError(null); // Reset any previous errors
        setIsPlaying(autoPlay); // Update UI state
        setIsLoading(true); // Set loading state to true when selecting a new video
        setAutoplayBlocked(false); // Clear autoplay blocked state when selecting a new video

        // Check if the path already has the server URL
        if (videoPath.startsWith('http://')) {
            setCurrentVideo(videoPath);
        } else {            // Add the server URL prefix to the video path
            // Make sure to avoid double slashes by removing any leading slash from videoPath
            const cleanPath = videoPath.startsWith('/') ? videoPath.substring(1) : videoPath;
            const fullVideoUrl = `${videoServerUrl}/${cleanPath}`;
            setCurrentVideo(fullVideoUrl);
        }

        // If autoPlay is requested, we'll try to play after the video loads in onPlayerReady
    };

    const handleLoadRandomVideo = () => {
        if (localVideos.length === 0) return;

        // If we only have one video, there's nothing to change to
        if (localVideos.length === 1) {
            handleVideoSelect(localVideos[0], true);
            return;
        }

        // Get the current video path without the server URL prefix
        let currentVideoPath = null;
        if (currentVideo) {
            currentVideoPath = currentVideo.replace(videoServerUrl + '/', '');
        }

        // Get all videos except the current one
        const availableVideos = localVideos.filter(video => {
            const cleanPath = video.startsWith('/') ? video.substring(1) : video;
            return cleanPath !== currentVideoPath;
        });

        if (availableVideos.length === 0) return;

        // Select a random video from the available videos
        const randomIndex = Math.floor(Math.random() * availableVideos.length);
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
    };

    const onPlayerReady = () => {
        // Keep loading state for a moment after video is ready
        setTimeout(() => {
            setIsLoading(false);

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
    };

    const handleSeekMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
        const time = parseFloat((e.target as HTMLInputElement).value);
        playerRef.current?.seekTo(time);
    }; useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                e.preventDefault();
                handleTogglePlayPause();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isPlaying]);

    // Add timer to check for 15 and 45 minute marks
    useEffect(() => {
        const checkTimeForMoveReminder = () => {
            console.log
            if (!isPlaying) return; // Only check when video is playing

            const now = new Date();
            const currentMinutes = now.getMinutes();

            // Check if it's the 15th or 45th minute of the hour and if it hasn't been dismissed in the last minute
            if (
                (currentMinutes === 15 || currentMinutes === 45) &&
                (!lastDismissedTimestamp || now.getTime() - lastDismissedTimestamp.getTime() >= 60000) // 60000 ms = 1 minute
            ) {
                setShowMoveReminder(true);
                // Set the start time for timing the activity break
                setMoveReminderStartTime(new Date());
                // Pause the video
                setIsPlaying(false);
                stopPlaying();

                // No longer auto-hide the reminder - user must dismiss it
            }
        };

        // Check every 10 seconds (reduced from 15 for slightly faster checks, can be adjusted)
        const intervalId = setInterval(checkTimeForMoveReminder, 10000);

        return () => clearInterval(intervalId);
    }, [isPlaying, lastDismissedTimestamp]); // Updated dependency

    return (
        <div className="tv-container">
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
                            }}
                            onDuration={onPlayerDuration}
                            onReady={onPlayerReady}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
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
                            />                        </>)}

                    <div className="control-buttons">
                        {currentVideo && (<button
                            onClick={handleTogglePlayPause}
                            className={`play-pause-btn ${autoplayBlocked ? 'throbbing' : ''}`}
                            aria-label={isPlaying ? "Pause video" : "Play video"}
                        >
                            {isPlaying ? "Pause" : "Play"}
                        </button>)}

                        <button onClick={handleLoadRandomVideo}>Play Something Else</button>

                        <NotificationButtons />
                    </div>
                </div>
            </div>            {showMoveReminder && (
                <div className="move-overlay">
                    From Ben:
                    Mom,<br /><br />
                    You agreed to this reminder to stand up and stretch every 30 minutes so you back will be in less pain:<br /><br />
                    <ol>
                        <li>Turn your chair around and get out of your desk and look back at this screen</li>
                        <li>Stretch real high</li>
                        <li>Get back in your desk chair</li>
                        <li>Use your mouse to click the currect button below</li>
                    </ol>
                    <div className="control-buttons">
                        <button
                            onClick={() => {
                                handleDismissMoveReminder("Suzanne did the activity break");
                            }}
                        >
                            I Did It
                        </button>

                        <button
                            onClick={() => {
                                handleDismissMoveReminder("Suzanne skipped an activity break");
                            }}
                        >
                            Skip this time
                        </button>
                    </div>
                </div>
            )}

            <div style={{ position: 'absolute', bottom: 2, right: 2, color: 'white', opacity: 0.1, fontSize: '0.75em' }}>
                {appConfig.version}
            </div>
        </div >
    );
}
