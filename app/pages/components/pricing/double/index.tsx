import { Link } from "react-router";

import { ComponentPageTitle } from "@/components/ComponentPageTitle";
import { MetaData } from "@/components/MetaData";

const DoublePricingPage = () => {
    return (
        <>
            <MetaData title="Double Pricing" />

            <div>
                <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 xl:gap-8">
                    <ComponentPageTitle
                        label="Pricing"
                        title="Smart Plans for Smarter AI"
                        description="Whether you're just starting out or scaling fast, choose a plan that fits your workflow."
                        centered={false}
                    />
                    <div>
                        <p className="text-base-content/80 text-sm italic">Custom need?</p>
                        <p className="mt-2 text-sm">
                            Need something custom, handling high volumes, or building for enterprise? Let’s chat and
                            build what works for you.
                        </p>
                        <button className="btn btn-neutral btn-sm mt-3">Talk to Us</button>
                    </div>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:gap-8 2xl:mt-12">
                    <div className="card bg-base-100 h-fit p-4 shadow sm:p-6">
                        <div className="flex items-stretch gap-6 max-sm:flex-col">
                            <div>
                                <p className="text-xl font-medium sm:text-2xl">Basic</p>
                                <p className="mt-3 text-2xl font-semibold sm:text-3xl">
                                    <sup className="text-base-content/50 text-lg sm:text-xl">$</sup>
                                    <span>99</span>
                                    <sub className="text-base-content/60 text-sm font-normal">/Month</sub>
                                </p>

                                <p className="text-base-content/80 mt-3 max-w-60 text-sm">
                                    Perfect for individual creators and small teams starting with AI tools.
                                </p>
                                <button className="btn btn-sm mt-3">Get Started</button>
                            </div>
                            <div className="bg-base-200 w-px max-sm:hidden"></div>
                            <div className="grow space-y-3 max-sm:text-sm">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-5 flex-col justify-center sm:h-6">
                                        <span className="iconify lucide--check-circle-2 text-success size-5"></span>
                                    </div>
                                    <p>Standard Gen-AI tools access</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex h-5 flex-col justify-center sm:h-6">
                                        <span className="iconify lucide--check-circle-2 text-success size-5"></span>
                                    </div>
                                    <p>Basic prompt builder</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex h-5 flex-col justify-center sm:h-6">
                                        <span className="iconify lucide--check-circle-2 text-success size-5"></span>
                                    </div>
                                    <p>Usage analytics dashboard</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex h-5 flex-col justify-center sm:h-6">
                                        <span className="iconify lucide--check-circle-2 text-success size-5"></span>
                                    </div>
                                    <p>Email support</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 h-fit p-4 shadow transition-all hover:shadow-md sm:p-6">
                        <div className="flex items-stretch gap-6 max-sm:flex-col">
                            <div>
                                <div className="badge badge-primary badge-dash badge-sm">Popular</div>
                                <p className="mt-1 text-xl font-medium sm:text-2xl">Professional</p>
                                <p className="mt-3 text-2xl font-semibold sm:text-3xl">
                                    <sup className="text-base-content/50 text-lg sm:text-xl">$</sup>
                                    <span>299</span>
                                    <sub className="text-base-content/60 text-sm font-normal">/Month</sub>
                                </p>

                                <p className="text-base-content/80 mt-3 max-w-60 text-sm">
                                    For growing teams needing full access and priority features.
                                </p>
                                <button className="btn btn-primary btn-sm mt-3">Upgrade Now</button>
                            </div>
                            <div className="bg-base-200 w-px max-sm:hidden"></div>
                            <div className="grow space-y-3 max-sm:text-sm">
                                <div className="flex items-start gap-3">
                                    <div className="flex h-5 flex-col justify-center sm:h-6">
                                        <span className="iconify lucide--check-circle-2 text-success size-5"></span>
                                    </div>
                                    <p>Unlimited Gen-AI usage</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex h-5 flex-col justify-center sm:h-6">
                                        <span className="iconify lucide--check-circle-2 text-success size-5"></span>
                                    </div>
                                    <p>Advanced prompt studio</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex h-5 flex-col justify-center sm:h-6">
                                        <span className="iconify lucide--check-circle-2 text-success size-5"></span>
                                    </div>
                                    <p>Priority access to new features</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex h-5 flex-col justify-center sm:h-6">
                                        <span className="iconify lucide--check-circle-2 text-success size-5"></span>
                                    </div>
                                    <p>Team collaboration tools</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex h-5 flex-col justify-center sm:h-6">
                                        <span className="iconify lucide--check-circle-2 text-success size-5"></span>
                                    </div>
                                    <p>Dedicated support channel</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="flex h-5 flex-col justify-center sm:h-6">
                                        <span className="iconify lucide--check-circle-2 text-success size-5"></span>
                                    </div>
                                    <p>Access to experimental AI tools</p>
                                </div>
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

export default DoublePricingPage;
