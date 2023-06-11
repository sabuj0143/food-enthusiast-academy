
const SingleClass = ({ singleClass }) => {

    const { instructorName, email, image } = singleClass;

    return (
        <div className="w-full">
            <div className="card w-96 h-[25vh] bg-gray-300 shadow-2xl">
                <div className="flex items-center justify-between p-5">
                    <figure><img className="w-[100px] h-[100px] rounded-full" src={image} alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title">
                            {instructorName}
                        </h2>
                        <div className="card-actions">
                            <h2>{email}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;