import { useState, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../authprovider/AuthProvider";
import Swal from "sweetalert2";

const Order = () => {
    const { user } = useContext(AuthContext);
    const loadOrder = useLoaderData();
    const { image, name, price, discount } = loadOrder;

    const discountAmount = price * (discount / 100);
    const hasDiscount = discount > 0;
    const initialTotalPrice = hasDiscount ? (price - discountAmount).toFixed(2) : price;

    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(initialTotalPrice);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        setQuantity(newQuantity);
        const newTotalPrice = (hasDiscount ? (price - discountAmount) : price) * newQuantity;
        setTotalPrice(newTotalPrice.toFixed(2));
    };

    const handleCofirmOrder = e => {
        e.preventDefault();
        const form = e.target;
        const orderName = form.orderName.value;
        const orderPrice = form.orderPrice.value;
        const orderQuantity = form.orderQuantity.value;
        const deliveryDate = form.deliveryDate.value;
        const name = form.name.value;
        const email = form.email.value;
        const address = form.address.value;

        const newOrder = {
            image,
            orderName,
            orderPrice,
            orderQuantity,
            deliveryDate,
            name,
            email,
            address
        }

        console.log(newOrder);

        fetch('https://imaji-server.vercel.app/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: "Order has been taken",
                        icon: "success"
                    });
                    form.reset()
                }
            })
    }

    return (
        <div className="max-w-7xl flex items-center justify-center mx-auto py-10 px-5 min-h-screen">
            <div className="flex flex-col gap-7 w-full md:w-2/3 bg-white p-5 border rounded-md">
                <h1 className="text-4xl font-bold text-center text-custom">Confirm Your Order</h1>
                <form onSubmit={handleCofirmOrder} className="flex flex-col gap-5">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Order Name</span>
                            </label>
                            <input type="text" name="orderName" defaultValue={name} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" name="orderPrice" value={'$' + totalPrice} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Order Quantity</span>
                            </label>
                            <input type="number" name="orderQuantity" value={quantity} min={1} onChange={handleQuantityChange} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Delivery Date</span>
                            </label>
                            <input type="date" name="deliveryDate" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Customer Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Customer Name" defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Customer Email</span>
                            </label>
                            <input type="text" name="email" placeholder="Customer Email" defaultValue={user?.email} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Customer Address</span>
                            </label>
                            <textarea name="address" placeholder="Customer Address" className="textarea textarea-bordered h-52"></textarea>
                    </div>
                    <input type="submit" value="Confirm My Order" className="btn bg-custom text-white hover:bg-custom hover:text-white focus:bg-custom focus:text-white border-none outline-none rounded-md px-7" />
                </form>
            </div>
        </div>
    );
};

export default Order;
