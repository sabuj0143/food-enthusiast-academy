import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-gray-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2 mr-12">
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-400">
                <div className="card-body">
                    <h1 className="text-2xl font-bold text-gray-950 text-center">Places Register !</h1>
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter Your Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="********" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirm' placeholder="********" className="input input-bordered" required />
                        </div>
                        {/* <div className='mt-2'>
                            <p className='text-red-800'>{error}</p>
                            <p className='text-green-900'>{success}</p>
                        </div> */}
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                    </form>
                    <p className='text-center my-4'>Already have an account ? <Link className='text-red-800 font-semibold' to="/login"> Login</Link></p>
                    <div className="divider">OR</div>

                    <button className='btn btn-outline btn-primary flex items-center space-x-2'> <FaGoogle /> <span> Google</span> </button>

                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;