export const CustomizeCookieDemo = () => {
    return (
        <div className="card border-base-300 flex w-96 flex-col gap-4 border p-4">
            <div className="flex items-center justify-center gap-2.5">
                <span className="iconify lucide--settings-2 size-4.5"></span>
                <p className="text-center text-lg font-medium">Cookie Preferences</p>
            </div>
            <p className="text-base-content/80 mt-1 text-sm">
                We use cookies to deliver a better browsing experience, analyze website traffic, and provide
                personalized content and ads.
            </p>
            <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                    <label className="label" htmlFor="essential-customize-cookie">
                        Essential (Necessary)
                    </label>
                    <input
                        type="checkbox"
                        id="essential-customize-cookie"
                        defaultChecked
                        disabled
                        className="toggle toggle-sm"
                    />
                </div>
                <div className="flex items-center justify-between gap-2">
                    <label className="label" htmlFor="analytics-customize-cookie">
                        Analytics
                    </label>
                    <input
                        type="checkbox"
                        id="analytics-customize-cookie"
                        defaultChecked
                        className="toggle toggle-sm"
                    />
                </div>
                <div className="flex items-center justify-between gap-2">
                    <label className="label" htmlFor="functional-customize-cookie">
                        Functional
                    </label>
                    <input
                        type="checkbox"
                        defaultChecked
                        id="functional-customize-cookie"
                        className="toggle toggle-sm"
                    />
                </div>
                <div className="flex items-center justify-between gap-2">
                    <label className="label" htmlFor="advertising-customize-cookie">
                        Advertising
                    </label>
                    <input type="checkbox" id="advertising-customize-cookie" className="toggle toggle-sm" />
                </div>
            </div>
            <div className="flex items-center justify-end gap-1.5">
                <button className="btn btn-sm">Decline</button>
                <button className="btn btn-primary btn-sm">
                    <span className="iconify lucide--check size-3.5"></span>
                    Save Preference
                </button>
            </div>
        </div>
    );
};
