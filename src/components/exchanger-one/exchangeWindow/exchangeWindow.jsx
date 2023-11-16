import CurrencyElement from "../CurrencyElement/CurrencyElement";
import ExchangeElement from "../ExchangeElement/ExchangeElement";
import "./exchangeWindow.module.css"
import classes from "./exchangeWindow.module.css"


const ExchangeWindow = (props) => {
    return (
        <div className={classes.exchangeWindow}>
            <CurrencyElement rates = {props.state.exchangeWindow}/>
            <ExchangeElement state = {props.state.exchangerElement} updateQuantityElement={props.updateQuantityElement} updategotCurrency={props.updategotCurrency} updateQuantityCurrency={props.updateQuantityCurrency}/>
        </div>
    )
}

export default ExchangeWindow;