import { ComponentPageTitle } from "@/components/ComponentPageTitle";
import { MetaData } from "@/components/MetaData";

import { CustomPricing } from "./CustomPricing";

const CustomPricingPage = () => {
    return (
        <>
            <MetaData title="Custom Pricing" />

            <div className="group">
                <ComponentPageTitle
                    label="Your Plan"
                    title="Custom Pricing"
                    description="Build a plan that fits the way you work. Simple, flexible, and clear."
                />
                <div className="mt-12">
                    <CustomPricing />
                </div>
            </div>
        </>
    );
};

export default CustomPricingPage;
