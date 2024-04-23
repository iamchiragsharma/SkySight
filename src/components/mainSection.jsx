import React from 'react'
import UpperSection from './upperSection'
import MiddleSection from './middleSection'
import LowerSection from './lowerSection'


const getTemperature = (temp) => {
  if(temp >= 25){
    return 'bg-hot';
  } else {
    return 'bg-rain';
  }
}


const mainSection = ({ place, data }) => {
  const temp = Math.round(data?.main?.temp - 273);
  const tempClass = getTemperature(temp);

  return (
    <div className={` text-white ${tempClass} w-[100vw] h-[100vh] rounded border border-white flex flex-col justify-start items-center `}>
      <UpperSection place={place} temp={temp} />
      <MiddleSection lat={data?.coord?.lat} lon={data?.coord?.lon} sunrise={data?.sys?.sunrise} sunset={data?.sys?.sunset} />
      <LowerSection status={data?.weather[0]?.description} pressure={data?.main?.pressure} humidity={data?.main?.humidity} windSpeed={data?.wind?.speed} />
    </div>
  )
}

export default mainSection  
