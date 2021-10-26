// Components
import BarProgress from "./BarProgress";

const TeamProgess = ({ title, rol, stats }) => {

    return (
        <div>
            <div className="card" style={{ width: "100%" }}>
                <div className="card-body">
                    <h4 className="card-title">{title} powerstats</h4>
                    <BarProgress title="Intelligence" value={stats.intelligence} rol={rol} />
                    <BarProgress title="Strength" value={stats.strength} rol={rol} />
                    <BarProgress title="Speed" value={stats.speed} rol={rol} />
                    <BarProgress title="Durability" value={stats.durability} rol={rol} />
                    <BarProgress title="Power" value={stats.power} rol={rol} />
                    <BarProgress title="Combat" value={stats.combat} rol={rol} />
                    <p>Peso total: {stats.weight.length === 2 ? stats.weight[1] : stats.weight}</p>
                    <p>Altura total: {stats.height.length === 2 ? stats.height[1] : stats.height}</p>
                </div>
            </div>
        </div>
    )
}

export default TeamProgess
