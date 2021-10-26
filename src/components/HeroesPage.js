import { useEffect } from "react";

// icons
import { FaSearch } from 'react-icons/fa';

//Component
import CardHeroe from "./CardHeroe";
import ModalStats from "./ModalStats";
import Spinner from "./Spinner";

// hook
import { HeroesHook } from "../hooks/HeroesHook";

const HeroesPage = () => {

    const { heroes, heroe, getHeroes, handleChange, search, getHeroeModal } = HeroesHook();

    useEffect(() => {
        getHeroes();
    }, []);

    return (
        <div className="container d-flex justify-content-center flex-wrap pb-5">

            <div style={{ width: "100%" }}>
                <div className="input-group mb-5" style={{ maxWidth: "350px", margin: "0 auto" }}>
                    <span className="input-group-text" id="search-heroe"><FaSearch /></span>
                    <input type="text" className="form-control" placeholder="Heroe" aria-label="Heroe" aria-describedby="search-heroe" onChange={handleChange} value={search} />
                </div>
            </div>

            {
                heroes.length <= 0 ?
                    <Spinner />
                    :
                    heroes.map((heroe) => {
                        return <CardHeroe key={heroe.id} data={heroe} getHeroeModal={getHeroeModal} action="add" />
                    })
            }

            <ModalStats data={heroe} />
        </div>
    )
}

export default HeroesPage
