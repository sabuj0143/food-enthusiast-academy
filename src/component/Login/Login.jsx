import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    
    return (
        <div className="hero min-h-screen bg-gray-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-2/2 mr-12">
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-400">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold text-gray-950 text-center">Places Login !</h1>
                        <form>
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
                            {/* <div className='mt-2'>
                                <p className='text-red-800'>{error}</p>
                                <p className='text-green-900'>{success}</p>
                            </div> */}
                            <div className="form-control w-full mx-auto mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center my-4'>New Enthusiast Academy ?<Link className='text-red-800 font-semibold'
                            to="/register"> Register</Link></p>
                        <div className="divider">OR</div>

                        <button className='btn btn-outline btn-primary flex items-center space-x-2'> <FaGoogle /> <span> Google</span> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;