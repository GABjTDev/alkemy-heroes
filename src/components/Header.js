import { useContext } from "react"

// Component Nav
import Nav from "./Nav"

//Context
import ConnectContext from "../context/ConnectContext"

const Header = () => {

    const { auth } = useContext(ConnectContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
            <div className="container">
                <a className="navbar-brand" href="/home">Heroes</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    {
                        auth && <Nav />
                    }
                </div>
            </div>
        </nav>
    )
}

export default Header
