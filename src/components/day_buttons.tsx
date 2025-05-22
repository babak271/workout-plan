import React, {useRef, useEffect, useState} from 'react'
import classNames from "classnames";

interface DayButtonProps {
  days: [number, string];
  currentDay: number;
  handleDayClick: (dayKey: number) => void;
}

export default function dayButton({days, currentDay, handleDayClick}: DayButtonProps) { 
  const buttonContainerRef = useRef<HTMLDivElement>(null)
  const [isSticky, setIsSticky] = useState(false)
  const [offsetTop, setOffsetTop] = useState<number | null>(null)

  useEffect(()=>{
    const buttonElement = buttonContainerRef.current
    if (buttonElement) {
      setOffsetTop(buttonElement.offsetTop)
      const handleScroll = () => {
        if (buttonElement && offsetTop !== null) {
          const rect = buttonElement.getBoundingClientRect();
          if (rect.top <= 0 && window.scrollY > offsetTop) {
            setIsSticky(true)
          } else {
            setIsSticky(false)
          }
        }
      };

      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      };
    }
  }, [offsetTop]);

  return ( 
    <div 
        ref={buttonContainerRef}
        className={classNames(
          "flex justify-between space-x-2 py-2 px-2 bg-white z-9 transition-all duration-200",
          {'fixed top-0 left-0 right-0 shadow-sm': isSticky}
        )}
      >
    {days.map((day)=>{
      const [dayKey, dayName] = day;
      return (<React.Fragment key={dayKey}>
        <button className={classNames(
          "rounded-xl w-full py-2 text-sm border border-b border-slate-200",
          {"bg-pink-600 text-white": currentDay==dayKey},
          {"bg-white text-black-800": currentDay!==dayKey},
        )} 
        onClick={()=>handleDayClick(dayKey)}>{dayName}
        </button>
      </React.Fragment>
        );
      })}
    </div>
  );
}

