import { Link } from "react-router";

import { ComponentPageTitle } from "@/components/ComponentPageTitle";
import { MetaData } from "@/components/MetaData";

const LifetimePricingPage = () => {
    return (
        <>
            <MetaData title="Lifetime Pricing" />
            <div>
                <ComponentPageTitle
                    title="One-Time Payment, Lifetime Access"
                    description="Pay once, enjoy forever—no subscriptions, no hidden fees"
                    label="Pricing"
                />
                <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-8 2xl:mt-16">
                    <div className="border-base-300 bg-base-100 card relative border p-6">
                        <div className="flex justify-between gap-3">
                            <div>
                                <div className="badge badge-sm">Starter</div>
                                <p className="mt-1 text-xl font-medium sm:text-2xl">Basic</p>
                            </div>
                            <p className="text-2xl font-semibold sm:text-3xl">$49</p>
                        </div>
                        <p className="text-base-content/80 text-sm">Personal use & small projects</p>
                        <p className="text-base-content/80 mt-4 text-sm">Features</p>
                        <div className="mt-2 space-y-1 max-sm:text-sm">
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Access to <span className="font-medium">1 AI tool</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Basic analytics & insights
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Limited AI requests per day
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Standard processing speed
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Community support only
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--x text-error size-4.5"></span>
                                No custom branding
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--x text-error size-4.5"></span>
                                No API access
                            </div>
                        </div>
                        <button className="btn btn-outline border-base-300 btn-block mt-5">Buy Now</button>
                        <div className="rounded-box bg-base-100 border-base-300 absolute start-1/2 -top-6 -translate-x-1/2 rounded-full border border-dashed p-2.5">
                            <span className="iconify lucide--layers-2 text-base-content/80 block size-5 sm:size-6"></span>
                        </div>
                    </div>
                    <div className="border-base-300 bg-base-100 card border p-6">
                        <div className="flex justify-between gap-3">
                            <div>
                                <div className="badge badge-sm badge-primary">Most Popular</div>
                                <p className="mt-1 text-xl font-medium sm:text-2xl">Pro</p>
                            </div>
                            <p className="text-2xl font-semibold sm:text-3xl">$149</p>
                        </div>
                        <p className="text-base-content/80 text-sm">Freelancers & small businesses</p>
                        <p className="text-base-content/80 mt-4 text-sm">Features</p>
                        <div className="mt-2 space-y-1 max-sm:text-sm">
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Access to <span className="font-medium">5 AI tool</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Advanced analytics & reporting
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Higher AI request limits
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Faster processing speed
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Priority email support
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Custom branding
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--x text-error size-4.5"></span>
                                No API access
                            </div>
                        </div>
                        <button className="btn btn-primary btn-block mt-5">Get Lifetime Access</button>
                        <div className="rounded-box bg-base-100 border-base-300 absolute start-1/2 -top-6 -translate-x-1/2 rounded-full border border-dashed p-2.5">
                            <span className="iconify lucide--rocket text-base-content/80 block size-5 sm:size-6"></span>
                        </div>
                    </div>
                    <div className="border-base-300 bg-base-100 card border p-6">
                        <div className="flex justify-between gap-3">
                            <div>
                                <div className="badge badge-sm badge-neutral">True Unlimited</div>
                                <p className="mt-1 text-xl font-medium sm:text-2xl">Enterprise</p>
                            </div>
                            <p className="text-2xl font-semibold sm:text-3xl">$499</p>
                        </div>
                        <p className="text-base-content/80 text-sm">Large businesses & agencies</p>
                        <p className="text-base-content/80 mt-4 text-sm">Features</p>
                        <div className="mt-2 space-y-1 max-sm:text-sm">
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Unlimited AI tools
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Unlimited AI requests
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Real-time analytics & custom reports
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Fastest AI processing
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Dedicated account manager
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Custom branding & white-labeling
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Full API access
                            </div>
                        </div>
                        <button className="btn btn-neutral btn-block mt-5">Get Enterprise Plan</button>
                        <div className="rounded-box bg-base-100 border-base-300 absolute start-1/2 -top-6 -translate-x-1/2 rounded-full border border-dashed p-2.5">
                            <span className="iconify lucide--building-2 text-base-content/80 block size-5 sm:size-6"></span>
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

export default LifetimePricingPage;
