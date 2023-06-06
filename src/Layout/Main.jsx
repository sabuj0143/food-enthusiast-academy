import { Outlet } from "react-router-dom";
import Header from "../component/Home/Home/Header";

const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default Main;