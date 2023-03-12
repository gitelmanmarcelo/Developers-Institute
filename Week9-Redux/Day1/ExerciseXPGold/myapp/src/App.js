import './App.css';
import {connect} from 'react-redux'
import { searchArticle } from './redux/actions';

function App(props) {
  return (
    <div className="App">
      <h1>Search</h1>
      <input onChange={props.handleChange}/>
      <br/>
      {
        props.selectedArticles.map(article => (
          <>
          <p style={{fontSize : '2rem'}}><a href={article.url}>{article.title}</a></p>
          </>
        ))
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return { selectedArticles : state.selected_articles}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange :  (e) => { dispatch(searchArticle(e.target.value)) }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
