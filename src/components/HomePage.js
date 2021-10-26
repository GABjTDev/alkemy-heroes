import { useContext } from "react";

// COMPONENTS
import Team from "./Team";


//CONTEXT
import TeamContext from "../context/TeamContext";
import ModalStats from "./ModalStats";


// Hook
import { HeroesHook } from "../hooks/HeroesHook";

const HomePage = () => {

    const { teams, goodStats, badStats } = useContext(TeamContext);
    const { good, bad } = teams;
    const { heroe, getHeroeModal } = HeroesHook();

    return (
        <div className="container pb-5">
            <h2 className="text-center text-primary mb-5">Teams</h2>
            {
                good.length > 0 ?
                    <Team title='Heroes' team={good} rol="good" getHeroeModal={getHeroeModal} stats={goodStats} />
                    :
                    <h3 className="text-center mb-5">Equipo de heroes vacio</h3>
            }

            {
                bad.length > 0 ?
                    <Team title='Villanos' team={bad} rol="bad" getHeroeModal={getHeroeModal} stats={badStats} />
                    :
                    <h3 className="text-center">Equipo de villanos vacio</h3>
            }

            <ModalStats data={heroe} deletePerson={false} />

        </div>

    )
}

export default HomePage
