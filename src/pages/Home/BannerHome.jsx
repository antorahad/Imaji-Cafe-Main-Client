import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const BannerHome = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-5 py-10 bannerHome text-white" data-aos="fade-right"
        data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
           <div className="space-y-6">
           <h1 className="text-5xl lg:text-7xl text-center leading-relaxed font-semibold">Choose Your <span className="text-custom">Coffee</span> & Space</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-center leading-relaxed">Imaji Cafe has been serving 20,000+ cups of coffee and providing a comfortable place for our customers to work since 2015.</p>
           </div>
        </div>
    );
};

export default BannerHome;