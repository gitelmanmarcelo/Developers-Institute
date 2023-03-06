import logo from './logo.svg';
import './App.css';
import Car from './Components/Car.js'
import Actor from './Components/Actor.js'
import SunRise from './Components/Sunrise';

const actors = [
  {    firstName: "Tom",
      lastName: "Hanks",
          image: "https://assets.cdn.moviepilot.de/files/42a98be9213ebc1ba1416411c2a1165d697cc16c1f0a575cbad969c82093/fill/157/157/e-mail-f_r-dich-13.jpg"  },
  {    firstName: "Meryl",
      lastName: "Streep",
      image: "https://www.imdb.com/name/nm0000658/mediaviewer/rm3651711232"  },
  {    firstName: "Denzel",
      lastName: "Washington",    
      image: "https://www.imdb.com/name/nm0000243/mediaviewer/rm299970560"  }
    ];



function App() {

  const carColors = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown"
  ]

  return (
    <div className="App">
      <Car colors={carColors}/>
      <Actor/>
      <SunRise/>
    </div>
  );
}

export default App;
