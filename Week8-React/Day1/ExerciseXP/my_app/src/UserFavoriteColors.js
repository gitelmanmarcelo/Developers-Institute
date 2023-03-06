import React from 'react';

function UserFavoriteColors (props) {
    return (
        <ul>
        {
        props.user.favAnimals.map(animal => (
                <li>{animal}</li>
        ))
        }
        </ul>
    )
}

export default UserFavoriteColors;