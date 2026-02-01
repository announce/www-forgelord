import { Link } from "react-router";

export const Hero = () => {
    return (
        <div className="relative" id="home">
            <div className="relative z-2 container pt-24 pb-8 md:pt-28 lg:pt-32 lg:pb-16 xl:pt-40 xl:pb-20 2xl:pt-44 2xl:pb-24">
                <div className="grid gap-8 sm:gap-10 xl:grid-cols-2 xl:gap-12 2xl:gap-16">
                    <div className="flex flex-col items-center xl:mt-6 xl:items-start">
                        <div className="hover:bg-success/5 border-success/60 text-success inline-flex cursor-pointer items-center gap-2 rounded-full border px-2.5 py-0.5 text-xs transition-all">
                            <p>Featured in Top AI Tools</p>
                            <span className="iconify lucide--arrow-right inline-block size-3.5"></span>
                        </div>
                        <p className="mt-3 text-3xl leading-tight font-extrabold transition-all duration-1000 lg:text-4xl xl:text-5xl 2xl:text-6xl starting:scale-105 starting:blur-sm">
                            Next-Gen Storage
                            <br />
                            <span className="relative">
                                <span className="rounded-box from-primary/10 to-primary/5 absolute -inset-x-2 inset-y-0 bg-linear-to-r"></span>
                                <span className="text-primary">Organized</span>
                            </span>{" "}
                            By AI
                        </p>
                        <p className="text-base-content/80 mt-4 max-w-xl max-xl:text-center max-sm:text-sm md:text-lg">
                            Never search or sort again. AI automatically cleans up, tags, and shares your files from
                            spoken or written instructions
                        </p>
                        <div className="mt-6 flex items-center gap-3 lg:mt-8">
                            <button className="text-primary-content from-primary rounded-box group to-secondary animate-background-shift btn sm:btn-lg relative cursor-pointer gap-2.5 border-0 bg-linear-to-r bg-[200%,200%]">
                                <span className="iconify lucide--rocket start-1 bottom-1 size-4.5"></span>
                                <p>Get Started</p>
                                <div className="from-primary to-secondary animate-background-shift absolute inset-x-0 top-1.5 -z-1 h-full bg-linear-to-r bg-[200%,200%] opacity-60 blur-md transition-all duration-300 group-hover:top-2 group-hover:opacity-80 group-hover:blur-lg"></div>
                            </button>
                            <Link to="#features" className="btn sm:btn-lg btn-ghost gap-2.5">
                                <span className="iconify lucide--play size-4.5"></span>
                                Watch Demo
                            </Link>
                        </div>
                        <div className="mt-8 space-y-1 md:mt-10 xl:mt-12">
                            <div className="flex items-center gap-2.5">
                                <span className="iconify lucide--check min-w-4"></span>
                                <p className="text-base-content/80 max-sm:text-sm">
                                    Voice-powered cleanup, anytime, anywhere.
                                </p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="iconify lucide--check min-w-4"></span>
                                <p className="text-base-content/80 max-sm:text-sm">
                                    Smart suggestions to optimize your storage.
                                </p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="iconify lucide--check min-w-4"></span>
                                <p className="text-base-content/80 max-sm:text-sm">
                                    Effortless file sharing with zero clicks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative px-4">
                        <div className="from-primary/80 to-secondary/70 animate-background-shift rounded-xl bg-linear-to-r bg-[200%,200%] p-1 sm:p-2 lg:p-3">
                            <img
                                src="/images/storage/hero-main-light.jpg"
                                className="h-56 w-full rounded-lg object-cover object-top-left sm:h-80 md:h-128 dark:hidden"
                                alt="Hero Image"
                            />
                            <img
                                src="/images/storage/hero-main-dark.jpg"
                                className="hidden h-56 w-full rounded-lg object-cover object-top-left sm:h-80 md:h-128 dark:block"
                                alt="Hero Image"
                            />
                        </div>
                        <div className="card bg-base-100 absolute -end-0 top-16 w-60 p-3 shadow-md hover:shadow-lg max-lg:hidden sm:p-4 xl:-end-12 2xl:-end-32">
                            <p className="text-base-content/60 text-sm">
                                Explain contents of <span className="cursor-pointer underline">abc.doc</span>
                            </p>
                            <p className="mt-0.5 font-medium">Generating summary…</p>
                            <div className="mt-1.5 flex flex-col gap-1.5">
                                <div className="rounded-box skeleton h-3 w-[50%]"></div>
                                <div className="rounded-box skeleton h-3 w-[75%]"></div>
                            </div>
                            <div className="mt-3 flex items-end justify-between gap-2">
                                <div className="tooltip" data-tip="In Process">
                                    <span className="iconify lucide--loader text-base-content/60 block size-4 animate-spin"></span>
                                </div>
                                <button className="btn btn-sm btn-error gap-2 border-none">
                                    <span className="iconify lucide--x-square size-4"></span>
                                    Cancel
                                </button>
                            </div>
                        </div>
                        <div className="motion-preset-oscillate motion-duration-3000 card bg-base-100 absolute start-0 bottom-16 w-60 p-3 shadow-md hover:shadow-lg max-lg:hidden sm:p-4 xl:-start-32">
                            <p className="text-base-content/60 text-sm">Share "Project" with Team</p>
                            <p className="mt-1 font-medium">File shared securely with</p>
                            <div className="avatar-group -space-x-3 py-1 *:border-2 *:transition-all hover:space-x-0.5 hover:*:shadow-sm">
                                <div className="avatar bg-base-200 size-8 overflow-hidden rounded-full px-1 pt-1">
                                    <img src="/images/avatars/2.png" alt="Avatar" />
                                </div>
                                <div className="avatar bg-base-200 size-8 overflow-hidden rounded-full px-1 pt-1">
                                    <img src="/images/avatars/3.png" alt="Avatar" />
                                </div>
                                <div className="avatar bg-base-200 size-8 overflow-hidden rounded-full px-1 pt-1">
                                    <img src="/images/avatars/4.png" alt="Avatar" />
                                </div>
                                <div className="avatar bg-base-200 flex size-8 items-center justify-center overflow-hidden rounded-full text-xs font-medium">
                                    +4
                                </div>
                            </div>
                            <div className="mt-2 flex items-end gap-2">
                                <div
                                    className="bg-success/10 tooltip text-success flex items-center rounded-full p-0.5"
                                    data-tip="Shared successfully">
                                    <span className="iconify lucide--check size-3.5"></span>
                                </div>
                                <button className="btn btn-sm btn-soft ms-auto gap-2">
                                    <span className="iconify lucide--copy size-4"></span>
                                    Copy Link
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-8 md:mt-16 lg:grid-cols-4 lg:gap-6 xl:mt-20 2xl:mt-24">
                    <div className="flex flex-col items-center justify-center gap-1">
                        <p className="text-3xl font-semibold">5M+</p>
                        <p className="text-base-content/60 max-sm:text-sm">Users Worldwide</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                        <p className="text-3xl font-semibold">100K+</p>
                        <p className="text-base-content/60 max-sm:text-sm">Companies Onboard</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                        <p className="text-3xl font-semibold">50+</p>
                        <p className="text-base-content/60 max-sm:text-sm">Integrations Available</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                        <p className="text-3xl font-semibold">10B+</p>
                        <p className="text-base-content/60 max-sm:text-sm">Automated Tasks</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
