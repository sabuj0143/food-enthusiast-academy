import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import CarouselSlider from "./CarouselSlider";
import PopularMenu from "./PopularMenu";

const Home = () => {
    return (
        <div className="mt-4">
            <Banner></Banner>
            <CarouselSlider></CarouselSlider>
            <PopularMenu></PopularMenu>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;