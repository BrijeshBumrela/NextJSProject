import Layout from '../components/layout';
import axios from 'axios';

class Login extends React.Component {
    
    state = {
        email: '',
        password: '',
        error: null,
        isLoading: false
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    handleSubmit = e => {
        e.preventDefault();
        console.log('form')
        const { email, password } = this.state;
        axios.post('http://localhost:3000/login', { email, password })
            .then(user => console.log(user))
            .catch(err => console.log(err))
    }

    render() {

        const { email, password, error, isLoading } = this.state;

        return (
            <Layout>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="email" name="email" placeholder="email"/>
                    <input onChange={this.handleChange} type="password" name="password" placeholder="password"/>
                    <button type="submit">
                        {isLoading ? 'Sending' : 'Submit'}
                    </button>
                </form>
            </Layout>
        )        
    }
}

export default Login;