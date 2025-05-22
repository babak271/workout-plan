import {useState} from "react";
import data from "./data.json"
import header from "./components/header.tsx"
import title from "./components/title.tsx"
import dayButton from "./components/day_buttons.tsx"
import listItem from "./components/list_items.tsx"
import type {Plan} from "./types/data.ts"

function App() {

  const plan: Plan = data;
  const days = plan.map((day, k)=>[k, day.name])
  const [currentDay, setCurrentDay] = useState<keyof Plan>(days[0][0])
  const day = plan[currentDay];
  const handleDayClick = (dayKey: number) => {
    setCurrentDay(dayKey)
  };

  return (
    <>
      {header()}
      <div className="bg-slate-50">
        {title(day.title_info)}
        {dayButton({days, currentDay, handleDayClick})}
        {listItem(day)}
      </div>
    </>
  )
}

export default App;

