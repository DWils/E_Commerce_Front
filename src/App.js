import './App.css';
import PageListerProduits from './pages/PageListerProduits';
import Connexion from './pages/Connexion';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';
import PageDetailProduit from './pages/PageDetailProduit';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/login' component={Connexion} />
            <Route exact path='/listerProduits' component={PageListerProduits} />
            <Route exact path='/produit/:productId' component={PageDetailProduit} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
