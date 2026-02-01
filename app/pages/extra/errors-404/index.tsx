import { Link } from "react-router";

import { MetaData } from "@/components/MetaData";

const Errors404Page = () => {
    return (
        <>
            <MetaData title="404 Error" />
            <div className="my-12 flex grow flex-col items-center justify-center">
                <p className="text-base-content/60 font-mono text-sm font-medium tracking-[2px] uppercase">Not found</p>
                <p className="mt-6 text-center text-3xl font-semibold tracking-[-1px] transition-all duration-300 hover:tracking-[0px] sm:text-4xl xl:text-5xl">
                    Uh oh. This page took a wrong turn.
                </p>
                <img src="/images/pages/errors-404.png" className="mt-12 w-120 sm:mt-16 xl:mt-20" alt="404 Errors" />

                <Link to="/" className="btn btn-primary mt-12 gap-2 sm:mt-16 xl:mt-20">
                    <span className="iconify lucide--arrow-left size-4.5"></span>
                    Back to Home
                </Link>
            </div>
        </>
    );
};

export default Errors404Page;
