export const BookerEngagementDemo = () => {
    return (
        <div className="border-base-300 rounded-box max-w-xs border p-5">
            <div className="flex items-center justify-between gap-3">
                <p className="leading-none font-medium sm:text-lg">Ready to see it in action?</p>
                <button className="btn btn-xs btn-ghost btn-square">
                    <span className="iconify lucide--x size-4"></span>
                </button>
            </div>
            <div className="mt-5 flex items-center justify-center gap-0.5">
                <button className="btn btn-primary btn-sm gap-2">
                    <span className="iconify lucide--calendar-check size-4"></span>
                    Book a Free Demo
                </button>
            </div>
            <p className="text-base-content/80 mt-5 text-center text-sm">
                Schedule a personalized walkthrough with our experts and get your questions answered.
            </p>
        </div>
    );
};
