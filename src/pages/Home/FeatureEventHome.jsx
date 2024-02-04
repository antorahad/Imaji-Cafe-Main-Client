import { Link } from "react-router-dom";

const FeatureEventHome = ({ item }) => {
    const { name, place } = item
    return (
        <div className="relative">
            <img src="https://img.freepik.com/free-photo/cute-couple-spend-time-cafe_1157-19320.jpg?w=996&t=st=1706940272~exp=1706940872~hmac=d4c5e996fb56682c71a86b59e7b04876dd8c15a21f5ff2af179f4edac20f0f34" alt="Image"/>
            <div className="flex items-center justify-between text-xs w-full absolute p-3 bottom-0 left-0 bg-white border">
                <div className="space-y-2">
                    <p className="text-sm">{name}</p>
                    <p className="text-slate-500">{place}</p>
                </div>
                <div>
                    <Link>
                        <button className="btn bg-custom text-white hover:bg-custom hover:text-white focus:bg-custom focus:text-white border-none outline-none rounded-md">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeatureEventHome;