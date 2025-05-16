import {useState} from "react";
import data from "./data.json"
import dayButton from "./components/day_buttons.tsx"
import listItem from "./components/list_items.tsx"

interface Exercise{
  name:string;
  repeat:string;
  image:string;
  video:string;
}

interface DayData {
  [key: string]:Exercise[];
}

function App() {

    const dayData = data as DayData;
    const dayKeys = Object.keys(dayData)
    const [currentDay, setCurrentDay] = useState<keyof DayData>(dayKeys[0])
    const day = dayData[currentDay];
    const handleDayClick = (day: keyof DayData) => {
      setCurrentDay(day)
    };



      return (
          <>
            <h1 className="text-xl text-center mb-8 mt-3">My Plan</h1>
            <div className="flex justify-center gap-2 mb-4">
              {dayButton(dayKeys, currentDay, handleDayClick)}
            </div>
            <div className="flex flex-col justify-center mx-6">
              {listItem(day)}
            </div>
        </>
    )
}

export default App;

