import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card icon={'💪🏻'} label={'hello'} number={99223}/>
      <Card icon={'😁'} label={'name'} number={656646}/>
      <Card icon={'👍🏻'} label={'pencil'} number={8673}/>
      <Card icon={'🚌'} label={'mountain'} number={98834}/>
      <Card icon={'🚂'} label={'rocks'} number={65423}/>
      <Card icon={'🙏🏻'} label={'JS'} number={873292}/>
      <Card icon={'❤'} label={'computer'} number={75324}/>
      <Card icon={'❌'} label={'Goodbye!'} number={64235}/>

    </div>
  );
}

export default App;
