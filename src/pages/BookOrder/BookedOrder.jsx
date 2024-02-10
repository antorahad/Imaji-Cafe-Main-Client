import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authprovider/AuthProvider";
import BookedOrderData from "./BookedOrderData";
import Swal from "sweetalert2";

const BookedOrder = () => {
    const { user } = useContext(AuthContext);
    const [bookOrder, setBookOrder] = useState([]);
    const url = `https://imaji-server.vercel.app/orders?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookOrder(data))
    }, [url])

    const handleRemove = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://imaji-server.vercel.app/orders/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = bookOrder.filter(item => item._id !== _id)
                            setBookOrder(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div className="min-h-screen max-w-7xl mx-auto px-5 py-10 flex flex-col gap-5">
            <h1 className="text-4xl md:text-5xl font-bold">My Orders</h1>
            <p>Check your booked orders here</p>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="text-center bg-slate-200 border">
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Order Name</th>
                            <th>Total Price</th>
                            <th>Quantity</th>
                            <th>Delivery Date</th>
                            <th>Customer Name</th>
                            <th>Address</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-center bg-slate-50 border">
                        {
                            bookOrder.map(item => <BookedOrderData key={item._id} item={item} handleRemove={handleRemove}></BookedOrderData>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default BookedOrder;