import React from 'react'
import classNames from "classnames";

interface DayButtonProps {
  days: [number, string][];
  currentDay: number;
  handleDayClick: (dayKey: number) => void;
}

export default function dayButton({days, currentDay, handleDayClick}: DayButtonProps) { 
  return ( 
    <div 
        className="flex justify-between sticky top-0 space-x-2 py-2 px-2 bg-white/95 bg-transparent shadow-sm z-9"
      >
    {days.map((day)=>{
      const [dayKey, dayName] = day;
      return (<React.Fragment key={dayKey}>
        <button className={classNames(
          "rounded-xl w-full py-2 text-sm border border-b border-slate-200",
          {"bg-pink-600 text-white": currentDay==dayKey},
          {"bg-white text-black-800": currentDay!==dayKey},
        )} 
        onClick={()=>handleDayClick(dayKey)}>{dayName}
        </button>
      </React.Fragment>
        );
      })}
    </div>
  );
}

