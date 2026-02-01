import { ComponentPageTitle } from "@/components/ComponentPageTitle";
import { MetaData } from "@/components/MetaData";

import { BasicBannerDemo } from "./BasicBannerDemo";
import { DiscountBannerDemo } from "./DiscountBannerDemo";
import { HiringBannerDemo } from "./HiringBannerDemo";
import { NewsletterBannerDemo } from "./NewsletterBannerDemo";
import { ParityBannerDemo } from "./ParityBannerDemo";
import { SaleBannerDemo } from "./SaleBannerDemo";

const Page = () => (
    <div>
        <MetaData title="Banners - Blocks" />

        <ComponentPageTitle
            label="Blocks"
            title="Banners"
            description="Displays important messages or promotions prominently to quickly capture user attention and engagement"
        />

        <p className="text-base-content/60 mt-6 font-medium lg:mt-12">Demos</p>

        <div className="mt-6 space-y-6">
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Basic</div>
                <div className="flex items-center justify-center sm:p-6 xl:p-8">
                    <div className="border-base-300 rounded-box grow sm:border">
                        <BasicBannerDemo />
                    </div>
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Discount</div>
                <div className="flex items-center justify-center sm:p-6 xl:p-8">
                    <div className="border-base-300 rounded-box grow sm:border">
                        <DiscountBannerDemo />
                    </div>
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Newsletter</div>
                <div className="flex items-center justify-center sm:p-6 xl:p-8">
                    <div className="border-base-300 rounded-box grow sm:border">
                        <NewsletterBannerDemo />
                    </div>
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Sale</div>
                <div className="flex items-center justify-center sm:p-6 xl:p-8">
                    <div className="border-base-300 rounded-box grow sm:border">
                        <SaleBannerDemo />
                    </div>
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Parity Discount</div>
                <div className="flex items-center justify-center sm:p-6 xl:p-8">
                    <div className="border-base-300 rounded-box grow sm:border">
                        <ParityBannerDemo />
                    </div>
                </div>
            </div>
            <div className="card card-border bg-base-100">
                <div className="bg-base-200/30 px-5 py-3 font-medium">Hiring</div>
                <div className="flex items-center justify-center sm:p-6 xl:p-8">
                    <div className="border-base-300 rounded-box grow sm:border">
                        <HiringBannerDemo />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Page;
