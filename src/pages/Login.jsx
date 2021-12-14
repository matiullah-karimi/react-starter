import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import { login } from '../services/auth.service';
import LoadingButton from '../components/LoadingButton';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [state, setState] = useState({
        email: '',
        password: '',
        loading: false
    });

    const navigate = useNavigate();

    useEffect(() => {
        return () => {
          setState({});
        };
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setState({ ...state, [name]: value });
    }

    const handleSubmit = async () => {
        try {
            setState({ ...state, loading: true });

            await login(state.email, state.password);

            navigate('/');
        } catch (error) {
            console.error(error);
        } finally {
            setState({ ...state, loading: false });
        }
    }

    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex flex-col justify-center items-center w-full sm:w-2/4 md:w-4/12 p-8 bg-white shadow-sm shadow-gray-200 rounded-lg">
                <span className="text-2xl font-bold mb-8 text-gray-800">Sign in to your account</span>
                <Input type="email" name="email" placeholder="Email" value={state.email} onChange={handleChange} />
                <Input type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} />
                <a href="#" className="font-semibold text-gray-700 hover:text-gray-900 my-4 self-end">Forgot Passwod</a>
                <LoadingButton loading={state.loading} onClick={handleSubmit}> Login </LoadingButton>
            </div>
        </div>
    )
}

export default Login;