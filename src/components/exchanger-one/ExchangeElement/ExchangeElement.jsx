import React from "react";
import "./ExchangeElement.module.css"
import classes from "./ExchangeElement.module.css"


const ExchangeElement = (props) => {

    let quantityElement = React.createRef();

    let quantityDraft = React.createRef();

    let gotDraft = React.createRef();

    let currencyGotElement = React.createRef();

    let onQuantityChange = () => {
        let int = quantityElement.current.value
        props.updateQuantityElement(int)
        { console.log(props.state.currencyGotValue) }
    }

    return (
        <div className={classes.exchange}>

            <p>вы отдаете</p>

            <div className={classes.input}>

                <select onChange={e => { props.updateQuantityCurrency(e.target.value) }} ref={quantityDraft} className={classes.choise} value={props.state.quantityQurrency}>
                    <option value={"RUB"}>RUB</option>
                    <option value={"EUR"}>EUR</option>
                    <option value={"USD"}>USD</option>
                    <option value={"AED"}>AED</option>
                </select>

                <input onChange={onQuantityChange} ref={quantityElement} type="number" className={classes.quantity} value={props.state.quantityValue} />

            </div>

            <div className={classes.output}>

                <p>вы получаете </p>

                <input type="number" ref={currencyGotElement} className={classes.got} value={props.state.currencyGotValue} readOnly />

                <select ref={gotDraft} onChange={e => { props.updategotCurrency(e.target.value) }} className={classes.currency_got} value={props.state.gotCurrency}>
                    <option value={"RUB"}>RUB</option>
                    <option value={"EUR"}>EUR</option>
                    <option value={"USD"}>USD</option>
                    <option value={"AED"}>AED</option>
                </select>
            </div>
        </div>
    )
}

export default ExchangeElement


