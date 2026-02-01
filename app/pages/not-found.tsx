import { Link } from "react-router";

import { Logo } from "@/components/Logo";
import { MetaData } from "@/components/MetaData";
import { ThemeToggle } from "@/components/ThemeToggle";

const NotFoundPage = () => {
    return (
        <>
            <MetaData title="Not Found - 404" noIndex />

            <div className="container flex h-screen w-screen flex-col py-4">
                <div className="fixed inset-0 -z-20 bg-[url('/images/pages/squares-background.png')] opacity-2 dark:invert"></div>
                <div className="fixed inset-0 -z-19 bg-[url('/images/pages/mesh-background.jpg')] [background-size:110%] object-fill opacity-2"></div>
                <div className="to-base-100 via-base-100/40 fixed inset-0 top-0 -z-1 bg-linear-to-b from-transparent"></div>
                <div className="flex items-center justify-between">
                    <Link to="/">
                        <Logo />
                    </Link>
                    <ThemeToggle className="btn btn-circle btn-sm btn-ghost" />
                </div>
                <div className="my-12 flex grow flex-col items-center justify-center">
                    <p className="text-base-content/60 font-mono text-sm font-medium tracking-[2px] uppercase">
                        Not found
                    </p>
                    <p className="mt-6 text-center text-3xl font-semibold tracking-[-1px] transition-all duration-300 hover:tracking-[0px] sm:text-4xl xl:text-5xl">
                        Uh oh. This page took a wrong turn.
                    </p>
                    <img
                        src="/images/pages/errors-404.png"
                        className="mt-12 w-120 sm:mt-16 xl:mt-20"
                        alt="404 Errors"
                    />

                    <Link to="/" className="btn btn-primary mt-12 gap-2 sm:mt-16 xl:mt-20">
                        <span className="iconify lucide--arrow-left size-4.5"></span>
                        Back to Home
                    </Link>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 max-sm:text-sm">
                    <p>&copy; {new Date().getFullYear()} Scalo - Startup Template</p>
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
                        <Link className="link hover:link-primary no-underline" to="/">
                            Terms
                        </Link>
                        <Link className="link hover:link-primary no-underline" to="/">
                            Privacy
                        </Link>
                        <Link className="link hover:link-primary no-underline" to="/">
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;
