import axios from 'axios';


export const login = async (email, password) => {
    const { data } = await axios.post('/api/login', { email, password });
    console.log(data);
}