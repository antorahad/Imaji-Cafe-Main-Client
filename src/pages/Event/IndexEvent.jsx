import { useState } from "react";
import FeatureEventHome from "../Home/FeatureEventHome";
import { useLoaderData } from "react-router-dom";

const IndexEvent = () => {
    const loadEvents = useLoaderData();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(loadEvents.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = loadEvents.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    }
    return (
        <div className="min-h-screen max-w-7xl mx-auto px-5 py-10 flex flex-col gap-5">
            <h1 className="text-4xl md:text-5xl font-bold">Our Celebrations</h1>
            <p>Explore our upcoming events and be the part of celebrations.</p>
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