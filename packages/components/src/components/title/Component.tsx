import { Typography } from 'antd';
import { TitleProps } from './interface';
export default function Input(props:TitleProps){
  return <Typography.Title {...props} >
    {props.text}
  </Typography.Title>
} 