import React, { ReactNode } from "react";
import { Link } from "react-router";

import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="grid h-screen lg:place-items-center lg:py-5">
            <div className="fixed inset-0 -z-20 bg-[url('/images/pages/squares-background.png')] opacity-2 dark:invert"></div>
            <div className="fixed inset-0 -z-19 bg-[url('/images/pages/mesh-background.jpg')] [background-size:110%] object-fill opacity-2"></div>
            <div className="to-base-100 fixed inset-0 top-2/5 -z-1 bg-linear-to-b from-transparent"></div>
            <div className="bg-base-100 card p-6 min-lg:shadow">
                <div className="flex gap-6 2xl:gap-8">
                    <div className="relative max-lg:hidden">
                        <img
                            src="/images/auth/auth-side.jpg"
                            className="rounded-box h-full w-110 object-cover dark:hidden"
                            alt="Auth side image"
                        />
                        <img
                            src="/images/auth/auth-side-dark.jpg"
                            className="rounded-box hidden h-full w-110 object-cover dark:block"
                            alt="Auth side image"
                        />
                        <div className="rounded-box absolute start-5 end-5 bottom-5 border border-white/30 bg-white/40 p-5 backdrop-blur-md dark:border-black/5 dark:bg-black/20">
                            <p>
                                This platform transformed the way we work. AI-driven tools have never been this
                                intuitive!
                            </p>
                            <div className="mt-3 flex items-end gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle size-10">
                                        <img src="/images/avatars/3.png" alt="Avatar" />
                                    </div>
                                </div>
                                <div className="grow">
                                    <p className="text-lg font-medium">John Doe</p>
                                    <p className="text-sm leading-none opacity-80">CEO@TechCorp</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="iconify lucide--star size-4.5"></span>
                                    <span className="iconify lucide--star size-4.5"></span>
                                    <span className="iconify lucide--star size-4.5"></span>
                                    <span className="iconify lucide--star size-4.5"></span>
                                    <span className="iconify lucide--star size-4.5"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grow lg:w-sm">
                        <div className="flex items-center justify-between">
                            <Link to="/">
                                <Logo />
                            </Link>
                            <ThemeToggle className="btn btn-circle btn-sm btn-ghost" />
                        </div>
                        <div className="mt-8 2xl:mt-12">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
