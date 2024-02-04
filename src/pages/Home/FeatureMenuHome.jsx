import { Link } from "react-router-dom";

const FeatureMenuHome = ({ item }) => {
    const { id, name, delivery, price, discount } = item;
    const discountAmount = price * (discount / 100);
    const hasDiscount = discount > 0;

    // Calculate the discounted price if there is a discount
    const totalPrice = hasDiscount ? (price - discountAmount).toFixed(2) : null;

    return (
        <div className="card card-compact mx-2 bg-white border rounded-md">
            <figure><img src="https://img.freepik.com/free-photo/cup-coffee-with-drawn-heart_1286-225.jpg?w=996&t=st=1706903268~exp=1706903868~hmac=44961b9d9e71d3f3182d0ff0855c1a6fac9134bd498db7580fa6e79e68fe29f7" alt="Image" className="h-[250px] w-full" /></figure>
            <div className="card-body space-y-2">
                <h2 className="">{name}</h2>
                {
                    delivery === "Available" ?
                        <p>Home delivery</p>
                        :
                        <p>Only in cafe</p>
                }


                {/* Conditional rendering for displaying price with or without discount */}
                {hasDiscount ? (
                    <p>
                        Price: $ {totalPrice} <del className="ml-2 text-red-500">$ {price}</del>
                    </p>
                ) : (
                    <p>Price: $ {price}</p>
                )}

                <div className="card-actions gap-5 justify-start">
                    <button className="btn btn-circle border-none outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                    <Link to={`/homedetails/${id}`}>
                        <button className="btn bg-custom text-white hover:bg-custom hover:text-white focus:bg-custom focus:text-white border-none outline-none rounded-md">Order Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeatureMenuHome;
