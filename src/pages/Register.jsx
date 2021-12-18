import React from 'react';
import Input from '../components/Input';

class Register extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
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
                    <span className="text-2xl font-bold mb-8 text-gray-800">Sign up</span>
                    <div className="mt-4 w-full">
                        <Input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                    </div>

                    <div className='mt-4 w-full'>
                        <Input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
                    </div>

                    <div className="mt-4 w-full">
                        <Input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                    </div>

                    <div className="mt-4 w-full">
                        <Input type="password" name="password_confirmation" placeholder="Confirm Password" value={this.state.password_confirmation} onChange={this.handleChange}/>
                    </div>
                    <button className="btn btn-primary w-full mt-4" onClick={this.handleSubmit}>Register</button>
                </div>
            </div>
        );
    }
}

export default Register;