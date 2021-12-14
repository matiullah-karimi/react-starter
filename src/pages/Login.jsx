import Input from '../components/Input';

function Login() {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex flex-col justify-center items-center w-full sm:w-2/4 md:w-4/12 p-8 bg-white shadow-sm shadow-gray-200 rounded-lg">
                <span className="text-2xl font-bold mb-8 text-gray-800">Sign in to your account</span>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
                <a href="#" className="font-semibold text-gray-700 hover:text-gray-900 my-4 self-end">Forgot Passwod</a>
                <a className="btn btn-primary w-full" href="/login">Login</a>
            </div>
        </div>
    );
}

export default Login;