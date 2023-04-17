import axios from "axios";

export const reqResApi = axios.create({
    baseURL: 'https://reqres.in/api'
});

// Path: src\components\Usuarios.tsx
