import { ComponentPageTitle } from "@/components/ComponentPageTitle";
import { MetaData } from "@/components/MetaData";

import { BasicCounterDemo } from "./BasicCounterDemo";
import { EaseCounterDemo } from "./EaseCounterDemo";
import { OnViewCounterDemo } from "./OnViewCounterDemo";
import { StatsCounterDemo } from "./StatsCounterDemo";
import { SuffixCounterDemo } from "./SuffixCounterDemo";

const Page = () => (
    <div>
        <MetaData title="Number Counter - Interactions" />

        <ComponentPageTitle
            label="Interactions"
            title="Number Counter"
            description="Animated number counters visually highlight data by dynamically counting up to engage users."
        />

        <p className="text-base-content/60 mt-6 font-medium lg:mt-12">Demos</p>

        <div className="mt-6 space-y-6">
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Basic</div>
                <div className="flex items-center justify-center p-4 sm:p-6 xl:p-8">
                    <BasicCounterDemo />
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Easing</div>
                <div className="flex items-center justify-center p-4 sm:p-6 xl:p-8">
                    <EaseCounterDemo />
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Suffix</div>
                <div className="flex items-center justify-center p-4 sm:p-6 xl:p-8">
                    <SuffixCounterDemo />
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">On View</div>
                <div className="flex items-center justify-center p-4 sm:p-6 xl:p-8">
                    <OnViewCounterDemo />
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Stats</div>
                <div className="flex items-center justify-center p-4 sm:p-6 xl:p-8">
                    <StatsCounterDemo />
                </div>
            </div>
        </div>
    </div>
);

export default Page;
