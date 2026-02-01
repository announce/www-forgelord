import { Link } from "react-router";

const features = [
    {
        title: "AI Lead Scoring",
        description:
            "Use advanced AI to instantly evaluate and rank prospects by behavior and engagement, ensuring your sales team focuses only on the most promising opportunities.",
        icon: "lucide--cpu",
    },
    {
        title: "Automated Follow-ups",
        description:
            "Stay connected with every lead using personalized, timely email sequences and reminders — all running automatically to keep your pipeline moving forward.",
        icon: "lucide--repeat",
    },
    {
        title: "Predictive Analytics",
        description:
            "Anticipate sales trends and identify new opportunities with AI-powered forecasting, helping you plan smarter and shorten sales cycles significantly.",
        icon: "lucide--trending-up",
    },
    {
        title: "Custom Dashboards",
        description:
            "Create fully customizable dashboards to track KPIs, monitor pipeline health, and measure team performance in real-time from a single view.",
        icon: "lucide--layout-dashboard",
    },
    {
        title: "CRM Integrations",
        description:
            "Seamlessly connect Smart Sales with leading CRM platforms like Salesforce and HubSpot, keeping all your data synced and workflows smooth.",
        icon: "lucide--link",
    },
    {
        title: "Team Collaboration",
        description:
            "Boost productivity with shared calendars, deal notes, and activity tracking, ensuring everyone stays aligned and informed throughout the sales process.",
        icon: "lucide--users",
    },
    {
        title: "Sales Playbooks",
        description:
            "Give your reps proven, ready-to-use sales scripts and process templates they can follow to close more deals faster and with consistency.",
        icon: "lucide--book-open",
    },
    {
        title: "Performance Tracking",
        description:
            "Monitor individual and team performance with leaderboards, real-time stats, and goal tracking to drive continuous improvement and motivation.",
        icon: "lucide--bar-chart-3",
    },
];

export const Features = () => {
    return (
        <div
            className="group/section relative z-10 container scroll-mt-12 py-8 md:py-12 lg:py-16 2xl:py-28"
            id="features">
            <div className="flex items-center justify-center">
                <div className="text-base-content/80 border-base-200 flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-sm">
                    <span className="iconify lucide--zap size-3.5 text-purple-500"></span>
                    <span>Features</span>
                </div>
            </div>
            <p className="mt-2 text-center text-2xl font-semibold sm:text-3xl">Essential Tools For Success</p>
            <div className="mt-2 flex justify-center text-center">
                <p className="text-base-content/80 max-w-lg">
                    A clear overview of the features that empower sales teams to achieve more in less time
                </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:mt-16 xl:grid-cols-4 xl:gap-8">
                {features.map((item, index) => (
                    <div key={index} className="card group bg-base-100 card-border cursor-pointer p-3 sm:p-4 xl:p-5">
                        <div className="rounded-box bg-primary/10 text-primary flex w-fit items-center justify-center p-2">
                            <span className={`iconify ${item.icon}`}></span>
                        </div>
                        <p className="mt-2 font-medium">{item.title}</p>
                        <p className="text-base-content/70 line-clamp-3 text-sm">{item.description}</p>
                        <Link
                            to="#features"
                            className="link group-hover:link-primary mt-auto pt-3 text-sm font-medium group-hover:underline sm:pt-4">
                            Learn more
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
