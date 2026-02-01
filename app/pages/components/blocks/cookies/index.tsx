import { ComponentPageTitle } from "@/components/ComponentPageTitle";
import { MetaData } from "@/components/MetaData";

import { BasicCookieDemo } from "./BasicCookieDemo";
import { CustomizeCookieDemo } from "./CustomizeCookieDemo";
import { SimpleCookieDemo } from "./SimpleCookieDemo";
import { SquareCookieDemo } from "./SquareCookieDemo";

const Page = () => (
    <div>
        <MetaData title="Cookies - Blocks" />

        <ComponentPageTitle
            label="Blocks"
            title="Cookies"
            description="Informs users about cookie use, ensuring consent while enhancing transparency and compliance"
        />

        <p className="text-base-content/60 mt-6 font-medium lg:mt-12">Demos</p>

        <div className="mt-6 space-y-6">
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Basic</div>
                <div className="flex items-center justify-center p-6 xl:py-12">
                    <BasicCookieDemo />
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Square</div>
                <div className="flex items-center justify-center p-6 xl:py-12">
                    <SquareCookieDemo />
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Customize</div>
                <div className="flex items-center justify-center p-6 xl:py-12">
                    <CustomizeCookieDemo />
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Simple</div>
                <div className="flex items-center justify-center p-6 xl:py-12">
                    <SimpleCookieDemo />
                </div>
            </div>
        </div>
    </div>
);

export default Page;
