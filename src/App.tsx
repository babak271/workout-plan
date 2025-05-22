import {useState} from "react";
import data from "./data.json"
import header from "./components/header.tsx"
import title from "./components/title.tsx"
import dayButton from "./components/day_buttons.tsx"
import listItem from "./components/list_items.tsx"
import type {DayData} from "./types/data.ts"

function App() {

  const dayData: DayData = data;
  const dayKeys = Object.keys(dayData)
  const [currentDay, setCurrentDay] = useState<keyof DayData>(dayKeys[0] as keyof DayData)
  const day = dayData[currentDay];
  const handleDayClick = (day: keyof DayData) => {
    setCurrentDay(day)
  };

  return (
    <>
      {header()}
      <div className="bg-slate-50">
        {title()}
        {dayButton({dayKeys, currentDay, handleDayClick})}
        {listItem(day)}
      </div>
    </>
  )
}

export default App;

