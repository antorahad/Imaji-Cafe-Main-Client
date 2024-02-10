import { Link } from "react-router-dom";

const FeatureBlogHome = ({ item }) => {
    const { _id, image, title, date, content } = item
    return (
        <div className="card card-compact bg-white border rounded-md">
            <figure><img src={image} alt="Image" className="h-[250px] w-full"/></figure>
            <div className="card-body space-y-2">
                <h2 className="card-title line-clamp-1">{title}</h2>
                <p>{date}</p>
                <p className="line-clamp-2">{content}</p>
                <div className="card-actions justify-start">
                    <Link to={`/blogdetails/${_id}`}>
                    <button className="btn bg-custom text-white hover:bg-custom hover:text-white focus:bg-custom focus:text-white border-none outline-none rounded-md">Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeatureBlogHome;