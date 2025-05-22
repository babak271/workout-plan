
export interface Exercise{
  name:string;
  repeat:string;
  image:string;
  video:string;
} 

export interface DayData{
  name:string;
  title_info:string;
  exercise:Exercise[];
}

export interface Plan {
  [key: number]:DayData[];
}

