import React from 'react';
import Input from '../components/Input';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    handleSubmit = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div className="flex justify-center items-center h-full">
                <div className="flex flex-col justify-center items-center w-full sm:w-2/4 md:w-4/12 p-8 bg-white shadow-sm shadow-gray-200 rounded-lg">
                    <span className="text-2xl font-bold mb-8 text-gray-800">Sign in to your account</span>
                    <Input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
                    <Input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                    <a href="#" className="font-semibold text-gray-700 hover:text-gray-900 my-4 self-end">Forgot Passwod</a>
                    <button className="btn btn-primary w-full" href="/login" onClick={this.handleSubmit}>Login</button>
                </div>
            </div>
        );
    }
}

export default Login;