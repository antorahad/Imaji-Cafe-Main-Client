import { Link } from "react-router-dom";

const FeatureMenuHome = ({ item }) => {
    const { _id, image, name, price, discount } = item;
    const discountAmount = price * (discount / 100);
    const hasDiscount = discount > 0;
    const totalPrice = hasDiscount ? (price - discountAmount).toFixed(2) : null;

    return (
        <div className="card h-full card-compact mx-2 bg-white border rounded-md">
            <figure><img src={image} alt="Image" className="h-[250px] w-full" /></figure>
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
