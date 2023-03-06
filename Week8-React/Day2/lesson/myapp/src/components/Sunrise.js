import React from 'react';

class SunRise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country : 'Israel',
            city: 'Tel Aviv'
        }
    }

    componentDidMount() {
        fetch('https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818')
        .then((res) => res.json())
        .then(data => this.setState({hourSunrise: data.results.sunrise}))
        .catch(err => {console.log(err)});
    }

    render() {
        let { country, city, hourSunrise } = this.state;
        return (
            <>
            <h1>The sunrise in {country}, {city} will be at {hourSunrise}</h1>
            </>
        )
    }
}

export default SunRise;