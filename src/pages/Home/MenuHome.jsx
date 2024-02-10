import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeatureMenuHome from "./FeatureMenuHome";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MenuHome = () => {
    const [featuredMenu, setFeaturedMenu] = useState([]);
    useEffect(() => {
        fetch('https://imaji-server.vercel.app/items')
        .then(res=> res.json())
        .then(data => setFeaturedMenu(data))
        AOS.init()
    }, [])
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <div className="px-5 py-10 max-w-7xl mx-auto" data-aos="fade-right"
        data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            <div className="flex items-center justify-between gap-5">
                <h1 className="text-3xl md:text-4xl font-bold">Featured Menu</h1>
                <Link to={'/menu'}>
                <button className="btn bg-custom text-white hover:bg-custom hover:text-white focus:bg-custom focus:text-white border-none outline-none rounded-md">Explore Menu</button>
                </Link>
            </div>
            <Carousel className="mt-10"
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                infinite={true}
            >
                {
                    featuredMenu.slice(0,5).map(item => <FeatureMenuHome key={item.id} item={item}></FeatureMenuHome>)
                }
            </Carousel>
        </div>
    );
};

export default MenuHome;