import bannerImg from '../../../../public/images/Banner-3 (3).jpg'

const Banner = () => {
    return (
        <div className='w-full h-[100vh] bg-slate-300 p-8 mb-8 my-4'>
            <div className="banner-container md:flex items-center justify-around p-2">
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" 
                    className="banner-title p-4 md:w-1/2 text-center">

                    <h4 className='text-center font-semibold text-4xl'><span className='text-[#CD6001]'>We</span>lcome To <span className='text-blue-800'>Food Enthusiast-Academy</span></h4>

                    <p className='mt-4 text-xl font-normal'>Different types of food can provide  different <br /> nutrients  that the body needs,<br />  such as carbohydrates,<br />proteins, fats, vitamins, and minerals.</p>
                    <div>
                        <button className="btn btn-primary font-semibold mt-6 w-[50%]"><span className='space-x-4'>Contact us</span> <span className='ml-2'></span></button>
                    </div>
                </div>
                <div data-aos="zoom-in" className="banner-img  md:w-1/2">
                    <img className='w-full md:h-[70vh] rounded-xl' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;