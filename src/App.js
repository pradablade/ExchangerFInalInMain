import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import ExchangerOne from './components/exchanger-one/exchanger-one';
import { Route, Routes } from 'react-router-dom';
import RatesPage from './components/exchanger-one/ratesPage/RatesPage';




function App(props) {
  return (
<div class="container">
  <Header/>
  <Routes>
    <Route path='rates' element={<RatesPage allValuteChek={props.allValuteChek} allValute = {props.allValute} />} />
    <Route path='exchanger' element={<ExchangerOne state = {props.state} updateQuantityElement={props.updateQuantityElement} updategotCurrency={props.updategotCurrency} updateQuantityCurrency={props.updateQuantityCurrency} />}/>
  </Routes>
  <ExchangerOne state = {props.state} updateQuantityElement={props.updateQuantityElement} updategotCurrency={props.updategotCurrency} updateQuantityCurrency={props.updateQuantityCurrency} />
</div>

  );
}

export default App;
