import React from 'react'
import ImageWithModal from "./image_with_modal.tsx"

export default function listItem(day) { 
  return (
  <>
    <div className="flex flex-col justify-center px-2">
      {day.map((item, k) =>
        <React.Fragment key={k}>
          <div className="border border-b border-slate-200 bg-white rounded-xl p-2 mb-2">
            <p className="text-xs text-sky-600">Movement {k+1}</p>
            <h2 className="text-lg py-1">{item.name}</h2>
            <p className="text-sm text-gray-800">{item.repeat}</p>
            <ImageWithModal item={item} />
            <iframe className="border border-b border-slate-200 rounded-xl h-30 w-50" src={item.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </React.Fragment>
      )}
    </div>
  </>
  );
}

