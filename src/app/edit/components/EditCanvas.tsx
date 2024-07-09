
import title from "@morgana/components/src/components/title";
import React, { useContext } from "react";
import { FormDataContext } from "./ConfigForm"; 
export default function EditCanvas() {
    const { formData, setformData } = useContext(FormDataContext);
    console.log('context', formData);
    return <div className="edit-canvas w-[375px] h-[712px] bg-white shadow-md">
        {JSON.stringify(formData, null, 2)}
        <title.component></title.component>

    </div>;
}