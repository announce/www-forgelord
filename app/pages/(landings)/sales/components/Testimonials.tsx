export const Testimonials = () => {
    return (
        <div
            className="group/section relative z-10 container scroll-mt-12 py-8 md:py-12 lg:py-16 2xl:py-28"
            id="reviews">
            <div className="flex items-center justify-center">
                <div className="text-base-content/80 border-base-200 flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-sm">
                    <span className="iconify lucide--sparkles size-3.5 text-orange-500"></span>
                    <span>Trusted</span>
                </div>
            </div>
            <p className="mt-2 text-center text-2xl font-semibold sm:text-3xl">Stories From Our Customers</p>
            <div className="mt-2 flex justify-center text-center">
                <p className="text-base-content/80 max-w-lg">
                    Discover how Smart Sales transforms sales processes and delivers tangible growth for teams
                    worldwide.
                </p>
            </div>
            <div className="mt-8 lg:mt-16 xl:mx-20 2xl:mx-36 2xl:mt-24">
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                    <div className="space-y-4 sm:space-y-6">
                        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
                            <div className="card card-border bg-base-100 p-5">
                                <p>
                                    <span className="text-lg font-medium underline">3x ROI</span> in first quarter
                                </p>
                                <p className="text-base-content/80 mt-3 text-sm">
                                    This tool helped us double qualified leads in just two months. The automation saves
                                    us time daily
                                </p>
                                <div className="mt-auto flex items-center gap-2 pt-6">
                                    <img
                                        src="/images/avatars/1.png"
                                        alt="Avatar"
                                        className="bg-base-200 size-10 rounded-full"
                                    />
                                    <div>
                                        <p className="leading-none font-medium">Joel Martin</p>
                                        <p className="text-base-content/60 mt-1 text-xs/none">CEO, SmartFunnels</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-border bg-base-100 p-5">
                                <p>
                                    <span className="text-lg font-medium underline">30% Boost</span> in lead quality
                                </p>
                                <p className="text-base-content/80 mt-3 text-sm">
                                    The integration was seamless, and our conversion rate jumped. The dashboard insights
                                    are awesome
                                </p>
                                <div className="mt-auto flex items-center gap-2 pt-6">
                                    <img
                                        src="/images/avatars/2.png"
                                        alt="Avatar"
                                        className="bg-base-200 size-10 rounded-full"
                                    />
                                    <div>
                                        <p className="leading-none font-medium">Carlos Ortiz</p>
                                        <p className="text-base-content/60 mt-1 text-xs/none">
                                            Growth Hacker, TurboSaaS
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card card-border bg-base-100 p-5">
                            <p className="text-2xl font-semibold">2.5x</p>
                            <p>Growth in monthly signups</p>
                            <p className="text-base-content/80 mt-3 text-sm">
                                This SaaS tool streamlined our sales process, cutting the follow-up time drastically and
                                improving lead quality. It’s been a game changer for our team’s efficiency and revenue
                                growth
                            </p>
                            <div className="mt-auto flex items-end justify-between gap-2 pt-6">
                                <div className="flex items-center gap-2">
                                    <img
                                        src="/images/avatars/3.png"
                                        alt="Avatar"
                                        className="bg-base-200 size-10 rounded-full"
                                    />
                                    <div>
                                        <p className="leading-none font-medium">Joel Martin</p>
                                        <p className="text-base-content/60 mt-1 text-xs/none">
                                            Marketing Manager, Slack
                                        </p>
                                    </div>
                                </div>
                                <img
                                    src="/images/brand-logo/slack.svg"
                                    alt="Avatar"
                                    className="size-6 rounded-full grayscale-100"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card card-border bg-base-100 relative p-5">
                        <span className="iconify lucide--quote text-base-content/10 absolute end-8 top-8 size-16"></span>
                        <p className="text-3xl font-semibold">70%</p>
                        <p className="text-lg font-medium">Faster lead follow-ups</p>
                        <p className="text-base-content/80 mt-3">
                            The onboarding was simple, and the immediate results were palpable. Lead conversions
                            increased, our outreach became more targeted, and customer engagement improved by leaps and
                            bounds
                        </p>
                        <div className="mt-auto flex items-end justify-between gap-2 pt-6">
                            <div className="flex items-center gap-2">
                                <img
                                    src="/images/avatars/4.png"
                                    alt="Avatar"
                                    className="bg-base-200 size-10 rounded-full"
                                />
                                <div>
                                    <p className="leading-none font-medium">Joel Martin</p>
                                    <p className="text-base-content/60 mt-1 text-xs/none">Head of Sales, Jetbrains</p>
                                </div>
                            </div>
                            <img
                                src="/images/brand-logo/intellij.svg"
                                alt="Avatar"
                                className="size-7 rounded-full grayscale-100"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-between gap-2">
                    <div>
                        <div className="flex items-center gap-0.5 sm:gap-1">
                            <span className="iconify lucide--star size-3.5 text-orange-500 sm:size-4.5"></span>
                            <span className="iconify lucide--star size-3.5 text-orange-500 sm:size-4.5"></span>
                            <span className="iconify lucide--star size-3.5 text-orange-500 sm:size-4.5"></span>
                            <span className="iconify lucide--star size-3.5 text-orange-500 sm:size-4.5"></span>
                            <span className="iconify lucide--star size-3.5 text-orange-500 sm:size-4.5"></span>
                            <span className="ms-1.5 font-medium">4.8</span>
                        </div>
                        <p className="text-base-content/80 mt-1 text-xs sm:text-sm">Based on 2.5k+ Reviews</p>
                    </div>
                    <button className="btn btn-outline border-base-300">
                        <p>View All Reviews</p>
                        <span className="iconify lucide--arrow-up-right size-4"></span>
                    </button>
                </div>
            </div>
        </div>
    );
};
