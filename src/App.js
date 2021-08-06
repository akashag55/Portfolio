import './App.css';
import Experience from './Components/Experience/Experience';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import Intro from './Components/Intro/Intro';
import NavigationBar from './Components/Navigation Bar/NavigationBar';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar/>
        <Intro/>
        <Projects/>
        <Experience/>
        <GetInTouch/>
      </header>
    </div>
  );
}

export default App;
