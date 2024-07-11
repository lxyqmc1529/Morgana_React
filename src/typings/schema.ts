import { Rule } from "antd/es/form";
import React from "react";
//这部分规定了组件渲染的初始值类型、传递的参数类型、组件类型等

export type ReactFunctionComponent = (...args: any) => JSX.Element;
export type NamePath = string | number | (string | number)[];
export interface FormSchema {
  type: string;
  title: string;
  default?: any;
  required?: boolean;
  description?: string;
  options?: {label: string, value: any}[];
  properties?: Record<string, FormSchema>;
  items?: FormSchema | Record<string, FormSchema>;
  'x-component-props'?: Record<string, any>;
  'x-component'?:React.FunctionComponent | React.Component | ReactFunctionComponent;
  'x-rules'?: Rule[];
}