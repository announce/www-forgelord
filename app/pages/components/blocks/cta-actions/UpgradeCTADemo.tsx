export const UpgradeCTADemo = () => {
    return (
        <div className="flex items-center gap-4">
            <button className="btn btn-primary shadow-primary/20 gap-2 shadow-lg hover:shadow-xl">
                <span className="iconify lucide--circle-arrow-up size-4"></span>
                <p>Upgrade</p>
            </button>
            <div>
                <progress
                    className="progress progress-error h-1.5 w-36 align-super sm:w-44"
                    value="85"
                    max="100"></progress>
                <div className="-mt-2 flex items-center justify-between gap-1">
                    <p className="text-error text-xs">85%</p>
                    <p className="text-error text-xs">Storage almost full</p>
                </div>
            </div>
        </div>
    );
};
