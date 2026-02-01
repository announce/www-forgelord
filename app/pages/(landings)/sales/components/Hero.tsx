import { Link } from "react-router";

export const Hero = () => {
    return (
        <div className="relative" id="home">
            <div className="absolute inset-0 -top-2 h-[1200px] bg-[url(/images/sales/hero-bg-gradient.png)] [background-size:200%_60%] bg-no-repeat opacity-50 [background-position-x:center] sm:[background-size:100%_100%] dark:opacity-50" />

            <div className="relative z-2 container pt-20 pb-8 md:pt-28 lg:pt-32 lg:pb-16 xl:pt-40 xl:pb-20 2xl:pt-44 2xl:pb-24">
                <div className="flex items-center justify-center">
                    <div className="max-w-2xl text-center">
                        <div className="text-base-content/80 flex cursor-pointer items-center justify-center gap-2 hover:underline">
                            <p className="max-md:text-sm">
                                Grow Your Business <span className="text-base-content font-medium">10×</span> Faster
                            </p>
                            <span className="iconify lucide--arrow-right inline-block size-3.5"></span>
                        </div>

                        <p className="text-2xl leading-tight font-extrabold transition-all duration-1000 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl starting:scale-105 starting:blur-sm">
                            Increase Conversions by{" "}
                            <span className="relative">
                                <span className="from-primary/10 animate-background-shift to-secondary/10 absolute -inset-x-2 inset-y-0 rotate-1 bg-linear-to-r bg-[300%,300%]"></span>
                                <span className="from-primary to-secondary animate-background-shift relative bg-linear-to-r bg-[300%,300%] bg-clip-text text-transparent">
                                    52% in 3
                                </span>
                            </span>{" "}
                            Months
                        </p>
                        <p className="text-base-content/80 mt-3 max-sm:text-sm sm:mt-5 md:text-lg">
                            Most teams spend 70% of their time on prospects who won’t buy. Smart Sales changes that —
                            automatically
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-3 lg:mt-8">
                            <button className="text-primary-content from-primary rounded-box group to-secondary animate-background-shift relative cursor-pointer border-0 bg-linear-to-r bg-[200%,200%] px-5.5 py-3">
                                <div className="flex items-end justify-between gap-2">
                                    <span className="iconify lucide--rocket start-1 bottom-1 size-3.5 opacity-40"></span>
                                    <p className="-mt-0.5 text-end text-xs opacity-60">Start Free</p>
                                </div>
                                <p className="mt-0.5 text-lg/none font-medium">Boost Sales</p>
                                <div className="from-primary to-secondary animate-background-shift absolute inset-x-0 top-1.5 -z-1 h-full bg-linear-to-r bg-[200%,200%] opacity-60 blur-md transition-all duration-300 group-hover:top-2 group-hover:opacity-80 group-hover:blur-lg"></div>
                            </button>
                            <Link to="#capabilities" className="btn btn-lg btn-ghost gap-2.5">
                                <span className="iconify lucide--play-circle size-4.5"></span>
                                In Action
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative mt-8 flex items-center justify-center md:mt-10 xl:mt-12">
                    <div className="from-primary/15 to-secondary/15 rounded-2xl bg-linear-to-br p-1.5">
                        <img
                            src="/images/sales/hero-dashboard-light.jpg"
                            className="h-full max-w-full rounded-xl xl:max-w-6xl dark:hidden"
                            alt="Dashboard"
                        />
                        <img
                            src="/images/sales/hero-dashboard-dark.jpg"
                            className="hidden h-full max-w-full rounded-xl xl:max-w-6xl dark:block"
                            alt="Dashboard"
                        />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-(--root-bg) to-[70%] md:h-36 lg:h-44 xl:h-68"></div>
                </div>
                <div className="mt-0">
                    <p className="text-base-content/80 text-center font-medium md:text-lg xl:text-xl">
                        Trusted by 2,000+ sales teams worldwide
                    </p>
                    <div className="mt-8 flex items-center justify-between *:cursor-pointer *:opacity-80 *:grayscale-100 *:transition-all *:duration-300 group-hover:grayscale-0 *:hover:opacity-100 *:hover:grayscale-0 max-sm:justify-around md:mt-12 xl:mt-16">
                        <img src="/images/brand-logo/adobe-full.svg" alt="Image" className="h-6 sm:h-8" />
                        <img src="/images/brand-logo/microsoft-full.svg" alt="Image" className="h-6 sm:h-8" />
                        <img src="/images/brand-logo/oracle-full.svg" alt="Image" className="h-5 max-lg:hidden" />
                        <img src="/images/brand-logo/google-full.svg" alt="Image" className="h-9 max-md:hidden" />
                        <img src="/images/brand-logo/ibm-full.svg" alt="Image" className="h-7.5 max-sm:hidden" />
                    </div>
                </div>
            </div>
            <div className="card motion-preset-oscillate motion-duration-3000 bg-base-100 group absolute start-20 top-70 z-2 cursor-pointer p-3 shadow transition-all duration-300 hover:shadow-lg max-lg:hidden xl:start-40 2xl:start-80">
                <div className="flex items-center gap-2">
                    <div className="avatar-group -space-x-4 *:border-2">
                        <div className="avatar bg-base-200 size-9 overflow-hidden rounded-full px-1 pt-1">
                            <img src="/images/avatars/1.png" alt="Avatar" />
                        </div>
                        <div className="avatar bg-base-200 size-9 overflow-hidden rounded-full px-1 pt-1">
                            <img src="/images/avatars/2.png" alt="Avatar" />
                        </div>
                        <div className="avatar bg-base-200 size-9 overflow-hidden rounded-full px-1 pt-1">
                            <img src="/images/avatars/3.png" alt="Avatar" />
                        </div>
                        <div className="avatar bg-base-200 size-9 overflow-hidden rounded-full px-1 pt-1">
                            <img src="/images/avatars/4.png" alt="Avatar" />
                        </div>
                    </div>
                    <p className="font-medium">12k+</p>
                </div>
                <p className="text-base-content/60 mt-1 text-sm">Trusted by Businesses</p>
            </div>
            <div className="card bg-base-100 group absolute start-60 top-160 z-2 w-40 cursor-pointer p-3 shadow transition-all duration-300 hover:shadow-lg max-2xl:hidden">
                <div className="flex justify-center gap-3">
                    <div className="grow">
                        <div className="from-primary to-primary/40 h-1 w-10 rounded-full bg-linear-to-r"></div>
                        <p className="text-primary mt-2 text-xl/tight font-medium">+67%</p>
                    </div>
                    <span className="iconify text-base-content lucide--arrow-up-right size-4.5 opacity-40 transition-all duration-300 group-hover:opacity-100"></span>
                </div>
                <p className="text-base-content/60 text-sm">Increasing sales</p>
            </div>
            <div className="card bg-base-100 group absolute end-24 top-120 z-2 cursor-pointer p-3 shadow transition-all duration-300 hover:shadow-lg max-lg:hidden xl:end-40 2xl:end-60">
                <div className="flex items-center justify-between gap-3">
                    <p className="font-medium">Business Growth</p>
                    <span className="iconify text-base-content lucide--arrow-up-right size-4.5 opacity-40 transition-all duration-300 group-hover:opacity-100"></span>
                </div>
                <div className="border-base-200 mt-3 flex items-end gap-3.5 border-s border-b px-2 pt-1">
                    <div className="tooltip flex items-end gap-1" data-tip="20% increase in revenue">
                        <div className="bg-primary/30 h-10 w-3.5 rounded-xs"></div>
                        <div className="bg-primary/80 h-14 w-3.5 rounded-xs"></div>
                    </div>
                    <div className="tooltip flex items-end gap-1" data-tip="42% increase in revenue">
                        <div className="bg-primary/30 h-14 w-3.5 rounded-xs"></div>
                        <div className="bg-primary/80 h-18 w-3.5 rounded-xs"></div>
                    </div>
                    <div className="tooltip flex items-end gap-1" data-tip="36% increase in revenue">
                        <div className="bg-primary/30 h-12 w-3.5 rounded-xs"></div>
                        <div className="bg-primary/80 h-16 w-3.5 rounded-xs"></div>
                    </div>
                    <div className="tooltip flex items-end gap-1" data-tip="28% increase in revenue">
                        <div className="bg-primary/30 h-8 w-3.5 rounded-xs"></div>
                        <div className="bg-primary/80 h-14 w-3.5 rounded-xs"></div>
                    </div>
                </div>
                <div className="text-base-content/60 mt-0.5 flex items-center justify-between px-5 text-xs">
                    <p>A</p>
                    <p>B</p>
                    <p>C</p>
                    <p>D</p>
                </div>
                <div className="text-base-content/80 mt-2 flex items-center justify-center gap-2 text-xs">
                    <div className="bg-primary/30 size-2.5 rounded-xs"></div>
                    <p>Previous</p>
                    <div className="bg-primary/80 ms-2 size-2.5 rounded-xs"></div>
                    <p>Smart Sales</p>
                </div>
            </div>
        </div>
    );
};
