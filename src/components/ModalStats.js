import { useContext } from "react";
import BarProgress from "./BarProgress";

//CONTEXT
import TeamContext from "../context/TeamContext";

const ModalStats = ({ data, deletePerson = true }) => {

    const { addTeam, deleteTeam } = useContext(TeamContext);
    const { id, name, image, powerstats, biography, appearance, work } = data;
    const { aliases, alignment } = biography;

    return (
        <div className="modal fade" id="info" tabIndex="-1" aria-labelledby="ModalHeroe" aria-hidden="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="ModalHeroe">{name}</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={image ? image.url : ''} className="img-thumbnail mx-auto d-block mb-3" style={{ maxWidth: "200px" }} alt={`imagen de ${name}`} />

                        <div>
                            <h3>Datos</h3>
                            <p>Nombre Completo: <span className="fw-bold">{biography['full-name']}</span> </p>
                            <p>Peso: <span className="fw-bold">{appearance['weight'] ? appearance['weight'][1] : 'Desconocido'}</span></p>
                            <p>Altura: <span className="fw-bold">{appearance['height'] ? appearance['height'][1] : 'Desconocido'}</span></p>
                            <p>Alias: <span className="fw-bold">{aliases}</span></p>
                            <p>Color de ojos: <span className="fw-bold">{appearance['eye-color']}</span></p>
                            <p>Color de cabello: <span className="fw-bold">{appearance['hair-color']}</span></p>
                            <p>Lugar de trabajo: <span className="fw-bold">{work.occupation}</span></p>
                            <p>Alineación: <span className={`fw-bold ${alignment === 'good' ? 'text-info' : 'text-danger'}`}>{alignment}</span></p>
                        </div>

                        <h3 className="text-center mb-3">Estadísticas</h3>
                        <div>
                            <BarProgress title="Intelligence" value={powerstats.intelligence} rol={alignment} />
                            <BarProgress title="Strength" value={powerstats.strength} rol={alignment} />
                            <BarProgress title="Speed" value={powerstats.speed} rol={alignment} />
                            <BarProgress title="Durability" value={powerstats.durability} rol={alignment} />
                            <BarProgress title="Power" value={powerstats.power} rol={alignment} />
                            <BarProgress title="Combat" value={powerstats.combat} rol={alignment} />
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        {
                            deletePerson ?
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => addTeam(data)}>Agregar miembro</button>
                                :
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => deleteTeam(id, alignment)}>Eliminar miembro</button>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ModalStats
