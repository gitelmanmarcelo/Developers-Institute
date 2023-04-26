import jsonCities from '../cities.json';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const SearchBox = (props) => {

    const [cities,setCities] = useState([]);

    const handleCityChange = (e) => {
        if (e.target.value.length > 2) {
            setCities(jsonCities
            .filter(item=>item.LocalizedName.slice(0,e.target.value.length).toLowerCase() === e.target.value.toLowerCase())
            .map(el => el.LocalizedName));
            console.log(cities);
        }
    }

    const options = ['Option 1', 'Option 2'];

    return (
        <>

        {/* <Autocomplete //value={value}  */}
         {/* onChange={(event: any, newValue: string | null) => { */}
        //   setValue(newValue);
         {/* }} */}
        // inputValue={inputValue}
        // onInputChange={(event, newInputValue) => {
        //   setInputValue(newInputValue);
        // }}
    //     id="controllable-states-demo"
    //     options={options}
    //     sx={{ width: 300 }}
    //     renderInput={(params) => <TextField {...params} label="Controllable" />}
    //   />


        <label htmlFor="exampleDataList" className="form-label">Datalist example</label>
        <input onChange={handleCityChange} className="form-control" list="datalistOptions" id="exampleDataList" placeholder="|Enter a city..."/>
        <datalist id="datalistOptions">
            {
                cities.map( (city) => (
                    <option value={city}/>
                ))
            }
        </datalist>
        </>
    )

}

export default SearchBox;