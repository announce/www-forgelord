export const Question3FeedbackDemo = () => {
    return (
        <div className="rounded-box border-base-300 w-72 border p-4 sm:w-84">
            <div className="flex items-center gap-2">
                <p className="text-base-content/60 text-sm">Question 3</p>
                <button className="btn btn-ghost btn-xs btn-square ms-auto">
                    <span className="iconify lucide--x size-4"></span>
                </button>
            </div>
            <p className="mt-1 font-medium">Tell us more about your experience</p>
            <textarea className="textarea mt-3 h-20 w-full" placeholder="I really like..."></textarea>
            <div className="mt-5 flex items-center justify-end gap-0.5">
                <button className="btn btn-ghost btn-sm">
                    <span className="iconify lucide--arrow-left size-3.5"></span>
                    <p>Back</p>
                </button>
                <button className="btn btn-primary btn-sm">
                    <p>Submit</p>
                </button>
            </div>
        </div>
    );
};
