import { Link, useLoaderData } from "react-router-dom";

const EventDetails = () => {
    const loadEvent = useLoaderData();
    const { _id, name, image, place, event_duration, event_start_date, event_description, entry_fee} = loadEvent;
    return (
        <div className="flex flex-col gap-5 min-h-screen max-w-7xl mx-auto px-5 py-10">
            <img src={image} alt="Image" className="rounded-md" />
            <h1 className="text-4xl font-bold">{name}</h1>
            <p>Location: {place}</p>
            <p>Entry Fee: BDT {entry_fee}</p>
            <p>Starting Date: {event_start_date}</p>
            <p>Ending Date: {event_duration}</p>
            <article className="text-justify">{event_description}</article>
            <div>
                <Link to={`/orderevent/${_id}`}>
                    <button className="btn bg-custom text-white hover:bg-custom hover:text-white focus:bg-custom focus:text-white border-none outline-none rounded-md">Book A Table</button>
                </Link>
            </div>
        </div>
    );
};

export default EventDetails;