export const CTA = () => {
    return (
        <div className="relative overflow-hidden">
            <div
                className="group/section relative z-10 container scroll-mt-12 py-8 md:py-12 lg:py-16 2xl:py-28"
                id="cta">
                <div className="flex items-center justify-center">
                    <div className="bg-base-200/40 border-base-300/50 shadow-base-300/20 text-base-content/60 group-hover/section:text-base-content rounded-full border px-2.5 py-0.5 font-mono text-xs shadow-inner transition-all duration-300">
                        Maximize Productivity
                    </div>
                </div>

                <p className="mt-2 text-center text-2xl font-semibold sm:text-3xl">
                    Accelerate Development Like Never Before
                </p>
                <div className="mt-2 flex justify-center text-center">
                    <p className="text-base-content/80 max-w-lg">
                        AI-powered development helps you write less, build faster, and deploy smarter. Focus on
                        innovation—we handle the rest.
                    </p>
                </div>
                <div className="mt-4 flex justify-center text-center">
                    <p className="text-base-content/60 text-sm">
                        Join <span className="text-base-content font-semibold">1,200+</span> developers already building
                        with AI.
                    </p>
                </div>
                <div className="mt-8 flex items-center justify-center gap-3">
                    <button className="btn btn-primary from-primary to-secondary shadow-primary-content/20 border-none bg-linear-to-tr from-[50%] shadow-inner">
                        Get Started Now
                    </button>
                    <button className="btn btn-ghost">See It in Action</button>
                </div>
            </div>
        </div>
    );
};
