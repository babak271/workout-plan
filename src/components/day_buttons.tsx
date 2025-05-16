import React from 'react'
import classNames from "classnames";

export default function dayButton(dayKeys, currentDay, handleDayClick) { 
  return dayKeys.map((dayKey, k)=>(
    <React.Fragment key={dayKey}>
      <button className={classNames(
        "rounded  px-2 py-1 text-base font-semibold text-white",
        {"bg-sky-600": currentDay==dayKey},
        {"bg-sky-300": currentDay!==dayKey},
      )} 
      onClick={()=>handleDayClick(dayKey)}>{dayKey}
      </button>
    </React.Fragment>
  ));
}
