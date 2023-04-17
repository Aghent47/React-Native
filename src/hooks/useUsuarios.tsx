import { useEffect, useState, useRef } from 'react';
import { reqResApi } from "../api/reqRes"
import { ReqresListado, Usuario } from "../interfaces/reqRes"

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const paginaRef = useRef(1);// 1 es el valor inicial del useRef

    useEffect(() => {
        return () => { cargarUsuarios(); }
    }, [])

    const cargarUsuarios = async () => {
        //llamado al API
        const resp = await reqResApi.get<ReqresListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })
        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);

        } else {
            alert('No hay mas registros');
        }

    }

    const pageSiguiente = () => {
        paginaRef.current++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            paginaRef.current--;
            cargarUsuarios();
        }
    }

    return {
        usuarios,
        pageSiguiente,
        paginaAnterior
    }
}



