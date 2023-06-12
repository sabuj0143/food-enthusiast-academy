
const SingleClass = ({ singleClass }) => {

    const { instructorName, email, image } = singleClass;

    return (
        <div className="w-full m-4">
            <div className="card w-96 h-[25vh] border border-[#612953] bg-[#0F172A] shadow-2xl">
                <div className="flex items-center justify-between p-5">
                    <figure><img className="w-[100px] h-[100px] rounded-full" src={image} alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title text-[#FBF7F0]">
                            {instructorName}
                        </h2>
                        <div className="card-actions">
                            <h2 className="text-[#0E7DB4]">{email}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;