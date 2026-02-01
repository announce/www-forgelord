import { ComponentPageTitle } from "@/components/ComponentPageTitle";
import { MetaData } from "@/components/MetaData";

import { BasicCTADemo } from "./BasicCTADemo";
import { LimitedCTADemo } from "./LimitedCTADemo";
import { ReserveCTADemo } from "./ReserveCTADemo";
import { StatsCTADemo } from "./StatsCTADemo";
import { UpgradeCTADemo } from "./UpgradeCTADemo";

const Page = () => (
    <div>
        <MetaData title="CTA Actions - Blocks" />

        <ComponentPageTitle
            label="Blocks"
            title="CTA Actions"
            description="Encourages users to take immediate, clear actions that drive conversions and engagement"
        />

        <p className="text-base-content/60 mt-6 font-medium lg:mt-12">Demos</p>

        <div className="mt-6 space-y-6">
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Basic</div>
                <div className="flex items-center justify-center p-6 xl:py-12">
                    <BasicCTADemo />
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Reserve</div>
                <div className="flex items-center justify-center p-6 xl:py-12">
                    <ReserveCTADemo />
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Limited</div>
                <div className="flex items-center justify-center p-6 xl:py-12">
                    <LimitedCTADemo />
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Upgrade</div>
                <div className="flex items-center justify-center p-6 xl:py-12">
                    <UpgradeCTADemo />
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Stats</div>
                <div className="flex items-center justify-center p-6 xl:py-12">
                    <StatsCTADemo />
                </div>
            </div>
        </div>
    </div>
);

export default Page;
