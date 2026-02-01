export const Question2FeedbackDemo = () => {
    return (
        <div className="rounded-box border-base-300 w-72 border p-4 sm:w-84">
            <div className="flex items-center gap-2">
                <p className="text-base-content/60 text-sm">Question 2</p>
                <button className="btn btn-ghost btn-xs btn-square ms-auto">
                    <span className="iconify lucide--x size-4"></span>
                </button>
            </div>
            <p className="mt-1 font-medium">What features did you use or enjoy?</p>
            <div className="mt-3 space-y-2 max-sm:text-sm">
                <label className="flex cursor-pointer items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    <p>Easy to use</p>
                </label>
                <label className="flex cursor-pointer items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    <p>Fast performance</p>
                </label>
                <label className="flex cursor-pointer items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    <p>Helpful customer support</p>
                </label>
                <label className="flex cursor-pointer items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-sm" />
                    <p>Intuitive design</p>
                </label>
            </div>
            <div className="mt-5 flex items-center justify-end gap-0.5">
                <button className="btn btn-ghost btn-sm">
                    <span className="iconify lucide--arrow-left size-3.5"></span>
                    <p>Back</p>
                </button>
                <button className="btn btn-outline border-base-300 btn-sm">
                    <p>Next</p>
                    <span className="iconify lucide--arrow-right size-3.5"></span>
                </button>
            </div>
        </div>
    );
};
