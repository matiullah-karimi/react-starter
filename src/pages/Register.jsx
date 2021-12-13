import Input from '../components/Input';

function Register() {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex flex-col justify-center items-center w-full sm:w-2/4 md:w-4/12 p-8 bg-white shadow-sm shadow-gray-200 rounded-lg">
                <span className="text-2xl font-bold mb-8 text-gray-800">Sign up</span>
                <Input type="text" placeholder="Name"/>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
                <a className="inline-block py-3 my-2 bg-gray-700 hover:bg-gray-800 text-white text-center rounded-md w-full text-md font-bold" href="/login">Register</a>
            </div>
        </div>
    );
}

export default Register;