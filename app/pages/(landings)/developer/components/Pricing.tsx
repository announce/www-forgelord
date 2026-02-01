export const Pricing = () => {
    return (
        <div className="relative scroll-mt-12">
            <img
                src="/images/developer/pricing-background.svg"
                alt=""
                className="absolute z-1 opacity-10 dark:opacity-20"
            />
            <div className="group/section relative z-2 container py-8 md:py-12 lg:py-16 2xl:py-28" id="pricing">
                <div className="flex items-center justify-center">
                    <div className="bg-base-200/40 border-base-300/50 shadow-base-300/20 text-base-content/60 group-hover/section:text-base-content rounded-full border px-2.5 py-0.5 font-mono text-xs shadow-inner transition-all duration-300">
                        Simple & Transparent
                    </div>
                </div>
                <p className="mt-2 text-center text-2xl font-semibold sm:text-3xl">
                    Straightforward Pricing, No Surprises
                </p>
                <div className="mt-2 flex justify-center text-center">
                    <p className="text-base-content/80 max-w-lg">
                        Choose a plan that fits your needs—whether you're an indie developer, a growing startup, or an
                        enterprise team
                    </p>
                </div>
                <div className="mt-8 flex items-center justify-center xl:mt-12">
                    <div className="tabs tabs-box tabs-sm border-base-300 relative border bg-transparent">
                        <label className="tab has-[:checked]:!bg-base-200/80 gap-0">
                            <input type="radio" name="plan_duration" value="monthly" />
                            <p className="mx-2">Monthly</p>
                        </label>
                        <label className="tab has-[:checked]:!bg-base-200/80 gap-0">
                            <input type="radio" value="yearly" name="plan_duration" defaultChecked />
                            <div className="gap mx-2 flex items-center gap-1.5">
                                <span className="iconify lucide--award size-4"></span>
                                <p>Yearly</p>
                                <div className="bg-base-200/10 border-base-300 rounded-full border px-1 !text-xs">
                                    -10%
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="mt-8 grid items-center gap-8 lg:mt-12 xl:grid-cols-3 2xl:mt-16">
                    <div className="border-base-300/50 group hover:border-base-300 bg-base-200/20 rounded-box h-fit cursor-pointer border p-6 transition-all">
                        <div className="rounded-box border-base-300/60 group-hover:border-base-300 inline-flex border p-2.5 transition-all">
                            <span className="iconify lucide--terminal block size-6"></span>
                        </div>
                        <p className="mt-2 text-xl font-medium">Solo Dev</p>
                        <p className="text-base-content/80 text-sm">Essential tools for individual developers</p>
                        <div className="mt-8 text-center">
                            <p className="text-5xl leading-0 font-semibold">
                                <span className="text-base-content/80 align-super text-xl font-medium">$</span>
                                <span className="relative inline-block h-8 w-12">
                                    <span className="absolute start-0 top-1/2 translate-y-1/2 scale-0 opacity-0 transition-all duration-500 group-has-[[value=yearly]:checked]/section:scale-100 group-has-[[value=yearly]:checked]/section:opacity-100">
                                        29
                                    </span>
                                    <span className="absolute start-0 top-1/2 translate-y-1/2 scale-0 opacity-0 transition-all duration-500 group-has-[[value=monthly]:checked]/section:scale-100 group-has-[[value=monthly]:checked]/section:opacity-100">
                                        39
                                    </span>
                                </span>
                            </p>
                            <p className="text-base-content/80 mt-1 text-sm">/user/month</p>
                        </div>
                        <p className="text-base-content/80 mt-8 text-sm font-medium">Features</p>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-3">
                                <div className="border-base-300/80 text-base-content/80 rounded-box border p-1.5">
                                    <span className="iconify lucide--bot block size-4"></span>
                                </div>
                                AI Pair Programming
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="border-base-300/80 text-base-content/80 rounded-box border p-1.5">
                                    <span className="iconify lucide--globe block size-4"></span>
                                </div>
                                Multi-language Support
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="border-base-300/80 text-base-content/80 rounded-box border p-1.5">
                                    <span className="iconify lucide--file-plus block size-4"></span>
                                </div>
                                Basic Project Generation
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-error rounded-box mx-px p-1.5">
                                    <span className="iconify lucide--x block size-4"></span>
                                </div>
                                No team collaboration
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-error rounded-box mx-px p-1.5">
                                    <span className="iconify lucide--x block size-4"></span>
                                </div>
                                No priority support
                            </div>
                        </div>
                        <button className="btn btn-outline border-base-content/5 rounded-box btn-block mt-8">
                            Get Started
                        </button>
                    </div>
                    <div className="border-base-300/50 hover:border-base-300 group from-base-200/10 to-base-200/30 hover:to-base-200/40 hover:from-base-content/3 rounded-box h-fit cursor-pointer border bg-gradient-to-tr p-6 transition-all">
                        <div className="flex justify-between">
                            <div className="rounded-box border-base-300/60 group-hover:border-base-300 text-primary inline-flex border p-2.5 transition-all">
                                <span className="iconify lucide--layers block size-6"></span>
                            </div>
                            <div className="badge badge-sm badge-primary">Most Popular</div>
                        </div>
                        <p className="mt-2 text-xl font-medium">Team Build</p>
                        <p className="text-base-content/80 text-sm">Collaboration & automation for growing teams</p>
                        <div className="mt-8 text-center">
                            <p className="text-primary text-5xl leading-0 font-semibold">
                                <span className="text-base-content/80 align-super text-xl font-medium">$</span>
                                <span className="relative inline-block h-8 w-12">
                                    <span className="absolute start-0 top-1/2 translate-y-1/2 scale-0 opacity-0 transition-all duration-500 group-has-[[value=yearly]:checked]/section:scale-100 group-has-[[value=yearly]:checked]/section:opacity-100">
                                        49
                                    </span>
                                    <span className="absolute start-0 top-1/2 translate-y-1/2 scale-0 opacity-0 transition-all duration-500 group-has-[[value=monthly]:checked]/section:scale-100 group-has-[[value=monthly]:checked]/section:opacity-100">
                                        59
                                    </span>
                                </span>
                            </p>
                            <p className="text-base-content/80 mt-1 text-sm">/user/month</p>
                        </div>
                        <p className="text-base-content/80 mt-8 text-sm font-medium">Features</p>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-3 opacity-60">
                                <div className="border-base-300/60 bg-base-200/40 rounded-box border p-1.5">
                                    <span className="iconify lucide--terminal block size-4"></span>
                                </div>
                                Everything in Solo Dev
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="border-base-300/80 rounded-box border p-1.5">
                                    <span className="iconify lucide--package block size-4"></span>
                                </div>
                                Full Project Generation
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="border-base-300/80 rounded-box border p-1.5">
                                    <span className="iconify lucide--users-round block size-4"></span>
                                </div>
                                Team Collaboration
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="border-base-300/80 rounded-box border p-1.5">
                                    <span className="iconify lucide--bug block size-4"></span>
                                </div>
                                AI-powered Debugging Assistance
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-error rounded-box mx-px p-1.5">
                                    <span className="iconify lucide--x block size-4"></span>
                                </div>
                                No custom integrations
                            </div>
                        </div>
                        <button className="btn bg-primary/5 border-primary/40 hover:bg-primary/20 rounded-box btn-block mt-8 gap-2">
                            <span className="iconify lucide--rocket block size-4.5"></span>
                            Upgrade to Pro
                        </button>
                        <div className="text-base-content/50 mt-2 flex items-center justify-center gap-1.5 text-sm">
                            <span className="iconify lucide--circle-dollar-sign size-4"></span>
                            30 days hassle-free refund
                        </div>
                    </div>
                    <div className="border-base-300/50 group hover:border-base-300 bg-base-200/20 rounded-box h-fit cursor-pointer border p-6 transition-all">
                        <div className="rounded-box border-base-content/5 group-hover:border-base-300 inline-flex border p-2.5 transition-all">
                            <span className="iconify lucide--server size-6"></span>
                        </div>
                        <p className="mt-2 text-xl font-medium">Scale Max</p>
                        <p className="text-base-content/80 text-sm">Enterprise-grade AI for large-scale projects</p>
                        <div className="mt-8 text-center">
                            <p className="text-5xl leading-0 font-semibold">
                                <span className="text-base-content/80 align-super text-xl font-medium">$</span>
                                <span className="relative inline-block h-8 w-12">
                                    <span className="absolute start-0 top-1/2 translate-y-1/2 scale-0 opacity-0 transition-all duration-500 group-has-[[value=yearly]:checked]/section:scale-100 group-has-[[value=yearly]:checked]/section:opacity-100">
                                        89
                                    </span>
                                    <span className="absolute start-0 top-1/2 translate-y-1/2 scale-0 opacity-0 transition-all duration-500 group-has-[[value=monthly]:checked]/section:scale-100 group-has-[[value=monthly]:checked]/section:opacity-100">
                                        99
                                    </span>
                                </span>
                            </p>
                            <p className="text-base-content/80 mt-1 text-sm">/user/month</p>
                        </div>
                        <p className="text-base-content/80 mt-8 text-sm font-medium">Features</p>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-3 opacity-60">
                                <div className="border-base-300/60 bg-base-200/40 rounded-box border p-1.5">
                                    <span className="iconify lucide--layers block size-4"></span>
                                </div>
                                Everything in Team Build
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="border-base-300/80 rounded-box border p-1.5">
                                    <span className="iconify lucide--user-cog block size-4"></span>
                                </div>
                                Unlimited Team Members
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="border-base-300/80 rounded-box border p-1.5">
                                    <span className="iconify lucide--sliders block size-4"></span>
                                </div>
                                Private AI Model Customization
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="border-base-300/80 rounded-box border p-1.5">
                                    <span className="iconify lucide--headset block size-4"></span>
                                </div>
                                Priority Support
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="border-base-300/80 rounded-box border p-1.5">
                                    <span className="iconify lucide--shield-check block size-4"></span>
                                </div>
                                Enterprise-grade Security
                            </div>
                        </div>
                        <button className="btn bg-secondary/5 border-secondary/40 hover:bg-secondary/20 rounded-box btn-block mt-8 gap-2">
                            <span className="iconify lucide--messages-square block size-4.5"></span>
                            Contact Sales
                        </button>
                        <div className="text-base-content/50 mt-2 flex items-center justify-center gap-1.5 text-sm">
                            <span className="iconify lucide--circle-dollar-sign size-4"></span>
                            60 days hassle-free refund
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
