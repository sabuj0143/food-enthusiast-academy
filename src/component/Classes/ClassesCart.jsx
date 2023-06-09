

const ClassesCart = ({ item }) => {

    const { name, price, image, instructorName, availableSeats } = item;
    return (
        <>
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="card w-96 h-[70vh] bg-gray-200 shadow-2xl">
                <figure><img className="w-full h-[200px]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p><span className="font-semibold">
                        Instructor Name : </span>  {instructorName}</p>
                    <p><span className="font-semibold">
                        Available Seats :</span>    {availableSeats}</p>
                    <p><span className="font-semibold">Price :</span> ${price}</p>
                    <div className="my-2">
                        <button className="btn btn-outline btn-warning border-0 border-b-4">Select</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ClassesCart;