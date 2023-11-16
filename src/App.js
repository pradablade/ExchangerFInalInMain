import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import ExchangerOne from './components/exchanger-one/exchanger-one';
import { Route, Routes } from 'react-router-dom';
import RatesPage from './components/ratesPage/RatesPage';
import rates from './Redux/Redux-store';



function App(props) {
  return (
<div class="container">
  <Header/>
  <Routes>
    <Route path='rates' element={<RatesPage />} />
  </Routes>
  <ExchangerOne state = {props.state} updateQuantityElement={props.updateQuantityElement} updategotCurrency={props.updategotCurrency} updateQuantityCurrency={props.updateQuantityCurrency}/>
</div>

  );
}

export default App;
