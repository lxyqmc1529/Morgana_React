
export enum Unit{
  px = 'px',
  em = 'em',
  rem = 'rem',
  percent = '%',
  vh = 'vh',
  vw = 'vw',
  auto = 'auto',
}
export interface CircleStyle{
  top?:number;
  right?:number;
  bottom?:number;
  left?:number;
}
export interface WithUnitNumber{
  value: number;
  unit: Unit;
}
export interface BorderStyle{
  color: string;
  width: number;
  style: 'solid' | 'dashed' | 'dotted' | 'none';
  radius:number | CircleStyle;
}
export interface TextStyle{
  color:string;
  size:WithUnitNumber;
  align: 'left' | 'center' | 'right';
  weight:string | number;
  style: 'normal'| 'italic' | 'oblique';
  decoration: 'none' | 'underline' | 'line-through' | 'overline';
}

export interface CommonStyleProps{
  text?:boolean | TextStyle;
  border?:boolean | BorderStyle;
}