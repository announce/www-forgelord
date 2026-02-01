export const StatsCTADemo = () => {
    return (
        <div className="">
            <div className="flex items-center justify-center gap-0.5">
                <button className="btn btn-primary from-primary to-secondary gap-2 border-none bg-linear-to-tr">
                    <span className="iconify lucide--rocket size-4"></span>
                    <p>Pro Plan</p>
                </button>
                <button className="btn btn-ghost">Use free plan</button>
            </div>
            <p className="text-base-content/80 mt-3 text-center text-sm max-sm:text-xs">
                23 people have purchased this plan today
            </p>
        </div>
    );
};
