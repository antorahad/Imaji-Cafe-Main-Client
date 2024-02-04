import { useEffect, useState } from "react";
import FeatureEventHome from "./FeatureEventHome";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const EventsHome = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('event.json')
            .then(res => res.json())
            .then(data => setEvents(data))
        AOS.init()
    }, [])
    return (
        <div className="min-h-screen flex items-center justify-center bg-white" data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-5 px-5 py-10 max-w-7xl mx-auto">
                <div className="w-full lg:w-1/2 flex flex-col gap-5">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Celebrations</h1>
                    <p className="leading-loose text-base md:text-lg">Imaji Cafe invites you to an exceptional experience. Explore exquisite flavors, embrace cozy vibes, and create lasting memories. Join us for great coffee, delightful moments, and a celebration of stories in every cup.</p>
                    <div>
                        <Link to={'/event'}>
                            <button className="btn bg-custom text-white hover:bg-custom hover:text-white focus:bg-custom focus:text-white border-none outline-none rounded-md">Explore Events</button>
                        </Link>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    {
                        events.slice(0, 1).map(item => <FeatureEventHome key={item.id} item={item}></FeatureEventHome>)
                    }
                </div>
            </div>
        </div>
    );
};

export default EventsHome;