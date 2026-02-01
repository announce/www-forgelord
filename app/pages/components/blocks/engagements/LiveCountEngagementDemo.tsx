export const LiveCountEngagementDemo = () => {
    return (
        <div className="border-base-300 rounded-box border px-4 py-3">
            <div className="flex items-center gap-2.5">
                <div className="inline-grid *:[grid-area:1/1]">
                    <div className="status status-success animate-ping"></div>
                    <div className="status status-success"></div>
                </div>
                <p className="leading-none font-semibold sm:text-lg">128</p>
            </div>
            <p className="text-base-content/80 mt-1 text-xs sm:text-sm">People are viewing this page right now</p>
        </div>
    );
};
