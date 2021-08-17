import { Route, Switch } from 'react-router-dom';
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
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div id='title'>
          <Switch>
          <Route path={'/'} exact component={Intro}/>
          <Route path={'/projects'} exact component={Projects}/>
          <Route path={'/experience'} exact component={Experience}/>
          <Route path={'/contact'} exact component={GetInTouch}/>
          </Switch>
        </div>
      </header>
    </div>
  );
}

export default App;
