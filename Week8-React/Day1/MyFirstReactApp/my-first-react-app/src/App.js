import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Bye from './Bye';
import Car from './Car';
import Actor from './Actor';

const charactersJson = {
  "people": [
    {
      "id" : "1",
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
    },
    {
      "id" : "2",
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
    },
    {
      "id" : "3",
      "name": "R2-D2",
      "height": "96",
      "mass": "32",
      "hair_color": "n/a",
    }
  ]
}

const listCars = [
  {
    id : 1,
    name: "dodge d200",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id : 2,
    name: "hi 1200d",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id : 3,
    name: "datsun pl510",
    year: "1971-01-01",
    origin: "Japan"
  },
  {
    id : 4,
    name: "chevrolet vega 2300",
    year: "1971-01-01",
    origin: "USA"
  }
]

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
  const brand = "Ford";
  return (
    <>
      <Hello/>
      <p>bla bla bla</p>
      <Bye/>
      {
        characters.people.map(item => (
          <ul>
            <li>{item.name}</li>
            <li>{item.height}</li>
            <li>{item.hair_color}</li>
          </ul>
        ))
      }
      <Actor actors={actors}/>
      <Car cars={listCars}/>
    </>
  );
}

const characters = JSON.parse(JSON.stringify(charactersJson));

export default App;

