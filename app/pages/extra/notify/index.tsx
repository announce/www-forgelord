import { MetaData } from "@/components/MetaData";

const NotifyPage = () => {
    return (
        <>
            <MetaData title="Notify" />
            <div className="relative flex grow flex-col justify-center py-6 sm:py-12">
                <div className="grid grid-cols-1 gap-8 sm:gap-16 lg:grid-cols-2 lg:gap-12">
                    <div className="order-2 sm:order-1">
                        <p className="text-base-content/60 font-mono text-sm font-medium tracking-[2px] uppercase">
                            Notify
                        </p>
                        <p className="mt-2 text-2xl font-semibold sm:text-3xl xl:text-4xl">Be the First to Know</p>
                        <p className="text-base-content/80 mt-2">
                            Something exciting is on the way. Drop your email and we’ll let you know the moment it’s
                            live.
                        </p>
                        <label className="input mt-8 w-72 sm:mt-12 lg:mt-16">
                            <span className="iconify lucide--mail text-base-content/80 size-5"></span>
                            <input name="email" placeholder="Email Address" id="email" type="email" />
                        </label>
                        <p className="text-base-content/60 mt-0.5 text-xs italic sm:text-sm">
                            No spam. Just a quick heads-up when we’re ready.
                        </p>
                        <button className="btn btn-primary mt-6 gap-2">
                            <span className="iconify lucide--bell-ring size-4"></span>Subscribe
                        </button>
                    </div>
                    <div className="border-base-200 rounded-box bg-base-100 shadow-base-content/5 order-1 p-2 shadow-lg transition-all hover:shadow-xl sm:order-2">
                        <img
                            src="/images/developer/hero-dashboard-light.jpg"
                            className="rounded-sm dark:hidden"
                            alt="Dashboard"
                        />
                        <img
                            src="/images/developer/hero-dashboard-dark.jpg"
                            className="hidden rounded-sm dark:block"
                            alt="Dashboard"
                        />
                    </div>
                </div>
                <div className="absolute end-0 top-24 -z-1">
                    <img
                        src="/images/pages/notify-spiral.svg"
                        alt="ComingSoon"
                        className="h-40 opacity-10 sm:h-60 dark:opacity-30"
                    />
                </div>
            </div>
        </>
    );
};

export default NotifyPage;
