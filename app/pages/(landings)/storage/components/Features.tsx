const features = [
    {
        icon: "lucide--shield-check",
        keyMetric: "AES-256",
        badge: "Unbreakable Security",
        title: "Military-Grade Encryption",
        description: "Your data is secured with AES-256, the standard trusted by governments worldwide.",
    },
    {
        icon: "lucide--zap",
        keyMetric: "< 10ms",
        badge: "Instant Access",
        title: "Zero Latency",
        description:
            "AI-optimized infrastructure provides sub-10ms latency, ensuring your models access data instantly.",
    },
    {
        icon: "lucide--cpu",
        keyMetric: "Up to 40%",
        badge: "Storage Savings",
        title: "AI-Powered Deduplication",
        description: "Intelligent algorithms eliminate redundant data, saving you up to 40% on storage costs.",
    },
    {
        icon: "lucide--shield-alert",
        keyMetric: "1B+",
        badge: "Proactive Defense",
        title: "Threat Intelligence",
        description:
            "Our AI analyzes over a billion events daily to predict and neutralize threats before they impact.",
    },
    {
        icon: "lucide--server",
        keyMetric: "99.999%",
        badge: "Extreme Reliability",
        title: "Guaranteed Uptime",
        description: "We guarantee 99.999% availability with a financially-backed SLA, ensuring constant access.",
    },
    {
        icon: "lucide--repeat",
        keyMetric: "5 Mins",
        badge: "Rapid Indexing",
        title: "Rapid Indexing",
        description: "Connect data sources and our AI indexes terabytes of information in under 5 minutes.",
    },
];

export const Features = () => {
    return (
        <div
            className="group/section relative z-10 container scroll-mt-12 py-8 md:py-12 lg:py-16 2xl:py-28"
            id="features">
            <p className="group-hover/section:text-primary text-base-content/60 text-center text-[12px] font-medium tracking-[1px] uppercase transition-all duration-300 group-hover/section:tracking-[2px]">
                Highlights
            </p>
            <p className="mt-2 text-center text-2xl font-semibold sm:text-3xl">Unlock AI Storage Power</p>
            <div className="mt-2 flex justify-center text-center">
                <p className="text-base-content/80 max-w-lg">
                    Discover how AI automates storage tasks, improves organization, and frees you from digital clutter
                    effortlessly
                </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 xl:mt-16 xl:grid-cols-3 xl:gap-8">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="card group card-border bg-base-100 hover:bg-base-200/20 cursor-pointer p-4 transition-all sm:p-5">
                        <div className="flex items-center gap-3">
                            <div className="rounded-box border-base-200 bg-base-200/40 border p-2.5">
                                <span className={`iconify ${item.icon} block size-5.5`}></span>
                            </div>
                            <div>
                                <p className="text-primary text-lg/none">{item.keyMetric}</p>
                                <p className="text-base-content/80 mt-1.5 text-sm/none">{item.badge}</p>
                            </div>
                        </div>
                        <p className="mt-3 text-lg font-medium">{item.title}</p>
                        <p className="text-base-content/70 mt-1 line-clamp-3 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
