import { Link } from "react-router";

import { Logo } from "@/components/Logo";
import { PurchaseButton } from "@/components/PurchaseButton";

export const Footer = () => {
    return (
        <div className="group/section pt-4 md:pt-6 lg:pt-8 2xl:pt-12" id="contact">
            <div className="-mb-32 flex items-center justify-center">
                <div
                    className="bg-base-100 group relative flex max-w-xs flex-col items-center overflow-hidden rounded-lg p-4 text-center sm:w-5xl sm:max-w-4xl md:p-6 xl:p-10"
                    data-theme="dark">
                    <span className="iconify lucide--circle absolute -start-16 -top-16 size-44 opacity-5 transition-all group-hover:size-48 group-hover:opacity-10"></span>
                    <span className="iconify lucide--circle absolute -end-16 -bottom-16 size-44 opacity-5 transition-all group-hover:size-48 group-hover:opacity-10"></span>

                    <p className="text-lg font-semibold md:text-xl xl:text-2xl">Unlock Effortless AI Storage</p>
                    <p className="text-base-content/80 mt-2 max-w-2xl text-xs sm:text-sm md:text-base">
                        Get started in minutes and experience secure, automated storage management powered by advanced
                        AI features. Simplify your data life now.
                    </p>
                    <div className="mt-4 flex items-center gap-3 xl:mt-6">
                        <button className="btn btn-primary btn-lg gap-2.5">
                            <span className="iconify lucide--rocket start-1 bottom-1 size-4.5"></span>
                            <p>Get Started</p>
                        </button>
                        <Link to="#" className="btn btn-lg btn-ghost gap-2.5 max-sm:hidden">
                            <span className="iconify lucide--play size-4.5"></span>
                            Book a Demo
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-base-200/25 pt-44 xl:pt-60">
                <div className="container">
                    <div className="grid gap-6 md:grid-cols-5 md:gap-8 xl:gap-12">
                        <div className="col-span-2">
                            <Link to="/">
                                <Logo />
                            </Link>
                            <p className="text-base-content/80 mt-3 max-w-sm">
                                Effortlessly secure, organize, and sync your data. AI storage made simple. Stay
                                connected...
                            </p>
                            <div className="mt-5 flex items-center gap-3">
                                <button
                                    className="btn btn-ghost btn-square border-base-300 btn-sm max-w-full gap-3"
                                    aria-label="Google">
                                    <img
                                        src="/images/brand-logo/google.svg"
                                        className="size-5 dark:invert"
                                        alt="Google"
                                    />
                                </button>
                                <button
                                    className="btn btn-ghost btn-square border-base-300 btn-sm max-w-full gap-3"
                                    aria-label="Apple">
                                    <img
                                        src="/images/brand-logo/apple.svg"
                                        className="size-5 dark:invert"
                                        alt="Apple"
                                    />
                                </button>
                                <button
                                    className="btn btn-ghost btn-square border-base-300 btn-sm max-w-full gap-3"
                                    aria-label="Github">
                                    <img
                                        src="/images/brand-logo/github.svg"
                                        className="size-5 dark:invert"
                                        alt="Github"
                                    />
                                </button>
                                <button
                                    className="btn btn-ghost btn-square border-base-300 btn-sm max-w-full gap-3"
                                    aria-label="X">
                                    <img src="/images/brand-logo/x.svg" className="size-4 dark:invert" alt="X" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-medium">Explore</h2>
                            <div className="*:not-hover:text-base-content/70 mt-2 flex flex-col gap-2">
                                <Link to="#contact">Features </Link>
                                <Link to="#contact">Automation</Link>
                                <Link to="#contact">Integrations</Link>
                                <Link to="#contact">Resources</Link>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-lg font-medium">Community</h2>
                            <div className="*:not-hover:text-base-content/70 mt-2 flex flex-col gap-2">
                                <Link to="#contact">Forum</Link>
                                <Link to="#contact">Partners</Link>
                                <Link to="#contact" className="flex items-center gap-2">
                                    Events <div className="badge badge-sm badge-primary rounded-full">New</div>
                                </Link>
                                <Link to="#contact">Blog</Link>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-medium">Help</h2>
                            <div className="*:not-hover:text-base-content/70 mt-2 flex flex-col gap-2">
                                <Link to="#contact">Support</Link>
                                <Link to="#contact">FAQ</Link>
                                <Link to="#contact">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="text-base-200 mt-8" />
                <div className="container flex flex-wrap items-center justify-between gap-2 py-4">
                    <p>© {new Date().getFullYear()} Scalo - Startup Template</p>
                    <p>
                        Concept to Reality by
                        <Link to="" className="ms-1 text-blue-500 transition-all hover:text-blue-600" target="_blank">
                            Denish
                        </Link>
                    </p>
                    <PurchaseButton />
                </div>
            </div>
        </div>
    );
};
