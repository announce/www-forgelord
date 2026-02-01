export const BasicBannerDemo = () => {
    return (
        <div className="flex w-full items-center gap-4 px-3 py-3 sm:px-4">
            <span className="iconify lucide--zap size-5 min-w-5"></span>
            <p className="grow text-sm sm:hidden">We’ve launched new features!</p>
            <p className="grow max-sm:hidden">
                We’ve just launched new features! Check them out now for a better experience.
            </p>
            <div className="flex items-center gap-0.5 max-sm:hidden">
                <button className="btn btn-sm btn-ghost">View Updates</button>
                <button className="btn btn-sm btn-square btn-outline border-base-200">
                    <span className="iconify lucide--x size-4"></span>
                </button>
            </div>
        </div>
    );
};
