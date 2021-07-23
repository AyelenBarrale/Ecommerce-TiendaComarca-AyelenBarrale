import React from "react";
import "./App.css";

import CartProvider from "./Contexts/CartContext";
import OrdersProvider from "./Contexts/OrdersContext";

import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

// REACT ROUTER DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// COMPONENTS
import NavBar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";

// VISTAS
import Home from "./views/Home/Home";
import Talleres from "./views/Talleres/Talleres";
import Nosotros from "./views/Nosotros/Nosotros";
import Cart from "./Components/Cart/Cart";
import CheckOut from "./views/CheckOut/CheckOut";

const App = () => {
  return (
    <CartProvider>
      <OrdersProvider>
        <Router>
          <div className='main-container'>
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
            <Route path='/' exact component={Home} />
            <Route path='/categoria/:categoryName'>
              <ItemListContainer />
            </Route>
            <Route path='/talleres' component={Talleres} />
            <Route path='/nosotros' component={Nosotros} />
            <Route path='/item/:id'>
              <ItemDetailContainer />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
            <Route path='/checkout' component={CheckOut} />
            <Route path='*'>
              <h1>404 - Page not found</h1>
            </Route>
          </Switch>

          <div>
            <Footer />
          </div>
        </Router>
      </OrdersProvider>
    </CartProvider>
  );
};

export default App;
