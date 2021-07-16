import React , {useState} from 'react'
import './App.css';
import PageListerProduits from './pages/PageListerProduits';
import Connexion from './pages/Connexion';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';
import PageDetailProduit from './pages/PageDetailProduit';
import PagePanier from './pages/PagePanier';

function App() {

  const [cart, setCart] = useState([]);

  const removeFromCart = (product) => {
    const cartItems = cart.slice();
    setCart(cartItems.filter(x => x.id !== product.id))
}

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <div style={{marginBottom:"100px"}}></div>
          <Switch>
            <Route exact path='/login' component={Connexion} />
            <Route exact path='/'>
              <PageListerProduits cart={cart} setCart={setCart}/>
            </Route>
            <Route exact path='/produit/:productId' component={PageDetailProduit} />
            <Route exact path='/myCart'>
              <PagePanier cartItems={cart} removeFromCart={removeFromCart} />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
