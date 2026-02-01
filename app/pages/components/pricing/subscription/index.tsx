import { Link } from "react-router";

import { ComponentPageTitle } from "@/components/ComponentPageTitle";
import { MetaData } from "@/components/MetaData";

const SubscriptionPricingPage = () => {
    return (
        <>
            <MetaData title="Subscription Pricing" />
            <div className="group">
                <ComponentPageTitle
                    label="Pricing"
                    title="Flexible Pricing for Every Need"
                    description="Start for free, upgrade anytime. Save 20% with yearly billing!"
                />
                <div className="mt-8 text-center lg:mt-12">
                    <div className="relative inline-flex items-center gap-2">
                        <label
                            className="group-has-[[name=duration]:checked]:text-base-content/60 transition-all"
                            htmlFor="duration">
                            Monthly
                        </label>
                        <input type="checkbox" id="duration" name="duration" className="toggle" />
                        <label
                            className="text-base-content/60 group-has-[[name=duration]:checked]:text-base-content transition-all"
                            htmlFor="duration">
                            Yearly
                        </label>
                        <div className="*:stroke-success/80 absolute -end-14 -bottom-6 -rotate-50 max-sm:hidden">
                            <svg className="h-14" viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24.2436 22.2464C21.9361 40.1037 24.1434 58.4063 36.2372 72.8438C47.1531 85.8753 63.0339 89.4997 72.0241 72.3997C76.2799 64.3049 75.9148 51.8626 68.2423 45.8372C59.6944 39.1242 52.5684 51.4637 52.3146 58.6725C51.7216 75.5092 64.21 92.4339 82.5472 94.5584C104.262 97.0741 103.365 74.6027 103.226 74.6577"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8.04486 34.0788C9.99828 33.6914 11.5767 32.5391 13.211 31.4701C18.5769 27.9613 23.2345 22.4666 24.743 16.0889C25.3522 23.1615 28.5274 32.1386 35.2148 35.4439"
                                    stroke="inherit"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <p className="text-success absolute -end-36 bottom-4 text-sm font-semibold max-sm:hidden">
                            2 Months Free
                        </p>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 xl:grid-cols-4">
                    <div className="border-base-300 bg-base-100 card relative flex flex-col border p-6">
                        <div className="text-center">
                            <p className="text-xl font-medium sm:text-2xl">Free</p>
                            <p className="mt-1 text-2xl font-semibold sm:text-3xl">
                                <span className="text-base-content/60 align-super text-lg font-medium sm:text-xl">
                                    $
                                </span>
                                0
                            </p>
                            <p className="text-base-content/80 mt-2 text-sm">Personal use & small projects</p>
                        </div>
                        <hr className="border-base-300 my-4 border-dashed" />
                        <p className="text-base-content/80 text-sm">Features</p>
                        <div className="mt-2 space-y-1 max-sm:text-sm">
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Access to <span className="font-medium">1 AI tool</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Basic analytics
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Limited AI requests
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Standard processing speed
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Community support
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
                        <div className="mt-auto pt-5">
                            <button className="btn btn-outline border-base-300 btn-block">Get Started Free</button>
                        </div>
                        <div className="border-base-300 rounded-box absolute end-4 top-4 border border-dashed p-1.5">
                            <span className="iconify text-base-content/80 lucide--gift block size-5"></span>
                        </div>
                    </div>
                    <div className="border-base-300 bg-base-100 card flex flex-col border p-6">
                        <div className="text-center">
                            <p className="text-xl font-medium sm:text-2xl">Basic</p>
                            <p className="mt-1 text-2xl font-semibold sm:text-3xl">
                                <span className="text-base-content/60 align-super text-lg font-medium sm:text-xl">
                                    $
                                </span>
                                <span className="countdown -mx-1">
                                    <span className="[--value:19] group-has-[[name=duration]:checked]:[--value:15]"></span>
                                </span>
                                <span className="text-base-content/60 text-xs font-medium sm:text-sm">/ Month</span>
                            </p>
                            <p className="text-base-content/80 mt-2 text-sm">Individuals & small projects</p>
                        </div>
                        <hr className="border-base-300 my-4 border-dashed" />
                        <p className="text-base-content/80 text-sm">Features</p>
                        <div className="mt-2 space-y-1 max-sm:text-sm">
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Access to <span className="font-medium">3 AI tool</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Basic analytics
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Increased AI request limits
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Faster processing speed
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Email support
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
                        <div className="mt-auto pt-5">
                            <button className="btn btn-ghost bg-base-200 btn-block">Choose Basic</button>
                        </div>

                        <div className="border-base-300 rounded-box absolute end-4 top-4 border border-dashed p-1.5">
                            <span className="iconify text-base-content/80 lucide--layers-2 block size-5"></span>
                        </div>
                    </div>
                    <div className="border-base-300 bg-base-100 card relative flex flex-col overflow-hidden border p-6">
                        <div className="bg-primary text-primary-content absolute -start-8 top-6 w-36 -rotate-45 py-1 text-center text-sm">
                            Most Popular
                        </div>
                        <div className="text-center">
                            <p className="text-xl font-medium sm:text-2xl">Pro</p>
                            <p className="mt-1 text-2xl font-semibold sm:text-3xl">
                                <span className="text-base-content/60 align-super text-lg font-medium sm:text-xl">
                                    $
                                </span>
                                <span className="countdown">
                                    <span className="[--value:49] group-has-[[name=duration]:checked]:[--value:39]"></span>
                                </span>
                                <span className="text-base-content/60 text-xs font-medium sm:text-sm">/ Month</span>
                            </p>
                            <p className="text-base-content/80 mt-2 text-sm">Freelancers & small businesses</p>
                        </div>
                        <hr className="border-base-300 my-4 border-dashed" />
                        <p className="text-base-content/80 text-sm">Features</p>
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
                                Increased AI request limits
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Priority AI processing
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                Priority support
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
                        <div className="mt-auto pt-5">
                            <button className="btn btn-primary btn-block">Upgrade to Pro</button>
                        </div>

                        <div className="border-base-300 rounded-box absolute end-4 top-4 border border-dashed p-1.5">
                            <span className="iconify text-base-content/80 lucide--rocket block size-5"></span>
                        </div>
                    </div>
                    <div className="border-base-300 bg-base-100 card relative flex flex-col overflow-hidden border p-6">
                        <div className="bg-secondary text-secondary-content absolute -start-8 top-6 w-36 -rotate-45 py-1 text-center text-sm">
                            Business
                        </div>
                        <div className="text-center">
                            <p className="text-xl font-medium sm:text-2xl">Enterprise</p>
                            <p className="mt-1 text-2xl font-semibold sm:text-3xl">
                                <span className="text-base-content/60 align-super text-lg font-medium sm:text-xl">
                                    $
                                </span>
                                <span className="countdown">
                                    <span className="[--value:99] group-has-[[name=duration]:checked]:[--value:79]"></span>
                                </span>
                                <span className="text-base-content/60 text-xs font-medium sm:text-sm">/ Month</span>
                            </p>
                            <p className="text-base-content/80 mt-2 text-sm">Large businesses & agencies</p>
                        </div>
                        <hr className="border-base-300 my-4 border-dashed" />
                        <p className="text-base-content/80 text-sm">Features</p>
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
                                Real-time analytics
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
                                API access & white-labeling
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="iconify lucide--check text-success size-4.5"></span>
                                24/7 priority support
                            </div>
                        </div>
                        <div className="mt-auto pt-5">
                            <button className="btn btn-secondary btn-block">Get Enterprise</button>
                        </div>

                        <div className="border-base-300 rounded-box absolute end-4 top-4 border border-dashed p-1.5">
                            <span className="iconify text-base-content/80 lucide--building-2 block size-5"></span>
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

export default SubscriptionPricingPage;
