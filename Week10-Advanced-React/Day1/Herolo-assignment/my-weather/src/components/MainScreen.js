import { useContext, useEffect } from "react";
import { AppContext} from '../App';
import './mainscreen.css'
import Box from './Box'
import jsonCurrWeather from '../tel-aviv-weather.json';
import jsonWeather5d from '../weather-tel-aviv-5d.json';

const MainScreen = (props) => {

    const {setCity, city, setCurrWeather,currWeather,setWeather5d,weather5d, favCities, setFavCities} = useContext(AppContext);

    useEffect(() => {
        setCurrWeather({temperature: jsonCurrWeather[0].Temperature.Metric.Value, 
            condition: jsonCurrWeather[0].WeatherText, icon: jsonCurrWeather[0].WeatherIcon});
         const temp = [];
         for (let i=0; i<5; i++)
           temp.push({date: jsonWeather5d.DailyForecasts[i].Date, 
           minTemperature : jsonWeather5d.DailyForecasts[i].Temperature.Minimum.Value,
           maxTemperature : jsonWeather5d.DailyForecasts[i].Temperature.Maximum.Value,
           condition : jsonWeather5d.DailyForecasts[i].Day.IconPhrase,
           icon: jsonWeather5d.DailyForecasts[i].Day.Icon,
           nightIcon: jsonWeather5d.DailyForecasts[i].Night.Icon});
         setWeather5d(temp);
    },[city])

    const handleAddFav = () => {
        const temp = [...favCities];
        temp.push({Name:city, WeatherIcon : 0, WeatherText : "", Temperature : {Metric : { Value : 0 }}} );
        console.log(temp);
        setFavCities(temp);
    }

    return (
        <>
        <main>
            <h1>{city} <button onClick={handleAddFav}>Add to favourites</button></h1>
            <h2>{currWeather.temperature} C</h2>
            <img src={"https://developer.accuweather.com/sites/default/files/"
            +(currWeather.icon > 9 ? "" : "0") + currWeather.icon +"-s.png"} alt=""/>
            <h2>{currWeather.condition}</h2>
            <div id="fiveDaysContainer">
            {
                weather5d.map( (day,index) => (
                    <Box key={index} type={"daily"} day={day} />
                ))
            }
            </div>
        </main>
        </>
    )
}

export default MainScreen;