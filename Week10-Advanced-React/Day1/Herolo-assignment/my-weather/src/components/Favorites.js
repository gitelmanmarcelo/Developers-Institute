import jsonFavCities from '../fav-cities.json'
import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import Box from "./Box"
import './favorites.css'

const Favorites = () => {

    const {favCities, setFavCities} = useContext(AppContext);

    useEffect(() => {
        const temp = [...favCities];
        temp.forEach((city,index) => {

            
            const jsonIndex = jsonFavCities.findIndex(el => el.Name === city.Name);
            console.log('jsonindex',jsonIndex)
            temp[index].WeatherText = jsonFavCities[jsonIndex].WeatherText ;
            temp[index].WeatherIcon = jsonFavCities[jsonIndex].WeatherIcon;
            temp[index].Temperature.Metric.Value = jsonFavCities[jsonIndex].Temperature.Metric.Value;
        });
        console.log('no fav:',temp);
        setFavCities(temp);
    },[])
    // },[favCities])

    const handleRemoveFav = (e) => {
        const index = e.target.id;
        const temp = [...favCities];
        temp.splice(index,1);
        console.log('index:',index)
        console.log('temp:',temp)

        setFavCities(temp);
    }

    return (
        <>
        <h1>favorites</h1>
        <div id="fiveContainer">
        {
            favCities.map((city,index) => (
                <div className="favBox">
                    <Box type="favorite" key={index} fav={city}/>
                    <button id={index} onClick={handleRemoveFav}>Remove Favorite</button>
                </div>
                ))
        }
        
        </div>
        </>
    )
}

export default Favorites;