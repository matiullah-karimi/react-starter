import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const login = async (email, password) => {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return email;
}

export const logout = () => {
    localStorage.removeItem('authUser');
}

export const getAuthUser = () => {
    const user = JSON.parse(localStorage.getItem('authUser'));

    if (!user) {
        // get user from api
    }

    return user;
}

export const persistAuthUser = (authUser) => {
    localStorage.setItem('authUser', JSON.stringify(authUser));
}

export const useAuth = () => {
    return useSelector((state) => state.authUser.authUser);
}

export const RequireAuth = ({ children }) => {
    let auth = getAuthUser();
    let location = useLocation();

    if (!auth) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
}