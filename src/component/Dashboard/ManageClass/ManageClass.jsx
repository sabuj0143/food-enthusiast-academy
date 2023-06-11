import useClass from "../../../Hooks/useClass";

const ManageClass = () => {

    const [classes] = useClass();

    return (
        <div className="w-full  md:my-24">
            <div className="text-center mb-5">
                <h3 className="text-4xl font-semibold">MANAGE CLASSES</h3>
            </div>
            <div className="w-full">
                <table className="w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>CLASS IMAGE</th>
                            <th>CLASS NAME</th>
                            <th>INSTRUCTOR NAME</th>
                            <th>INSTRUCTOR EMAIL</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                            <th>ACTION</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            classes.map((item, index) => <tr
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
                                <td>
                                    {item.instructorName}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td>
                                    $ {item.price}
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-sm ">
                                    Approve
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-sm">
                                        Feedback
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-sm">
                                    Deny 
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

export default ManageClass;