import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
    const navigate = useNavigate();

    return (
        <div className="h-96 flex flex-col justify-center items-center">
            <h1 className="text-9xl text-gray-700">404</h1>
            <h2 className="text-gray-500 mt-4 text-lg">Sorry, we haven't found the resource you are looking for</h2>
            <button className="btn btn-primary mt-12" onClick={() => navigate('/')}>Go to Home</button>
        </div>
    );
}