export const ParityBannerDemo = () => {
    return (
        <div className="flex w-full items-center gap-3 py-3 ps-3 pe-2 sm:ps-4">
            <span className="iconify lucide--globe-2 size-5 min-w-5"></span>
            <div className="grow">
                <span className="max-sm:hidden">
                    Special PPP pricing available! Use code{" "}
                    <span className="tooltip font-medium underline underline-offset-2" data-tip="Copy code">
                        LOCAL30
                    </span>{" "}
                    to get a fair discount based on your country’s purchasing power.
                </span>
                <span className="text-sm sm:hidden">Your Code: LOCAL30</span>
            </div>

            <div className="flex items-center gap-0.5">
                <button className="btn btn-sm btn-ghost">How?</button>
                <button className="btn btn-sm btn-square btn-outline border-base-200">
                    <span className="iconify lucide--x size-4"></span>
                </button>
            </div>
        </div>
    );
};
