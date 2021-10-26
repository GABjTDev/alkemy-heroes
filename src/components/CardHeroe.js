import { useContext } from 'react';
import persona from '../images/persona.jpg';

// CONTEXT
import TeamContext from '../context/TeamContext';

const CardHeroe = ({ data, getHeroeModal, action }) => {


    const { addTeam, deleteTeam } = useContext(TeamContext);
    const { name, image, biography } = data;

    return (
        <div className='card m-2 animate__animated animate__zoomIn' style={{ width: "18rem", maxWidth: "18rem" }}>
            <img src={image ? image.url : persona} className="card-img-top" alt={`imagen de ${name}`} style={{ maxHeight: "380px", objectFit: 'cover' }} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="d-grid gap-2">

                    {
                        action === 'add' ?
                            <button className="btn btn-primary" type="button" onClick={() => addTeam(data)}>Agregar Equipo</button>
                            :
                            <button className="btn btn-danger" type="button" onClick={() => deleteTeam(data.id, biography.alignment)}>Eliminar Miembro</button>
                    }
                    <button className="btn btn-info" type="button" data-bs-toggle="modal" data-bs-target="#info" onClick={() => getHeroeModal(data)}>Ver estadisticas</button>
                </div>
            </div>
        </div>
    )
}

export default CardHeroe
