import Banner from "./Banner";
import CarouselSlider from "./CarouselSlider";
import ExtraSection from "./ExtraSection";
import PopularMenu from "./PopularMenu";
import TopStudents from "./TopStudents";

const Home = () => {
    return (
        <div className="mt-4">
            <Banner></Banner>
            <CarouselSlider></CarouselSlider>
            <PopularMenu></PopularMenu>
            <ExtraSection></ExtraSection>
            <TopStudents></TopStudents>
        </div>
    );
};

export default Home;