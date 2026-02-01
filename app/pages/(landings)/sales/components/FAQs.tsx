const faqs = [
    {
        question: "How quickly can I get started after signing up?",
        answer: "You can start using Smart Sales instantly. Your account is activated right after signup, and you’ll have access to all features in your plan without setup delays.",
    },
    {
        question: "Does Smart Sales work with my existing CRM?",
        answer: "Yes. We integrate with leading CRMs like Salesforce, HubSpot, and Pipedrive, plus offer API access for custom connections.",
    },
    {
        question: "Can I change my plan later?",
        answer: "Absolutely. You can upgrade, downgrade, or cancel anytime directly from your account dashboard—no hidden fees or penalties.",
    },
    {
        question: "Will my data be secure?",
        answer: "We use enterprise‑grade encryption, secure servers, and regular compliance checks to ensure your data is safe. Enterprise customers also get advanced security options.",
    },
    {
        question: "What’s the average result customers see?",
        answer: "Most teams report 20–40% higher conversion rates within three months, thanks to improved lead prioritization and automated follow‑ups.",
    },
];

export const FAQs = () => {
    return (
        <div className="group/section container scroll-mt-24 py-8 md:py-12 lg:py-16 2xl:py-28" id="faqs">
            <div className="grid gap-6 md:grid-cols-2 xl:gap-12">
                <div className="flex flex-col items-start">
                    <div className="text-base-content/80 border-base-200 flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-sm">
                        <span className="iconify lucide--handshake size-3.5 text-cyan-500"></span>
                        <span>Support</span>
                    </div>
                    <p className="mt-2 text-2xl font-semibold sm:text-3xl">Everything You Need to Know</p>
                    <div className="mt-2 max-w-lg">
                        Get instant clarity on our product, pricing, and features before making your decision
                    </div>
                    <div className="mt-auto flex items-center gap-8 pt-6">
                        <div>
                            <p className="text-base-content/60 text-sm">Email</p>
                            <p>test@gmail.com</p>
                        </div>
                        <hr className="border-base-300 h-8 w-px border-e border-dashed" />
                        <div>
                            <p className="text-base-content/60 text-sm">Call</p>
                            <p>+987 654 3210</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="space-y-2">
                        {faqs.map((faq, index) => (
                            <div className="collapse-arrow group bg-base-200/60 collapse" key={index}>
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
