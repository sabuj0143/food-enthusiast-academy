import featuredImg from '../../../../public/images/slider-4 (2).jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed bt-8 my-20">
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="text-white mt-8 md:ml-10">
                    <p className="uppercase text-[#1f1603]  lilita">WHERE CAN I GET SOME?</p>
                    <p className="mb-4 text-[#1f1603] md:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline btn-warning border-0 border-b-4">Select Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;