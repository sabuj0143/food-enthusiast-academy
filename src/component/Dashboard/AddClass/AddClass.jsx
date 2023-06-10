import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
// console.log(img_hosting_token);

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = (data) => {

        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                // console.log(imgRes);
                if (imgRes.success) {
                    const imgURL = imgRes.data.display_url;

                    const { name, instructorName, category, price, email, available } = data;

                    const newClass = { name, instructorName, category, price: parseFloat(price), email, image: imgURL, availableSeats: parseFloat(available) }

                    
                    axiosSecure.post('/classes', newClass)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Add a New Class successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })

                }
            })
    }

    return (
        <div className="w-full mt-8 mb-16 p-11 bg-gray-200">
            <div className='text-center'>
                <h3 className='text-4xl font-semibold'>Add Class</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name*</span>
                        </label>
                        <input type="text"
                            placeholder="Class Name"
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name*</span>
                        </label>
                        <input type="text"
                            defaultValue={user?.displayName}
                            placeholder="Instructor Name"
                            {...register("instructorName", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Category*</span>
                        </label>
                        <select
                            defaultValue="pizza"
                            {...register("category", { required: true })}
                            className="select select-bordered">
                            <option disabled>pizza</option>
                            <option>pizza</option>
                            <option>burger</option>
                            <option>popular</option>
                            <option>other</option>
                        </select>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number"
                            placeholder="Type here"
                            {...register("price", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Email*</span>
                        </label>
                        <input type="email"
                            defaultValue={user?.email}
                            {...register("email", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seat*</span>
                        </label>
                        <input type="text"
                            placeholder="Available Seat"
                            {...register("available", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;