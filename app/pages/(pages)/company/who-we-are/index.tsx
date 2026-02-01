import { Link } from "react-router";

import { MetaData } from "@/components/MetaData";

import { ITeamMember, TeamMember } from "./TeamMember";

const teamMembers: ITeamMember[] = [
    {
        name: "Denish",
        role: "Founder & Product",
        quote: "Design is how it works. But it should also look damn good.",
        image: "/images/avatars/1.png",
    },
    {
        name: "Aarya",
        role: "Frontend Developer",
        quote: "TypeScript is my love language. Clean, scalable, and powerful.",
        image: "/images/avatars/2.png",
    },
    {
        name: "Kian",
        role: "Designer",
        quote: "Minimal is not empty. It’s intentional, every element has a purpose.",
        image: "/images/avatars/3.png",
    },
    {
        name: "Lena",
        role: "Backend Developer",
        quote: "Code is my canvas. I create solutions from scratch.",
        image: "/images/avatars/4.png",
    },
    {
        name: "Tom",
        role: "Product Manager",
        quote: "Making tough decisions is part of building great products.",
        image: "/images/avatars/5.png",
    },
    {
        name: "Eva",
        role: "UX/UI Designer",
        quote: "User experience isn’t just a design choice; it’s a necessity.",
        image: "/images/avatars/6.png",
    },
    {
        name: "Raj",
        role: "Marketing Lead",
        quote: "Great products need great stories. That’s where I come in.",
        image: "/images/avatars/7.png",
    },
];

const WhoWeArePage = () => {
    return (
        <>
            <MetaData title="Who we are" />
            <div className="container sm:py-8 xl:py-16 2xl:py-24">
                <div className="grid gap-6 pb-8 sm:gap-8 lg:grid-cols-2 xl:pb-16 2xl:pb-24">
                    <div className="flex flex-col max-lg:order-2">
                        <div className="badge badge-outline border-base-300 badge-sm font-mono">Who We</div>
                        <p className="mt-2 text-2xl font-semibold sm:text-3xl">
                            Creators. Dreamers. Makers of tomorrow
                        </p>
                        <p className="text-base-content/80 mt-2 max-sm:text-sm">
                            We’re a tight, remote team building sharp tools for fast-moving founders who care about
                            craft
                        </p>

                        <p className="text-base-content/80 mt-auto pt-8 text-sm italic sm:pt-12">
                            We’re not a massive company (yet), and we’re okay with that.
                        </p>
                        <div className="mt-2 space-y-1">
                            <div className="flex gap-2">
                                <div className="grid h-6 items-center">
                                    <span className="iconify lucide--rocket size-4 sm:size-4.5"></span>
                                </div>
                                <p className="max-sm:text-sm">Tools that help you launch fast and smart</p>
                            </div>
                            <div className="flex gap-2">
                                <div className="grid h-6 items-center">
                                    <span className="iconify lucide--sparkles size-4 sm:size-4.5"></span>
                                </div>
                                <p className="max-sm:text-sm">Symbolizes precision, control, and fine-tuning details</p>
                            </div>
                            <div className="flex gap-2">
                                <div className="grid h-6 items-center">
                                    <span className="iconify lucide--cloud-lightning size-4 sm:size-4.5"></span>
                                </div>
                                <p className="max-sm:text-sm">Remote, focused, and built for speed</p>
                            </div>
                        </div>
                    </div>
                    <img
                        src="/images/pages/who-we-are-hero.jpg"
                        alt=""
                        className="h-50 rounded-lg object-cover max-lg:w-full sm:h-84 lg:ms-auto"
                    />
                </div>
                <div className="py-8 xl:py-16 2xl:py-24">
                    <div className="text-center">
                        <p className="text-xl font-medium sm:text-2xl">How we works</p>
                        <p className="text-base-content/80 mt-1 inline-block max-w-xl max-sm:text-sm">
                            These are the values that guide how we think, how we work, and how we build
                        </p>
                    </div>
                    <div className="mt-16 grid gap-12 lg:grid-cols-3">
                        <div className="relative flex flex-col items-center">
                            <span className="iconify lucide--rocket size-6 text-red-500"></span>
                            <p className="mt-2.5 font-medium sm:text-lg">Startup-first mindset</p>
                            <p className="text-base-content/80 max-w-60 text-center text-sm">
                                We move fast, stay lean, and build with urgency.
                            </p>
                            <div className="mask mask-heart absolute top-1/2 left-1/2 -z-1 size-24 -translate-x-1/2 -translate-y-1/2 bg-red-400/5 lg:size-36"></div>
                        </div>
                        <div className="relative flex flex-col items-center">
                            <span className="iconify lucide--pen-tool size-6 text-blue-500"></span>
                            <p className="mt-2.5 font-medium sm:text-lg">Product design obsessed</p>
                            <p className="text-base-content/80 max-w-60 text-center text-sm">
                                Every screen, click, and flow is crafted with care.
                            </p>
                            <div className="mask mask-squircle absolute top-1/2 left-1/2 -z-1 size-24 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-blue-400/5 lg:size-36"></div>
                        </div>
                        <div className="relative flex flex-col items-center">
                            <span className="iconify lucide--globe size-6 text-purple-500"></span>
                            <p className="mt-2.5 font-medium sm:text-lg"> Fully async & remote</p>
                            <p className="text-base-content/80 max-w-60 text-center text-sm">
                                We work across time zones. Independently, together.
                            </p>
                            <div className="mask mask-hexagon-2 absolute top-1/2 left-1/2 -z-1 size-24 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-purple-400/5 lg:size-36"></div>
                        </div>
                    </div>
                </div>
                <div className="py-8 xl:py-16 2xl:py-24">
                    <div className="text-center">
                        <p className="text-xl font-medium sm:text-2xl">Meet the Makers</p>
                        <p className="text-base-content/80 mt-1 inline-block max-w-xl max-sm:text-sm">
                            A mix of designers, developers, and thinkers who move fast, build smart, and love making
                            things happen.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-4">
                        {teamMembers.map((member, index) => (
                            <TeamMember {...member} key={index} />
                        ))}
                        <Link to="/company/careers" className="card bg-base-100 group cursor-pointer shadow">
                            <div className="bg-base-200/40 flex justify-center py-6">
                                <div className="mask mask-squircle bg-base-200 skeleton flex size-32 items-center justify-center">
                                    <span className="text-base-content/80 font-medium">Your Avatar</span>
                                </div>
                            </div>
                            <div className="rounded-box p-4">
                                <p className="font-mono text-xs tracking-wide uppercase">We're Hiring</p>
                                <p className="text-primary text-lg font-medium">Join the Team</p>
                                <p className="text-base-content/80 mt-1 text-sm">
                                    We're building tools we wish we had come shape the future with us.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhoWeArePage;
