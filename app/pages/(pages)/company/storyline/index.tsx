import { MetaData } from "@/components/MetaData";

const timelines = [
    {
        description:
            "We were frustrated with the tools available, so we decided to create something better that solved our own pain points.",
        icon: "lucide--lightbulb",
        tag: "Origin",
        title: "The Idea Spark",
        year: "Jun, 2022",
    },
    {
        description: "Built our first working prototype and started sharing it with early users to get their feedback.",
        icon: "lucide--code",

        tag: "Build",
        title: "First Prototype",
        year: "Feb, 2023",
    },
    {
        description:
            "Launched to the public and gained our first group of customers who loved the product and gave valuable feedback.",
        icon: "lucide--rocket",

        tag: "Launch",
        title: "First Customer Launch",
        year: "Nov, 2023",
    },
    {
        description:
            "We went from a solo project to a small team, bringing on designers and developers to help scale the product.",
        icon: "lucide--users",
        tag: "Growth",

        title: "Team Expansion",
        year: "Jul, 2024",
    },
    {
        description: "Iterated on feedback, added new features, and started growing our customer base exponentially.",
        icon: "lucide--arrow-up-circle",
        tag: "Momentum",

        title: "Product Iterations & Growth",
        year: "Apr, 2025",
    },
];

const StorylinePage = () => {
    return (
        <>
            <MetaData title="Storyline" />

            <div className="container sm:py-8 xl:py-16 2xl:py-24">
                <div className="grid gap-6 pb-8 sm:gap-8 lg:grid-cols-2 xl:pb-16 2xl:pb-24">
                    <div className="flex flex-col max-lg:order-2">
                        <div className="badge badge-outline border-base-300 badge-sm font-mono">Our Story</div>
                        <p className="mt-2 text-2xl font-semibold sm:text-3xl">
                            Started with a need. Built with purpose
                        </p>
                        <p className="text-base-content/80 mt-2">
                            We didn’t set out to build a company. We set out to solve a problem. That mindset still
                            drives everything we do today.
                        </p>
                        <div className="mt-auto pt-12 text-sm">
                            <p className="relative max-w-xl italic sm:text-lg">
                                We didn’t find the right tool — so we built it. What started as a fix for our own
                                workflow became something others rely on every day.
                                <span className="iconify lucide--quote text-base-content/5 absolute -start-6 -top-6 size-12 scale-x-[-1] transform max-sm:hidden"></span>
                            </p>
                            <p className="text-base-content/80 mt-1 text-sm font-medium max-sm:text-end">
                                - Denish, Founder
                            </p>
                        </div>
                    </div>
                    <img
                        src="/images/pages/storyline-hero.jpg"
                        alt=""
                        className="h-50 rounded-lg object-cover max-lg:w-full sm:h-84 lg:ms-auto"
                    />
                </div>
                <div className="py-8 xl:py-16 2xl:py-24">
                    <div className="text-center">
                        <p className="text-xl font-medium sm:text-2xl">From Idea to Impact</p>
                        <p className="text-base-content/80 mt-1 inline-block max-w-xl max-sm:text-sm">
                            The moments that defined our mission — and the journey we’re still on to make a difference
                        </p>
                    </div>
                    <div className="mt-8 lg:mt-16">
                        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                            {timelines.map((timeline, index) => (
                                <li key={index} className="-mt-2">
                                    <div className="timeline-middle">
                                        <div className="bg-primary text-primary-content flex items-center justify-center rounded-full p-1.5">
                                            <span className={`iconify ${timeline.icon} size-5`}></span>
                                        </div>
                                    </div>
                                    <div
                                        className={`mx-4 mb-8 sm:mb-12 xl:mb-20 ${index % 2 == 0 ? "timeline-start md:text-end" : "timeline-end max-md:-mt-9"}`}>
                                        <div className="card card-border bg-base-100 mt-1 inline-flex px-3 py-1 md:hidden">
                                            <p className="font-medium">{timeline.year}</p>
                                        </div>
                                        <div className="card bg-base-100 p-6 pt-4 shadow max-md:mt-2">
                                            <p className="text-base-content/60 font-mono text-xs font-medium tracking-wide uppercase">
                                                {timeline.tag}
                                            </p>
                                            <p className="font-medium sm:text-lg">{timeline.title}</p>
                                            <p className="text-base-content/80 mt-2 max-w-xs max-sm:text-sm">
                                                {timeline.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className={`!self-start max-md:hidden ${index % 2 == 1 ? "timeline-start" : "timeline-end"}`}>
                                        <div className="card card-border bg-base-100 mx-4 mt-1 px-3 py-1">
                                            <p className="font-medium">{timeline.year}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </li>
                            ))}
                            <li className="-mt-2">
                                <div className="timeline-middle">
                                    <div className="bg-primary text-primary-content flex items-center justify-center rounded-full p-1.5">
                                        <span className="iconify lucide--zap size-5"></span>
                                    </div>
                                </div>
                                <div className="timeline-middle max-sm:hidden">
                                    <div className="card bg-base-100 mx-4 mb-16 p-6 text-center shadow">
                                        <p className="text-base-content/60 font-mono text-xs font-medium tracking-wide uppercase">
                                            Future
                                        </p>
                                        <p className="font-medium sm:text-lg">What’s Next</p>
                                        <p className="text-base-content/80 mt-3 max-w-xs max-sm:text-sm">
                                            We’re still moving fast, with new ideas on the horizon. We’re excited for
                                            what the future holds.
                                        </p>
                                        <div className="mt-5">
                                            <button className="btn btn-primary gap-2">
                                                <span className="iconify lucide--user-plus size-4.5"></span>
                                                Join Us
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StorylinePage;
