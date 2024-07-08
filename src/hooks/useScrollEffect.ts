import { useEffect,useState } from'react';
import { debounce } from 'radash';
const useScrollEffect = (offset = 0) => {
  const [opacity, setOpacity] = useState(0);
  const _handleScoll = () => {
    const screenHeight = window.screen.height; //屏幕高度
    const scrollTop =  window.scrollY; //滚动条距离顶部距离
    setOpacity(Math.min(1,(scrollTop + offset) / screenHeight));
  };
  const handleScoll = debounce({delay:50},_handleScoll);
  useEffect(() => { //这是一个懒渲染，onMounted的生命周期，但是服务端渲染时不会执行，因为服务端渲染时没有挂载对象
    //需要添加client
    document.addEventListener('scroll', handleScoll);
    return () => {
      document.removeEventListener('scroll', handleScoll);
    };
  });
  return opacity;
};

export default useScrollEffect;