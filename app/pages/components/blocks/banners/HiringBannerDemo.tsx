export const HiringBannerDemo = () => {
    return (
        <div className="flex w-full items-center gap-3 py-3 ps-3 pe-2 sm:ps-4">
            <div className="flex grow items-center justify-center gap-3">
                <span className="iconify lucide--megaphone size-5 min-w-5"></span>
                <p className="max-sm:text-sm">
                    We’re hiring!{" "}
                    <span className="max-sm:hidden">
                        Join our team to help build innovative products and grow your career.
                    </span>
                </p>
                <button className="btn btn-sm">View Jobs</button>
            </div>
            <button className="btn btn-sm btn-square btn-ghost">
                <span className="iconify lucide--x size-4"></span>
            </button>
        </div>
    );
};
