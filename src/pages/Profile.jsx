import { useAuth } from "../services/auth.service";

const Profile = () => {
    const auth = useAuth();

    return (
        <h1>Welcome to your profile</h1>
    );
}

export default Profile;