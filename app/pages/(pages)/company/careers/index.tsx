import { Link } from "react-router";

import { MetaData } from "@/components/MetaData";

import { IJobItem, JobItem } from "./JobItem";

const designJobs: IJobItem[] = [
    {
        title: "Product Designer",
        location: "Remote",
        type: "Full-time",
        salary: "$70k - $90k",
        details: "Design seamless user experiences, from initial ideation to polished interfaces.",
        positions: 3,
    },
    {
        title: "UX/UI Designer",
        location: "San Francisco, CA",
        type: "Contract",
        salary: "$80k - $110k",
        details: "Work on intuitive, beautiful interfaces that improve user journeys across products.",
        positions: 2,
    },
];
const engineerJobs: IJobItem[] = [
    {
        title: "Frontend Engineer",
        location: "Remote, Europe preferred",
        type: "Full-time",
        salary: "$85K- $115K",
        details: "Build fast, accessible, and beautiful interfaces using React and modern tools.",
        positions: 1,
    },
    {
        title: "Full Stack Engineer",
        location: "Hybrid – New York or Remote",
        type: "Full-time",
        salary: "$100k - $130K",
        details: "Own features end-to-end across backend and frontend, from API to UI.",
        positions: 4,
    },
];

const nextJobs: IJobItem[] = [
    {
        title: "Mobile Engineer",
        details: "Help us craft smooth and native mobile experiences across iOS and Android.",
        type: "Opening in Aug 2025",
    },
    {
        title: "AI/ML Engineer",
        details: "Work on smart features powered by real-time machine learning pipelines.",
        type: "Opening in Sep 2025",
    },
];

const CareersPage = () => {
    return (
        <>
            <MetaData title="Careers" />
            <div className="container sm:py-8 xl:py-16 2xl:py-24">
                <div className="grid gap-6 pb-8 sm:gap-8 lg:grid-cols-2 xl:pb-16 2xl:pb-24">
                    <div className="flex flex-col items-start max-lg:order-2">
                        <div className="badge badge-outline border-base-300 badge-sm font-mono">Careers</div>
                        <p className="mt-2 text-2xl font-semibold sm:text-3xl">Join the Team</p>
                        <p className="text-base-content/80 mt-1">
                            We’re remote, focused, and growing fast. Come be part of it.
                        </p>
                        <a href="#hirings" className="btn btn-primary mt-5 gap-2">
                            See Open Roles
                            <span className="iconify lucide--arrow-down size-4"></span>
                        </a>
                        <div className="mt-auto pt-8 sm:pt-12">
                            <p className="relative max-w-xl italic max-sm:text-sm">
                                It’s the first place I’ve worked where deep focus is respected. I get real time to build
                                — and everything we ship actually matters.
                                <span className="iconify lucide--quote text-base-content/5 absolute -start-6 -top-6 size-12 scale-x-[-1] transform max-sm:hidden"></span>
                            </p>
                            <p className="text-base-content/80 mt-1 text-sm font-medium max-sm:text-end">
                                - Sara, Frontend Engineer
                            </p>
                        </div>
                    </div>
                    <img
                        src="/images/pages/careers-hero.jpg"
                        alt=""
                        className="h-50 rounded-lg object-cover max-lg:w-full sm:h-84 lg:ms-auto"
                    />
                </div>

                <div className="scroll-mt-16 py-8 xl:py-16 2xl:py-24" id="hirings">
                    <div className="text-center">
                        <p className="text-xl font-medium sm:text-2xl">We’re Hiring</p>
                        <p className="text-base-content/80 mt-1 inline-block max-w-xl max-sm:text-sm">
                            Join a fast-moving team that values smart work over long hours. We're always looking for
                            talented, curious people to help us grow.
                        </p>
                    </div>
                    <div className="mt-8 lg:mx-16 xl:mx-32 xl:mt-16 2xl:mx-48 2xl:mt-24">
                        <div className="bg-base-200 rounded-box inline-flex items-center gap-2.5 px-3 py-1.5">
                            <span className="iconify lucide--palette size-4"></span>
                            <p className="text-base-content/80 font-mono text-sm font-medium tracking-wider uppercase">
                                Design
                            </p>
                        </div>
                        <div className="mt-4 space-y-4">
                            {designJobs.map((job, index) => (
                                <JobItem {...job} key={index} />
                            ))}
                        </div>
                        <div className="bg-base-200 rounded-box mt-12 inline-flex items-center gap-2.5 px-3 py-1.5">
                            <span className="iconify lucide--wrench size-4"></span>
                            <p className="text-base-content/80 font-mono text-sm font-medium tracking-wider uppercase">
                                Engineer
                            </p>
                        </div>
                        <div className="mt-4 space-y-4">
                            {engineerJobs.map((job, index) => (
                                <JobItem {...job} key={index} />
                            ))}
                        </div>
                        <div className="bg-base-200 rounded-box mt-12 inline-flex items-center gap-2.5 px-3 py-1.5">
                            <span className="iconify lucide--hourglass size-4"></span>
                            <p className="text-base-content/80 font-mono text-sm font-medium tracking-wider uppercase">
                                Open Soon
                            </p>
                        </div>

                        <div className="mt-4 space-y-4">
                            {nextJobs.map((job, index) => (
                                <JobItem {...job} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="py-8 xl:py-16 2xl:py-24">
                    <div className="text-center">
                        <p className="text-xl font-medium sm:text-2xl">Ready to build something meaningful?</p>
                        <p className="text-base-content/80 mt-1 inline-block max-w-xl max-sm:text-sm">
                            We’re a focused, async team that values ownership, craft, and clear thinking. Here’s why
                            people love working here
                        </p>
                    </div>
                    <div className="mt-5 text-center">
                        <button className="btn btn-primary gap-2">
                            Apply Now
                            <span className="iconify lucide--arrow-up-right size-4.5"></span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CareersPage;
