import { connect } from 'react-redux';
import { searchMovies } from '../redux/actions';
import { Link } from 'react-router-dom'

export const SearchMovies = (props) => {
    return (
        <div>
            <h1>Search for a movie, TV series ...</h1>
            <form onSubmit={props.handleSubmit}>
                <input id="search"/>
                <button>Search</button><br/><br/>
            </form>
            <div>
                <div style={{display:'grid', gridTemplateColumns : '1fr 1fr 1fr 1fr'}}>
                {(props.movies.length > 0) ?
                    props.movies.map((movie,index) => (
                    <div key={index}>
                        <img src={movie.Poster} alt=""/>
                        <p>{movie.Title}</p>
                        <p>{movie.Year}</p>
                        <button><Link to={'/details/'+ movie.imdbID}>Movie Details</Link></button>
                        <br/><br/>
                    </div>
                ))
                :
                <><h1>no movies</h1></>
                }
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      handleSubmit : (e) => {
        e.preventDefault();
        dispatch(searchMovies(e.target.search.value));
      }
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      movies : state.movies
    }
  
  }

  export default connect(mapStateToProps,mapDispatchToProps)(SearchMovies);
