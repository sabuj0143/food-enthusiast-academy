

const TopSixStudentsCart = ({item}) => {

    const { name, availableSeats, students, price, image } = item;

    return (
         <>
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="card w-96 h-[50vh] bg-[#0F172A] border border-[#F4B823] shadow-2xl">
                <figure><img className="w-full h-[200px]" src={image} alt="Shoes" /></figure>
                <div className="card-body text-[#FBF7F0]">
                    <h2 className="card-title">
                        {name}
                        <div className="badge bg-yellow-400">Top Student</div>
                    </h2>
                    <h2>
                        Price: ${price}
                    </h2>
                    <p>Available Seats :  {availableSeats}</p>
                    <p>Students :  {students}</p>

                </div>
            </div>
        </>
    );
};

export default TopSixStudentsCart;