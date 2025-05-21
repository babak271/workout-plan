import React from 'react'
import classNames from "classnames";
import barSvg from '../assets/bar.svg'

export default function title() { 
  return (
    <>
      <div className="flex flex-col justify-between py-4">
        <div className="flex justify-center">
          <img className="w-5 mr-2" src={barSvg} />
          <p className="text-sm text-pink-700">3 Days / Week</p>
        </div>
        <h1 className="text-2xl font-medium text-center text-gray-900">Leg Day</h1>
        <p className="text-sm text-center text-gray-600">A balanced plan focusing on the Legs and bottom body.</p>
      </div>
    </>
  )
}

