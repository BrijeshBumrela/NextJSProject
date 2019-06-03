import { login } from '../lib/auth';
import Router from 'next/router';

class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
        error: '',
        isLoading: false
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ error: '', isLoading: true });
        login(this.state.email, this.state.password)
            .then(() => {
                this.setState({ isLoading: false });
                Router.push("/profile")
            })
            .catch(this.handleError);

    }

    handleError = (err) => {
        const error = err.response && err.response.data || err.message;
        this.setState({ error, isLoading: false });
    }

    render() {

        const { isLoading, error, email, password } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input 
                        type="email"
                        name="email"
                        onChange={(e) => this.handleChange(e)}
                    />
                </div>
                <div>
                    <input 
                        type="password"
                        name="password"
                        onChange={(e) => this.handleChange(e)}
                    />
                </div>
                <button disabled={isLoading} type="submit">
                    {isLoading ? 'Sending' : 'Submit'}
                </button>
                <div>{error !== '' && error}</div>
            </form>
        )
    }
}

export default LoginForm;