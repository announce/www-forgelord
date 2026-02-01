export const Capabilities = () => {
    return (
        <div
            className="group/section relative z-10 container scroll-mt-12 py-8 md:py-12 lg:py-16 2xl:py-28"
            id="capabilities">
            <div className="flex items-center justify-center">
                <div className="text-base-content/80 border-base-200 flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-sm">
                    <span className="iconify lucide--wand-2 size-3.5 text-blue-500"></span>
                    <span>Capabilities</span>
                </div>
            </div>
            <p className="mt-2 text-center text-2xl font-semibold sm:text-3xl">Powerful Tools For Sales</p>
            <div className="mt-2 flex justify-center text-center">
                <p className="text-base-content/80 max-w-lg">
                    Unlock automation and insights to help your team close more deals faster
                </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-2 xl:mt-16 xl:gap-12 2xl:mt-20 2xl:gap-16">
                <div className="rounded-box h-fit w-fit overflow-hidden bg-linear-to-br from-blue-500/50 to-purple-500/50 ps-3 pt-3 shadow-md sm:ps-6 sm:pt-6 lg:ps-8 lg:pt-8">
                    <img
                        src="/images/sales/feature-1-light.jpg"
                        className="rounded-tl-box w-full object-cover dark:hidden"
                        alt="Sales Dashboard"
                    />
                    <img
                        src="/images/sales/feature-1-dark.jpg"
                        className="rounded-tl-box hidden w-full object-cover dark:block"
                        alt="Sales Dashboard"
                    />
                </div>

                <div className="2xl:mt-8">
                    <p className="text-primary text-sm font-medium">Insights</p>
                    <p className="mt-1 text-lg font-medium sm:text-xl xl:text-2xl">
                        Real-Time Sales Analytics Dashboard
                    </p>
                    <p className="text-base-content/80 mt-1 max-w-lg">
                        Gain instant visibility into your pipeline with dynamic data and actionable insights
                    </p>
                    <div className="mt-6 space-y-1.5">
                        <div className="flex items-center gap-2">
                            <span className="iconify lucide--check-circle-2 text-success min-w-4.5"></span>
                            <p className="max-sm:text-sm">Customizable reports tailored to your sales goals</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="iconify lucide--check-circle-2 text-success min-w-4.5"></span>
                            <p className="max-sm:text-sm">AI-powered forecasting for smarter decision-making</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="iconify lucide--check-circle-2 text-success min-w-4.5"></span>
                            <p className="max-sm:text-sm">
                                Visual trends and heatmaps highlighting sales opportunities
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="iconify lucide--check-circle-2 text-success min-w-4.5"></span>
                            <p className="max-sm:text-sm">Team performance tracking and leaderboard features</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-2 xl:mt-16 xl:gap-12 2xl:mt-20 2xl:gap-16">
                <div className="order-2 lg:order-1 2xl:mt-8">
                    <p className="text-primary text-sm font-medium">Efficiency</p>
                    <p className="mt-1 text-lg font-medium sm:text-xl xl:text-2xl">Automate Your Sales Workflow</p>
                    <p className="text-base-content/80 mt-1 max-w-lg">
                        Save time by automating repetitive sales tasks and focusing on closing high-value deals
                    </p>
                    <div className="mt-6 space-y-1.5">
                        <div className="flex items-center gap-2">
                            <span className="iconify lucide--check-circle-2 text-success min-w-4.5"></span>
                            <p className="max-sm:text-sm">Intelligent task automation to reduce manual work</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="iconify lucide--check-circle-2 text-success min-w-4.5"></span>
                            <p className="max-sm:text-sm">Personalized email sequences triggered by lead behavior</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="iconify lucide--check-circle-2 text-success min-w-4.5"></span>
                            <p className="max-sm:text-sm">Automatic reminders to always stay on top of follow-ups</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="iconify lucide--check-circle-2 text-success min-w-4.5"></span>
                            <p className="max-sm:text-sm">Seamless integration with your existing tools</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-box order-1 h-fit w-fit overflow-hidden bg-linear-to-br from-cyan-500/50 to-teal-500/50 px-3 pt-3 shadow-md sm:px-6 sm:pt-6 lg:order-2 lg:px-8 lg:pt-8">
                    <img
                        src="/images/sales/feature-2-light.jpg"
                        className="rounded-t-box w-full object-cover dark:hidden"
                        alt="Sales Dashboard"
                    />
                    <img
                        src="/images/sales/feature-2-dark.jpg"
                        className="rounded-t-box hidden w-full object-cover dark:block"
                        alt="Sales Dashboard"
                    />
                </div>
            </div>
        </div>
    );
};
