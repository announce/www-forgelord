import { Link } from "react-router";

import { MetaData } from "@/components/MetaData";

import { IPostItem, PostItem } from "../PostItem";

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
];

const SingleBlogPage = () => {
    return (
        <>
            <MetaData title="Single Blog" />
            <div className="group/section container pb-8 sm:pt-4 xl:pb-16 2xl:pb-24">
                <div className="lg:mx-16 xl:mx-32 2xl:mx-48">
                    <Link
                        to="/company/blogs"
                        className="text-base-content/50 hover:text-base-content flex items-center gap-2 text-sm font-medium transition-all">
                        <span className="iconify lucide--arrow-left size-4"></span>
                        Back to blogs
                    </Link>
                    <img
                        src="/images/blogs/main.jpg"
                        className="mt-4 h-64 w-full rounded-lg object-cover sm:mt-6 sm:h-100 lg:h-120"
                        alt="Main blog"
                    />
                    <div className="mt-4 sm:mt-8">
                        <div className="flex items-center justify-between">
                            <p className="text-base-content/60 font-mono text-xs font-medium tracking-wide uppercase">
                                Intro
                            </p>
                            <p className="text-base-content/80 text-sm">25 Min</p>
                        </div>
                        <p className="mt-1 text-lg font-medium sm:text-xl">
                            Design Smarter, Not Harder: A Practical Guide for Modern UI Workflows
                        </p>
                        <p className="text-base-content/80 mt-1 text-sm">
                            Learn how to streamline your design process while keeping your creative spark alive.
                            Practical tips for thoughtful, efficient interface design.
                        </p>
                        <div className="mt-6 flex items-start justify-between gap-3 sm:mt-8">
                            <div className="flex items-center gap-3">
                                <div className="avatar cursor-pointer">
                                    <div className="mask mask-squircle bg-base-200 w-10">
                                        <img src="/images/avatars/1.png" alt="Avatar" />
                                    </div>
                                </div>
                                <div>
                                    <p className="font-medium sm:text-lg">Denish</p>
                                    <p className="text-base-content/80 -mt-1 text-sm">Creator</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-0.5">
                                    <button className="btn btn-sm btn-ghost btn-circle">
                                        <span className="iconify lucide--heart size-4"></span>
                                    </button>
                                    <p className="text-sm">1241</p>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    <button className="btn btn-sm btn-ghost btn-circle">
                                        <span className="iconify lucide--messages-square size-4"></span>
                                    </button>
                                    <p className="text-sm">58</p>
                                </div>
                                <button className="btn btn-sm btn-ghost btn-circle">
                                    <span className="iconify lucide--share-2 size-4"></span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="py-8 max-sm:text-sm sm:py-16">
                        <p>
                            Designing beautiful, user-friendly interfaces doesn’t have to be exhausting. In fact, the
                            best designers often achieve more by doing less — not because they skip steps, but because
                            they design with intention. In this post, we’ll explore practical ways to streamline your UI
                            workflow without compromising quality.
                        </p>

                        <p className="mt-8 text-base font-medium sm:mt-12 sm:text-lg">
                            1. Start with a Clear Foundation
                        </p>
                        <p className="mt-3">
                            Before opening Figma or VS Code, step back and define your design problem. Who are you
                            designing for? What is their goal? Taking a few minutes to clarify this upfront can save
                            hours of revisions down the road.
                        </p>
                        <p className="mt-8 text-base font-medium sm:mt-12 sm:text-lg">
                            2. Embrace Components and Design Systems
                        </p>
                        <p className="mt-3">
                            Reusable components are your best friend. Not only do they speed up your process, but they
                            also ensure consistency across your product. Use design tokens, shared color styles, and
                            base typography to keep things tight and scalable.
                        </p>
                        <div className="alert mt-3 gap-1">
                            <p>
                                Tools like Figma components or <span className="font-medium">Tailwind CSS</span> with{" "}
                                <span className="font-medium">daisyUI</span> make this effortless.
                            </p>
                        </div>

                        <p className="mt-8 text-base font-medium sm:mt-12 sm:text-lg">3. Prioritize Visual Hierarchy</p>
                        <p className="mt-3">
                            Design is about guiding the eye. Use spacing, contrast, and type size to show what matters
                            most. Good hierarchy creates clarity — users shouldn’t have to guess what to do next.
                        </p>
                        <p className="mt-8 text-base font-medium sm:mt-12 sm:text-lg">4. Design with Real Content</p>
                        <p className="mt-3">
                            Avoid the trap of perfect lorem ipsum layouts. Use realistic headlines, body copy, and even
                            placeholder data. Real content makes your designs stronger and saves rework later.
                        </p>
                        <p className="mt-8 text-base font-medium sm:mt-12 sm:text-lg">5. Iterate and Improve</p>
                        <p className="mt-3">
                            Don’t aim for perfect. Share early, observe how people use it, and refine based on real
                            feedback. Good design evolves — each version brings you closer to clarity and usability.
                        </p>
                        <div className="alert mt-3">
                            <p>
                                <span className="font-medium">Fast feedback:</span> Record a 1-minute walkthrough and
                                share it with peers.
                            </p>
                        </div>
                    </div>
                    <hr className="border-base-300 border-dashed" />
                    <div className="mt-6 sm:mt-8">
                        <p className="text-lg font-medium">Tags</p>
                        <div className="mt-2 flex flex-wrap items-center gap-2">
                            <div className="badge badge-ghost hover:bg-base-200">UI Design</div>
                            <div className="badge badge-ghost">Tailwind CSS</div>
                            <div className="badge badge-ghost">daisyUI</div>
                        </div>
                    </div>
                    <hr className="border-base-300 mt-6 border-dashed sm:mt-8" />
                    <div className="mt-6 sm:mt-8">
                        <p className="text-lg font-medium">Write a comment</p>
                        <fieldset className="fieldset mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                            <div className="space-y-2">
                                <label className="fieldset-label" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="input w-full"
                                    placeholder="Your name"
                                    autoComplete="name"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="fieldset-label" htmlFor="email">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="input w-full"
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                />
                            </div>
                            <div className="col-span-1 space-y-2 lg:col-span-2">
                                <label className="fieldset-label" htmlFor="comment">
                                    Comment
                                </label>
                                <textarea
                                    id="comment"
                                    placeholder="Write your comment here"
                                    className="textarea min-h-[120px] w-full resize-y"></textarea>
                            </div>
                        </fieldset>
                        <button className="btn btn-primary mt-4">Post a comment</button>
                    </div>
                    <hr className="border-base-300 mt-6 border-dashed sm:mt-8" />
                    <div className="mt-6 sm:mt-8">
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-medium">You might also like</p>
                            <Link
                                to="/company/blogs"
                                className="link link-hover text-primary flex items-center gap-1.5 text-sm">
                                Browse all articles
                                <span className="iconify lucide--arrow-right"></span>
                            </Link>
                        </div>
                        <div className="mt-6 grid gap-8 sm:mt-8 md:grid-cols-2">
                            {blogPosts.map((post, index) => (
                                <PostItem {...post} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogPage;
