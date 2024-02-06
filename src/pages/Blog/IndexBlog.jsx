import { useState } from "react";
import FeatureBlogHome from "../Home/FeatureBlogHome";
import { useLoaderData } from "react-router-dom";

const IndexBlog = () => {
    const laodBlogs = useLoaderData();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(laodBlogs.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = laodBlogs.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    }
    return (
        <div className="min-h-screen max-w-7xl mx-auto px-5 py-10 flex flex-col gap-5">
            <h1 className="text-4xl md:text-5xl font-bold">Latest News</h1>
            <p>Read our blog posts for latest update.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {
                    currentItems.map(item => <FeatureBlogHome key={item.id} item={item}></FeatureBlogHome>)
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

export default IndexBlog;