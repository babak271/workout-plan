
export interface Exercise{
  name:string;
  repeat:string;
  image:string;
  video:string;
} 

export type ComboExercise = Exercise[]

export interface DayData{
  name:string;
  title_info:string;
  exercise:ComboExercise[];
}

export type Plan = DayData[]

