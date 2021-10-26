import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";


//Components public
import LoginPage from "../components/LoginPage";

//Components Private
import HomePage from "../components/HomePage";
import HeroesPage from "../components/HeroesPage";
import PrivateRoute from './PrivateRoute';


const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <PrivateRoute>
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/heroes" component={HeroesPage} />
            </PrivateRoute>
            <Route exact path="*">
                <Redirect to="/home" />
            </Route>
        </Switch >
    )
}

export default AppRoutes


