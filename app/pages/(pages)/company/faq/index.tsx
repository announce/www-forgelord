import React from "react";

import { MetaData } from "@/components/MetaData";

import { FAQItem } from "./FAQItem";
import { TopicItem } from "./TopicItem";
import { faqTopics, generalFAQs, integrationFAQs } from "./helper";

const FaqPage = () => {
    return (
        <>
            <MetaData title="FAQs" />
            <div className="container sm:py-8 xl:py-16 2xl:py-24">
                <div className="text-center">
                    <div className="badge badge-outline border-base-300 badge-sm font-mono">FAQs</div>
                    <p className="mt-2 text-2xl font-semibold sm:text-3xl">Frequently Asked Questions</p>
                    <p className="text-base-content/80 mt-2 max-sm:text-sm">
                        Get quick answers about our features, pricing, integrations, and how our service can help your
                        business.
                    </p>
                    <div className="mt-5 flex items-center justify-center gap-3">
                        <button className="btn btn-sm">Documentation</button>
                        <button className="btn btn-sm btn-primary gap-2">
                            <span className="iconify lucide--messages-square size-4"></span>
                            Get in touch
                        </button>
                    </div>
                </div>
                <div className="mt-6 grid gap-4 sm:gap-6 md:grid-cols-2 lg:mt-12 xl:grid-cols-4">
                    {faqTopics.map((topic, i) => (
                        <TopicItem {...topic} key={i} />
                    ))}
                </div>
                <div className="mt-6 text-center lg:mt-12">
                    <p className="text-lg font-medium sm:text-xl">Find Answers to Common Questions</p>
                    <div className="mt-3 flex items-center justify-center gap-3">
                        <label className="input w-80">
                            <span className="iconify lucide--search text-base-content/80 size-5"></span>
                            <input name="query" placeholder="Search for answers..." type="text" />
                        </label>
                        <button className="btn btn-neutral">Search</button>
                    </div>
                </div>
                <div className="divide-base-300 mt-12 grid divide-dashed max-md:gap-6 md:grid-cols-2 md:divide-x">
                    <div className="md:px-4 lg:px-8">
                        <div className="text-center">
                            <p className="text-lg font-medium sm:text-xl">General</p>
                            <p className="text-base-content/80 text-sm">
                                No question is too small—find the answers you need here.
                            </p>
                        </div>
                        <div className="-mx-3 mt-3 lg:mt-6">
                            {generalFAQs.map((faq, i) => (
                                <FAQItem {...faq} key={i} />
                            ))}
                        </div>
                    </div>
                    <div className="md:px-4 lg:px-8">
                        <div className="text-center">
                            <p className="text-lg font-medium lg:text-xl">Integration</p>
                            <p className="text-base-content/80 text-sm">Easily sync and streamline your workflow</p>
                        </div>
                        <div className="-mx-3 mt-3 lg:mt-6">
                            {integrationFAQs.map((faq, i) => (
                                <FAQItem {...faq} key={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqPage;
