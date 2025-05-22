
export interface Exercise{
  name:string;
  repeat:string;
  image:string;
  video:string;
} 

export interface DayData {
  [key: string]:Exercise[];
}
