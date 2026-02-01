import { useMemo, useState } from "react";

type PricingConfig = {
    base: "basic" | "professional" | "enterprise";
    admins: number;
    standard: number;
    workspaces: number;
    teams: number;
    addonsPriority: boolean;
    addonsManager: boolean;
    addonsBranding: boolean;
    powerRoles: boolean;
    powerAPI: boolean;
    powerReporting: boolean;
};

export const CustomPricing = () => {
    const [customization, setCustomization] = useState<PricingConfig>({
        base: "professional",
        admins: 3,
        standard: 18,
        workspaces: 2,
        teams: 4,
        addonsPriority: true,
        addonsManager: true,
        addonsBranding: false,
        powerRoles: true,
        powerAPI: false,
        powerReporting: false,
    });

    const updateCustomization = (update: Partial<PricingConfig>) => setCustomization({ ...customization, ...update });

    const costs = useMemo(() => {
        const baseCosts = {
            base: customization.base == "basic" ? 29 : customization.base == "professional" ? 49 : 79,
            users:
                customization.admins * 12 +
                customization.standard * 8 +
                customization.workspaces * 36 +
                customization.teams * 28,
            extra:
                (customization.addonsPriority ? 1 : 0) * 49 +
                (customization.addonsManager ? 1 : 0) * 199 +
                (customization.addonsBranding ? 1 : 0) * 129 +
                (customization.powerRoles ? 1 : 0) * 99 +
                (customization.powerAPI ? 1 : 0) * 149 +
                (customization.powerReporting ? 1 : 0) * 79,
        };

        const total = baseCosts.base + baseCosts.users + baseCosts.extra;
        const tax = Math.floor(total * 0.18);
        const discount = Math.floor(total * 0.25);
        const final = total + tax - discount;

        return {
            ...baseCosts,
            tax,
            discount,
            final,
            saved: Math.round(final * 0.1 * 12),
        };
    }, [customization]);

    return (
        <>
            <div className="bg-base-200 rounded-box text-base-content/80 inline-flex items-center gap-2 px-3.5 py-1.5 text-sm font-medium">
                <span className="iconify lucide--box size-4"></span>
                Base Plan
            </div>
            <div className="mt-4 grid gap-4 sm:gap-6 lg:grid-cols-3 xl:gap-8">
                <div
                    className="card bg-base-100 cursor-pointer p-4 shadow sm:p-5"
                    onClick={() => updateCustomization({ base: "basic" })}>
                    <div className="flex justify-between gap-4">
                        <div>
                            <p className="text-lg font-medium sm:text-xl">Basic</p>
                            <p className="text-base-content/80 text-sm">Essential features for getting started</p>
                        </div>
                        <div className="text-3xl font-semibold sm:text-4xl">
                            <span className="text-base-content/60 align-super text-xl font-medium">$</span>29
                            <p className="text-base-content/60 -mt-1 text-end text-sm font-normal">/month</p>
                        </div>
                    </div>
                    <div className="mt-2">
                        {customization.base == "basic" ? (
                            <button className="btn btn-neutral btn-sm">Selected</button>
                        ) : (
                            <button className="btn btn-sm">Downgrade</button>
                        )}
                    </div>
                </div>
                <div
                    className="card bg-base-100 cursor-pointer p-4 shadow sm:p-5"
                    onClick={() => updateCustomization({ base: "professional" })}>
                    <div className="flex justify-between gap-3">
                        <div>
                            <p className="text-primary text-lg font-medium sm:text-xl">Professional</p>
                            <p className="text-base-content/80 text-sm">Advanced tools for growing teams</p>
                        </div>
                        <div className="text-3xl font-semibold sm:text-4xl">
                            <span className="text-base-content/60 align-super text-xl font-medium">$</span>
                            <span className="text-primary">49</span>
                            <p className="text-base-content/60 -mt-1 text-end text-sm font-normal">/month</p>
                        </div>
                    </div>
                    <div className="mt-2">
                        {customization.base == "professional" ? (
                            <button className="btn btn-primary btn-sm">Selected</button>
                        ) : (
                            <button className="btn btn-sm">Select</button>
                        )}
                    </div>
                </div>
                <div
                    className="card bg-base-100 cursor-pointer p-4 shadow sm:p-5"
                    onClick={() => updateCustomization({ base: "enterprise" })}>
                    <div className="flex justify-between gap-3">
                        <div>
                            <p className="text-secondary text-lg font-medium sm:text-xl">Enterprise</p>
                            <p className="text-base-content/80 text-sm">Scalable features for large teams</p>
                        </div>
                        <div className="text-3xl font-semibold sm:text-4xl">
                            <span className="text-base-content/60 align-super text-xl font-medium">$</span>
                            <span className="text-secondary">79</span>
                            <p className="text-base-content/60 -mt-1 text-end text-sm font-normal">/month</p>
                        </div>
                    </div>
                    <div className="mt-2">
                        {customization.base == "enterprise" ? (
                            <button className="btn btn-secondary btn-sm">Selected</button>
                        ) : (
                            <button className="btn btn-sm">Upgrade</button>
                        )}
                    </div>
                </div>
            </div>
            <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-2 lg:gap-8">
                <div>
                    <div className="bg-base-200 rounded-box text-base-content/80 inline-flex items-center gap-2 px-3.5 py-1.5 text-sm font-medium">
                        <span className="iconify lucide--user-cog-2 size-4"></span>
                        Members
                    </div>
                    <div className="card bg-base-100 mt-4 gap-4 p-4 shadow sm:p-5">
                        <div className="flex items-center justify-between gap-3">
                            <label htmlFor="number_of_admins">
                                <p className="font-medium max-sm:text-sm">Admin Seats</p>
                                <p className="text-base-content/80 text-xs sm:text-sm">$12 per seat/month</p>
                            </label>
                            <label className="input w-30">
                                <span className="iconify lucide--shield text-base-content/80 size-5"></span>
                                <input
                                    placeholder="Add admins"
                                    value={customization.admins}
                                    min={0}
                                    onChange={(e) => updateCustomization({ admins: e.target.valueAsNumber })}
                                    id="number_of_admins"
                                    type="number"
                                />
                            </label>
                        </div>

                        <div className="flex items-center justify-between gap-3">
                            <label htmlFor="number_of_users">
                                <p className="font-medium max-sm:text-sm">Standard Seats</p>
                                <p className="text-base-content/80 text-xs sm:text-sm">$8 per seat/month</p>
                            </label>
                            <label className="input w-30">
                                <span className="iconify lucide--user-plus-2 text-base-content/80 size-5"></span>
                                <input
                                    placeholder="Add users"
                                    id="number_of_users"
                                    type="number"
                                    min={0}
                                    value={customization.standard}
                                    onChange={(e) => updateCustomization({ standard: e.target.valueAsNumber })}
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-base-200 rounded-box text-base-content/80 inline-flex items-center gap-2 px-3.5 py-1.5 text-sm font-medium">
                        <span className="iconify lucide--briefcase size-4"></span>
                        Workspace and Teams
                    </div>
                    <div className="card bg-base-100 mt-4 gap-4 p-4 shadow sm:p-5">
                        <div className="flex items-center justify-between gap-3">
                            <label htmlFor="number_of_workspaces">
                                <p className="font-medium max-sm:text-sm">Workspaces</p>
                                <p className="text-base-content/80 text-xs sm:text-sm">$36 per workspace/month</p>
                            </label>
                            <label className="input w-30">
                                <span className="iconify lucide--building text-base-content/80 size-5"></span>
                                <input
                                    placeholder="Add workspaces"
                                    id="number_of_workspaces"
                                    type="number"
                                    min={0}
                                    value={customization.workspaces}
                                    onChange={(e) => updateCustomization({ workspaces: e.target.valueAsNumber })}
                                />
                            </label>
                        </div>

                        <div className="flex items-center justify-between gap-3">
                            <label htmlFor="number_of_teams">
                                <p className="font-medium max-sm:text-sm">Teams</p>
                                <p className="text-base-content/80 text-xs sm:text-sm">$28 per team/month</p>
                            </label>
                            <label className="input w-30">
                                <span className="iconify lucide--users text-base-content/80 size-5"></span>
                                <input
                                    placeholder="Add teams"
                                    id="number_of_teams"
                                    min={0}
                                    type="number"
                                    value={customization.teams}
                                    onChange={(e) => updateCustomization({ teams: e.target.valueAsNumber })}
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-2 lg:gap-8">
                <div>
                    <div className="bg-base-200 rounded-box text-base-content/80 inline-flex items-center gap-2 px-3.5 py-1.5 text-sm font-medium">
                        <span className="iconify lucide--package-plus size-4"></span>
                        Add-ons
                    </div>

                    <div className="card bg-base-100 mt-4 gap-4 p-4 shadow sm:p-5">
                        <div className="flex items-start gap-3">
                            <input
                                className="checkbox checkbox-sm"
                                type="checkbox"
                                id="priority_support"
                                checked={customization.addonsPriority}
                                onChange={(e) => updateCustomization({ addonsPriority: e.target.checked })}
                            />
                            <label htmlFor="priority_support" className="text-sm">
                                <p className="font-medium max-sm:text-sm">Priority Support ($49 /month)</p>
                                <p className="text-base-content/80 text-xs sm:text-sm">
                                    Get help fast whenever you need it
                                </p>
                            </label>
                        </div>

                        <div className="flex items-start gap-3">
                            <input
                                className="checkbox checkbox-sm"
                                type="checkbox"
                                id="account_manager"
                                checked={customization.addonsManager}
                                onChange={(e) => updateCustomization({ addonsManager: e.target.checked })}
                            />
                            <label htmlFor="account_manager" className="text-sm">
                                <p className="font-medium max-sm:text-sm">Dedicated Account Manager ($199 /month)</p>
                                <p className="text-base-content/80 text-xs sm:text-sm">
                                    A real human guide for your team success
                                </p>
                            </label>
                        </div>

                        <div className="flex items-start gap-3">
                            <input
                                className="checkbox checkbox-sm"
                                type="checkbox"
                                id="custom_branding"
                                checked={customization.addonsBranding}
                                onChange={(e) => updateCustomization({ addonsBranding: e.target.checked })}
                            />
                            <label htmlFor="custom_branding" className="text-sm">
                                <p className="font-medium max-sm:text-sm">Custom Branding ($129 one-time)</p>
                                <p className="text-base-content/80 text-xs sm:text-sm">
                                    Make the platform look and feel like your brand
                                </p>
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-base-200 rounded-box text-base-content/80 inline-flex items-center gap-2 px-3.5 py-1.5 text-sm font-medium">
                        <span className="iconify lucide--zap size-4"></span>
                        Power Ups
                    </div>

                    <div className="card bg-base-100 mt-4 gap-4 p-4 shadow sm:p-5">
                        <div className="flex items-start gap-3">
                            <input
                                className="checkbox checkbox-sm"
                                type="checkbox"
                                id="custom_roles"
                                checked={customization.powerRoles}
                                onChange={(e) => updateCustomization({ powerRoles: e.target.checked })}
                            />
                            <label htmlFor="custom_roles" className="text-sm">
                                <p className="font-medium max-sm:text-sm">Custom Roles & Permissions ($99 /month)</p>
                                <p className="text-base-content/80 text-xs sm:text-sm">
                                    Set roles and permissions for your team’s needs
                                </p>
                            </label>
                        </div>

                        <div className="flex items-start gap-3">
                            <input
                                className="checkbox checkbox-sm"
                                type="checkbox"
                                id="api_integrations"
                                checked={customization.powerAPI}
                                onChange={(e) => updateCustomization({ powerAPI: e.target.checked })}
                            />
                            <label htmlFor="api_integrations" className="text-sm">
                                <p className="font-medium max-sm:text-sm">Custom API Integrations ($149 /month)</p>
                                <p className="text-base-content/80 text-xs sm:text-sm">
                                    Connect seamlessly with your internal tools and apps
                                </p>
                            </label>
                        </div>

                        <div className="flex items-start gap-3">
                            <input
                                className="checkbox checkbox-sm"
                                type="checkbox"
                                id="advanced_reporting"
                                checked={customization.powerReporting}
                                onChange={(e) => updateCustomization({ powerReporting: e.target.checked })}
                            />
                            <label htmlFor="advanced_reporting" className="text-sm">
                                <p className="font-medium max-sm:text-sm">Advanced Reporting ($79 /month)</p>
                                <p className="text-base-content/80 text-xs sm:text-sm">
                                    Access detailed reports and track important metrics
                                </p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 lg:mt-8">
                <div className="bg-base-200 rounded-box text-base-content/80 inline-flex items-center gap-2 px-3.5 py-1.5 text-sm font-medium">
                    <span className="iconify lucide--receipt size-4"></span>
                    Billing
                </div>
                <div className="card bg-base-100 mt-4 p-4 shadow sm:p-6">
                    <div className="flex h-full items-stretch gap-6 max-lg:flex-col-reverse lg:gap-8">
                        <div className="flex flex-col lg:w-1/2">
                            <p className="text-base-content/60 mt-auto pt-4 text-center font-mono text-sm font-medium uppercase">
                                You saved
                            </p>
                            <p className="ms-5 mt-4 text-center text-2xl font-semibold sm:text-3xl xl:text-4xl">
                                <sup className="text-base-content/60 font-medium">$</sup>
                                {costs.saved}
                                <sub className="text-base-content/60 text-base font-normal">/Year</sub>
                            </p>
                            <div className="mt-auto pt-8">
                                <p className="relative max-w-xl italic max-sm:text-sm">
                                    Switching to this plan cut our costs by almost 40 percent compared to our old
                                    provider. The flexibility to customize exactly what we need saves us even more every
                                    month
                                    <span className="iconify lucide--quote text-base-content/5 absolute -start-6 -top-6 size-12 scale-x-[-1] transform max-sm:hidden"></span>
                                </p>
                                <p className="text-base-content/80 mt-2 text-sm font-medium max-sm:text-end">
                                    - Derrick, CTO at FlexTech
                                </p>
                            </div>
                        </div>
                        <div className="border-base-300 min-h-0 w-px border-e border-dashed max-lg:hidden" />
                        <div className="lg:w-1/2">
                            <p className="font-medium sm:text-lg">Subscription Overview</p>
                            <div className="mt-3 flex items-center justify-between gap-2">
                                <p className="max-sm:text-sm">Base Plan</p>
                                <p className="font-medium">${costs.base}</p>
                            </div>
                            <div className="mt-1.5 flex items-center justify-between gap-2">
                                <p className="max-sm:text-sm">Users + Workspace Cost</p>
                                <p className="font-medium">+${costs.users}</p>
                            </div>
                            <div className="mt-1.5 flex items-center justify-between gap-2">
                                <p className="max-sm:text-sm">Addons + Power ups</p>
                                <p className="font-medium">+${costs.extra}</p>
                            </div>
                            <div className="mt-1.5 flex items-center justify-between gap-2">
                                <p className="max-sm:text-sm">
                                    Sales Tax{" "}
                                    <span className="text-base-content/60 text-xs sm:text-sm">(18% Applied)</span>
                                </p>
                                <p className="text-base-content/70 font-medium">+${costs.tax}</p>
                            </div>
                            <div className="mt-1.5 flex items-center justify-between gap-2">
                                <p className="max-sm:text-sm">
                                    Special Discount{" "}
                                    <span className="text-base-content/60 text-xs sm:text-sm">
                                        (Save 25% This Year)
                                    </span>
                                </p>
                                <p className="text-success font-medium">-${costs.discount}</p>
                            </div>

                            <div className="mt-2 flex items-center justify-between gap-2">
                                <p className="text-lg font-medium">Total</p>
                                <div className="border-base-content/20 border-t border-dashed ps-16 pt-2">
                                    <p className="text-xl font-semibold sm:text-2xl">${costs.final}</p>
                                    <p className="text-base-content/60 text-end text-sm/none font-normal">/Month</p>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-center">
                                <button className="btn btn-primary gap-2">
                                    <span className="iconify lucide--dollar-sign size-4.5"></span>
                                    Make a Payment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
