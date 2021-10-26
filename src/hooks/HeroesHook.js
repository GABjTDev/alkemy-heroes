import axios from "axios";
import { useEffect, useState } from "react";


const API_KEY = "6270248763048316";
const initialHeroe = {
    name: '',
    image: '',
    powerstats: '',
    biography: '',
    appearance: '',
    work: ''
}


export const HeroesHook = () => {

    const [heroes, setHeroes] = useState([]);
    const [heroe, setHeroe] = useState(initialHeroe);
    const [search, setSearch] = useState('');

    const getHeroeModal = (heroe) => {
        setHeroe(heroe);
    }

    const handleChange = async (e) => {
        setSearch(e.target.value);
        setHeroes([]);
        if (e.target.value === '') {
            getHeroes();
        } else {
            await axios.get(`https://www.superheroapi.com/api.php/6270248763048316/search/${e.target.value}`)
                .then(res => res.data)
                .then(data => data.results)
                .then(heroes => {

                    let newArr = [];
                    if (heroes) {
                        heroes.forEach(heroe => {
                            if (!(heroe.powerstats.combat === "null") || !(heroe.powerstats.intelligence === "null") || !(heroe.powerstats.durability === "null") || !(heroe.powerstats.power === "null")) {
                                newArr.push(heroe)
                            }
                        });
                    }

                    if (newArr.length > 0) {
                        setHeroes(newArr);
                        console.log(newArr);
                    } else {
                        throw new Error('No existe');
                    }

                })
                .catch(e => console.error(`Se encontro un error al cargar el nombre del heroe ${e}`));
        }

    }

    const getHeroes = async () => {
        const newHeroes = [];

        for (let i = 1; i <= 18; i++) {
            await axios.get(`https://www.superheroapi.com/api.php/${API_KEY}/${i}`)
                .then(res => res.data)
                .then((heroe) => {
                    const newHeroe = heroe;
                    if (!(heroe.powerstats.combat === "null") || !(heroe.powerstats.intelligence === "null") || !(heroe.powerstats.durability === "null") || !(heroe.powerstats.power === "null")) {
                        newHeroes.push(newHeroe);
                    }

                })
                .catch(e => console.error(`Se encontro un error al cargar el id ${e}`));
        }
        setHeroes(newHeroes);
    }


    return {
        heroes,
        heroe,
        search,
        getHeroeModal,
        handleChange,
        getHeroes
    }

}