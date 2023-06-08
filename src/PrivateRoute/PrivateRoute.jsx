import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if (user) {
        return children;
    }
    if (loading) {
        return <progress className="progress w-56 mx-auto my-52  text-center items-center justify-center "></progress>;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;