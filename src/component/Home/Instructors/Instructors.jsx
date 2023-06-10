import useClass from "../../../Hooks/useClass";

const Instructors = () => {

    const [classes] = useClass();

    return (
        <div className="w-[70%] mx-auto my-8">
            <div className="overflow-x-auto w-full neue">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>IMAGE</th>
                            <th>Instructor NAME</th>
                            <th>EMAIL</th>
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
                                <td className="lilita">
                                    {item.instructorName}
                                </td>
                                <td>
                                    ${item.email}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Instructors;