import React, { useState, useCallback } from 'react';

interface BluetoothCharacteristicData {
    uuid: string;
    properties: BluetoothCharacteristicProperties;
    value?: string | ArrayBuffer | null; // Store decoded or raw value
}

interface BluetoothServiceData {
    uuid: string;
    characteristics: BluetoothCharacteristicData[];
}

interface BluetoothDeviceExtended extends BluetoothDevice {
    adData?: {
        rssi?: number;
        txPower?: number;
        serviceData?: Map<string, DataView>;
        manufacturerData?: Map<string, DataView>;
    };
    discoveredServices?: BluetoothServiceData[];
}

// Helper function to convert ArrayBuffer to hex string
function bufferToHex(buffer: ArrayBuffer): string {
    return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

// Helper function to attempt to decode ArrayBuffer as UTF-8 string
function bufferToString(buffer: ArrayBuffer): string {
    try {
        return new TextDecoder().decode(buffer);
    } catch (e) {
        return '[non-string data]';
    }
}

const BT = () => {
    const [devices, setDevices] = useState<BluetoothDeviceExtended[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isScanning, setIsScanning] = useState<boolean>(false);
    const [connectingDeviceId, setConnectingDeviceId] = useState<string | null>(null);

    const handleScan = async () => {
        if (!navigator.bluetooth) {
            setError('Web Bluetooth API is not available in this browser.');
            return;
        }

        setIsScanning(true);
        setError(null);
        setDevices([]);

        try {
            const device = await navigator.bluetooth.requestDevice({
                acceptAllDevices: true,
                optionalServices: [
                    'generic_access',
                    'generic_attribute',
                    'device_information',
                    'battery_service',
                    // You can add more known service UUIDs here for broader exploration
                    // e.g., 'heart_rate', 'health_thermometer',
                    // For specific custom services on your device, you'll need to add their 128-bit UUIDs.
                ]
            });
            device.addEventListener('gattserverdisconnected', onDisconnected);
            setDevices(prevDevices => [...prevDevices, device as BluetoothDeviceExtended]);

        } catch (err) {
            if (err instanceof Error) {
                setError(`Error scanning for devices: ${err.message}`);
            } else {
                setError('An unknown error occurred while scanning for devices.');
            }
            console.error('Bluetooth scan error:', err);
        } finally {
            setIsScanning(false);
        }
    };

    const onDisconnected = (event: Event) => {
        const device = event.target as BluetoothDevice;
        console.log(`Device ${device.name} disconnected.`);
        setDevices(prevDevices =>
            prevDevices.map(d =>
                d.id === device.id
                    ? ({ ...d, gatt: { ...d.gatt, connected: false } } as BluetoothDeviceExtended)
                    : d
            )
        );
    };

    const handleConnect = useCallback(async (deviceId: string) => {
        setError(null);
        setConnectingDeviceId(deviceId);
        const deviceToConnect = devices.find(d => d.id === deviceId);

        if (!deviceToConnect) {
            setError('Device not found.');
            setConnectingDeviceId(null);
            return;
        }

        if (deviceToConnect.gatt?.connected) {
            console.log('Already connected to this device.');
            setConnectingDeviceId(null);
            return;
        }

        try {
            console.log(`Connecting to ${deviceToConnect.name || deviceToConnect.id}...`);
            const server = await deviceToConnect.gatt?.connect();
            console.log(`Connected to ${deviceToConnect.name || deviceToConnect.id}`, server);

            // Discover services and characteristics
            let discoveredServicesData: BluetoothServiceData[] = [];
            if (server) {
                try {
                    const services = await server.getPrimaryServices();
                    console.log('Services:', services);
                    for (const service of services) {
                        const characteristics = await service.getCharacteristics();
                        let characteristicDataList: BluetoothCharacteristicData[] = [];
                        for (const characteristic of characteristics) {
                            let charValue: string | ArrayBuffer | null = null;
                            try {
                                if (characteristic.properties.read) {
                                    const valueDataView = await characteristic.readValue();
                                    const strValue = bufferToString(valueDataView.buffer);
                                    if (strValue.includes('[non-string data]') || !strValue.trim()) {
                                        charValue = `Hex: ${bufferToHex(valueDataView.buffer)}`;
                                    } else {
                                        charValue = `String: "${strValue}" (Hex: ${bufferToHex(valueDataView.buffer)})`;
                                    }
                                } else {
                                    charValue = '[not readable]';
                                }
                            } catch (charError) {
                                console.error(`Error reading characteristic ${characteristic.uuid}:`, charError);
                                charValue = '[error reading value]';
                            }
                            characteristicDataList.push({
                                uuid: characteristic.uuid,
                                properties: characteristic.properties,
                                value: charValue,
                            });
                        }
                        discoveredServicesData.push({
                            uuid: service.uuid,
                            characteristics: characteristicDataList,
                        });
                    }
                } catch (serviceError) {
                    console.error('Error discovering services/characteristics:', serviceError);
                    setError('Error discovering services/characteristics.');
                }
            }

            // Update the device state to reflect the connection and discovered data
            setDevices(prevDevices =>
                prevDevices.map(d =>
                    d.id === deviceId
                        ? ({
                            ...d,
                            gatt: { ...d.gatt, connected: true },
                            discoveredServices: discoveredServicesData
                        } as BluetoothDeviceExtended)
                        : d
                )
            );
        } catch (err) {
            if (err instanceof Error) {
                setError(`Error connecting to device: ${err.message}`);
            } else {
                setError('An unknown error occurred while connecting to the device.');
            }
            console.error('Bluetooth connect error:', err);
            setDevices(prevDevices =>
                prevDevices.map(d =>
                    d.id === deviceId && d.gatt
                        ? ({ ...d, gatt: { ...d.gatt, connected: false } } as BluetoothDeviceExtended)
                        : d
                )
            );
        } finally {
            setConnectingDeviceId(null);
        }
    }, [devices]);

    const handleDisconnect = useCallback(async (deviceId: string) => {
        setError(null);
        const deviceToDisconnect = devices.find(d => d.id === deviceId);

        if (!deviceToDisconnect) {
            setError('Device not found.');
            return;
        }

        if (!deviceToDisconnect.gatt?.connected) {
            console.log('Already disconnected from this device.');
            return;
        }

        try {
            console.log(`Disconnecting from ${deviceToDisconnect.name || deviceToDisconnect.id}...`);
            await deviceToDisconnect.gatt?.disconnect();
            console.log(`Disconnected from ${deviceToDisconnect.name || deviceToDisconnect.id}`);
        } catch (err) {
            if (err instanceof Error) {
                setError(`Error disconnecting from device: ${err.message}`);
            } else {
                setError('An unknown error occurred while disconnecting from the device.');
            }
            console.error('Bluetooth disconnect error:', err);
        }
    }, [devices]);

    return (
        <div>
            <h1>Bluetooth Device Scanner</h1>
            <p>
                Note: The Web Bluetooth API typically requires user interaction to select a device.
                This example will prompt you to choose a device. For continuous scanning of all nearby
                devices, browser support and API capabilities are more limited and complex.
            </p>
            <button onClick={handleScan} disabled={isScanning}>
                {isScanning ? 'Scanning...' : 'Scan for Bluetooth Devices'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {devices.length > 0 && (
                <div>
                    <h2>Found Devices:</h2>
                    {devices.map((device) => (
                        <div key={device.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                            <p><strong>Name:</strong> {device.name || 'N/A'}</p>
                            <p><strong>ID:</strong> {device.id}</p>
                            <p><strong>Status:</strong> {device.gatt?.connected ? 'Connected' : 'Disconnected'}</p>
                            {!device.gatt?.connected ? (
                                <button
                                    onClick={() => handleConnect(device.id)}
                                    disabled={connectingDeviceId === device.id || isScanning}
                                >
                                    {connectingDeviceId === device.id ? 'Connecting...' : 'Connect'}
                                </button>
                            ) : (
                                <button onClick={() => handleDisconnect(device.id)} disabled={isScanning}>
                                    Disconnect
                                </button>
                            )}
                            {device.gatt?.connected && device.discoveredServices && (
                                <div style={{ marginTop: '10px', paddingTop: '5px', borderTop: '1px dashed #eee' }}>
                                    <h4>Services:</h4>
                                    {device.discoveredServices.length > 0 ? (
                                        device.discoveredServices.map(service => (
                                            <div key={service.uuid} style={{ marginLeft: '10px', marginBottom: '5px' }}>
                                                <p><strong>Service UUID:</strong> {service.uuid}</p>
                                                {service.characteristics.length > 0 ? (
                                                    <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                                                        {service.characteristics.map(char => (
                                                            <li key={char.uuid}>
                                                                <strong>Characteristic UUID:</strong> {char.uuid}<br />
                                                                <strong>Properties:</strong>
                                                                <small>
                                                                    {` Read: ${char.properties.read}, Write: ${char.properties.write}, Notify: ${char.properties.notify}`}
                                                                </small><br />
                                                                <strong>Value:</strong> {char.value !== undefined && char.value !== null ? String(char.value) : 'N/A'}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : <p><small>No characteristics found for this service.</small></p>}
                                            </div>
                                        ))
                                    ) : <p><small>No services found or discovered for this device.</small></p>}
                                </div>
                            )}
                            <pre>
                                {JSON.stringify(
                                    {
                                        id: device.id,
                                        name: device.name,
                                        gatt: device.gatt ? { connected: device.gatt.connected } : undefined,
                                        services: device.discoveredServices?.map(s => ({
                                            uuid: s.uuid,
                                            characteristics: s.characteristics.map(c => ({
                                                uuid: c.uuid,
                                                properties: {
                                                    read: c.properties.read,
                                                    write: c.properties.write,
                                                    writeWithoutResponse: c.properties.writeWithoutResponse,
                                                    notify: c.properties.notify,
                                                    indicate: c.properties.indicate,
                                                },
                                                value: c.value
                                            }))
                                        }))
                                    },
                                    null,
                                    2
                                )}
                            </pre>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BT;
