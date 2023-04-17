import { useEffect, useState, useRef } from 'react';
import { reqResApi } from "../api/reqRes"
import { ReqresListado, Usuario } from "../interfaces/reqRes"

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const paginaRef = useRef(1);// 1 es el valor inicial del useRef

    useEffect(() => {
       cargarUsuarios();
    }, [])

    const cargarUsuarios = async() => {
         //llamado al API
         const resp = await reqResApi.get<ReqresListado>('/users', {
                params: {
                    page: paginaRef.current
                }
         })
            if(resp.data.data.length > 0){
                setUsuarios(resp.data.data);
                paginaRef.current ++;
                
            }else{
                alert('No hay mas registros');
            }
       
    }

    const renderUsuarios = ({ id, first_name, last_name, email,avatar }: Usuario) => {
        return (
            <tr key={ id.toString()} >
                <td>
                    <img src={avatar}
                    alt= {first_name} 
                    style ={{
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
                onClick={cargarUsuarios}
            >
                Siguiente
            </button>
        </>
    )
}
