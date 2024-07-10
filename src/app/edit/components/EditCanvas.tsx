import useGetComponentsInfo from "@/hooks/useGetComponentsInfo";
import { ComponentInfoType } from "@/store/componentReducer";
import { getComponentByType } from "@morgana/components";
function genComponent(component:ComponentInfoType) {
    const Component = getComponentByType(component.type);
    if(!Component) return null;
    const { props } = component;
    return <Component {...props} />
}
export default function EditCanvas() {
    const { components } = useGetComponentsInfo();
    return (
        <div className="edit-canvas w-[375px] h-[712px] bg-white shadow-md">
            {components.map((component) =>{
                return (<div>{genComponent(component)}</div>)
            } )}
        </div>
    )
}