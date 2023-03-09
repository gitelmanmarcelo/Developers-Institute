import React from 'react';
import data from '../data2.json'

class Example3 extends React.Component {
    render() {
        return (
            <>
            
            {data.Experiences.map(item => (
                <>
                <p>{item.companyName}</p>
                <img src={item.logo}/>
                <p>{item.url}</p>
                    {item.roles.map(el => (
                        <>
                        <p>{el.title}</p>
                        <p>{el.description}</p>
                        <p>{el.startDate}</p>
                        <p>{el.endDate}</p>
                        <p>{el.location}</p>
                        </>
                    ))
                    }
                </>
            ))}
            
            </>
        )
    }
}

export default Example3;