import { Link } from "react-router-dom";

const FeatureMenuHome = ({ item }) => {
    const { _id, name, price, discount } = item;
    const discountAmount = price * (discount / 100);
    const hasDiscount = discount > 0;
    const totalPrice = hasDiscount ? (price - discountAmount).toFixed(2) : null;

    return (
        <div className="card card-compact mx-2 bg-white border rounded-md">
            <figure><img src="https://img.freepik.com/free-photo/cup-coffee-with-drawn-heart_1286-225.jpg?w=996&t=st=1706903268~exp=1706903868~hmac=44961b9d9e71d3f3182d0ff0855c1a6fac9134bd498db7580fa6e79e68fe29f7" alt="Image" className="h-[250px] w-full" /></figure>
            <div className="card-body">
                <Link to={`/homedetails/${_id}`}>
                    <h2 className="">{name}</h2>
                </Link>
                {hasDiscount ? (
                    <p className="text-success">Get {discount} % off</p>
                ) : (
                    <p className="hidden"></p>
                )}
                {hasDiscount ? (
                    <p>
                        Price: $ {totalPrice} <del className="ml-2 text-red-500">$ {price}</del>
                    </p>
                ) : (
                    <p>Price: $ {price}</p>
                )}
            </div>
        </div>
    );
};

export default FeatureMenuHome;
