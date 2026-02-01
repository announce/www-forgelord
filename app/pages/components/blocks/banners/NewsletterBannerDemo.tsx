export const NewsletterBannerDemo = () => {
    return (
        <div className="flex w-full items-center gap-0.5 py-3 ps-3 pe-2">
            <div className="flex grow items-center justify-center gap-3">
                <span className="iconify lucide--newspaper size-5 min-w-5"></span>
                <p className="max-sm:text-sm">
                    Get tips & updates<span className="max-sm:hidden">. Join our newsletter!</span>
                </p>
                <button className="btn btn-sm btn-outline border-base-300">Subscribe</button>
            </div>
            <button className="btn btn-sm btn-square btn-ghost">
                <span className="iconify lucide--x size-4"></span>
            </button>
        </div>
    );
};
