import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
// import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
// console.log(img_hosting_token);

const AddClass = () => {
    // const [axiosSecure] = useAxiosSecure();
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
                console.log(imgRes);
            })
    }

    return (
        <div className="w-full mt-8 mb-16 p-11 bg-gray-500">
            <div className='text-center'>
                <h3 className='text-4xl font-semibold'>Add an Class</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Name*</span>
                        </label>
                        <input type="text"
                            placeholder="Recipe Name"
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name*</span>
                        </label>
                        <input type="text"
                            placeholder="Instructor Name"
                            {...register("instructorName", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select
                            defaultValue="popular"
                            {...register("category", { required: true })}
                            className="select select-bordered">
                            <option disabled>popular</option>
                            <option>pizza</option>
                            <option>Soup</option>
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
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddClass;