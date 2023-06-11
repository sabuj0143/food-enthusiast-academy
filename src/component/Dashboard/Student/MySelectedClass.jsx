import { FaTrash, FaAmazonPay } from "react-icons/fa";
import useSelected from "../../../Hooks/useSelected";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MySelectedClass = () => {

    const [selects, refetch] = useSelected();
    const totalPrice = selects.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selects/${item._id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    
      

    return (
        <div className="w-full md:my-32">
            <div className="uppercase font-bold h-[70px] flex justify-evenly items-center mb-4 p-8">
                <h3 className="text-3xl"> Total Items : {selects.length}</h3>
                <h3 className="text-3xl"> Total Prices : ${totalPrice}</h3>

                <Link to="/dashboard/payment">
                    <button className="btn btn-warning btn-md"><FaAmazonPay ></FaAmazonPay><span className="mr-2">Pay</span></button>
                </Link>

            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>FOOD IMAGE</th>
                            <th>FOOD NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            selects.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="">
                                    ${item.price}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-500 btn-md text-white">
                                        <FaTrash></FaTrash>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;