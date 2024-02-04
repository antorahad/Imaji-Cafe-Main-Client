import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <div className="bg-white text-slate-950 font-google">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;