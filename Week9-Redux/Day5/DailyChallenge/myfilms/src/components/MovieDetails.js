import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDetails } from '../redux/actions';
import { Link } from 'react-router-dom'

const MovieDetails = (props) => {
    const {id} = useParams();
    console.log('id:',id)
    props.getDetails(id);
    if (props.details)
    return (
        <div>
            <br/>
            <img src={props.details.Poster} alt=''/>
            <p>{props.details.Title}</p>
            <p>{props.details.Year}</p>
            <p>{props.details.Genre}</p>
            <p>{props.details.Actors}</p>
            <p>{props.details.Plot}</p>
            <button><Link to='/'>Back to main page</Link></button>
        </div>
    ); else
    return (    <h1>No details</h1> );
}

const mapStateToProps = (state) => {
    return {
        details : state.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetails : (id) => {dispatch(getDetails(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetails);