import { Outlet } from "react-router-dom";
import Banner from "./Banner";

const Home = () => {
    return (
        <div className="mt-12">
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;