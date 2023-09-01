import { Flowbite } from "flowbite-react";
import MainContextProvider from "./contexts/Main";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Router from "./Router";

export default function App() {
  return (
    <MainContextProvider>
      <Flowbite>
      <div className="h-full w-full absolute">
        <Navbar />
        <Outlet context={Router} />
        <Footer />
      </div>
      </Flowbite>
    </MainContextProvider>
  )
}

