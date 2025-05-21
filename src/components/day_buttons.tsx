import React from 'react'
import classNames from "classnames";

export default function dayButton(dayKeys, currentDay, handleDayClick) { 
  return ( 
    <>
      <div className="flex justify-between space-x-2 py-2 px-2">
      {dayKeys.map(dayKey=>(
        <React.Fragment key={dayKey}>
          <button className={classNames(
            "rounded-xl w-full py-2 text-sm border border-b border-slate-200",
            {"bg-pink-600 text-white": currentDay==dayKey},
            {"bg-white text-black-800": currentDay!==dayKey},
          )} 
          onClick={()=>handleDayClick(dayKey)}>{dayKey}
          </button>
        </React.Fragment>
      ))}
      </div>
    </>
  );
}

