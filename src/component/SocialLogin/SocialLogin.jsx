import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {

    const {signInWithGoogle} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;

            const saveUser = { name: loggedUser.Name, email: loggedUser.email }

            fetch('https://assigment-12-food-enthusiast-academy-server.vercel.app/users', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(() => {
                    navigate(from, { replace: true })
                })
                navigate('/')
        })
    }

    return (
        <div>
            <div className="divider">Or sign in with</div>
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                <FaGoogle></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;