export const LimitedCTADemo = () => {
    return (
        <div>
            <div className="flex items-center justify-center gap-0.5">
                <button className="btn btn-primary">
                    <span className="iconify lucide--gift size-4"></span>
                    <p>Get This Offer</p>
                </button>
                <button className="btn btn-ghost">I'll pay full price</button>
            </div>
            <p className="text-base-content/80 mt-3 text-center text-sm max-sm:text-xs">
                Limited stock: 12 remaining at this price
            </p>
        </div>
    );
};
