import HomeIcon from '../assets/home.svg?react';
import EditIcon from '../assets/edit.svg?react'

export default function footer() { 
  return (
    <div className="flex justify-between items-center py-3 bg-white shadow-lg rounded sticky bottom-0 left-0 w-full pb-[calc(0.7rem+env(safe-area-inset-bottom))]">
      <div className="flex flex-col mx-8 items-center">
        <HomeIcon className="w-6 fill-(--color-primary)" />
        <p className="text-xs">Home</p>
      </div>
      <div className="flex flex-col mx-8 items-center">
        <EditIcon className="w-6 fill-(--color-secondary)" />
        <p className="text-xs">Edit</p>
      </div>
    </div>
  )
}

