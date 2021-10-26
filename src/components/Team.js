// COMPONENTS
import CardHeroe from "./CardHeroe";
import TeamProgess from "./TeamProgess";

const Team = ({ title, team, rol, getHeroeModal, stats }) => {
    return (
        <div className="mb-5">
            <h3 className="text-center text-primary mb-5">{title}</h3>
            <div className="container d-flex justify-content-center flex-wrap mb-5">
                {
                    team.map((heroe) => {
                        return <CardHeroe key={heroe.id} data={heroe} getHeroeModal={getHeroeModal} action="delete" />
                    })
                }
            </div>
            <TeamProgess title={title} rol={rol} stats={stats} />
        </div>
    )
}

export default Team
