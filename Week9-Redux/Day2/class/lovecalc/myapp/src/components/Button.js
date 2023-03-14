import { connect } from 'react-redux';
import { submit } from '../redux/actions';

const Button = (props) => {
    return (
        <>
        <button onClick={() => {props.submit(props.firstName,props.secondName)}}>Submit</button>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        submit : (fname,sname) => { 
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '5e5ab6c5e0mshcbe9fa99d64b85cp1f5a5cjsn4a8d898647c6',
                    'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
                }
            }
            fetch(
            `https://love-calculator.p.rapidapi.com/getPercentage?sname=${fname}&fname=${sname}}`, options)
             .then(response => response.json())
             .then(response => {dispatch(submit(response))})
             .catch(err => console.error(err));}
    }
}

const mapStateToProps = (state) => {
    return {
        firstName : state.firstName,
        secondName : state.secondName
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Button);