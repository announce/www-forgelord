export const GeoWelcomeEngagementDemo = () => {
    return (
        <div className="border-base-300 rounded-box max-w-xs border p-5">
            <div className="flex items-center justify-between gap-3">
                <span className="iconify lucide--map-pin size-5"></span>
                <p className="leading-none font-medium sm:text-lg">Welcome</p>
                <button className="btn btn-xs btn-ghost btn-square">
                    <span className="iconify lucide--x size-4"></span>
                </button>
            </div>
            <p className="mt-4 text-center max-sm:text-sm">
                We see you're visiting from Kolkata, India. Enjoy special offers available in your area!
            </p>
            <div className="mt-5 flex items-center justify-center gap-1">
                <button className="btn btn-primary btn-sm gap-2">
                    <span className="iconify lucide--ticket size-4"></span>
                    Explore Local Deals
                </button>
                <button className="btn btn-ghost btn-sm">Maybe later</button>
            </div>
        </div>
    );
};
