import React from 'react';
import data from '../data2.json'

class Example1 extends React.Component {
    render() {
        return (
            <>
            <ul>
            {data.SocialMedias.map(item => (
                <li>{item}</li>
            ))}
            </ul>
            </>
        )
    }
}

export default Example1;