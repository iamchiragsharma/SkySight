import React from 'react'

const middleSection = ({ lat, lon, sunrise, sunset }) => {

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { hour: 'numeric', minute: 'numeric' };
    return date.toLocaleTimeString([], options);
  }

  return (
    <div className='mt-2 pb-2 bg-white w-[380px] rounded-xl text-black flex flex-col justify-center items-center'>
      {/* lat and long */}
      <div className="flex justify-center items-center">
        {/* lat main div */}
        <div className="flex flex-col justify-center items-center">
          {/* lat value */}
          <div className="text-[40px]">
            {lat}
          </div>
          {/* lat title  */}
          <div className="text-[15px] mt-[-15px]">
            Latitude
          </div>
        </div>
        {/* lon main div  */}
        <div className="ml-[35px] flex flex-col justify-center items-center">
          {/* lon value */}
          <div className="text-[40px]">
            {lon}
          </div>
          {/* lon title  */}
          <div className="text-[15px] mt-[-15px]">
            Longitude
          </div>
        </div>
      </div>
      {/* sunrise and sunset */}
      <div className="flex justify-center items-center">
        {/* sunries main div */}
        <div className="flex flex-col justify-center items-center">
          {/* sunrise value */}
          <div className="text-[40px]">
            {formatTime(sunrise)}
          </div>
          {/* sunrise title  */}
          <div className="text-[15px] mt-[-15px]">
            Sunrise
          </div>
        </div>
        {/* sunset main div  */}
        <div className="ml-[35px] flex flex-col justify-center items-center">
          {/* sunset value */}
          <div className="text-[40px]">
            {formatTime(sunset)}
          </div>
          {/* sunset title  */}
          <div className="text-[15px] mt-[-15px]">
            Sunset
          </div>
        </div>
      </div>
    </div>
  )
}

export default middleSection