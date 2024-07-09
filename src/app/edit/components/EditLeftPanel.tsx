
import { Tabs,Tooltip } from "antd";
import { Component } from "lucide-react";
import ComponentTree from "./ComponentTree";
export default function EditLeftPanel() {

  return (
    <Tabs tabPosition="left" className="w-full h-full">
      <Tabs.TabPane tab={<Tooltip title="组件列表">
        <Component size={20} />
      </Tooltip>} >
        <ComponentTree />
      </Tabs.TabPane>
    </Tabs>
    );
}