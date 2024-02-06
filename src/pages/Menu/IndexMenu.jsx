import { useEffect, useState } from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import FeatureMenuHome from "../Home/FeatureMenuHome";
import Error404 from "../../assets/404.gif";
import { useLoaderData } from "react-router-dom";

const IndexMenu = () => {
    const loadMenu = useLoaderData();

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleMenuSearch = e => {
        setSearch(e.target.value);
        setCurrentPage(1);
    };

    const handleFilter = e => {
        setSort(e.target.value);
        setCurrentPage(1);
    };

    const handleCategoryFilter = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const filteredItems = loadMenu
        .filter(item => item.name && item.name.toLowerCase().includes(search.toLowerCase()))
        .filter(item => selectedCategory === 'All' || item.category === selectedCategory)
        .filter(item => {
            const [min, max] = sort.split('-').map(Number);
            if (min && max) {
                return item.price >= min && item.price <= max;
            } else if (min) {
                return item.price >= min;
            } else if (max) {
                return item.price <= max;
            }
            return true;
        });


    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="min-h-screen max-w-7xl mx-auto px-5 py-10 flex flex-col gap-5">
            <h1 className="text-4xl md:text-5xl font-bold">Our Menu</h1>
            <p>Explore our menu for quality items at affordable prices.</p>
            <div className="grid grid-cols-2 gap-5">
                <div className="relative w-full">
                    <input
                        onChange={handleMenuSearch}
                        type="text"
                        placeholder="Search Menu Item"
                        className="input input-bordered w-full rounded-md pl-10 pr-4"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <AiOutlineFileSearch className="w-5 h-5 text-gray-500" />
                    </div>
                </div>
                <select onChange={handleFilter} className="select select-bordered w-full max-w-sm rounded-md">
                    <option value="">Filter by price</option>
                    <option value="1-10">From $1 to $10</option>
                    <option value="10-50">From $10 to $50</option>
                    <option value="50-100">From $50 to $100</option>
                    <option value="100-150">From $100 to $150</option>
                    <option value="150-200">From $150 to $200</option>
                    <option value="200-300">From $200 to $300</option>
                </select>
            </div>
            <div className="my-5 flex flex-wrap items-center justify-center gap-3">
                <button
                    onClick={() => handleCategoryFilter('All')}
                    className={selectedCategory === 'All' ? "bg-custom hover:bg-custom focus:bg-custom border-none outline-none btn px-5 text-white rounded-md" : "btn px-5 rounded-md"}
                >
                    All
                </button>
                {categories.map(item => (
                    <button
                        key={item.id}
                        onClick={() => handleCategoryFilter(item.category)}
                        className={selectedCategory === item.category ? "bg-custom hover:bg-custom focus:bg-custom border-none outline-none btn px-5 text-white rounded-md" : "btn px-5 rounded-md"}
                    >
                        {item.category}
                    </button>
                ))}
            </div>
            {currentItems.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {currentItems.map(item => <FeatureMenuHome key={item.id} item={item}></FeatureMenuHome>)}
                </div> :
                <div className="flex items-center justify-center">
                    <img src={Error404} alt="Error Image" />
                </div>
            }
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

export default IndexMenu;
