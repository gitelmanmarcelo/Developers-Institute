import React from "react"

const Car = (props) => {
    const carName = 'McQueen';
        return(
            <>
            <h1>Hi, I am a {props.brand} car</h1>
            <h2>My name is {carName}</h2>
            {
                props.cars.map(car => (
                    <ul>
                        <li>{car.name}</li>
                        <li>{car.year}</li>
                        <li>{car.origin}</li>
                    </ul>
                ))
            }
            </>
        )
}

export default Car