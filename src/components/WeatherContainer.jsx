import { useState } from "react"
import WeatherStat from "./WeatherStat"

const WeatherContainer = ({weather}) => {
 const [isCelsius, setisCelsius] = useState(true)

 const changeUnitTemp = (temp) => {
 if(isCelsius){
    // transformacion a  celcius
    const celsiusTemp = (temp - 273.15).toFixed(1)
    return `${celsiusTemp}°C`;
 }else{
    // transformacion a fahrenheit
      const fahrenheitTemp = (((temp - 273.15) * 9/5) + 32).toFixed(1)
      return `${fahrenheitTemp}°F`;
}
 }

 const handleChangeUnit = () => {
  setisCelsius(!isCelsius)
 }

 console.log(changeUnitTemp(weather.main.temp))

  //console.log(weather)
  return (


<section className="text-center grid-5 grid">
  <h3 className="text.xl font-semibold"> {weather.name}, {weather.sys.country} </h3>
  
  
  <div class="container_title"> 
 
  <h1 class="text-slate-800 text-blue-700 titule text-3xl -mt-28">Weather App</h1>
  </div>

<div   className="grid gap-5 sm:grid-cols-[1fr_auto]">
  {/* seccion superior */}
<article className="rounded-2xl grid grid-cols-2 text-slate-800 text-blue-800 items-center p-3  bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">
   <h4 className="col-span-2 text-lg capitalize">{weather.weather[0].description}</h4>
   <span className="text-5xl">
    {changeUnitTemp(weather.main.temp)}
    </span>
   <picture>
    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
   </picture>
</article>

 {/* seccion inferior */}
<article className="grid grid-cols-3 justify-items-center text-slate-900 text-black rounded-2xl p-2 py-3 sm:grid-cols-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 ">
 <WeatherStat icon="/wind.png" unit="m/s" value={weather.wind.speed}  />
 <WeatherStat icon="/humidity.png" unit="%" value={weather.main.humidity}  />
 <WeatherStat icon="/pressure.png" unit="hPa" value={weather.main.pressure}  />
</article>
</div>

<button onClick={handleChangeUnit} className="below-100 grid grid-cols-3 justify-items-center rounded-2xl p-2 py-3 sm:grid-cols-1 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 mt-4 text-slate-900"> Change C° / F° </button>

</section>
  )
}
export default WeatherContainer