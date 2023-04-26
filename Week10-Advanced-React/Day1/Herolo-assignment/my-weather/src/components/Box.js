

function Box(props) {
    if (props.type === 'daily')
        return (
            <div key={props.index} className="dayBox">
            <p>{ new Date(props.day.date).toLocaleString('en-US',{weekday: 'long',}) }</p>
            <p>{props.day.date.slice(8,10) + '/' + props.day.date.slice(5,7) + '/' + props.day.date.slice(0,4)} </p>
            <p>{props.day.condition}</p>
            <p>max: {props.day.maxTemperature}C</p>
            <img src={"https://developer.accuweather.com/sites/default/files/"
                +(props.day.icon > 9 ? "" : "0") + props.day.icon +"-s.png"} alt=""/>
            <p>min: {props.day.minTemperature}C</p>
            <img src={"https://developer.accuweather.com/sites/default/files/"
            +(props.day.nightIcon > 9 ? "" : "0") + props.day.nightIcon +"-s.png"} alt=""/>
            </div>
        )
    else {
        return (
            <div key={props.index} className="favBox">
            <p>{props.fav.Name}</p>
            <p>{props.fav.WeatherText}</p>
            <p>{props.fav.Temperature.Metric.Value}C</p>
            <img src={"https://developer.accuweather.com/sites/default/files/"
                +(props.fav.WeatherIcon > 9 ? "" : "0") + props.fav.WeatherIcon +"-s.png"} alt=""/>
            </div>
        )
}   }

export default Box;