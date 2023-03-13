import { connect } from 'react-redux'
import Card from './Card'

const Grid = (props) => {
    console.log('filter:',props.filter)
    return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px'}}>
            {
            props.robots.filter(el => {
                if (!props.filter)
                    return true;
                else
                    return el.name.slice(0,props.filter.length).toLowerCase() === props.filter.toLowerCase()})
            .map(robot => (
                    <Card robot={robot}/>
                )
            )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
    robots : state.robots,
    filter : state.filter
    }
}

export default connect(mapStateToProps,null)(Grid);