import React from 'react'
import ImageWithModal from "./image_with_modal.tsx"
import type {DayData, ComboExercise} from "../types/data.ts"

export default function listItem(day: DayData) { 
  return (
  <>
    <div className="flex flex-col justify-center px-2">
      {day.exercise.map((comboItem, k) => {

        return (<React.Fragment key={Number(k)}>
          <div className="border border-1 border-slate-100 shadow-sm shadow-slate-200 bg-white rounded-xl p-4 mb-3">
            {makeMovementTitle(k, comboItem)}
            {makeMovementName(comboItem)}
            {getRepeat(comboItem)}
            {getComboImage(comboItem)}
            {getComboVideo(comboItem)}
          </div>
        </React.Fragment>
          )
      })}
    </div>
  </>
  );
}

function makeMovementTitle(k:number, comboItem:ComboExercise){
  return (
    <p className="text-xs text-sky-600">
      Movement {Number(k) + 1}
      {comboItem.length > 1 && (
        <span className="ml-4 px-2 font-light text-sm text-gray-600 border border-b border-gray-400">
          Combo
        </span>
      )}
    </p>
  );
}

function makeMovementName(comboItem:ComboExercise){
  return (
    <h2 className="text-sm py-1">
      {comboItem.map((item, index) =>(
        <React.Fragment key={index}>
          {item.name}
          {index < comboItem.length - 1 && comboItem.length > 1 && ' & '}
        </React.Fragment>
      ))}
    </h2>
  )
}

function getRepeat(comboItem:ComboExercise){
  return comboItem.map((item, index)=>(
    <React.Fragment key={index}>
      <p className="text-sm text-gray-800">{item.repeat}</p>
    </React.Fragment>
  ));
}

function getComboImage(comboItem:ComboExercise){
  return (
    <div className="flex flex-left space-x-4 overflow-x-auto">
      {comboItem.map((item, index) =>(
        <React.Fragment key={index}>
          {item.image && (<ImageWithModal item={item} />)}
        </React.Fragment>
      ))}
    </div>
  )
}

function getComboVideo(comboItem:ComboExercise){
  return comboItem.map((item, index) =>(
    <React.Fragment key={index}>
      {item.video && (<iframe className="border border-b border-slate-200 rounded-xl h-30 w-50" src={item.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>)}
    </React.Fragment>
  ));
}

