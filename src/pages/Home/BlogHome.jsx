import { useEffect, useState } from "react";
import FeatureBlogHome from "./FeatureBlogHome";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogHome = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
        AOS.init()
    }, [])
    return (
        <div className="px-5 py-10 max-w-7xl mx-auto" data-aos="fade-right"
        data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            <div className="flex items-center justify-between gap-5">
                <h1 className="text-3xl md:text-4xl font-bold">Latest News</h1>
                <Link to={'/blog'}>
                <button className="btn bg-custom text-white hover:bg-custom hover:text-white focus:bg-custom focus:text-white border-none outline-none rounded-md">Read More</button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    blogs.slice(0,3).map(item =><FeatureBlogHome key={item.id} item={item}></FeatureBlogHome>)
                }
            </div>
        </div>
    );
};

export default BlogHome;