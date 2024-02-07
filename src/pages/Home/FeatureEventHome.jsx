import { Link } from "react-router-dom";

const FeatureEventHome = ({ item }) => {
    const { _id, image, name, place } = item
    return (
        <div className="relative">
            <img src={image} alt="Image"/>
            <div className="flex items-center justify-between text-xs w-full absolute p-3 bottom-0 left-0 bg-white border">
                <div className="space-y-2">
                    <p className="text-sm">{name}</p>
                    <p className="text-slate-500">{place}</p>
                </div>
                <div>
                    <Link to={`/eventdetails/${_id}`}>
                        <button className="btn bg-custom text-white hover:bg-custom hover:text-white focus:bg-custom focus:text-white border-none outline-none rounded-md">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeatureEventHome;