import { Outlet } from "react-router-dom";
// import appLogo from '/favicon.svg'
import PWABadge from "@/PWABadge";
import Now from "@/components/now";

export default function App() {

  return <>
    <div className='page'>
      {/* <header></header> */}
      {/* <h1><img src={appLogo} className="logo" alt="What's Next logo" style={{ height: "4em" }} />What's Next</h1> */}
      <Outlet />

      <footer>
        <Now></Now>
      </footer>
    </div>
    <PWABadge />
  </>

}
