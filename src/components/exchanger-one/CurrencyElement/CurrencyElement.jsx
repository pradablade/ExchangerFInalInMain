import "./CurrencyElement.module.css"
import classes from "./CurrencyElement.module.css"

const CurrencyElement = (props) => {
    return (
        <div className={classes.currency}>
            <div className={classes.date}>
                <p>Актуальный курс на момент</p>
                <p>{props.rates.date}</p>
            </div>
            <div className={classes.cur}>
                Курс USD :{props.rates.rates.USD.Value}
            </div>
            <div className={classes.cur}>
                Курс AED : {props.rates.rates.AED.Value}
            </div>
            <div className={classes.cur}>
                Курс EUR :{props.rates.rates.EUR.Value}
            </div>
        </div>
    )
}

export default CurrencyElement;