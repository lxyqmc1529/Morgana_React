import { CommonStyleProps } from "@/typings/style";
import { pick } from "radash";
import { CommonStyleMap } from "./constants/commonStyleSchema";

export function genCommonStyleSchema(common:CommonStyleProps){
  const commonStyleKeys = Object.keys(common);
  const commonStyleMap = pick(CommonStyleMap, commonStyleKeys);
  return commonStyleMap;
}