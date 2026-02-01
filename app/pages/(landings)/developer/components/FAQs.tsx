import { Link } from "react-router";

const faqs = [
    {
        icon: "lucide--brain-circuit",
        question: "How does AI help in development?",
        answer: "It generates project structures, writes optimized code, and automates workflows from start to deployment.",
    },
    {
        icon: "lucide--code-square",
        question: "Does it support all languages?",
        answer: "Yes! It works with JavaScript, Python, Go, Rust, and many other programming languages.",
    },
    {
        icon: "lucide--git-branch",
        question: "Can it integrate with tools?",
        answer: "Absolutely! It connects with GitHub, GitLab, AWS, Vercel, and other popular dev tools.",
    },
    {
        icon: "lucide--bug",
        question: "What if AI code has bugs?",
        answer: "The AI detects errors, suggests fixes, and can auto-deploy patches for better stability.",
    },
    {
        icon: "lucide--wallet",
        question: "Is there a free trial?",
        answer: "Yes! Try it for free and explore AI-powered development before committing to a plan.",
    },
];

export const FAQs = () => {
    return (
        <div className="group/section container scroll-mt-24 py-8 md:py-12 lg:py-16 2xl:py-28" id="faqs">
            <div className="grid gap-6 md:grid-cols-2 xl:gap-12">
                <div>
                    <div className="bg-base-200/40 border-base-300/50 shadow-base-300/20 text-base-content/60 group-hover/section:text-base-content inline rounded-full border px-2.5 py-0.5 font-mono text-xs shadow-inner transition-all duration-300">
                        Need Help?
                    </div>
                    <p className="mt-2 text-2xl font-semibold sm:text-3xl">Answers to Your Questions</p>
                    <p className="text-base-content/80 mt-2 max-w-lg">
                        Got doubts? We’ve got answers. Here are the most common questions about our AI-powered developer
                    </p>
                    <p className="mt-8 font-medium md:mt-16">Still have questions? Our team is here to help!</p>
                    <ul className="menu mt-2 space-y-1 p-0">
                        <li>
                            <Link to="#faqs" className="flex items-center gap-2">
                                <span className="iconify lucide--mail size-4.5"></span>
                                Email us
                            </Link>
                        </li>
                        <li>
                            <Link to="#faqs" className="flex items-center gap-2">
                                <span className="iconify lucide--users size-4.5"></span>
                                Join the Community
                            </Link>
                        </li>
                        <li>
                            <Link to="#faqs" className="flex items-center gap-2">
                                <span className="iconify lucide--book size-4.5"></span>
                                Read the Documentation
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <div className="space-y-0">
                        {faqs.map((faq, index) => (
                            <div className="collapse-plus group border-base-300 collapse" key={index}>
                                <input type="radio" aria-label="Accordion radio" name="accordion" />
                                <div className="collapse-title cursor-pointer font-medium sm:text-xl">
                                    <div className="flex items-center gap-4">
                                        <div className="border-base-300/50 bg-base-200/10 group-hover:bg-base-200/40 rounded-box inline-flex border p-2 transition-all">
                                            <span className={`iconify ${faq.icon} size-5`} />
                                        </div>
                                        {faq.question}
                                    </div>
                                </div>
                                <div className="collapse-content ms-13.5">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
