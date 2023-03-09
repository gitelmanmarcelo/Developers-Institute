import './App.css';
import Counter from './components/counter';
import Parent from './Parent'
import Child from './Child'
import ErrorBoundary from './ErrorBoundary'
import CounterHook from './components/CounterHook';

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
      <CounterHook/>
    </>
  )
}

export default App;
