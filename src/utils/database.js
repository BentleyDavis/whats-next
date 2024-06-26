import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { appConfig } from "@/appConfig";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Initialize Firebase
export const firebaseApp = initializeApp(appConfig.firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
export function firebaseInit() {
}
