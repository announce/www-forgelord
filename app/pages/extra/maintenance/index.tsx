import { Link } from "react-router";

import { MetaData } from "@/components/MetaData";

const MaintenancePage = () => {
    return (
        <>
            <MetaData title="Maintenance" />
            <div className="relative flex grow flex-col justify-center py-12">
                <p className="text-base-content/60 text-center font-mono text-sm font-medium tracking-[2px] uppercase">
                    Maintenance
                </p>
                <div className="mt-6 text-center text-3xl font-semibold tracking-[-1px] transition-all duration-300 hover:tracking-[0px] sm:text-4xl sm:font-black xl:text-5xl">
                    We’re just doing a quick tune-up
                </div>
                <p className="text-base-content/80 mt-8 text-center text-lg sm:text-xl xl:text-2xl">
                    We’re working on improving your experience. The site will be back shortly. Thanks for your patience.
                </p>
                <div className="mt-8 grid gap-8 sm:mt-16 lg:grid-cols-3 xl:mt-24">
                    <div className="text-center">
                        <p className="text-lg font-medium">Admin Panel</p>
                        <div className="mt-1 flex items-center justify-center gap-3">
                            <div className="status status-error mt-1 animate-bounce"></div>
                            <p className="text-base-content/80">Getting a quick polish</p>
                        </div>
                        <p className="text-base-content/80 mt-3 text-sm italic">Almost ready to go</p>
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-medium">Website</p>
                        <div className="mt-1 flex items-center justify-center gap-3">
                            <div className="inline-grid *:[grid-area:1/1]">
                                <div className="status status-warning animate-ping"></div>
                                <div className="status status-warning"></div>
                            </div>
                            <p className="text-base-content/80">Experiencing high demand</p>
                        </div>
                        <Link to="#" className="btn btn-sm mt-3 gap-2">
                            <span className="iconify lucide--refresh-ccw size-3.5"></span>
                            Check Updates
                        </Link>
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-medium">Blog</p>
                        <div className="mt-1 flex items-center justify-center gap-3">
                            <div className="inline-grid *:[grid-area:1/1]">
                                <div className="status status-success animate-ping"></div>
                                <div className="status status-success"></div>
                            </div>
                            <p className="text-base-content/80">All systems running</p>
                        </div>
                        <Link to="/company/blogs" className="btn btn-primary btn-sm mt-3 gap-2">
                            <span className="iconify lucide--book-open size-3.5"></span>
                            Explore Articles
                        </Link>
                    </div>
                </div>
                <div className="absolute start-1/2 -top-8 -z-1 -translate-x-1/2 sm:top-48">
                    <img
                        src="/images/pages/maintenance-squares.svg"
                        alt="ComingSoon"
                        className="h-80 rotate-45 opacity-5 sm:h-100 dark:opacity-20"
                    />
                </div>
            </div>
        </>
    );
};

export default MaintenancePage;
