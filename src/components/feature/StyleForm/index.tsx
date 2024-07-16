import { CommonStyleProps } from "@/typings/style";
import SchemaForm from "../schemaForm";
import { genCommonStyleSchema } from "./utils";
interface StyleFormProps {
  value:Record<string, any>;
  commonStyle:CommonStyleProps;
  onChange?: (value:Record<string, any>) => void;
}

export default function StyleForm(props:StyleFormProps){
  const { value, commonStyle, onChange } = props;
  const commonStyleSchema = genCommonStyleSchema(commonStyle)
  return (<SchemaForm schema={commonStyleSchema} value={value} onChange={onChange} />)
}