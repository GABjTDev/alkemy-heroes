import {
    Link,
    NavLink
} from "react-router-dom";
import { useContext } from "react";

// Context
import ConnectContext from "../context/ConnectContext";

const Nav = () => {

    const { LogoutAcc } = useContext(ConnectContext);

    return (
        <ul className="navbar-nav me-auto" style={{ width: '100%' }}>
            <li className="nav-item" >
                <NavLink className="nav-link" exact to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/heroes">Heroes</NavLink>
            </li>
            <li className="nav-item logout" onClick={LogoutAcc}>
                <Link className="nav-link" to="/">Logout</Link>
            </li>
        </ul>
    )
}

export default Nav
