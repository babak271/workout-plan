
export interface Exercise{
  name:string;
  repeat:string;
  image:string;
  video:string;
} 

export interface ComboExercise{
  [key: number]:Exercise[]
}

export interface DayData{
  name:string;
  title_info:string;
  exercise:ComboExercise[];
}

export interface Plan {
  [key: number]:DayData[];
}

