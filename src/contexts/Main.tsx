import { createContext, useState } from "react";
import { getTheme } from "../themes/handler";

export const MainContext = createContext<Partial<MainContextProps>>({})
export const MainDispatchContext = createContext<Partial<MainDispatchContextProps>>({})

function MainContextProvider({ children }: React.PropsWithChildren) {
  const [data, setData] = useState(localStorage.getItem('data') || '')
  const [schema, setSchema] = useState(localStorage.getItem('schema') || '')
  const [theme , setTheme] = useState(localStorage.getItem('theme') || getTheme())
  const [result, setResult] = useState('')
  
  const handleData = (data: string) => {
    setData(data)
    localStorage.setItem('data', data);
  }

  const handleSchema = (schema: string) => {
    setSchema(schema)
    localStorage.setItem('schema', schema);
  }
  
  const handleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark' 
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme);
  }

  const handleResult = (result: string) => {
    setResult(result)
  }

  return (
    <MainContext.Provider value={{ data, schema, result, theme }}>
      <MainDispatchContext.Provider value={{ handleData, handleSchema, handleResult, handleTheme }}>
        {children}
      </MainDispatchContext.Provider>
    </MainContext.Provider>
  )
}

type MainContextProps = {
  data: string
  schema: string
  theme: string
  result: string
}

type MainDispatchContextProps = {
  handleData: (data: string) => void
  handleSchema: (schema: string) => void
  handleTheme: () => void
  handleResult: (result: string) => void
}

export default MainContextProvider