import { rerenderTree } from "../render";

const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
const data = await response.json();
let result = await data;

let RUB = {
    CharCode: "RUB",
    ID:"RUB1",
    Name: "Российский Рубль",
    Nominal: 1,
    NumCode: "7842",
    Previous: 1,
    Value: 1
    }

result = Object.assign({}, result.Valute, { RUB: RUB });

console.log(result)




let state = {
    exchangerElement: {
        quantityValue: 0,
        quantityQurrency: "RUB",
        currencyGotValue: 0,
        gotCurrency: "USD"
    },

    exchangeWindow: {
        rates: {
            USD: result.USD,
            EUR: result.EUR,
            AED: result.AED
        }
    }

}

export let updateQuantityElement = (newint) =>{
    state.exchangerElement.quantityValue = newint;
    rerenderTree(state)
    console.log(result[state.exchangerElement.gotCurrency].Value)
    state.exchangerElement.currencyGotValue = state.exchangerElement.quantityValue * result[state.exchangerElement.quantityQurrency].Value / result[state.exchangerElement.gotCurrency].Value 
}

export let updategotCurrency = (newvalue) =>{
    state.exchangerElement.gotCurrency = newvalue;
    rerenderTree(state)
    console.log(state.exchangerElement.gotCurrency)
}

export let updateQuantityCurrency = (newvalue) =>{
    state.exchangerElement.quantityQurrency = newvalue;
    rerenderTree(state)
    console.log(state.exchangerElement.gotCurrency)
}


export default state




