import homeSvg from '../assets/home.svg'

export default function footer() { 
  return (
    <>
      <div className="flex flex-col justify-between py-4">
        <div className="flex justify-center">
          <img className="w-5 mr-2" src={homeSvg} />
          <p className="text-sm text-pink-700">3 Days / Week</p>
        </div>
      </div>
    </>
  )
}

