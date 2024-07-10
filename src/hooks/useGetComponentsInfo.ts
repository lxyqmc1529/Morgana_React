import { useSelector} from "react-redux";
import { StateType } from "@/store";
import { ComponentStateType } from "@/store/componentReducer";
//useSelector 是一个react-redux提供的hook，可以获取redux store中所需要的数据。
export default function useGetComponentsInfo() {
  //从state中获取component数据
  const componentState = useSelector<StateType>((state) => state.component) as ComponentStateType;
  const { selectedId, components } = componentState;
  return { selectedId, components };
}