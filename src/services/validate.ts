/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
import { ErrorMessageOptions, generateErrorMessage } from "zod-error";
import { toJson } from 'really-relaxed-json'
import { Notification } from "../contexts/Main";

type Notify = (notification: Notification) => void

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

const parseData = (rawData: string, notify: Notify) => {
  let parsed = null
  try {
    parsed = JSON.parse(toJson(rawData))
  } catch(err: any) {
    notify({ message: `Data error: ${err.message}`, type: 'error' })
  }
  
  return parsed
}

const parseSchema = (schema: string, notify: Notify): z.ZodSchema | null => {
  let parsed: z.ZodSchema | null = null
  try {
    if (!/^z\.\w+(.|\n)*\)$/gm.test(schema)) {
      throw new Error('Empty schema')
    }

    parsed = z && eval(schema)
  } catch(err: any) {
    notify({ message: `Schema error: ${err.message}`, type: 'error' })
  }

  return parsed
}

const validate = (rawData: string, rawSchema: string, present: (data: string) => void, notify: Notify) => {
  const data = parseData(rawData, notify)
  const schema = parseSchema(rawSchema, notify)

  if (!data || !schema) {
    return present("")
  }

  const result = schema?.safeParse(data)

  if (!result.success) {
    const errors = result.error.issues.sort((a, b) => a.path.length - b.path.length)
    const errorMessages = generateErrorMessage(errors, options)
    return present(errorMessages)
  } else {
    return present("Validation Passed")
  }
}

export default validate
