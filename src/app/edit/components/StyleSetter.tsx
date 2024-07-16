import StyleForm from "@/components/feature/StyleForm";
import useGetComponentsInfo from "@/hooks/useGetComponentsInfo";
import { getComponentByType } from "@morgana/components";
import { Empty} from "antd";

export default function StyleSetter() {
  const { selectedComponent} = useGetComponentsInfo();
  if (!selectedComponent) {
    return <Empty description="Please select a component"/>
  }
  const componentInfo = getComponentByType(selectedComponent.type);
  const commonStyle = componentInfo.commonStyle;
  if(!commonStyle){
    return <Empty description="Please select a component"/>
  }
  const commonStyleValueChange = (values:Record<string, any>)=>{
  }
  return <>{
    <StyleForm commonStyle={commonStyle} value={selectedComponent.commonStyle} onChange={commonStyleValueChange} ></StyleForm>  }
  </>
}