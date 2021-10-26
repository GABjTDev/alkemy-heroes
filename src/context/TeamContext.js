import { createContext, useState, useEffect } from "react";

import { toast } from 'react-toastify';

const TeamContext = createContext();

const initialTeams = {
    good: [],
    bad: []
}

const initialStats = {
    'intelligence': 0,
    'strength': 0,
    'speed': 0,
    'durability': 0,
    'power': 0,
    'combat': 0,
    'height': [0, 0],
    'weight': [0, 0]
}

const TeamProvider = ({ children }) => {

    const [teams, setTeams] = useState(initialTeams);
    const [goodStats, setGoodStats] = useState(initialStats);
    const [badStats, setBadStats] = useState(initialStats);

    const addTeam = (data) => {

        const { id, name, biography, appearance, powerstats, image, work } = data;

        if (biography.alignment !== 'neutral') {

            let newArr = biography.alignment === 'good' ? teams.good : teams.bad;

            if (!newArr.find(c => c.id === id) && newArr.length < 3) {
                toast.success("Personaje Agregado perfectamente");
                newArr.push({
                    id,
                    name,
                    biography,
                    appearance,
                    powerstats,
                    image,
                    work
                });
            } else {
                toast.error("El personaje ya esta agregado o cumpliste el limite");
            }

            if (newArr.length === 0) {
                toast.success("Personaje Agregado perfectamente");
                newArr.push({
                    id,
                    name,
                    biography,
                    appearance,
                    powerstats,
                    image
                });
            }

            if (biography.alignment === 'good') {

                setTeams({
                    ...teams,
                    good: newArr
                })
                setStats(newArr)

            } else if (biography.alignment === 'bad') {

                setTeams({
                    ...teams,
                    bad: newArr
                })
                setStats(newArr)
            }

            localStorage.setItem('teams', JSON.stringify(teams))

        } else {
            toast.warning('El personaje no puede ser agregado a ningun equipo')
        }

    }

    const setStats = (data) => {

        if (data.length >= 1) {
            const { biography } = data[0];
            let statsHeroe = [];
            data.forEach(stats => {
                let newObj = {
                    'intelligence': stats.powerstats.intelligence,
                    'strength': stats.powerstats.strength,
                    'speed': stats.powerstats.speed,
                    'durability': stats.powerstats.durability,
                    'power': stats.powerstats.power,
                    'combat': stats.powerstats.combat,
                    'height': stats.appearance.height,
                    'weight': stats.appearance.weight
                }
                statsHeroe.push(newObj);
            });

            let newStats = statsHeroe.reduce((previousValue, currentValue) => {
                return {
                    'intelligence': Number(previousValue.intelligence) + Number(currentValue.intelligence),
                    'strength': Number(previousValue.strength) + Number(currentValue.strength),
                    'speed': Number(previousValue.speed) + Number(currentValue.speed),
                    'durability': Number(previousValue.durability) + Number(currentValue.durability),
                    'power': Number(previousValue.power) + Number(currentValue.power),
                    'combat': Number(previousValue.combat) + Number(currentValue.combat),
                    'height': Number(previousValue.height[1].split(' ')[0]) + Number(currentValue.height[1].split(' ')[0]) + ' cm',
                    'weight': Number(previousValue.weight[1].split(' ')[0]) + Number(currentValue.weight[1].split(' ')[0]) + ' kg'
                }
            });

            if (biography.alignment === 'good') {
                setGoodStats(newStats);
                localStorage.setItem('goodStats', JSON.stringify(newStats));
            } else {
                setBadStats(newStats);
                localStorage.setItem('badStats', JSON.stringify(newStats));
            }

        }

    }


    const deleteTeam = (id, alignment) => {

        let newArr = [];

        if (window.confirm('Estas seguro que quieres quitar este personaje del equipo??')) {

            toast.error('Personaje Eliminado exitosamente!!');

            if (alignment === 'good') {
                newArr = teams.good.filter(member => member.id !== id);
                setTeams({
                    ...teams,
                    good: newArr
                })
                setStats(newArr);
            } else {
                newArr = teams.bad.filter(member => member.id !== id);
                setTeams({
                    ...teams,
                    bad: newArr
                })
                setStats(newArr);
            }

            localStorage.setItem('teams', JSON.stringify(teams));

        }

    }

    useEffect(() => {

        if (localStorage.getItem('teams')) {

            setTeams(JSON.parse(localStorage.getItem('teams')));

            if (localStorage.getItem('goodStats')) {
                setGoodStats(JSON.parse(localStorage.getItem('goodStats')))
            }

            if (localStorage.getItem('badStats')) {
                setBadStats(JSON.parse(localStorage.getItem('badStats')))
            }
        }

    }, [])

    const data = {
        teams,
        addTeam,
        deleteTeam,
        goodStats,
        badStats
    }

    return (
        <TeamContext.Provider value={data}>
            {children}
        </TeamContext.Provider>
    )

}



export {
    TeamContext as default,
    TeamProvider
}