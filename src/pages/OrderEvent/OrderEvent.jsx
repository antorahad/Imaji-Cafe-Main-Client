import { useContext, useState } from "react";
import { AuthContext } from "../../authprovider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const OrderEvent = () => {
    const {user} = useContext(AuthContext);
    const loadEvent = useLoaderData();
    const { image, name, event_duration, event_start_date, entry_fee} = loadEvent;
    const eventName = name;
    const [numberOfPersons, setNumberOfPersons] = useState(1);

    const handleNumberOfPersonsChange = (event) => {
        setNumberOfPersons(parseInt(event.target.value));
    };

    const calculateTotalEntryFee = () => {
        const totalFee = entry_fee * numberOfPersons;
        return totalFee.toFixed(2); // Ensure two digits after decimal point
    };

    const handleCofirmTable = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const contact = form.contact.value;
        const arrivalDate = form.arrivalDate.value;
        const guest = form.guest.value;
        const entryFee = form.entryFee.value;
        const startingDate =form.startingDate.value;
        const endingDate = form.endingDate.value;
        const newTable = {
            image,
            name,
            email,
            contact,
            arrivalDate,
            guest,
            entryFee,
            startingDate,
            endingDate,
            eventName

        }

        console.log(newTable);

        fetch('https://imaji-server.vercel.app/orderevents', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTable)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: "Table Reservation Successfull",
                        icon: "success"
                    });
                    form.reset()
                }
            })

    }

    return (
        <div className="max-w-7xl flex items-center justify-center mx-auto py-10 px-5 min-h-screen">
            <div className="flex flex-col gap-7 w-full md:w-2/3 bg-white p-5 border rounded-md">
                <h1 className="text-4xl font-bold text-center text-custom">Confirm Your Table</h1>
                <form onSubmit={handleCofirmTable} className="flex flex-col gap-5">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName}  placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact Number</span>
                            </label>
                            <input type="text" name="contact" placeholder="Contact Number"  className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Arrival  Date</span>
                            </label>
                            <input type="date" name="arrivalDate" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Expecting Guest</span>
                            </label>
                            <input type="number" name="guest" value={numberOfPersons} min={1} onChange={handleNumberOfPersonsChange} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Entry Fee</span>
                            </label>
                            <input type="text" name="entryFee" value={'BDT ' + calculateTotalEntryFee()} className="input input-bordered" readOnly />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Starting date</span>
                            </label>
                            <input type="text" name="startingDate" defaultValue={event_start_date} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ending date</span>
                            </label>
                            <input type="text" name="endingDate" defaultValue={event_duration} className="input input-bordered" />
                        </div>
                    </div>
                    <input type="submit" value="Confirm Table" className="btn bg-custom text-white hover:bg-custom hover:text-white focus:bg-custom focus:text-white border-none outline-none rounded-md px-7" />
                </form>
            </div>
        </div>
    );
};

export default OrderEvent;
