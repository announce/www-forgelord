export const DiscountBannerDemo = () => {
    return (
        <div className="flex w-full items-center gap-3 py-3 ps-3 pe-2 sm:ps-4">
            <span className="iconify lucide--truck size-5 min-w-5"></span>
            <p className="grow max-sm:text-sm">
                Enjoy free shipping{" "}
                <span className="max-lg:hidden">
                    on all orders over ₹1,500! No code needed—discount applies automatically at checkout
                </span>
            </p>
            <div className="flex items-center gap-0.5">
                <button className="btn btn-sm btn-primary">Shop Now</button>
                <button className="btn btn-sm btn-square btn-ghost">
                    <span className="iconify lucide--x size-4"></span>
                </button>
            </div>
        </div>
    );
};
