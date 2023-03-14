const Card = (props) => {
    return (
        <div style={{margin: '0 auto', width : '20vw', borderRadius: '20px', backgroundColor : 'lightcoral'}}>
            <img src={"https://robohash.org/"+props.robot.id} alt=""/>
            <p>{props.robot.name}</p>
            <p>{props.robot.email}</p>
        </div>
    )
}

export default Card;