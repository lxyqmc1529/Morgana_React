import React, { useState, createContext, useContext, useEffect } from "react";
import { Form, Input, Select } from 'antd';
import { componentGroups } from "@morgana/components";
import { ComponentInfo } from "@morgana/components";

// 创建上下文
export const FormDataContext = createContext<{ formData: any; setformData: (data: any) => void }>({
  formData: {},
  setformData: () => {},
});

export default function ConfigForm() {
  const [formData, setformData] = useState({});

  const titleConfig = componentGroups[0];
  const mataConfig = titleConfig.children[0].meta.dataForm;

  const formItems = Object.entries(mataConfig as ComponentInfo).map(([key, config]) => {
    if (!config.type) {
      console.warn(`No component found for type: ${config.type}`);
      return null;
    }

    return (
      <Form.Item
        key={key}
        label={config.title}
        name={key}
        rules={[{ required: true, message: `Please input your ${config.title.toLowerCase()}` }]}
      >
        {config.type == 'select' ? (
          <Select defaultValue={config.default} onChange={(v) => {
            setformData(prevData => ({ ...prevData, [key]: v }));
          }}>
            {config.options.map(option => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        ) : (
          <Input defaultValue={config.default} onChange={(e) => {
            setformData(prevData => ({ ...prevData, [key]: e.target.value }));
          }} />
        )}
      </Form.Item>
    );
  });

  return (
    <FormDataContext.Provider value={{ formData, setformData }}>
      <div className="w-full h-full bg-slate-200">
        <Form layout="vertical" title={titleConfig.name}>
          {formItems}
        </Form>
      </div>
    </FormDataContext.Provider>
  );
}
