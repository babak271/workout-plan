import {useState} from "react";
import data from "./data.json"
import header from "./components/header.tsx"
import footer from "./components/footer.tsx"
import title from "./components/title.tsx"
import dayButton from "./components/day_buttons.tsx"
import listItem from "./components/list_items.tsx"
import type {Plan} from "./types/data.ts"

function App() {

  const plan: Plan = data as Plan;
  const days: [number, string][] = plan.map((day, k)=>[k, day.name])
  const [currentDay, setCurrentDay] = useState<number>(days[0][0] as number)
  const day = plan[currentDay];
  const handleDayClick = (dayKey: number) => {
    setCurrentDay(dayKey)
  };

  return (
    <div className="pb-16">
      {header()}
      <div className="bg-slate-50">
        {day && title(day.title_info)}
        {day && dayButton({days, currentDay, handleDayClick})}
        {day && listItem(day)}
      </div>
      {footer()}
    </div>
  )
}

export default App;

