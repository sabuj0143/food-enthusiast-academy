import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import CarouselSlider from "./CarouselSlider";

const Home = () => {
    return (
        <div className="mt-4">
            <Banner></Banner>
            <CarouselSlider></CarouselSlider>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;