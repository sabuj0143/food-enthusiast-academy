import Banner from "./Banner";
import CarouselSlider from "./CarouselSlider";
import Contact from "./Contact";
import PopularMenu from "./PopularMenu";

const Home = () => {
    return (
        <div className="mt-4">
            <Banner></Banner>
            <CarouselSlider></CarouselSlider>
            <Contact></Contact>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;