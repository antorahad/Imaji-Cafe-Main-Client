import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Error404 from "../assets/404.gif"
const Error = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-screen flex items-center justify-center px-5 py-10">
                <img src={Error404} alt="Image" />
            </div>
            <Footer/>
        </div>
    );
};

export default Error;