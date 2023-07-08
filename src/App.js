import './App.css';
import Header from './Componant/Header/Header';
import Footer from './Componant/Footer/Footer';
import Home from './Container/Home/Home';
import { Route, Switch } from 'react-router-dom';
import Shop from './Container/Shop/Shop';
import Shopdeatil from './Container/Shopdetail/Shopdeatil';
import Cart from './Container/Cart/Cart';
import Checkout from './Container/Checkout/Checkout';
import Contact from './Container/Contact/Contact';
import Login from './Container/Login/Login';
import Register from './Container/Register/Register';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path={"/"} exact component={Home}></Route>
        <Route path={"/shop"} exact component={Shop}></Route>
        <Route path={"/shopdetail"} exact component={Shopdeatil}></Route>
        <Route path={"/cart"} exact component={Cart}></Route>
        <Route path={"/checkout"} exact component={Checkout}></Route>
        <Route path={"/contact"} exact component={Contact}></Route>
        <Route path={"/login"} exact component={Login}></Route>
        <Route path={"/register"} exact component={Register}></Route>
      </Switch>
      <Footer />
    </div>

  );
}
<Footer />

export default App;
