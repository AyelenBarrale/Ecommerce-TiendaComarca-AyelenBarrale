import React from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

//REACT ROUTER DOM
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// COMPONENTS
import NavBar from './Components/NavBar/Navbar';

// VISTAS
import Home from './views/Home/Home'
import Talleres from './views/Talleres/Talleres';
import Nosotros from './views/Nosotros/Nosotros';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          <NavBar 
            item1={"Categoría:"}
            item2={"Talleres"}
            item3={"Nosotros"}
            subitem0={"Todos"}
            subitem1={"Artística"}
            subitem2={"Librería"}
            subitem3={"Mercería"}
            subitem4={"Emprendedores"}
          />
        </div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/categoria/:categoryName">
            <ItemListContainer />
          </Route>
          <Route path="/talleres" component={Talleres} />
          <Route path="/nosotros" component={Nosotros} />
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="*">
            <h1>404 - Page not found</h1>
          </Route>
        </Switch>
        
      </Router>
    );
  };
};

export default App;
