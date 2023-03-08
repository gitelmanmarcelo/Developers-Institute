import './App.css';
import BuggyCounter from './components/BuggyCounter'
import ErrorBoundary from './ErrorBoundary'
import Color from './components/Color';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BuggyCounter/>
        <BuggyCounter/>
      </ErrorBoundary><hr/>
      <ErrorBoundary>
        <BuggyCounter/>
      </ErrorBoundary><hr/>
      <ErrorBoundary>
        <BuggyCounter/>
      </ErrorBoundary><hr/>
      <BuggyCounter/><hr/>
      <Color/>


    </div>
  );
}

export default App;
