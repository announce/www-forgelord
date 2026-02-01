import React from "react";
import { Link } from "react-router";

import { Logo } from "@/components/Logo";

export const Footer = () => {
    return (
        <div className="relative">
            <div className="absolute inset-0 bg-[url('/images/developer/footer-background.png')] bg-cover bg-center bg-no-repeat opacity-10 dark:opacity-30"></div>

            <div
                className="border-base-200 relative z-2 scroll-mt-12 border-t pt-8 pb-4 md:pt-12 lg:pt-16 lg:pb-8 2xl:pt-28"
                id="contact">
                <div className="container">
                    <div className="grid gap-2 md:grid-cols-5">
                        <div className="border-base-300/50 hover:border-base-300/80 bg-base-200/10 hover:bg-base-200/20 rounded-2xl border p-6 transition-all md:col-span-2">
                            <Link to="/">
                                <Logo className="h-7.5" />
                            </Link>
                            <p className="text-base-content/80 mt-3 max-w-sm leading-5">
                                AI-powered development, built for speed, efficiency & innovation code smarter, deploy
                                faster
                            </p>
                            <p className="mt-8 font-medium">Location</p>
                            <p className="text-base-content/80 text-sm">
                                123 Innovation DriveM
                                <br />
                                San Francisco, CA 94105, USA
                            </p>
                        </div>
                        <div className="border-base-300/50 hover:border-base-300/80 bg-base-200/10 hover:bg-base-200/20 flex flex-col justify-center rounded-2xl border p-6 transition-all md:col-span-3">
                            <div className="flex flex-col items-center">
                                <p className="text-lg font-medium sm:text-xl lg:text-2xl">
                                    Get the Latest AI Development Insights
                                </p>
                                <p className="text-base-content/80 mt-1 max-w-lg text-center text-sm">
                                    Join our newsletter for exclusive updates, AI coding tips, and new feature
                                    releases—delivered straight to your inbox
                                </p>
                            </div>

                            <div className="mt-4 flex items-start justify-center gap-4">
                                <div>
                                    <div className="input w-40 sm:w-64">
                                        <span className="iconify lucide--mail text-base-content/80 size-5"></span>
                                        <input name="email" placeholder="Email Address" type="email" />
                                    </div>
                                    <p className="text-base-content/60 mt-0.5 text-sm italic">
                                        No spam, unsubscribe anytime
                                    </p>
                                </div>
                                <button className="btn btn-primary">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="border-base-300/50 hover:border-base-300/80 bg-base-200/10 hover:bg-base-200/20 rounded-2xl border p-6 transition-all">
                            <p className="text-lg font-medium">Social & Contact</p>
                            <div className="**:text-base-content/80 **:hover:text-base-content mt-2 flex flex-col gap-2 **:text-sm **:transition-all">
                                <Link to="#contact">Twitter</Link>
                                <Link to="#contact">LinkedIn</Link>
                                <Link to="#contact">Google</Link>
                                <Link to="#contact">Discord</Link>
                                <Link to="#contact">Email us</Link>
                            </div>
                        </div>
                        <div className="border-base-300/50 hover:border-base-300/80 bg-base-200/10 hover:bg-base-200/20 rounded-2xl border p-6 transition-all">
                            <p className="text-lg font-medium">Quick Links</p>
                            <div className="**:text-base-content/80 **:hover:text-base-content mt-2 flex flex-col gap-2 **:text-sm **:transition-all">
                                <Link to="#contact">Home</Link>
                                <Link to="#contact">Features</Link>
                                <Link to="#contact">Pricing</Link>
                                <Link to="#contact">About Us</Link>
                                <Link to="#contact">Contact</Link>
                            </div>
                        </div>
                        <div className="border-base-300/50 hover:border-base-300/80 bg-base-200/10 hover:bg-base-200/20 rounded-2xl border p-6 transition-all">
                            <p className="text-lg font-medium">Resources</p>
                            <div className="**:text-base-content/80 **:hover:text-base-content mt-2 flex flex-col gap-2 **:text-sm **:transition-all">
                                <Link to="#contact">Documentation</Link>
                                <Link to="#contact">Blog</Link>
                                <Link to="#contact">Tutorials</Link>
                                <Link to="#contact">Support</Link>
                            </div>
                        </div>
                        <div className="border-base-300/50 hover:border-base-300/80 bg-base-200/10 hover:bg-base-200/20 rounded-2xl border p-6 transition-all">
                            <p className="text-lg font-medium">Legal</p>
                            <div className="**:text-base-content/80 **:hover:text-base-content mt-2 flex flex-col gap-2 **:text-sm **:transition-all">
                                <Link to="#contact">Terms of Service</Link>
                                <Link to="#contact">Privacy Policy</Link>
                                <Link to="#contact">License</Link>
                                <Link to="#contact">Disclaimer</Link>
                                <Link to="#contact">Refund Policy</Link>
                            </div>
                        </div>
                    </div>
                    <div className="border-base-300/50 hover:border-base-300/80 bg-base-200/10 hover:bg-base-200/20 mt-2 flex flex-wrap items-center justify-between gap-3 rounded-2xl border px-6 py-4 transition-all max-sm:text-sm">
                        <p className="">© {new Date().getFullYear()} Scalo - Startup Template</p>
                        <p>
                            Concept to Reality by
                            <Link
                                to="https://withden.dev"
                                className="ms-1 text-blue-500 transition-all hover:text-blue-600"
                                target="_blank">
                                Denish
                            </Link>
                        </p>
                        <div className="inline-flex items-center gap-4">
                            <Link to="#contact" className="text-base-content/80 hover:text-base-content transition-all">
                                Terms
                            </Link>
                            <Link to="#contact" className="text-base-content/80 hover:text-base-content transition-all">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
