import React from 'react'

const WeatherStat = ({icon, value, unit}) => {
  return (
    
    <div className="flex gap-2 item-center"> 
    <img src={icon} alt="" />
    <span>{value}{unit}</span>
   </div>
  )
}

export default WeatherStat
