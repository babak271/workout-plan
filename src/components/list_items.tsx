import React from 'react'
import ImageWithModal from "./image_with_modal.tsx"
import type {DayData} from "../types/data.ts"

export default function listItem(day: DayData[]) { 
  return (
  <>
    <div className="flex flex-col justify-center px-2">
      {day.exercise.map((item, j) => 
        <React.Fragment key={Number(j)}>
          <div className="border border-b border-slate-200 bg-white rounded-xl p-2 mb-2">
            <p className="text-xs text-sky-600">Movement {Number(j)+1}</p>
            <h2 className="text-lg py-1">{item.name}</h2>
            <p className="text-sm text-gray-800">{item.repeat}</p>
            {item.image && (<ImageWithModal item={item} />)}
            {item.video && (<iframe className="border border-b border-slate-200 rounded-xl h-30 w-50" src={item.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>)}
          </div>
        </React.Fragment>
      )}
    </div>
  </>
  );
}

