import { NavLink } from "react-router-dom";
import "./header.module.css"
import classes from "./header.module.css"

const Header = () =>{
    return(<header className={classes.header}>
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/foreign-exchange-icon.png" />
        <div className={classes.btn}>
        <NavLink to="rates">Посмотреть курс всех валют</NavLink>
        </div>
        <div className={classes.btn2}>
        <NavLink to="exchanger">обмен</NavLink>
        </div>

    </header>

    )
}

export default Header;