export const Pricing = () => {
    return (
        <div className="group/section relative z-10 container py-8 md:py-12 lg:py-16 2xl:py-28" id="pricing">
            <div className="flex items-center justify-center">
                <div className="text-base-content/80 border-base-200 flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-sm">
                    <span className="iconify lucide--dollar-sign size-3.5 text-green-600"></span>
                    <span>Pricing</span>
                </div>
            </div>
            <p className="mt-2 text-center text-2xl font-semibold sm:text-3xl">Flexible Plans for Every Team</p>
            <div className="mt-2 flex justify-center text-center">
                <p className="text-base-content/80 max-w-lg">
                    From startups to enterprises, find the plan designed to scale with your sales goals.
                </p>
            </div>

            <div className="mt-8 flex items-center justify-center xl:mt-12">
                <div className="tabs tabs-box tabs-sm border-base-300 relative gap-0.5 rounded-full border bg-transparent">
                    <label className="tab hover:bg-base-200/60 has-[:checked]:!bg-base-200 gap-0 !rounded-full bg-transparent transition-all duration-300">
                        <input type="radio" value="yearly" name="plan_duration" defaultChecked />
                        <div className="gap ms-1 flex items-center gap-1.5">
                            <p className="font-medium">Annual</p>
                            <div className="bg-base-100 border-base-300 rounded-full border px-1.5 py-0.5 !text-xs">
                                Save 10%
                            </div>
                        </div>
                    </label>
                    <label className="tab hover:bg-base-200/60 has-[:checked]:!bg-base-200 gap-0 !rounded-full bg-transparent transition-all duration-300">
                        <input type="radio" name="plan_duration" value="monthly" />
                        <p className="mx-1 font-medium">Monthly</p>
                    </label>
                </div>
            </div>
            <div className="mt-8 grid items-end gap-4 sm:gap-6 lg:mt-12 xl:grid-cols-3 xl:gap-8 2xl:mt-16">
                <div className="card group card-border h-fit cursor-pointer p-6">
                    <p className="text-xl font-medium">Launch</p>
                    <div className="mt-3 text-5xl leading-0">
                        <span className="text-base-content/80 align-super text-xl font-medium">$</span>
                        <div className="relative inline-block h-9.5 w-16 overflow-hidden font-semibold">
                            <span className="absolute start-0 -top-full translate-y-1/2 scale-60 transition-all duration-500 group-has-[[value=yearly]:checked]/section:top-1/2 group-has-[[value=yearly]:checked]/section:scale-100">
                                29
                            </span>
                            <span className="absolute start-0 top-3/2 translate-y-1/2 scale-60 transition-all duration-500 group-has-[[value=monthly]:checked]/section:top-1/2 group-has-[[value=monthly]:checked]/section:scale-100">
                                39
                            </span>
                        </div>
                        <span className="text-base-content/80 text-sm">/month</span>
                    </div>
                    <p className="text-base-content/80 mt-3 text-sm">
                        Perfect for solo sales reps or small teams starting their AI sales automation journey.
                    </p>
                    <hr className="border-base-300 -mx-2 my-6 border-dashed" />
                    <p className="text-base-content/80 text-sm font-medium">Includes</p>
                    <div className="mt-4 space-y-2">
                        {["AI Lead Scoring", "Automated Follow-ups", "Basic Dashboards", "Email Support"].map(
                            (feature, index) => (
                                <div className="flex items-center gap-3" key={index}>
                                    <div className="bg-primary/20 text-primary rounded-full p-0.5">
                                        <span className="iconify lucide--check block size-3.5"></span>
                                    </div>
                                    {feature}
                                </div>
                            ),
                        )}
                    </div>
                    <button className="btn btn-outline border-base-300 rounded-box btn-block mt-8 gap-2.5">
                        <span className="iconify lucide--gift block size-4"></span>
                        <span>
                            Start Free Trial <span className="opacity-60">(14 Days)</span>
                        </span>
                    </button>
                </div>
                <div className="from-primary to-secondary rounded-box bg-linear-to-br p-0.5">
                    <div className="text-primary-content mt-0.5 mb-1 flex items-center justify-center gap-2 text-sm font-medium">
                        <span className="lucide--star iconify size-3.5"></span>
                        <span>Most Popular</span>
                    </div>
                    <div className="card bg-base-100 group card-border h-fit cursor-pointer p-6">
                        <p className="text-xl font-medium">Boost</p>
                        <div className="mt-3 text-5xl leading-0">
                            <span className="text-base-content/80 align-super text-xl font-medium">$</span>
                            <div className="relative inline-block h-9.5 w-16 overflow-hidden font-semibold">
                                <span className="absolute start-0 -top-full translate-y-1/2 scale-60 transition-all duration-500 group-has-[[value=yearly]:checked]/section:top-1/2 group-has-[[value=yearly]:checked]/section:scale-100">
                                    59
                                </span>
                                <span className="absolute start-0 top-3/2 translate-y-1/2 scale-60 transition-all duration-500 group-has-[[value=monthly]:checked]/section:top-1/2 group-has-[[value=monthly]:checked]/section:scale-100">
                                    69
                                </span>
                            </div>
                            <span className="text-base-content/80 text-sm">/month</span>
                        </div>
                        <p className="text-base-content/80 mt-3 text-sm">
                            Ideal for growing sales teams needing advanced analytics and automation to boost revenue.
                        </p>
                        <hr className="border-base-300 -mx-2 my-6 border-dashed" />
                        <p className="text-base-content/80 text-sm font-medium">Includes</p>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-3">
                                <div className="bg-base-200 rounded-full p-0.5">
                                    <span className="iconify lucide--undo block size-3.5"></span>
                                </div>
                                <span>
                                    All features of{" "}
                                    <span className="font-medium underline underline-offset-2">Launch</span> Plan
                                </span>
                            </div>
                            {[
                                "Predictive Analytics",
                                "Custom Dashboards",
                                "Priority Support",
                                "Email and Chat Support",
                            ].map((feature, index) => (
                                <div className="flex items-center gap-3" key={index}>
                                    <div className="bg-primary/20 text-primary rounded-full p-0.5">
                                        <span className="iconify lucide--check block size-3.5"></span>
                                    </div>
                                    {feature}
                                </div>
                            ))}
                        </div>
                        <button className="btn btn-block from-primary to-secondary text-primary-content mt-8 gap-2.5 border-0 bg-linear-to-r">
                            <span className="iconify lucide--rocket size-4"></span>
                            Upgrade to Growth
                        </button>
                    </div>
                </div>
                <div className="border-base-300 group rounded-box h-fit cursor-pointer border p-6 transition-all">
                    <p className="text-xl font-medium">Elite</p>
                    <div className="mt-3 text-5xl leading-0">
                        <span className="text-base-content/80 align-super text-xl font-medium">$</span>
                        <div className="relative inline-block h-9.5 w-16 overflow-hidden font-semibold">
                            <span className="absolute start-0 -top-full translate-y-1/2 scale-60 transition-all duration-500 group-has-[[value=yearly]:checked]/section:top-1/2 group-has-[[value=yearly]:checked]/section:scale-100">
                                89
                            </span>
                            <span className="absolute start-0 top-3/2 translate-y-1/2 scale-60 transition-all duration-500 group-has-[[value=monthly]:checked]/section:top-1/2 group-has-[[value=monthly]:checked]/section:scale-100">
                                99
                            </span>
                        </div>
                        <span className="text-base-content/80 text-sm">/month</span>
                    </div>
                    <p className="text-base-content/80 mt-3 text-sm">
                        Comprehensive solution for large teams needing customization, integrations, and dedicated
                        support.
                    </p>
                    <hr className="border-base-300 -mx-2 my-6 border-dashed" />
                    <p className="text-base-content/80 text-sm font-medium">Includes</p>
                    <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-3">
                            <div className="bg-base-200 rounded-full p-0.5">
                                <span className="iconify lucide--undo block size-3.5"></span>
                            </div>
                            <span>
                                All features of <span className="font-medium underline underline-offset-2">Boost</span>{" "}
                                Plan
                            </span>
                        </div>
                        {[
                            "Dedicated Account Manager",
                            "API Access and Integrations",
                            "Custom Workflow Automation",
                            "24/7 Premium Support",
                            "SLA and Uptime Guarantees",
                        ].map((feature, index) => (
                            <div className="flex items-center gap-3" key={index}>
                                <div className="bg-primary/20 text-primary rounded-full p-0.5">
                                    <span className="iconify lucide--check block size-3.5"></span>
                                </div>
                                {feature}
                            </div>
                        ))}
                    </div>
                    <button className="btn btn-primary border-base-content/5 rounded-box btn-block mt-8 gap-2.5">
                        <span className="iconify lucide--headphones size-4"></span>
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>
    );
};
