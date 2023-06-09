import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import { useState } from 'react';

const Login = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { signIn, signInWithGoogle } = useAuth();

    const handleUserLogin = event => {
        event.preventDefault();
        setSuccess('')

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('');
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login in SuccessFully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.massage)
            })
    }
    const handleSignInGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="hero min-h-screen bg-gray-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-2/2 mr-12">
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-400">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold text-gray-950 text-center">Places Login !</h1>
                        <form onSubmit={handleUserLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder=" Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="********" className="input input-bordered" required />
                            </div>
                            <div className='mt-2'>
                                <p className='text-red-800'>{error}</p>
                                <p className='text-green-900'>{success}</p>
                            </div>
                            <div className="form-control w-full mx-auto mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center my-4'>New Enthusiast Academy ?<Link className='text-red-800 font-semibold'
                            to="/register"> Register</Link></p>
                        <div className="divider">OR</div>

                        <button onClick={handleSignInGoogle} className='btn btn-outline btn-primary flex items-center space-x-2'> <FaGoogle /> <span> Google</span> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;