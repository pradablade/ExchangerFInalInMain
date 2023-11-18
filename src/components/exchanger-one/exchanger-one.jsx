import "./exchanger.module.css"
import classes from "./exchanger.module.css"
import ExchangeWindow from "./exchangeWindow/exchangeWindow"


const ExchangerOne = (props) => {
    return (
        <div className={classes.exchange1}>
            <ExchangeWindow state = {props.state} updateQuantityElement={props.updateQuantityElement} updategotCurrency={props.updategotCurrency} updateQuantityCurrency={props.updateQuantityCurrency} />
        </div>
    )
}

export default ExchangerOne;