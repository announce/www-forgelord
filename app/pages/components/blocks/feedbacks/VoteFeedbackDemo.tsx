export const VoteFeedbackDemo = () => {
    return (
        <div className="rounded-box border-base-300 w-72 border p-4 sm:w-84">
            <div className="flex items-center gap-2">
                <p className="text-base-content/60 text-sm">Informative</p>
                <button className="btn btn-ghost btn-xs btn-square ms-auto">
                    <span className="iconify lucide--x size-4"></span>
                </button>
            </div>
            <p className="mt-1 font-medium">Was the information clear and helpful?</p>
            <div className="mt-3 flex items-center justify-end gap-0.5">
                <button className="btn btn-ghost btn-sm btn-error text-error hover:text-error-content gap-2">
                    <span className="iconify lucide--thumbs-down size-4"></span>
                    <p>No</p>
                </button>
                <button className="btn btn-ghost btn-sm btn-primary text-primary hover:text-primary-content gap-2">
                    <span className="iconify lucide--thumbs-up size-4"></span>
                    <p>Yes</p>
                </button>
            </div>
        </div>
    );
};
