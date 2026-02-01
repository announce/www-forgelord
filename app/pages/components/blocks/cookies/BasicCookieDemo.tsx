export const BasicCookieDemo = () => {
    return (
        <div className="rounded-box border-base-300 flex items-center gap-4 border p-4 max-sm:flex-col sm:py-3">
            <span className="iconify lucide--cookie size-6"></span>
            <p className="text-center max-sm:text-sm">
                We use cookies to analyze our website traffic and performance; your privacy is important to us
            </p>
            <div className="flex items-center gap-1.5">
                <button className="btn btn-ghost btn-sm btn-square">
                    <span className="iconify lucide--settings-2 size-4.5"></span>
                </button>
                <button className="btn btn-sm">Decline</button>
                <button className="btn btn-primary btn-sm">Accept</button>
            </div>
        </div>
    );
};
