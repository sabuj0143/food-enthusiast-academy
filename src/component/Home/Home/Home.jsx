import Banner from "./Banner";
import CarouselSlider from "./CarouselSlider";
import ExtraSection from "./ExtraSection";
import PopularMenu from "./PopularMenu";

const Home = () => {
    return (
        <div className="mt-4">
            <Banner></Banner>
            <CarouselSlider></CarouselSlider>
            <PopularMenu></PopularMenu>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;