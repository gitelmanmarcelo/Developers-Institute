import logo from './logo.svg';
import './App.css';
import { Header } from './header';
import { Cards } from './card';
import { Contact } from './contact';

const cards = [
  { clicon : "className='fa-solid fa-building'",
    title: 'About the company',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur autem veritatis eius voluptatem, nobis soluta odio asperiores sapiente consequuntur facere hic eum ullam consectetur ipsam nisi cumque optio. Officia.'
  },
  { clicon : 'fa-solid fa-earth-americas',
    title: 'Our Values',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur autem veritatis eius voluptatem, nobis soluta odio asperiores sapiente consequuntur facere hic eum ullam consectetur ipsam nisi cumque optio. Officia.'
  },
  { clicon : 'fa-solid fa-building-columns',
    title: 'Our Mission',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur autem veritatis eius voluptatem, nobis soluta odio asperiores sapiente consequuntur facere hic eum ullam consectetur ipsam nisi cumque optio. Officia.'
  }

]


function App() {
  return (
    <div className="App">
      <Header/>
      <Cards info={cards[0]}/>
      <Cards info={cards[1]}/>
      <Cards info={cards[2]}/>
      <Contact/>
    </div>
  );
}

export default App;
