import { Link } from "react-router";

export const PurchaseButton = () => {
    return (
        <Link
            to="https://daisyui.com/store/475050"
            target="_blank"
            className="btn group from-primary to-secondary group/purchase text-primary-content btn-sm max-sm:btn-square relative gap-2 border-0 bg-linear-to-r text-sm">
            <span className="iconify lucide--shopping-cart size-4" />
            <span className="max-sm:hidden">Buy Now</span>
            <div className="from-primary to-secondary absolute inset-x-0 top-1 -z-1 h-8 bg-linear-to-r opacity-40 blur-md transition-all duration-500 group-hover/purchase:opacity-60 group-hover/purchase:blur-lg"></div>
        </Link>
    );
};
