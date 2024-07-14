const location = document.location.toString();

let appConfig = {
    appName: `What's Next`,
    appId: `whatsnext`,
    version: `0.0.5`,
    environment: 'prod',

    hourToStartNewDay: 4,

    firebaseConfig: {
        apiKey: "AIzaSyCKdPURMoRaWjuqXD0tv5elgX8lU2gqopE",
        authDomain: "elder-checklist.firebaseapp.com",
        projectId: "elder-checklist",
        storageBucket: "elder-checklist.appspot.com",
        messagingSenderId: "480470049576",
        appId: "1:480470049576:web:d3b9af51d3c250899b261d",
        measurementId: "G-3L4DK4EL2C"
    }
}

if (location.includes("uat.")) {
    appConfig = {
        ...appConfig,
        environment: 'uat',
    };
}

if (location.includes("localhost")) {
    appConfig = {
        ...appConfig,
        environment: 'dev',
    };
}

export { appConfig }

