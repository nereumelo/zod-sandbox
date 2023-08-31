/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
import { ErrorMessageOptions, generateErrorMessage } from "zod-error";
import { toJson } from 'really-relaxed-json'

const options: ErrorMessageOptions = {
  delimiter: { error: '' },
  message: {
    enabled: true,
    label: "error: ",
    transform: (params) => `${params.label}"${params.value}"`
  },
  path: {
    enabled: true,
    label: "path: ",
    type: 'objectNotation',
    transform: (params) => !params.value.length ? '' : `${params.label}"${params.value}", `
  },
  transform: (params) => `\n  { ${params.pathComponent}${params.messageComponent} },`,
  prefix: 'Validation errors: \n[',
  suffix: '\n]'
}

const parseData = (rawData: string) => {
  let parsed = null
  try {
    parsed = JSON.parse(toJson(rawData))
  } catch(err: any) {
    alert(`invalid data: ${err.message}`)
    console.error(err)
  }
  
  return parsed
}

const parseSchema = (schema: string): z.ZodSchema | null => {
  let parsed: z.ZodSchema | null = null
  try {
    if (/^z\.\w+(.|\n)*\)$/gm.test(schema)) {
      parsed = z && eval(schema)
    }
  } catch(err: any) {
    alert(`invalid schema: ${err.message}`)
    console.error(err)
  }

  return parsed
}

const validate = (rawData: string, rawSchema: string, present: (data: string) => void) => {
  if (!rawSchema) {
    present("Missing schema")
    return
  }
  const data = parseData(rawData)
  const schema = parseSchema(rawSchema)

  const result = schema?.safeParse(data)

  if (!result) return

  if (!result.success) {
    const errors = result.error.issues.sort((a, b) => a.path.length - b.path.length)
    console.log(result)
    const errorMessages = generateErrorMessage(errors, options)
    present(errorMessages)
    return
  } else {
    present("Validation Passed")
    return
  }
}

export default validate
