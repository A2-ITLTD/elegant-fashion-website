import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

const Root = () => {
    return (
        <div className="w-full">
            <Navbar></Navbar>
        </div>
    );
};

export default Root;