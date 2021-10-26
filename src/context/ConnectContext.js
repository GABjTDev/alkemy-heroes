import { createContext, useState, useEffect } from "react";

const ConnectContext = createContext();
const initialAuth = null;

const ConnectProvider = ({ children }) => {

    const [auth, setAuth] = useState(initialAuth);

    const LoginAcc = async (email, pass) => {
        const data = await fetch(`http://challenge-react.alkemy.org/?email=${email}&password=${pass}`);
        const key = await data.json();
        localStorage.setItem('token', JSON.stringify(key));
        setAuth(key.token);
        console.log('Logueado con exito');
    }

    const LogoutAcc = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('teams');
        localStorage.removeItem('goodStats');
        localStorage.removeItem('badStats');
        setAuth(initialAuth);
    }

    useEffect(() => {

        if (localStorage.getItem('token')) {
            JSON.parse(localStorage.getItem('token'));
            setAuth(JSON.parse(localStorage.getItem('token')).token);
        }

    }, [])

    const data = {
        auth,
        LoginAcc,
        LogoutAcc
    }

    return (
        <ConnectContext.Provider value={data}>
            {children}
        </ConnectContext.Provider>
    )

}


export {
    ConnectContext as default,
    ConnectProvider
}
