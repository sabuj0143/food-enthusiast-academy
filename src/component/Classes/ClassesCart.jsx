import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useSelected from "../../Hooks/useSelected";
import Swal from "sweetalert2";
import { useState } from "react";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";


const ClassesCart = ({ item }) => {

    const { name, price, image, instructorName, students, availableSeats, _id } = item;
    const [seats, setSeats] = useState(availableSeats);
    const [student, setStudents] = useState(students);


    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [, refetch] = useSelected();
    const navigate = useNavigate();
    const location = useLocation();


    const handleSelectCart = (item) => {

        if (user && (isAdmin || isInstructor)) {
            return;
        }

        if (user && user.email) {
            const selectItem = { menuId: _id, name, image, price, email: user.email };
            console.log(selectItem);


            fetch('https://assigment-12-food-enthusiast-academy-server.vercel.app/selects', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectItem)
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                    if (data.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            text: 'Add To Selected Successfully',
                        })
                        setSeats(seats => seats - 1);
                        setStudents(students => students + 1);

                    }
                })
        }
        else {
            Swal.fire({
                title: 'Places Login First',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now !'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <>
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className={`card w-96 h-[70vh] bg-[#0F172A] border border-[#F4B823] shadow-2xl  ${seats === student ? 'bg-red-500' : ''}`}>
                <figure><img className="w-full h-[200px]" src={image} alt="Shoes" /></figure>
                <div className="card-body text-[#FBF7F0]">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p><span className="font-semibold">
                        Instructor Name : </span>  {instructorName}</p>
                    <p><span className="font-semibold">
                        Available Seats :</span>    {seats}</p>
                    <p><span className="font-semibold">
                        Students :</span>    {student}</p>
                    <p><span className="font-semibold">Price :</span> ${price}</p>
                    <div className="my-2">
                        <button onClick={() => handleSelectCart(item)}
                            disabled={user && (isAdmin || isInstructor)}
                            className="btn btn-outline btn-warning border-0 border-b-4">Select</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ClassesCart;