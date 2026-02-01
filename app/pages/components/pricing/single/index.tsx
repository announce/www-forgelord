import { Link } from "react-router";

import { ComponentPageTitle } from "@/components/ComponentPageTitle";
import { MetaData } from "@/components/MetaData";

const SinglePricingPage = () => {
    return (
        <>
            <MetaData title="Single Pricing" />

            <div>
                <ComponentPageTitle
                    label="Pricing"
                    title="Unlock All the Tools You Need"
                    description="A single plan with full access to all features, built for growing businesses and large teams."
                />
                <div className="bg-base-100 card mt-8 grid gap-8 p-5 shadow sm:p-8 lg:grid-cols-2 xl:p-16 2xl:mt-16">
                    <div>
                        <p className="text-2xl font-semibold sm:text-3xl">Enterprise Access</p>
                        <p className="text-base-content/70 mt-1 text-sm">
                            Advanced AI tools for your team’s productivity and success
                        </p>
                        <div className="mt-8 sm:mt-12">
                            <p className="text-4xl font-semibold sm:text-5xl">
                                <sup className="text-base-content/40 text-3xl font-medium sm:text-4xl">$</sup>499
                            </p>
                            <p className="text-base-content/80 mt-3 text-sm">per team/month</p>
                            <p className="text-base-content/80 mt-0.5 text-sm">billed annually, first year pricing</p>
                        </div>
                        <div className="mt-auto w-60 pt-8 sm:pt-12">
                            <button className="btn btn-block btn-primary">Request Free Trial</button>
                            <button className="btn btn-block btn-outline border-base-300 mt-3">
                                <p>Talk to Sales</p>
                                <span className="iconify lucide--arrow-right size-4"></span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className="text-base-content/80 text-sm">All features</p>
                        <div className="mt-5 space-y-4">
                            <div>
                                <div className="flex items-center gap-2.5 sm:gap-3">
                                    <span className="iconify lucide--shield-check size-4.5 sm:size-5"></span>
                                    <p className="font-medium max-sm:text-sm">AI-Powered Security</p>
                                </div>
                                <p className="text-base-content/80 ms-7 text-xs sm:ms-8 sm:text-sm">
                                    Built-in protection using advanced machine learning models.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2.5 sm:gap-3">
                                    <span className="iconify lucide--key size-4.5 sm:size-5"></span>
                                    <p className="font-medium max-sm:text-sm">Seamless Integrations</p>
                                </div>
                                <p className="text-base-content/80 ms-7 text-xs sm:ms-8 sm:text-sm">
                                    Effortless integration with your existing platforms and tools.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2.5 sm:gap-3">
                                    <span className="iconify lucide--users size-4.5 sm:size-5"></span>
                                    <p className="font-medium max-sm:text-sm">Collaborative Team Features</p>
                                </div>
                                <p className="text-base-content/80 ms-7 text-xs sm:ms-8 sm:text-sm">
                                    Work together on AI-driven projects in real-time.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2.5 sm:gap-3">
                                    <span className="iconify lucide--cloud-upload size-4.5 sm:size-5"></span>
                                    <p className="font-medium max-sm:text-sm">Cloud-Native Deployment</p>
                                </div>
                                <p className="text-base-content/80 ms-7 text-xs sm:ms-8 sm:text-sm">
                                    Deploy across your preferred cloud provider or in your own infrastructure.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2.5 sm:gap-3">
                                    <span className="iconify lucide--headphones size-4.5 sm:size-5"></span>
                                    <p className="font-medium max-sm:text-sm">AI-Backed Support</p>
                                </div>
                                <p className="text-base-content/80 ms-7 text-xs sm:ms-8 sm:text-sm">
                                    Get assistance from our AI-powered support system for faster solutions.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2.5 sm:gap-3">
                                    <span className="iconify lucide--user-circle size-4.5 sm:size-5"></span>
                                    <p className="font-medium max-sm:text-sm">Dedicated Success Manager</p>
                                </div>
                                <p className="text-base-content/80 ms-7 text-xs sm:ms-8 sm:text-sm">
                                    Personalized guidance for optimizing your AI tools and strategy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="mt-3 max-sm:text-sm">
                    Check out the full
                    <Link to="/pricing/comparison" className="link link-primary link-hover mx-1">
                        pricing comparison
                    </Link>
                    for all the details
                </p>
            </div>
        </>
    );
};

export default SinglePricingPage;
