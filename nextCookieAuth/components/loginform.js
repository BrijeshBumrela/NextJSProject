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
        console.log(this.state);
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