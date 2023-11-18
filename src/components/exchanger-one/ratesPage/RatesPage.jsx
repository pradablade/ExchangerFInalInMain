import "./RatesPage.module.css"
import classes from "./RatesPage.module.css";
import React from "react";


const RatesPage = (props) => {
    let allValute = props.allValute
    return (
        <div>
            <div className={classes.ratesWindow}>
                {props.allValuteChek(allValute)}
                <p className={classes.warning}>ВНИМАНИЕ:Курс указан относительно рубля</p>
            </div>
        </div>
    )
}

export default RatesPage