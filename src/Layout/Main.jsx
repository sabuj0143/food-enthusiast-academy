import { Outlet } from "react-router-dom";
import Header from "../component/Home/Home/Header";
import Footer from "../component/Home/Home/Footer";

const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;