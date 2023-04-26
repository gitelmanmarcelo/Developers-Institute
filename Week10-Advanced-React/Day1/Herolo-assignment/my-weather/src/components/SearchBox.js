import jsonCities from '../cities.json';
import jsonCurrWeather from '../tel-aviv-weather.json';
import jsonWeather5d from '../weather-tel-aviv-5d.json';
import {useState,useContext} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AppContext} from '../App';

const SearchBox = (props) => {

    const [cities,setCities] = useState([{name:''}]);

    const {setCity, city, setCurrWeather,currWeather,setWeather5d,weather5d} = useContext(AppContext);

    const handleCityChange = (e) => {
        if (!e.target.value)
          return;
        if (e.target.value.length <= 3) {

          fetch("http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=2sF8QvSRGtaN6gH8OtEA25w7TOFzWNcn&q=" + e.target.value)
            .then( res => res.json())
            .then(data => {
          //     console.log('data:',data)
          // const data = jsonCities;
              setCities(data
                .filter(item=>item.LocalizedName.slice(0,e.target.value.length).toLowerCase() === e.target.value.toLowerCase())
                .map(el => {return {name: el.LocalizedName, key: el.Key}}));
            })
              // console.log('cities:',cities);
            // })
            .catch (err => { console.log("autocomplete fetch error: ", err)})
          
        } else if (e.target.value.length === 0) 
            cities.length = 0;
    }

    const handleCitySet = (newInputValue) => {
      setCity(newInputValue);
      const key = cities.find(el => el.name === newInputValue).key;
      console.log('key:',key);
      fetch("http://dataservice.accuweather.com/currentconditions/v1/" + key + "?apikey=2sF8QvSRGtaN6gH8OtEA25w7TOFzWNcn")
      .then( res => res.json())
      .then(data => {
        console.log('data:',data)
        setCurrWeather({temperature: data[0].Temperature.Metric.Value, 
          condition: data[0].WeatherText, icon: data[0].WeatherIcon});
      })
      .catch (err => { console.log("current weather fetch error: ", err)})

      fetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + key + "?apikey=2sF8QvSRGtaN6gH8OtEA25w7TOFzWNcn&metric=true")
      .then( res => res.json())
      .then(data => {
        console.log('data:',data)
        const temp = [];
        for (let i=0; i<5; i++)
          temp.push({date: data.DailyForecasts[i].Date, 
          minTemperature : data.DailyForecasts[i].Temperature.Minimum.Value,
          maxTemperature : data.DailyForecasts[i].Temperature.Maximum.Value,
          condition : data.DailyForecasts[i].Day.IconPhrase,
          icon: data.DailyForecasts[i].Day.Icon,
          nightIcon: data.DailyForecasts[i].Night.Icon});
        setWeather5d(temp);
      })
      .catch (err => { console.log("5 days fetch error: ", err)})
    }

    const options = ['Option 1', 'Option 2'];
    console.log('cities.map:',cities.map(el => el.LocalizedName));
    return (
        <>
        <Autocomplete
        // value={value}
        // inputValue={inputValue}
        onChange={(event, newInputValue) => { handleCitySet(newInputValue)}}
        onInputChange={(event, newInputValue) => {
          handleCityChange(event);
        }}
        id=""
        options={cities.map(el => el.name)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Enter a city..." />}
      />
        </>
    )

}

export default SearchBox;