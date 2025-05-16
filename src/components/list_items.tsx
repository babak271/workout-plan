import React from 'react'

export default function listItem(day) { 
  return day.map((item, k) =>
    <React.Fragment key={k}>
      <div className="flex justify-between border-2 border-solid border-sky-100 rounded-sm my-1 p-3">
        <div className="flex flex-col">
          <h2 className="text-lg text-center">{item.name}</h2>
          <p className="text-sm mb-3">{item.repeat}</p>
          <iframe className="h-40 w-40" src={item.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <img className="h-50 w-50" src={item.image} />
      </div>
    </React.Fragment>
  );
}

