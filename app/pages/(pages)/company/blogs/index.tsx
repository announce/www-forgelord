import { Link } from "react-router";

import { MetaData } from "@/components/MetaData";

import { IPostItem, PostItem } from "./PostItem";

const blogPosts: IPostItem[] = [
    {
        title: "Delightful UX Design Tips",
        description:
            "Explore how thoughtful user experience can elevate digital products and create emotional connections.",
        image: "/images/blogs/1.jpg",
        category: "UX Design",
        readTime: "8 min",
    },
    {
        title: "React App Speed Hacks",
        description:
            "From lazy loading to memoization, learn performance strategies every React developer should know.",
        image: "/images/blogs/2.jpg",
        category: "Development",
        readTime: "10 min",
    },
    {
        title: "Minimal UI That Works",
        description: "Discover how less can truly be more in modern interface design and layout decisions.",
        image: "/images/blogs/3.jpg",
        category: "UI Design",
        readTime: "7 min",
    },
    {
        title: "Consistent Branding Matters",
        description: "Learn how consistent design language strengthens brand recognition and trust.",
        image: "/images/blogs/4.jpg",
        category: "Branding",
        readTime: "9 min",
    },
    {
        title: "Mastering Dark Mode UX",
        description: "A look into the design and accessibility principles behind effective dark mode interfaces.",
        image: "/images/blogs/5.jpg",
        category: "Accessibility",
        readTime: "6 min",
    },
    {
        title: "Fast Web = Happy Users",
        description: "Speed isn't just technical—it's a core part of user experience and retention.",
        image: "/images/blogs/6.jpg",
        category: "Performance",
        readTime: "10 min",
    },
    {
        title: "Wireframe to Prototype Fast",
        description: "Master the tools and techniques of turning wireframes into powerful, testable prototypes.",
        image: "/images/blogs/7.jpg",
        category: "Prototyping",
        readTime: "12 min",
    },
    {
        title: "Modern UI Color Tricks",
        description: "See how color theory can enhance UI design and trigger the right emotions.",
        image: "/images/blogs/8.jpg",
        category: "Design",
        readTime: "8 min",
    },
    {
        title: "Top Typography Trends",
        description: "Stay ahead with the latest trends in typefaces, legibility, and expressive layouts.",
        image: "/images/blogs/9.jpg",
        category: "Typography",
        readTime: "7 min",
    },
    {
        title: "Microinteractions That Pop",
        description: "Subtle animations can guide users, give feedback, and make experiences feel alive.",
        image: "/images/blogs/10.jpg",
        category: "Interaction Design",
        readTime: "6 min",
    },
];

const BlogsPage = () => {
    return (
        <>
            <MetaData title="Blogs" />
            <div className="group/section container sm:py-8 xl:py-16 2xl:py-24">
                <div className="grid gap-6 pb-8 sm:gap-8 lg:grid-cols-2 xl:pb-16 2xl:pb-24">
                    <div className="flex flex-col max-lg:order-2">
                        <div className="badge badge-outline border-base-300 badge-sm font-mono">Blog</div>
                        <p className="mt-1 text-2xl font-semibold sm:text-3xl">Latest News</p>
                        <p className="text-base-content/80 mt-2 max-sm:text-sm">
                            Stay sharp with insights, stories, and news that matter.
                        </p>
                        <div className="text-base-content/60 mt-2 flex items-center gap-1.5">
                            <span className="iconify lucide--history size-3.5"></span>
                            <p className="text-sm italic">
                                Last updated{" "}
                                <span className="border-base-content/20 border-b border-dashed">2 days</span> ago
                            </p>
                        </div>
                        <div className="mt-auto pt-8 sm:pt-12">
                            <p className="max-sm:text-sm">Share you story, how we help you in your productivity</p>
                            <div className="mt-2 flex items-center gap-3">
                                <button className="btn btn-primary">Share your story</button>
                                <a href="#stories" className="btn btn-ghost mt-auto">
                                    Read more <span className="iconify lucide--arrow-down size-4"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <Link to="/company/blogs/single" className="relative overflow-hidden rounded-lg">
                        <img
                            src="/images/blogs/main.jpg"
                            className="h-64 w-full object-cover sm:h-96"
                            alt="Main blog"
                        />
                        <div className="badge badge-primary absolute end-4 top-4 gap-1 shadow">
                            <span className="iconify lucide--flame size-3.5"></span>
                            Trending
                        </div>
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-black px-4 pt-28 pb-4 text-white">
                            <p className="text-lg font-medium">Design Smarter, Not Harder</p>
                            <p className="text-sm text-white/80">
                                Explore modern techniques that save time and elevate your UI game.
                            </p>
                            <div className="mt-3 flex items-end gap-3">
                                <div className="avatar cursor-pointer">
                                    <div className="mask mask-squircle w-8 bg-white/20">
                                        <img src="/images/avatars/1.png" alt="Avatar" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-base font-medium">Denish</p>
                                    <p className="-mt-0.5 text-xs/none text-white/80">Creator</p>
                                </div>
                                <p className="ms-auto text-sm font-medium text-white/80">15 Min</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div id="stories" className="mt-12 scroll-mt-24 xl:mt-24">
                    <div className="text-center">
                        <p className="text-xl font-medium sm:text-2xl">Trending Stories</p>
                        <p className="text-base-content/80 mt-1 inline-block max-w-xl max-sm:text-sm">
                            Ideas, lessons, and journeys worth sharing
                        </p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-3 xl:gap-12">
                        {blogPosts.map((post, index) => (
                            <PostItem {...post} key={index} />
                        ))}
                        <div>
                            <div className="border-base-300 hover:bg-base-100 flex h-50 w-full cursor-pointer items-center justify-center rounded-lg border border-dashed object-cover sm:h-72">
                                <span className="iconify lucide--plus text-base-content/60 size-10"></span>
                            </div>
                            <div className="mt-3 flex items-center justify-between">
                                <p className="text-base-content/60 font-mono text-xs font-medium tracking-wide uppercase">
                                    Start Here
                                </p>
                            </div>
                            <p className="mt-1 text-lg font-medium">Create your next post</p>
                            <p className="text-base-content/80 text-sm">
                                Got something to share? We’ll help you shape it into something amazing.
                            </p>
                            <div className="bg-base-200 rounded-box absolute -inset-3 -z-1 scale-95 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogsPage;
