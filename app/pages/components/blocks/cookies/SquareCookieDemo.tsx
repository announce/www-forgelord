export const SquareCookieDemo = () => {
    return (
        <div className="card border-base-300 flex w-96 flex-col gap-4 border p-4">
            <p className="text-base-content/80 text-sm">
                We use cookies and similar technologies to improve your browsing experience, analyze website traffic,
                and display personalized content. Some cookies are essential for site functionality, while others help
                us understand and enhance your interactions with our services
            </p>
            <div className="flex items-center justify-end gap-1.5">
                <button className="btn btn-sm btn-error btn-ghost text-error hover:text-error-content">Decline</button>
                <button className="btn btn-sm">Accept Necessary</button>
                <button className="btn btn-primary btn-sm">Accept</button>
            </div>
        </div>
    );
};
