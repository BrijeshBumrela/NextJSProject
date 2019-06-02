import { login } from '../lib/auth';

class LoginForm extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        login(this.state.email, this.state.password);
    }

    render() {
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
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default LoginForm;