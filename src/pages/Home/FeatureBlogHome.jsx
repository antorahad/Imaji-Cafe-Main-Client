const FeatureBlogHome = ({ item }) => {
    const { title, date, content } = item
    return (
        <div className="card card-compact bg-white border rounded-md">
            <figure><img src="https://img.freepik.com/free-photo/cup-coffee-with-drawn-heart_1286-225.jpg?w=996&t=st=1706903268~exp=1706903868~hmac=44961b9d9e71d3f3182d0ff0855c1a6fac9134bd498db7580fa6e79e68fe29f7" alt="Image" className="h-[250px] w-full"/></figure>
            <div className="card-body space-y-2">
                <h2 className="card-title line-clamp-1">{title}</h2>
                <p>{date}</p>
                <p className="line-clamp-2">{content}</p>
                <div className="card-actions justify-start">
                    <button className="btn bg-custom text-white hover:bg-custom hover:text-white focus:bg-custom focus:text-white border-none outline-none rounded-md">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureBlogHome;