import { NamePath,FormSchema } from "@/typings/schema";

export interface CommonFormProps<T>{
  value?:T;
  onChange?:(value:T)=>void;
  name:NamePath;
  schema:FormSchema;
}