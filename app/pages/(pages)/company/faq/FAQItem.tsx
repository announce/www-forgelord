export type IFAQItem = {
    icon: string;
    question: string;
    answer: string;
};

export const FAQItem = ({ question, answer, icon }: IFAQItem) => {
    return (
        <div className="collapse-plus border-base-300 collapse">
            <input type="radio" aria-label="Accordion radio" name="accordion" />
            <div className="collapse-title cursor-pointer font-medium">
                <div className="flex items-center gap-4 sm:text-lg">
                    <div className="border-base-300 bg-base-100 rounded-box inline-flex items-center justify-center border p-1.5">
                        <span className={`iconify ${icon} size-4.5`} />
                    </div>
                    {question}
                </div>
            </div>
            <div className="collapse-content ms-12 max-sm:text-sm">{answer}</div>
        </div>
    );
};
