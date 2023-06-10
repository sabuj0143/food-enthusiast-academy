import Banner from "./Banner";
import CarouselSlider from "./CarouselSlider";
import Contact from "./Contact";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import TopSixStudents from "./TopSixStudents";

const Home = () => {
    return (
        <div className="mt-4">
            <Banner></Banner>
            <CarouselSlider></CarouselSlider>
            <PopularMenu></PopularMenu>
            <TopSixStudents></TopSixStudents>
            <Contact></Contact>
            <Featured></Featured>
        </div>
    );
};

export default Home;