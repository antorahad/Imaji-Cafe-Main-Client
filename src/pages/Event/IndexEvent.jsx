import { useEffect, useState } from "react";
import FeatureEventHome from "../Home/FeatureEventHome";

const IndexEvent = () => {
    const [events, setEvents] = useState([]);
    useEffect(()=> {
        fetch('event.json')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(events.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = events.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    }
    return (
        <div className="min-h-screen max-w-7xl mx-auto px-5 py-10 flex flex-col gap-5">
            <h1 className="text-4xl md:text-5xl font-bold">Our Celebrations</h1>
            <p className="hidden md:flex">Imaji Cafe invites you to an exceptional experience. Explore <br /> exquisite flavors, embrace cozy vibes, and create lasting memories.</p>
            <p className="flex md:hidden">Imaji Cafe invites you to an exceptional experience. Explore exquisite flavors, embrace cozy vibes, and create lasting memories.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                {
                    currentItems.map(item => <FeatureEventHome key={item.id} item={item}></FeatureEventHome>)
                }
            </div>
            <div className="pagination flex items-center justify-center my-5">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? "active bg-custom hover:bg-custom focus:bg-custom border-none outline-none btn mx-2 px-5 text-white rounded-md" : "btn mx-2 px-5 rounded-md"}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default IndexEvent;