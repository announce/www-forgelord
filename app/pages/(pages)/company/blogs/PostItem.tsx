import { Link } from "react-router";

export type IPostItem = {
    title: string;
    description: string;
    image: string;
    category: string;
    readTime: string;
};

export const PostItem = ({ image, title, description, readTime, category }: IPostItem) => {
    return (
        <Link to="/company/blogs/single" className="group relative">
            <img src={image} alt={title} className="h-50 w-full rounded-md object-cover sm:h-72" />
            <div className="mt-3 flex items-center justify-between">
                <p className="text-base-content/60 font-mono text-xs font-medium tracking-wide uppercase">{category}</p>
                <p className="text-base-content/80 text-sm">{readTime}</p>
            </div>
            <div className="flex items-center justify-between gap-2">
                <p className="mt-1 font-medium sm:text-lg">{title}</p>
                <span className="iconify lucide--arrow-up-right size-4 opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
            </div>
            <p className="text-base-content/80 text-sm">{description}</p>
            <div className="bg-base-200/60 absolute -inset-3 -z-1 scale-95 rounded-lg opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"></div>
        </Link>
    );
};
