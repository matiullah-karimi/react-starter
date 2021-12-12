function Login() {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex flex-col justify-center items-center w-full sm:w-2/4 md:w-4/12 p-8 bg-white shadow-sm shadow-gray-200 rounded-lg">
                <span className="text-2xl font-bold mb-8 text-gray-800">Sign in to your account</span>
                <input type="email" className="py-3 px-4 border border-gray-200 m-2 rounded-md w-full outline-gray-300" placeholder="Email"/>
                <input type="password" className="py-3 px-4 border border-gray-200 m-2 rounded-md w-full outline-gray-300" placeholder="Password"/>
                <a href="#" className="font-semibold text-gray-700 hover:text-gray-900 my-4 self-end">Forgot Passwod</a>
                <a className="inline-block py-3 bg-gray-700 hover:bg-gray-800 text-white text-center rounded-md w-full text-md font-bold" href="/login">Login</a>
            </div>
        </div>
    );
}

export default Login;