import { Outlet } from "react-router-dom";
// import appLogo from '/favicon.svg'
import PWABadge from "@/PWABadge";

export default function App() {

    return <>
        <div className='page'>
            {/* <header></header> */}
            {/* <h1><img src={appLogo} className="logo" alt="What's Next logo" style={{ height: "4em" }} />What's Next</h1> */}
            <Outlet />

            {/* <footer>
      </footer> */}
        </div>
        <PWABadge />
    </>

}

// Extend the Window interface to include goToRandomUrl
declare global {
    interface Window {
        goToRandomUrl?: (urls: string[], template: string, event?: Event) => void;
    }
}

// Check if goToRandomUrl is on the window object
if (typeof window.goToRandomUrl !== 'function') {
    // Function to navigate to a random URL from the array
    window.goToRandomUrl = function (urls, template, event) {
        if (event) {
            event.preventDefault(); // Prevent the default link navigation if event is provided
        }
        const randomIndex = Math.floor(Math.random() * urls.length);
        const selectedUrl = urls[randomIndex];
        console.log(urls, selectedUrl)
        window.location.href = template.replace("*", selectedUrl);
    };
}