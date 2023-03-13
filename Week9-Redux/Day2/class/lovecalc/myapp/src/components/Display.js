import { connect } from 'react-redux';

const Display = (props) => {
    console.log('props:',props)
    console.log('props.result:',props.result)
    return (
        <>
        <h1>Result:</h1>
        <h2>{props.result}</h2>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        result : state.result
    }
}

export default connect(mapStateToProps,null)(Display);