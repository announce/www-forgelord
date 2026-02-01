const integrationFeatures = [
    {
        icon: "lucide--link",
        title: "Universal Connectors",
        description: "Natively integrate with AWS, Google Drive, and more.",
    },
    {
        icon: "lucide--refresh-cw",
        title: "Real-Time Sync",
        description: "Instantly sync changes across your connected ecosystem.",
    },
    {
        icon: "lucide--shield-check",
        title: "Authenticated APIs",
        description: "Secure transfers with TLS 1.3 and access controls.",
    },
    {
        icon: "lucide--cpu",
        title: "Intelligent Workflows",
        description: "Our AI learns from your apps to automate tasks.",
    },
    {
        icon: "lucide--cloud",
        title: "Unified Cloud Access",
        description: "Manage data across clouds like AWS, Azure, GCP.",
    },
    {
        icon: "lucide--settings",
        title: "One-Click Setup",
        description: "Connect your favorite apps with a single click.",
    },
];

export const Integrations = () => {
    return (
        <div
            className="group/section relative z-10 container scroll-mt-12 py-8 md:py-12 lg:py-16 2xl:py-28"
            id="features">
            <p className="group-hover/section:text-primary text-base-content/60 text-center text-[12px] font-medium tracking-[1px] uppercase transition-all duration-300 group-hover/section:tracking-[2px]">
                Connect
            </p>
            <p className="mt-2 text-center text-2xl font-semibold sm:text-3xl">Seamless Platform Integrations</p>
            <div className="mt-2 flex justify-center text-center">
                <p className="text-base-content/80 max-w-lg">
                    Connect effortlessly with popular tools and platforms to streamline your AI storage workflow.
                </p>
            </div>
            <div className="mt-8 flex items-start justify-center gap-6 md:mt-12 md:gap-8 xl:mt-16 xl:gap-12">
                <div
                    className="bg-base-100 rounded-box border-base-200 group hover:bg-base-200/40 tooltip mt-16 cursor-pointer border p-3 transition-all"
                    data-tip="Google Drive">
                    <img src="/images/brand-logo/g-drive.svg" alt="Logo" className="size-8 sm:size-9" />
                </div>
                <div
                    className="bg-base-100 rounded-box border-base-200 hover:bg-base-200/40 tooltip cursor-pointer border p-3 transition-all"
                    data-tip="OneDrive">
                    <img src="/images/brand-logo/onedrive.svg" alt="Logo" className="size-8 sm:size-9" />
                </div>
                <div
                    className="bg-base-100 rounded-box border-base-200 hover:bg-base-200/40 tooltip mt-12 cursor-pointer border p-3 transition-all"
                    data-tip="Hubspot">
                    <img src="/images/brand-logo/hubspot.svg" alt="Logo" className="size-8 sm:size-9" />
                </div>
                <div
                    className="bg-base-100 rounded-box border-base-200 hover:bg-base-200/40 tooltip mt-4 cursor-pointer border p-3 transition-all"
                    data-tip="Slack">
                    <img src="/images/brand-logo/slack.svg" alt="Logo" className="size-8 sm:size-9" />
                </div>
                <div
                    className="bg-base-100 rounded-box border-base-200 hover:bg-base-200/40 tooltip mt-8 cursor-pointer border p-3 transition-all max-md:hidden"
                    data-tip="Stripe">
                    <img src="/images/brand-logo/stripe.svg" alt="Logo" className="size-8 sm:size-9" />
                </div>
                <div
                    className="bg-base-100 rounded-box border-base-200 hover:bg-base-200/40 tooltip cursor-pointer border p-3 transition-all max-sm:hidden"
                    data-tip="Zapier">
                    <img src="/images/brand-logo/zapier.svg" alt="Logo" className="size-8 sm:size-9" />
                </div>
                <div
                    className="bg-base-100 rounded-box border-base-200 hover:bg-base-200/40 tooltip mt-10 cursor-pointer border p-3 transition-all max-sm:hidden"
                    data-tip="Zapier">
                    <img src="/images/brand-logo/dropbox.svg" alt="Logo" className="size-8 sm:size-9" />
                </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 md:gap-6 xl:mt-16 xl:grid-cols-3 xl:gap-8">
                {integrationFeatures.map((feature, index) => (
                    <div key={index} className="group relative flex cursor-pointer items-start gap-3">
                        <div className="bg-base-200/30 rounded-box absolute -inset-2.5 -z-1 scale-95 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100"></div>
                        <div className="bg-base-200 rounded-box p-2.5">
                            <span className={`iconify ${feature.icon} block size-5`}></span>
                        </div>
                        <div>
                            <p className="leading-none font-medium">{feature.title}</p>
                            <p className="text-base-content/80 mt-1 line-clamp-1 text-sm">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-center md:mt-8 xl:mt-12">
                <button className="btn btn-primary">
                    Discover All Integrations
                    <span className="iconify lucide--arrow-right size-4"></span>
                </button>
            </div>
        </div>
    );
};
