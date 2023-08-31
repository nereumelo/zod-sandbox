import { Flowbite } from "flowbite-react";
import MainContextProvider from "./contexts/Main";
import SandBox from "./pages/SandBox";

export default function App() {
  return (
    <MainContextProvider>
      <Flowbite>
        <SandBox />
      </Flowbite>
    </MainContextProvider>
  )
}

