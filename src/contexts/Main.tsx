import { createContext, useState } from "react";

export const MainContext = createContext<Partial<MainContextProps>>({})
export const MainDispatchContext = createContext<Partial<MainDispatchContextProps>>({})

function MainContextProvider({ children }: React.PropsWithChildren) {
  const [data, setData] = useState(localStorage.getItem('data') || '')
  const [schema, setSchema] = useState(localStorage.getItem('schema') || '')
  const [result, setResult] = useState('')
  
  const handleData = (data: string) => {
    setData(data)
    localStorage.setItem('data', data);
  }

  const handleSchema = (schema: string) => {
    setSchema(schema)
    localStorage.setItem('schema', schema);
  }

  const handleResult = (result: string) => {
    setResult(result)
  }

  return (
    <MainContext.Provider value={{ data, schema, result }}>
      <MainDispatchContext.Provider value={{ handleData, handleSchema, handleResult }}>
        {children}
      </MainDispatchContext.Provider>
    </MainContext.Provider>
  )
}

type MainContextProps = {
  data: string
  schema: string
  result: string
}

type MainDispatchContextProps = {
  handleData: (data: string) => void
  handleSchema: (schema: string) => void
  handleResult: (result: string) => void
}

export default MainContextProvider