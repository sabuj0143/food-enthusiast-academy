
const PopularMenuCart = ({ item }) => {

    const { name, availableSeats, students, price, image } = item;

    return (
        <>
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="card w-96 h-[50vh] bg-gray-200 shadow-2xl">
                <figure><img className="w-full h-[200px]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge bg-yellow-400">Popular</div>
                    </h2>
                    <h2 className="card-title">
                        Price: ${price}
                    </h2>
                    <p></p>

                </div>
            </div>
        </>
    );
};

export default PopularMenuCart;