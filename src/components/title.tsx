import BarIcon from '../assets/bar.svg?react'

export default function title(title_info: string) { 
  return (
    <>
      <div className="flex flex-col justify-between py-4">
        <div className="flex justify-center">
          <BarIcon className="w-5 mr-2 fill-(--color-primary)" />
          <p className="text-xs text-pink-700">3 Days / Week</p>
        </div>
        <h1 className="text-2xl font-medium text-center text-gray-900">Leg Day</h1>
        <p className="text-sm text-center text-gray-600">{title_info}</p>
      </div>
    </>
  )
}

