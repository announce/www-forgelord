const faqs1 = [
    {
        question: "How does AI automate storage tasks?",
        answer: "AI automates file organization, duplicate removal, and tagging, streamlining data management. It learns usage patterns to optimize workflows, saving time and making storage smarter for both individuals and teams without manual effort.",
    },
    {
        question: "Is my data secure with this platform?",
        answer: "End-to-end encryption and continuous threat monitoring protect your data. AI-driven security checks ensure privacy, compliance, and proactive defense against unauthorized access or potential breaches.",
    },
    {
        question: "What integrations are supported?",
        answer: "The platform integrates with Google Drive, Dropbox, Slack, HubSpot, Trello, and more. Setup is quick, with seamless syncing and automation between your favorite tools for a unified workflow.",
    },
    {
        question: "Can I use voice commands?",
        answer: "Yes, users can manage files, initiate sharing, and automate cleanup using simple voice commands. This feature increases efficiency and accessibility for all users.",
    },
];

const faqs2 = [
    {
        question: "How does duplicate removal work?",
        answer: "AI identifies and safely removes duplicate files across platforms, automatically freeing up valuable space, reducing digital clutter, and keeping your storage organized.",
    },
    {
        question: "Can I organize files automatically?",
        answer: "AI categorizes and tags files based on content and user patterns, enhancing search, organization, and contextual accessibility so everything’s easy to find.",
    },
    {
        question: "Is this solution scalable for businesses?",
        answer: "The platform supports individual, team, and enterprise needs. Features like automated workflows and robust integrations make scaling seamless as storage demands increase.",
    },
    {
        question: "What insights does the dashboard provide?",
        answer: "The dashboard delivers real-time analytics on usage, access trends, storage health, and automation effectiveness, enabling smarter data decisions every day.",
    },
];

export const FAQs = () => {
    return (
        <div className="group/section relative z-10 container py-8 md:py-12 lg:py-16 2xl:py-28" id="faqs">
            <p className="group-hover/section:text-primary text-base-content/60 text-center text-[12px] font-medium tracking-[1px] uppercase transition-all duration-300 group-hover/section:tracking-[2px]">
                Answers
            </p>

            <p className="mt-2 text-center text-2xl font-semibold sm:text-3xl">Frequently Asked Questions</p>
            <div className="mt-2 flex justify-center text-center">
                <p className="text-base-content/80 max-w-lg">
                    Find quick solutions to common questions and learn how our AI storage works, supports, and secures
                    your data effortlessly
                </p>
            </div>
            <div>
                <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-2 lg:gap-6 xl:mt-16">
                    <div className="space-y-4 lg:space-y-6">
                        {faqs1.map((faq, index) => (
                            <div className="collapse-arrow group bg-base-200/60 collapse h-fit" key={index}>
                                <input type="radio" aria-label="Accordion radio" name="accordion" />
                                <div className="collapse-title cursor-pointer font-medium sm:text-lg">
                                    {faq.question}
                                </div>
                                <div className="collapse-content text-base-content/80 -mt-2 text-sm">{faq.answer}</div>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4 lg:space-y-6">
                        {faqs2.map((faq, index) => (
                            <div className="collapse-arrow group bg-base-200/60 collapse h-fit" key={index}>
                                <input type="radio" aria-label="Accordion radio" name="accordion" />
                                <div className="collapse-title cursor-pointer font-medium sm:text-lg">
                                    {faq.question}
                                </div>
                                <div className="collapse-content text-base-content/80 -mt-2 text-sm">{faq.answer}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
