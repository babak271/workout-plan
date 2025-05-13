import {useState} from "react";
import data from "./data.json"

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

    const dayButton = dayKeys.map((dayKey)=>(
      <button className="rounded bg-sky-600 px-2 py-1 text-base font-semibold text-white" onClick={()=>handleDayClick(dayKey)}>{dayKey}</button>
    ));

    const listItem = day.map(item =>
      <div className="flex justify-between border-2 border-solid border-sky-100 rounded-sm my-1 p-3">
        <div className="flex flex-col w-1/2">
          <h2 className="text-lg text-center">{item.name}</h2>
          <p className="text-sm">{item.repeat}</p>
        </div>
        <img className="h-40 w-40" src={item.image} />
      </div>
    );

      return (
          <>
            <h1 className="text-xl text-center mb-8 mt-3">My Plan</h1>
            <div className="flex justify-center gap-2 mb-4">
              {dayButton}
            </div>
            <div className="flex flex-col justify-center mx-6">
              {listItem}
            </div>
        </>
    )
}

export default App;
