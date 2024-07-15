
import { Tabs,Tooltip } from "antd";
import { Component } from "lucide-react";
import ComponentTree from "./ComponentTree";
import PropsSetter from "./PropsSetter";


const rightPanel = [
  {
    label:"数据",
    key:"data",
    children:<PropsSetter/>
  }
]
console.log('right',rightPanel)
export default function EditRightPanel() {

  return (
    <Tabs type="card" size="small"className="w-full h-full border" items={rightPanel}></Tabs>
    );
}