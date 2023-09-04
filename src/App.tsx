import { Flowbite } from "flowbite-react";
import MainContextProvider from "./contexts/Main";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Router from "./Router";
import { setTheme } from "./themes/handler";

export default function App() {
  return (
    <MainContextProvider>
      <Flowbite theme={setTheme()}>
      <div className="h-full w-full absolute">
        <Navbar />
        <Outlet context={Router} />
        <Footer />
      </div>
      </Flowbite>
    </MainContextProvider>
  )
}

