import { Link, useLoaderData } from "react-router-dom";

const HomeDetails = () => {
    const loadMenuDetails = useLoaderData();
    const { _id, image, name, price, discount, description, category } = loadMenuDetails;
    const discountAmount = price * (discount / 100);
    const hasDiscount = discount > 0;
    const totalPrice = hasDiscount ? (price - discountAmount).toFixed(2) : null;

    return (
        <div className="flex items-center justify-center max-w-7xl mx-auto px-5 py-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
                <div className="w-full lg:w-1/2">
                    <img src={image} alt="Image" />
                </div>
                <div className="w-full lg:w-1/2 space-y-4">
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <p>Category: {category}</p>
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
                    <article className="leading-relaxed">
                        {description}
                    </article>
                    <div>
                        <Link to={`/order/${_id}`}>
                            <button className="btn bg-custom text-white hover:bg-custom hover:text-white focus:bg-custom focus:text-white border-none outline-none rounded-md">Order Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDetails;