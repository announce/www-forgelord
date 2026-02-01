import { ComponentPageTitle } from "@/components/ComponentPageTitle";
import { MetaData } from "@/components/MetaData";

import { BasicFeedbackDemo } from "./BasicFeedbackDemo";
import { Question1FeedbackDemo } from "./Question1FeedbackDemo";
import { Question2FeedbackDemo } from "./Question2FeedbackDemo";
import { Question3FeedbackDemo } from "./Question3FeedbackDemo";
import { VoteFeedbackDemo } from "./VoteFeedbackDemo";

const Page = () => (
    <div>
        <MetaData title="Feedbacks - Blocks" />

        <ComponentPageTitle
            label="Blocks"
            title="Feedbacks"
            description="Collects user opinions and experiences to improve products, services, and overall satisfaction."
        />

        <p className="text-base-content/60 mt-6 font-medium lg:mt-12">Demos</p>

        <div className="mt-6 space-y-6">
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Basic</div>
                <div className="flex items-center justify-center p-6 xl:py-12">
                    <BasicFeedbackDemo />
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Vote</div>
                <div className="flex items-center justify-center p-6 xl:py-12">
                    <VoteFeedbackDemo />
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Question 1</div>
                <div className="flex items-center justify-center p-6 xl:py-12">
                    <Question1FeedbackDemo />
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Question 2</div>
                <div className="flex items-center justify-center p-6 xl:py-12">
                    <Question2FeedbackDemo />
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Question 3</div>
                <div className="flex items-center justify-center p-6 xl:py-12">
                    <Question3FeedbackDemo />
                </div>
            </div>
        </div>
    </div>
);

export default Page;
