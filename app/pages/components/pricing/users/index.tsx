import { Link } from "react-router";

import { ComponentPageTitle } from "@/components/ComponentPageTitle";
import { MetaData } from "@/components/MetaData";

import { UsersSlider } from "./UsersSlider";

const UsersPricingPage = () => {
    return (
        <>
            <MetaData title="Users Pricing" />
            <div>
                <ComponentPageTitle
                    label="Pricing"
                    title="Scalable Pricing for Your Team"
                    description="Flexible and transparent pricing—pay for what you need. Add or remove users as your team evolves!"
                />
                <div className="mt-5 flex justify-center">
                    <div className="w-xs">
                        <UsersSlider />
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 sm:gap-8 lg:mt-12 xl:grid-cols-3">
                    <div className="card bg-base-100 border-base-300 flex flex-col border p-6">
                        <div className="flex justify-between">
                            <div>
                                <p className="text-xl font-medium sm:text-2xl">Basic</p>
                                <p className="text-base-content/80 text-xs">Upto 20 users (Billed Annually)</p>
                            </div>
                            <div className="text-end">
                                <p className="text-3xl leading-0 font-semibold sm:text-4xl">
                                    <span className="text-base-content/60 align-super text-lg font-medium sm:text-xl">
                                        $
                                    </span>
                                    19
                                </p>
                                <p className="text-base-content/60 mt-2.5 text-xs">/user/month</p>
                            </div>
                        </div>
                        <p className="text-base-content/80 mt-3 text-sm">Features</p>
                        <div className="mt-2 space-y-1 max-sm:text-sm">
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Access to core AI tools
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Basic workflow automation
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Limited storage & project history
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Standard AI processing speed
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Email & community support
                            </div>
                        </div>
                        <div className="mt-auto pt-5">
                            <button className="btn btn-neutral btn-block gap-2">
                                <span className="iconify lucide--layers-2 block size-4.5"></span>
                                Choose Basic
                            </button>
                        </div>
                    </div>
                    <div className="card bg-base-100 border-base-300 relative flex flex-col border p-6">
                        <div className="bg-primary text-primary-content rounded-box absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-1 text-xs">
                            Most Popular
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p className="text-xl font-medium sm:text-2xl">Pro</p>
                                <p className="text-base-content/80 text-xs">Minimum 10 users (Billed Annually)</p>
                            </div>
                            <div className="text-end">
                                <p className="text-3xl leading-0 font-semibold sm:text-4xl">
                                    <span className="text-base-content/60 align-super text-lg font-medium sm:text-xl">
                                        $
                                    </span>
                                    29
                                </p>
                                <p className="text-base-content/60 mt-2.5 text-xs">/user/month</p>
                            </div>
                        </div>
                        <p className="text-base-content/80 mt-3 text-sm">Features</p>
                        <div className="mt-2 space-y-1 max-sm:text-sm">
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Access to all AI tools
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Advanced workflow automation
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Extended storage & project history
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Faster AI processing
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Priority email & chat support
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Team collaboration features
                            </div>
                        </div>
                        <div className="mt-auto pt-5">
                            <button className="btn btn-primary btn-block gap-2">
                                <span className="iconify lucide--rocket block size-4.5"></span>
                                Upgrade to Pro
                            </button>
                        </div>
                    </div>
                    <div className="card bg-base-100 border-base-300 flex flex-col border p-6">
                        <div className="flex justify-between">
                            <div>
                                <p className="text-xl font-medium sm:text-2xl">Enterprise</p>
                                <p className="text-base-content/80 text-xs">Contact for quote</p>
                            </div>
                            <p className="text-lg font-semibold sm:text-xl">Custom</p>
                        </div>
                        <p className="text-base-content/80 mt-6 text-sm">Features</p>
                        <div className="mt-2 space-y-1 max-sm:text-sm">
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Unlimited AI tools & automation
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Enterprise-grade security & compliance
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Unlimited storage & full project history
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Fastest AI processing & dedicated resources
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Dedicated account manager
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Custom SLAs
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                API access & custom integrations
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                24/7 premium support
                            </div>
                        </div>
                        <div className="mt-auto pt-5">
                            <button className="btn btn-secondary btn-block gap-2">
                                <span className="iconify lucide--building-2 block size-4.5"></span>
                                Let's Talk
                            </button>
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

export default UsersPricingPage;
