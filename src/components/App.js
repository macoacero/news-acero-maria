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
        <li> <Link to="/Home">Home</Link> </li>
        <li> <Link to="/Deportes">Deportes</Link> </li>
        <li> <Link to="/Diseño">Diseño</Link> </li>
        <li> <Link to="/Espectáculos">Espectáculos</Link> </li>
        <li> <Link to="/Internacionales">Internacionales</Link> </li>
        <li> <Link to="/Política">Política</Link> </li>
        <li> <Link to="/Tecnología">Tecnología</Link> </li>
        <li> <Link to="/Resultados">Resultados</Link> </li>
      </ul>
    </div>
  </div>

  <div className="App-intro">
    <Switch>
      <Route path="/:id"  render={(props) => <SearchResults/>} />
    </Switch>
  </div>
</Router>
);

export default App;

