import { FormSchema, NamePath } from "@/typings/schema";
import { isObject } from "radash";
export function namePathToString(namePath: NamePath){
  if(Array.isArray(namePath)){
    return namePath.join(".");
  }
  return namePath.toString()
}

export function concatNamePath(...namePaths: NamePath[]){
  return Array.from(namePaths).flat(2)
}

export function isFormSchema(schema:any):schema is FormSchema{
  return isObject(schema) && typeof (schema as any).type === 'string'
}