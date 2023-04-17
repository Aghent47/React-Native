import { useEffect, useState } from 'react';
import { reqResApi } from "../api/reqRes"
import { ReqresListado, Usuario } from "../interfaces/reqRes"

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        //llamado al API
        reqResApi.get<ReqresListado>('/users').then(resp => {
            console.log(resp.data.data);
            setUsuarios(resp.data.data);
        })
            .catch(console.log)
    }, [])

    const renderUsuarios = ({ id, first_name, last_name, email,avatar }: Usuario) => {
        return (
            <tr key={ id.toString()} >
                <td>
                    <img src={avatar}
                    alt={first_name} 
                    style={{
                        width: 35,
                        borderRadius: 100
                    }} />
                </td>
                <td> {first_name} {last_name} </td>
                <td> {email} </td>
            </tr>

        )
    }

    return (
        <>
            <h3>Usuarios:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(renderUsuarios)
                    }
                </tbody>
            </table>
            <button
                className="btn btn-primary"
            >
                Siguiente
            </button>
        </>
    )
}
