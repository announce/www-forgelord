import { Variants, motion } from "motion/react";

const features = [
    {
        icon: "lucide--bot",
        title: "AI Pair Programming",
        description: "Write code with an AI assistant that suggests, autocompletes, and debugs in real time.",
    },
    {
        icon: "lucide--code",
        title: "Instant Code Generation",
        description: "Describe your idea—AI writes functions, components, or full projects instantly.",
    },
    {
        icon: "lucide--languages",
        title: "Multi-Language Support",
        description: "Works with Python, JavaScript, TypeScript, Go, Rust, and many more.",
    },
    {
        icon: "lucide--bug",
        title: "Smart Debugging",
        description: "AI detects bugs and suggests fixes instantly, saving hours of troubleshooting.",
    },
    {
        icon: "lucide--sparkles",
        title: "Code Optimization",
        description: "Improve efficiency with AI-powered refactoring and performance enhancements.",
    },
    {
        icon: "lucide--folder-tree",
        title: "Full Project Generation",
        description: "AI structures your entire project—from folder setup to API integrations.",
    },
];

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        filter: "blur(10px)",
    },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

export const Features = () => {
    return (
        <div className="relative">
            <div className="absolute inset-0 bg-[url('/images/developer/feature-background.png')] bg-cover bg-center bg-no-repeat opacity-0 dark:opacity-5"></div>

            <div
                className="group/section relative z-10 container scroll-mt-12 py-8 md:py-12 lg:py-16 2xl:py-28"
                id="features">
                <div className="flex items-center justify-center">
                    <div className="bg-base-200/40 border-base-300/50 shadow-base-300/10 text-base-content/60 group-hover/section:text-base-content rounded-full border px-2.5 py-0.5 font-mono text-xs shadow-inner transition-all duration-300">
                        Future Ready
                    </div>
                </div>
                <p className="mt-2 text-center text-2xl font-semibold sm:text-3xl">AI That Codes. You Build</p>
                <div className="mt-2 flex justify-center text-center">
                    <p className="text-base-content/80 max-w-lg">
                        From AI pair programming to full project generation, build smarter and faster with intelligent
                        automation.
                    </p>
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={containerVariants}
                    className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-12 xl:grid-cols-3 2xl:mt-16">
                    {features.map((feature, index) => (
                        <motion.div
                            variants={itemVariants}
                            key={index}
                            className="rounded-box group border-base-300/60 bg-base-200/20 hover:border-base-300/80 hover:bg-base-200/40 cursor-pointer border p-5 transition-all">
                            <div className="rounded-box border-base-300/60 bg-base-200/20 group-hover:border-base-300/80 inline-block border p-2 transition-all">
                                <span className={`iconify ${feature.icon} block size-6`}></span>
                            </div>
                            <p className="mt-2 text-lg font-medium">{feature.title}</p>
                            <p className="text-base-content/80 mt-1 line-clamp-2 text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
