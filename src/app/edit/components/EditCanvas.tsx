import useGetComponentsInfo from "@/hooks/useGetComponentsInfo";
import { ComponentInfoType, selectComponent } from "@/store/componentReducer";
import { getComponentByType } from "@morgana/components";
import clsx from "clsx";
import SortableContainer from "@/components/feature/DragSortable/SortableContainer";
import { SortableItem } from "@/components/feature/DragSortable/SortableItem";
import { useDispatch } from "react-redux";
function genComponent(component:ComponentInfoType) {
    const Component = getComponentByType(component.type);
    if(!Component) return null;
    const { props } = component;
    return <Component {...props} />
}
export default function EditCanvas() {
    const { components,selectedId } = useGetComponentsInfo();
    const dispatch = useDispatch();
    const selectComponentHandler = (id:string) => {
        dispatch(selectComponent(id));
    }
    return (
        <div className="edit-canvas w-[375px] h-[712px] bg-white shadow-md">
            {components.map((component) =>{
                const wrapperDefaultClass = "border border-dashed p-3 rounded-sm";
                const selectClass = 'border-cyan-600 hover:border-cyan-600';
                const defaultClass = 'border-white hover:border-slate-100';
                const wrapperClassName = clsx(wrapperDefaultClass, {
                    [selectClass]: component.id === selectedId,
                    [defaultClass]: component.id!== selectedId
                })
                return (<div className={wrapperClassName} onClick={() => selectComponentHandler(component.id)}>
                    <div className="select-none pointer-events-none outline-none">
                    {genComponent(component)}
                    </div>
                   </div>)
            } )}
        </div>
    )
}