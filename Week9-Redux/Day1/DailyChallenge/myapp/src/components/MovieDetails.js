import { connect } from "react-redux";

const MovieDetails = (props) => {
    if (!props.detail.title)
        return (
            <div>
            <h2>Movie</h2><br/>
            <div>Select a movie</div>
            </div>
        )
    else 
        return (
            <div>
                <h2>Movie</h2><br/>
                <div><p>{props.detail.title}</p></div>
                <div><p>{props.detail.releaseDate}</p></div>
                <div><p>{props.detail.rating}</p></div>
            </div>
    )

}

const mapStateToProps = (state) => {
    return { detail : state.selected_movie}
}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);

