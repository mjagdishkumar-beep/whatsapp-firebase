import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className='app__body'>
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>  
        </Router>
      </div>
    </div>
  );
}

export default App;
