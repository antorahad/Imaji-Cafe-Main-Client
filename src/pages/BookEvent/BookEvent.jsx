import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../authprovider/AuthProvider";
import BookEventData from "./BookEventData";
const BookEvent = () => {
    const { user } = useContext(AuthContext);
    const [bookOrderEvent, setBookOrderEvent] = useState([]);
    const url = `https://imaji-server.vercel.app/orderevents?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookOrderEvent(data))
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
                fetch(`https://imaji-server.vercel.app/orderevents/${_id}`, {
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
                            const remaining = bookOrderEvent.filter(item => item._id !== _id)
                            setBookOrderEvent(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div className="min-h-screen max-w-7xl mx-auto px-5 py-10 flex flex-col gap-5">
            <h1 className="text-4xl md:text-5xl font-bold">My Events</h1>
            <p>Check your booked events here</p>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="text-center bg-slate-200 border">
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Event</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Entery Fee</th>
                            <th>Guest</th>
                            <th>Araival Date</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-center bg-slate-50 border">
                        {
                            bookOrderEvent.map(item => <BookEventData key={item._id} item={item} handleRemove={handleRemove}></BookEventData>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default BookEvent;