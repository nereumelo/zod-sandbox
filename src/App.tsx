import { Flowbite } from "flowbite-react";
import MainContextProvider from "./contexts/Main";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Router from "./Router";
import { setTheme } from "./themes/handler";
import Notification from "./components/Notification";

export default function App() {
  return (
    <MainContextProvider>
      <Flowbite theme={setTheme()}>
      <div className="h-screen w-[calc(100vw-11px)] md:w-screen relative grid grid-rows-[60px_auto_60px] gap-12">
        <Navbar />
        <Outlet context={Router} />
        <Footer />
        <Notification />
      </div>
      </Flowbite>
    </MainContextProvider>
  )
}

