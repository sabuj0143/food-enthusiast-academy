import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import { useState } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const { createUser, updateUserProfile } = useAuth();

    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        // console.log(name, photo, email, password, confirm);
        setError('');

        if (!/(?=.*[0-6])/.test(password)) {
            setError('Assert a string has at least one number');
            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setError('places One Uppercase add him.');
            return;
        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError('Assert a string has at least one special character');
            return;
        }
        else if (password != confirm) {
            setError('Do not mach your password')
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;

                updateUserProfile(name, photo)
                    .then(() => {

                        const saveUser = { name, email };


                        fetch('https://assigment-12-food-enthusiast-academy-server.vercel.app/users', {
                            method: "POST",
                            headers: {
                                "content-type": "application/json",
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    form.reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/')
                                }
                            })

                    })

            })
            .catch(error => {
                setError(error.massage)
            })

    }

    return (
        <div className="hero min-h-screen bg-gray-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-400">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold text-gray-950 text-center">Places Register !</h1>
                        <form onSubmit={handleRegister}>
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
                            <div className='mt-2'>
                                <p className='text-red-800'>{error}</p>
                                <p className='text-green-900'>{success}</p>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='text-center my-4'>Already have an account ? <Link className='text-red-800 font-semibold' to="/login"> Login</Link></p>

                        <div className='text-center items-center'>
                            <SocialLogin></SocialLogin>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;