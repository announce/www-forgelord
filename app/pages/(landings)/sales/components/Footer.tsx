import { Link } from "react-router";

import { Logo } from "@/components/Logo";
import { PurchaseButton } from "@/components/PurchaseButton";

export const Footer = () => {
    return (
        <div
            className="group/section border-base-300 rounded-t-box scroll-mt-12 border-t border-dashed pt-8 md:pt-12 lg:pt-16 2xl:pt-24"
            id="contact"
            data-theme="dark">
            <div className="container">
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="col-span-1">
                        <Link to="/">
                            <Logo />
                        </Link>
                        <p className="text-base-content/80 mt-3 max-w-sm">
                            Explore resources, connect with our team, and find everything you need in one place.
                        </p>
                        <div className="mt-5 flex items-center gap-3">
                            <button
                                className="btn btn-ghost btn-square border-base-300 btn-sm max-w-full gap-3"
                                aria-label="Google">
                                <img src="/images/brand-logo/google.svg" className="size-5 dark:invert" alt="Google" />
                            </button>
                            <button
                                className="btn btn-ghost btn-square border-base-300 btn-sm max-w-full gap-3"
                                aria-label="Apple">
                                <img src="/images/brand-logo/apple.svg" className="size-5 dark:invert" alt="Apple" />
                            </button>
                            <button
                                className="btn btn-ghost btn-square border-base-300 btn-sm max-w-full gap-3"
                                aria-label="Github">
                                <img src="/images/brand-logo/github.svg" className="size-5 dark:invert" alt="Github" />
                            </button>
                            <button
                                className="btn btn-ghost btn-square border-base-300 btn-sm max-w-full gap-3"
                                aria-label="X">
                                <img src="/images/brand-logo/x.svg" className="size-4 dark:invert" alt="X" />
                            </button>
                        </div>
                    </div>
                    <div className="bg-base-300/30 border-base-300/30 rounded-box col-span-1 flex flex-col justify-center border p-4 sm:p-6 xl:p-8 2xl:p-10">
                        <div className="flex gap-4 max-sm:flex-col max-sm:items-center">
                            <div className="grow">
                                <p className="text-lg font-medium sm:text-xl lg:text-2xl">Ready to Boost Your Sales?</p>
                                <p className="text-base-content/60 mt-1 max-w-sm text-sm">
                                    Start your free trial today and close more deals effortlessly with Smart Sales.
                                </p>
                            </div>
                            <div className="sm:text-end">
                                <button className="btn btn-neutral rounded-full">
                                    Start Free Trial
                                    <span className="iconify lucide--arrow-up-right"></span>
                                </button>
                                <p className="text-base-content/60 mt-1 text-xs">No credit card required</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 grid gap-12 md:grid-cols-5 xl:mt-16 2xl:mt-20">
                    <div>
                        <h2 className="text-lg font-medium">Company</h2>
                        <div className="*:not-hover:text-base-content/70 mt-2 flex flex-col gap-2">
                            <Link to="#contact">About</Link>
                            <Link to="#contact">Careers</Link>
                            <Link to="#contact">Blog</Link>
                            <Link to="#contact">Contact</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium">Product</h2>
                        <div className="*:not-hover:text-base-content/70 mt-2 flex flex-col gap-2">
                            <Link to="#contact">Features</Link>
                            <Link to="#contact">Pricing</Link>
                            <Link to="#contact">Integrations</Link>
                            <Link to="#contact">Book a Demo</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium">Support</h2>
                        <div className="*:not-hover:text-base-content/70 mt-2 flex flex-col gap-2">
                            <Link to="#contact">Help Center</Link>
                            <Link to="#contact">FAQs</Link>
                            <Link to="#contact">Status</Link>
                            <Link to="#contact">Security</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium">Legal</h2>
                        <div className="*:not-hover:text-base-content/70 mt-2 flex flex-col gap-2">
                            <Link to="#contact">Privacy Policy</Link>
                            <Link to="#contact">Terms & Conditions</Link>
                            <Link to="#contact">Data Protections</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium">Resources</h2>
                        <div className="*:not-hover:text-base-content/70 mt-2 flex flex-col gap-2">
                            <Link to="#contact">Documentation</Link>
                            <Link to="#contact">Case Studies</Link>
                            <Link to="#contact">Webinars</Link>
                            <Link to="#contact" className="flex items-center gap-2">
                                Community <div className="badge badge-sm badge-primary rounded-full">New</div>
                            </Link>

                            <Link to="#contact">API References</Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="text-base-200 mt-8" />
            <div className="container flex flex-wrap items-center justify-between gap-2 py-4">
                <p>© {new Date().getFullYear()} Scalo - Startup Template</p>
                <p>
                    Concept to Reality by
                    <Link
                        to="https://withden.dev"
                        className="ms-1 text-blue-500 transition-all hover:text-blue-600"
                        target="_blank">
                        Denish
                    </Link>
                </p>
                <PurchaseButton />
            </div>
        </div>
    );
};
