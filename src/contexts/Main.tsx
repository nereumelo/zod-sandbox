import { createContext, useState } from "react";
import { getTheme } from "../themes/handler";

export const MainContext = createContext<Partial<MainContextProps>>({})
export const MainDispatchContext = createContext<Partial<MainDispatchContextProps>>({})

function MainContextProvider({ children }: React.PropsWithChildren) {
  const [theme , setTheme] = useState(localStorage.getItem('theme') || getTheme())
  
  const handleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark' 
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme);
  }

  return (
    <MainContext.Provider value={{ theme }}>
      <MainDispatchContext.Provider value={{ handleTheme }}>
        {children}
      </MainDispatchContext.Provider>
    </MainContext.Provider>
  )
}

type MainContextProps = {
  theme: string
}

type MainDispatchContextProps = {
  handleTheme: () => void
}

export default MainContextProvider