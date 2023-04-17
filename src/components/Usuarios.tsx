import { useEffect } from "react"
import { reqResApi } from "../api/reqRes"

export const Usuarios = () => {

    useEffect(() => {
        //llamado al API
        reqResApi.get('/users').then(resp => {
            console.log(resp.data.data);
        })
            .catch(console.log)

    }, [])

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
                    <tr>
                        <td>Neider Hernández</td>

                    </tr>
                </tbody>
            </table>
        </>
    )
}
