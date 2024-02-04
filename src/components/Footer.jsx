import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="bg-slate-950 text-white p-10">
            <div className="flex flex-col items-center justify-center gap-5 max-w-7xl mx-auto">
                <h1 className="text-5xl font-medium">Our Location</h1>
                <p className="text-sm md:text-base">H-27, R-S4, Block-B, Gulshan-2, Dhaka, Bangladesh</p>
                <p className="text-sm md:text-base">Call Us : +8801622536708</p>
                <p className="text-sm md:text-base">Open : Sat - Fri (10 AM - 10 PM)</p>
                <div className="w-full h-[1px] bg-custom"></div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-5 w-full">
                    <div>
                        <p className="text-sm"> &copy; 2016 Imaji Cafe All rights reserved</p>
                    </div>
                    <div className=" flex items-center gap-5">
                        <Link>
                            <FaInstagram size={20} />
                        </Link>
                        <Link>
                            <FaFacebookF size={20} />
                        </Link>
                        <Link>
                            <FaTwitter size={20} />
                        </Link>
                        <Link>
                            <FaLinkedinIn size={20} />
                        </Link>
                    </div>
                    <ul className="flex items-center justify-center gap-3 text-sm">
                        <li>
                            <Link>
                                Terms & Conditions
                            </Link>
                        </li>
                        <li><span>|</span></li>
                        <li>
                            <Link>
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;