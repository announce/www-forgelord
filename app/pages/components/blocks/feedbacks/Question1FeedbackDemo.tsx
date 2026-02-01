export const Question1FeedbackDemo = () => {
    return (
        <div className="rounded-box border-base-300 w-72 border p-4 sm:w-84">
            <div className="flex items-center gap-2">
                <p className="text-base-content/60 text-sm">Question 1</p>
                <button className="btn btn-ghost btn-xs btn-square ms-auto">
                    <span className="iconify lucide--x size-4"></span>
                </button>
            </div>
            <p className="mt-1 font-medium">How would you rate your overall experience?</p>
            <div className="rating mt-4 flex justify-center gap-1">
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 size-7 bg-orange-500"
                    aria-label="1 star"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 size-7 bg-orange-500"
                    aria-label="2 star"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 size-7 bg-orange-500"
                    aria-label="3 star"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 size-7 bg-orange-500"
                    aria-label="4 star"
                />
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 size-7 bg-orange-500"
                    aria-label="5 star"
                    defaultChecked
                />
            </div>
            <div className="mt-5 flex items-center justify-end gap-0.5">
                <button className="btn btn-ghost btn-sm">
                    <p>May be later</p>
                </button>
                <button className="btn btn-outline border-base-300 btn-sm">
                    <p>Next</p>
                    <span className="iconify lucide--arrow-right size-3.5"></span>
                </button>
            </div>
        </div>
    );
};
