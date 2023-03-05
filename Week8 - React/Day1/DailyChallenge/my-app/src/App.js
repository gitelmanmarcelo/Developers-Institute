import logo from './logo.svg';
import './App.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { DemoCarousel } from './carrousel';

function App() {
  return (
    <div className="App" style={{width:'60%', marginLeft:'20vw'}}>
      <DemoCarousel/>
    </div>
  );
}

export default App;
