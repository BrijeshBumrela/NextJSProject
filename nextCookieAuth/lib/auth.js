import axios from 'axios';


export const login = (email, password) => {
    const { data } = axios.post('/api/login', { email, password });
    console.log(data);
}