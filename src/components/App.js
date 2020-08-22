import React from "react";
import Search from "../containers/Search";

import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import SearchResults from '../containers/SearchResults';

const App = () => (

      <Router>
        <div className="main-img">
          <div className="container">
            <Search word="" />
          </div>
        </div>

        <div className="menu">
          <div className="container">
            <ul>
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/politica">Política</Link> </li>
              <li> <Link to="/internacionales">Internacionales</Link> </li>
              <li> <Link to="/tecnologia">Tecnología</Link> </li>
              <li> <Link to="/espectaculos">Espectáculos</Link> </li>
              <li> <Link to="/deportes">Deportes</Link> </li>
              <li> <Link to="/diseno">Diseño</Link> </li>
            </ul>
          </div>
        </div>

        <div className="App-intro">
          <Switch>
            <Route path="/:id?"  render={(props) => <SearchResults/>} />
          </Switch>
        </div>
      </Router>
);

export default App;

