import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const loadBlog = useLoaderData();
    const {image, title, date, content, author} = loadBlog;
    return (
        <div className="flex flex-col gap-5 min-h-screen max-w-7xl mx-auto px-5 py-10">
            <img src={image} alt="Image" className="rounded-md" />
            <h1 className="text-4xl font-bold">{title}</h1>
            <p>Author: {author}</p>
            <p>Published On: {date}</p>
            <article>
                {
                    content
                }
            </article>
        </div>
    );
};

export default BlogDetails;