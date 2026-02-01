export const SaleBannerDemo = () => {
    return (
        <div className="flex w-full items-center gap-0.5 py-3 ps-3 pe-2">
            <div className="flex grow items-center justify-center gap-3">
                <span className="iconify lucide--timer size-5 min-w-5"></span>
                <p className="max-sm:text-sm">
                    Hurry! Sale ends in <span className="font-mono underline">02:30</span> hours.{" "}
                    <span className="max-sm:hidden">Don’t miss out on exclusive discounts.</span>
                </p>
                <button className="btn btn-sm btn-primary">Shop Now</button>
            </div>
            <button className="btn btn-sm btn-square btn-ghost">
                <span className="iconify lucide--x size-4"></span>
            </button>
        </div>
    );
};
