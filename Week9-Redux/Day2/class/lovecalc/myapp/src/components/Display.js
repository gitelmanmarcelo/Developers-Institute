import { connect } from 'react-redux';

const Display = (props) => {
    console.log('props:',props)
    const a = props.result.result
    console.log('props.result:',a)
    return (
        <>
        <h1>Result:</h1>
        <h2>{props.result.percentage}% - {props.result.result}</h2>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        result : state.result
    }
}

export default connect(mapStateToProps,null)(Display);