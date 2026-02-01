export const BasicFeedbackDemo = () => {
    return (
        <div className="rounded-box border-base-300 w-72 border p-4 sm:w-84">
            <div className="flex items-center gap-2">
                <span className="iconify lucide--message-circle-question size-5"></span>
                <p className="font-medium">Share Your Feedback</p>
                <button className="btn btn-ghost btn-xs btn-square ms-auto">
                    <span className="iconify lucide--x size-4"></span>
                </button>
            </div>
            <p className="text-base-content/80 mt-3 text-sm">
                We’d love to hear your experience! Please fill out our quick form and help us improve.
            </p>
            <div className="mt-3 flex items-center justify-end gap-1.5">
                <button className="btn btn-primary btn-sm">Go to form</button>
            </div>
        </div>
    );
};
