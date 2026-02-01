import { ComponentPageTitle } from "@/components/ComponentPageTitle";
import { MetaData } from "@/components/MetaData";

import { BookerEngagementDemo } from "./BookerEngagementDemo";
import { ChatInvitationEngagementDemo } from "./ChatInvitationEngagementDemo";
import { GeoWelcomeEngagementDemo } from "./GeoWelcomeEngagementDemo";
import { LiveCountEngagementDemo } from "./LiveCountEngagementDemo";

const Page = () => (
    <div>
        <MetaData title="Engagement - Blocks" />

        <ComponentPageTitle
            label="Blocks"
            title="Engagements"
            description="Engagement blocks drive user interaction with clear calls-to-action, dynamic content, and personalized experiences."
        />

        <p className="text-base-content/60 mt-6 font-medium lg:mt-12">Demos</p>

        <div className="mt-6 space-y-6">
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Live Count</div>
                <div className="flex items-center justify-center p-4 sm:p-6 xl:py-12">
                    <LiveCountEngagementDemo />
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Chat Invitation</div>
                <div className="flex items-center justify-center p-4 sm:p-6 xl:py-12">
                    <ChatInvitationEngagementDemo />
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Geo Welcome</div>
                <div className="flex items-center justify-center p-4 sm:p-6 xl:py-12">
                    <GeoWelcomeEngagementDemo />
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Book Demo</div>
                <div className="flex items-center justify-center p-4 sm:p-6 xl:py-12">
                    <BookerEngagementDemo />
                </div>
            </div>
        </div>
    </div>
);

export default Page;
