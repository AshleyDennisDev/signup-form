import './App.css';
import Form from './components/Form';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <div className='appContent'>
        <Intro/>
        <Form />
      </div>
    </div>
  );
}

export default App;
