import { useContext } from "react"

// react-router
import { Redirect } from "react-router-dom";

//Context
import ConnectContext from "../context/ConnectContext";

const PrivateRoute = ({ children }) => {

    const { auth } = useContext(ConnectContext);

    if (!auth) {
        return <Redirect exact to="/" />
    }

    return (
        <>
            {children}
        </>
    )
}

export default PrivateRoute
