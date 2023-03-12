import { connect } from 'react-redux'
import { selectMovie } from '../redux/actions';

const MovieList = (props) => {
    return (
        <div>
            <h2>Movie List</h2><br/>
            {
                props.movieList.map( (movie,index) => (
                    <div style={{display:'flex', width: '600px', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div><p>{movie.title}</p></div>
                    <div><button id={index} onClick={props.showDetails}>details</button></div>
                    </div>
                ))
            }
        </div>
    )
}

const mapStateIntoProps =  (state) => {
    return {
        movieList : state.movie_list
    };
}

const mapDispatchIntoProps = (dispatch) => {
    return {
        showDetails : (e) => {dispatch(selectMovie(e.target.id))}
    }

}

export default connect(mapStateIntoProps,mapDispatchIntoProps)(MovieList);