export const Pricing = () => {
    return (
        <div className="group/section relative z-10 container py-8 md:py-12 lg:py-16 2xl:py-28" id="pricing">
            <p className="group-hover/section:text-primary text-base-content/60 text-center text-[12px] font-medium tracking-[1px] uppercase transition-all duration-300 group-hover/section:tracking-[2px]">
                Affordable
            </p>
            <p className="mt-2 text-center text-2xl font-semibold sm:text-3xl">Flexible Pricing Plans</p>
            <div className="mt-2 flex justify-center text-center">
                <p className="text-base-content/80 max-w-lg">
                    Choose a plan that fits your AI storage needs, with transparent costs and scalable options.
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
            <div className="mt-8 gap-8 space-y-4 md:space-y-6 lg:mt-12 xl:mx-20 xl:grid-cols-2 xl:space-y-8 2xl:mx-36 2xl:mt-16">
                <div className="grid gap-4 md:grid-cols-2 md:gap-6 xl:gap-8">
                    <div className="card group card-border h-full cursor-pointer p-6">
                        <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <div className="bg-base-200 rounded-box border-base-300 border p-2">
                                    <span className="iconify lucide--cpu block size-5"></span>
                                </div>
                                <div>
                                    <p className="text-base-content/80 text-sm/none italic">Basic</p>
                                    <p className="mt-0.5 text-lg/none font-medium">Essentials</p>
                                </div>
                            </div>
                            <div className="text-end text-5xl leading-0">
                                <span className="text-base-content/50 align-super text-xl font-medium">$</span>
                                <div className="relative inline-block h-9.5 w-20 overflow-hidden font-semibold">
                                    <span className="absolute start-0 -top-full translate-y-1/2 scale-60 transition-all duration-500 group-has-[[value=yearly]:checked]/section:top-1/2 group-has-[[value=yearly]:checked]/section:scale-100">
                                        129
                                    </span>
                                    <span className="absolute start-0 top-3/2 translate-y-1/2 scale-60 transition-all duration-500 group-has-[[value=monthly]:checked]/section:top-1/2 group-has-[[value=monthly]:checked]/section:scale-100">
                                        149
                                    </span>
                                </div>
                                <span className="text-base-content/80 text-sm">/month</span>
                            </div>
                        </div>

                        <p className="text-base-content/80 mt-3 text-sm">
                            Get started with core AI-powered automation features to simplify your storage workflows and
                            boost everyday productivity effortlessly.
                        </p>
                        <hr className="border-base-200 -mx-6 my-4" />
                        <p className="text-base-content/80 text-sm font-medium">Includes</p>
                        <div className="mt-4 space-y-2">
                            {[
                                "AI-driven Duplicate Cleanup",
                                "Smart File Tagging",
                                "Voice Command Support",
                                "Automated Backup Scheduling",
                                "Basic AI Insights",
                            ].map((feature, index) => (
                                <div className="flex items-center gap-3" key={index}>
                                    <div className="bg-primary/20 text-primary rounded-full p-0.5">
                                        <span className="iconify lucide--check block size-3.5"></span>
                                    </div>
                                    {feature}
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto pt-6">
                            <button className="btn btn-outline border-base-300 rounded-box btn-block gap-2.5">
                                <span className="iconify lucide--arrow-right-circle block size-4"></span>
                                <span>Get Started</span>
                            </button>
                        </div>
                    </div>
                    <div className="card group card-border h-full cursor-pointer p-6">
                        <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <div className="bg-base-200 rounded-box border-base-300 border p-2">
                                    <span className="iconify lucide--zap block size-5"></span>
                                </div>
                                <div>
                                    <p className="text-base-content/80 text-sm/none italic">Popular</p>
                                    <p className="mt-0.5 text-lg/none font-medium">Advanced</p>
                                </div>
                            </div>
                            <div className="text-end text-5xl leading-0">
                                <span className="text-base-content/50 align-super text-xl font-medium">$</span>
                                <div className="relative inline-block h-9.5 w-22 overflow-hidden font-semibold">
                                    <span className="absolute start-0 -top-full translate-y-1/2 scale-60 transition-all duration-500 group-has-[[value=yearly]:checked]/section:top-1/2 group-has-[[value=yearly]:checked]/section:scale-100">
                                        299
                                    </span>
                                    <span className="absolute start-0 top-3/2 translate-y-1/2 scale-60 transition-all duration-500 group-has-[[value=monthly]:checked]/section:top-1/2 group-has-[[value=monthly]:checked]/section:scale-100">
                                        349
                                    </span>
                                </div>
                                <span className="text-base-content/80 text-sm">/month</span>
                            </div>
                        </div>

                        <p className="text-base-content/80 mt-3 text-sm">
                            Unlock advanced AI automations, integrations, and insights designed to help growing teams
                            optimize storage management.
                        </p>
                        <hr className="border-base-200 -mx-6 my-4" />
                        <p className="text-base-content/80 text-sm font-medium">Includes</p>
                        <div className="mt-4 space-y-2">
                            {[
                                "Predictive File Organization",
                                "Real-Time AI Sync",
                                "Multi-voice Command Support",
                                "Custom AI Rules",
                                "Advanced AI Reports",
                                "Workflow Automation Integration",
                            ].map((feature, index) => (
                                <div className="flex items-center gap-3" key={index}>
                                    <div className="bg-primary/20 text-primary rounded-full p-0.5">
                                        <span className="iconify lucide--check block size-3.5"></span>
                                    </div>
                                    {feature}
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto pt-6">
                            <button className="btn btn-outline border-base-300 rounded-box btn-block gap-2.5">
                                <span className="iconify lucide--rocket block size-4"></span>
                                <span>
                                    Try Professional <span className="text-base-content/60">(14 Days Free)</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card group card-border cursor-pointer p-6" data-theme="dark">
                    <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <div className="bg-base-200 rounded-box border-base-300 border p-2.5">
                                <span className="iconify lucide--brain block size-5"></span>
                            </div>
                            <div>
                                <p className="text-base-content/80 text-sm/none italic">Ultimate</p>
                                <p className="mt-0.5 text-xl/none font-medium">Complete</p>
                            </div>
                        </div>
                        <div className="text-end text-5xl leading-0">
                            <span className="text-base-content/50 align-super text-xl font-medium">$</span>
                            <div className="relative inline-block h-9.5 w-22 overflow-hidden font-semibold">
                                <span className="absolute start-0 -top-full translate-y-1/2 scale-60 transition-all duration-500 group-has-[[value=yearly]:checked]/section:top-1/2 group-has-[[value=yearly]:checked]/section:scale-100">
                                    849
                                </span>
                                <span className="absolute start-0 top-3/2 translate-y-1/2 scale-60 transition-all duration-500 group-has-[[value=monthly]:checked]/section:top-1/2 group-has-[[value=monthly]:checked]/section:scale-100">
                                    999
                                </span>
                            </div>
                            <span className="text-base-content/80 text-sm">/month</span>
                        </div>
                    </div>

                    <hr className="border-base-300 -mx-6 my-6" />
                    <p className="text-base-content/80 text-sm font-medium">Includes</p>
                    <div className="mt-4 grid grid-cols-1 space-y-1 gap-x-8 sm:grid-cols-2">
                        {[
                            "Full AI Workflow Automation",
                            "Natural Language File Search",
                            "AI Anomaly Detection",
                            "Adaptive Storage Optimization",
                            "Intelligent Access Controls",
                            "Enterprise AI Insights Dashboard",
                            "Auto Categorization & Tagging",
                            "Multi-Platform AI Sync",
                            "Dedicated AI Support",
                            "Advanced Security AI",
                            "Custom AI Model Integration",
                        ].map((feature, index) => (
                            <div className="flex items-center gap-3" key={index}>
                                <div className="bg-base-content/10 text-base-content rounded-full p-0.5">
                                    <span className="iconify lucide--check block size-3.5"></span>
                                </div>
                                {feature}
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:gap-8">
                        <p className="text-base-content/80 text-sm">
                            Experience the full AI suite with enterprise-grade automation, security, customization, and
                            dedicated support to power large-scale storage management.
                        </p>
                        <div className="flex items-end justify-end gap-2.5">
                            <button className="btn btn-outline border-base-300 gap-2.5 max-sm:hidden">
                                <span className="iconify lucide--monitor block size-4"></span>
                                <span>Request Demo</span>
                            </button>
                            <button className="btn btn-primary gap-2.5">
                                <span className="iconify lucide--phone-call block size-4"></span>
                                <span>Contact Sales</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
