const location = document.location.toString();

let appConfig = {
    appName: `What's Next`,
    appId: `whatsnext`,
    version: `0.0.0`,
    environment: 'prod',
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
