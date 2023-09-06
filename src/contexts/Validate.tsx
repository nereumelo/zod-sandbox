import { createContext, useState } from "react";

export const ValidateContext = createContext<Partial<ValidateContextProps>>({})
export const ValidateDispatchContext = createContext<Partial<ValidateDispatchContextProps>>({})
const defaultData = "{\n  shape: 'square',\n  side: 12,\n  colors: ['black', 'blue', 'white'],\n}";
const defaultSchema = "z.object({\n  shape: z.string(),\n  side: z.number(),\n  colors: z.array(z.enum(['black', 'blue', 'white']))\n}).strict()";

function ValidateContextProvider({ children }: React.PropsWithChildren) {
  const [data, setData] = useState(localStorage.getItem('data') || defaultData)
  const [schema, setSchema] = useState(localStorage.getItem('schema') || defaultSchema)
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
    <ValidateContext.Provider value={{ data, schema, result }}>
      <ValidateDispatchContext.Provider value={{ handleData, handleSchema, handleResult }}>
        {children}
      </ValidateDispatchContext.Provider>
    </ValidateContext.Provider>
  )
}

type ValidateContextProps = {
  data: string
  schema: string
  result: string
}

type ValidateDispatchContextProps = {
  handleData: (data: string) => void
  handleSchema: (schema: string) => void
  handleResult: (result: string) => void
}

export default ValidateContextProvider