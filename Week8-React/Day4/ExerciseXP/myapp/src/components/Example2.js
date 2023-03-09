import React from 'react';
import data from '../data2.json'

class Example2 extends React.Component {
    render() {
        return (
            <>
            
            {data.Skills.map(item => (
                <>
                <h1>{item.Area}</h1>
                <ul>
                    {item.SkillSet.map(el => (
                        <li>{el.Name}</li>
                    ))
                    }
                </ul>
                </>
            ))}
            
            </>
        )
    }
}

export default Example2;