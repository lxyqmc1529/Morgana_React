import { DndContext,closestCenter,MouseSensor,useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { SortableContext,verticalListSortingStrategy } from '@dnd-kit/sortable';
interface PropsType{
  children: JSX.Element | JSX.Element[] | null | undefined;
  items: Array<{id:string;[key:string]:any}>;
  onDragEnd: (oldIndex: number, newIndex: number) => void;
  //拖拽结束的回调
}
export default function SortableContainer(props:PropsType) {
  const { children, items, onDragEnd } = props;
  const sensors = useSensors(useSensor(MouseSensor),{
    activationConstraint: {
      distance: 8,
    }
  });
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if(over){
      return 
    }
    if(active.id !== over.id){
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      onDragEnd(oldIndex, newIndex);
    }
  }
  return <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
    <SortableContext items={items} strategy={verticalListSortingStrategy}>
      {children}
    </SortableContext>
  </DndContext>
}