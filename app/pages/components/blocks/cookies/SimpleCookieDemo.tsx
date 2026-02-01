export const SimpleCookieDemo = () => {
    return (
        <div className="card border-base-300 max-w-72 border pt-4">
            <div className="flex flex-col px-3">
                <div className="flex items-center justify-center gap-2.5">
                    <span className="iconify lucide--cookie size-4.5"></span>
                    <p>Cookies</p>
                </div>
                <p className="text-base-content/80 mt-2 text-center">
                    We use cookies and similar technologies to remember your preferences.
                </p>
            </div>

            <div className="border-base-300 mt-5 flex items-center border-t">
                <button className="btn btn-ghost rounded-bl-box grow rounded-none">Customize</button>
                <button className="btn btn-neutral rounded-br-box grow rounded-none">Accept</button>
            </div>
        </div>
    );
};
