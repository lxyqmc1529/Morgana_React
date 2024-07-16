import React from "react";
import { ComponentGroup } from "../constants";

export interface CommonProps{
  id:string;
  className?:string;
  style?:React.CSSProperties;
} 
export interface ComponentInfo{
  component:React.ComponentType<any>;
  meta:{
    name:string;
    type:string;
    group:ComponentGroup;
    dataForm?:Record<string,any>;
    commonStyle?:Record<any,any>;
  }
}