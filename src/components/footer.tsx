import HomeIcon from '../assets/home.svg?react';
import EditIcon from '../assets/edit.svg?react'

export default function footer() { 
  return (
    <>
      <div className="sticky -bottom-20 w-full pb-30 z-40 bg-white pointer-events-none"></div>
      <footer className="flex justify-between items-center z-50 py-3 bg-white shadow-lg rounded fixed bottom-0 left-0 w-full h-16">
        <div className="flex flex-col mx-8 items-center">
          <HomeIcon className="w-6 fill-(--color-primary)" />
          <p className="text-xs">Home</p>
        </div>
        <div className="flex flex-col mx-8 items-center">
          <EditIcon className="w-6 fill-(--color-secondary)" />
          <p className="text-xs">Edit</p>
        </div>
      </footer>
    </>
  )
}

