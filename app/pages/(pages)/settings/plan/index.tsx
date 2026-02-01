import { Link } from "react-router";

import { MetaData } from "@/components/MetaData";

const ProfileSettingsPage = () => {
    return (
        <>
            <MetaData title="Manage Plan" />
            <div>
                <div className="flex items-center justify-between gap-3">
                    <p className="text-lg font-medium">Manage Plan</p>
                    <div className="breadcrumbs p-0 text-sm max-md:hidden">
                        <ul>
                            <li className="text-base-content/80">Workspace</li>
                            <li>Manage Plan</li>
                        </ul>
                    </div>
                </div>
                <div className="group bg-base-200 rounded-box mt-5 flex flex-wrap justify-between gap-3 px-4 py-2">
                    <div>
                        <p className="font-medium max-sm:text-sm">Want to save more in the long run?</p>
                        <p className="text-base-content/80 text-xs sm:text-sm">
                            Switch to annual billing and get 2 months free!
                        </p>
                    </div>
                    <div className="inline-flex items-center gap-2">
                        <label
                            className="group-has-[[name=duration]:checked]:text-base-content/60 transition-all"
                            htmlFor="duration">
                            Monthly
                        </label>
                        <input id="duration" className="toggle" type="checkbox" name="duration" />
                        <label
                            className="text-base-content/60 group-has-[[name=duration]:checked]:text-base-content transition-all"
                            htmlFor="duration">
                            Yearly
                        </label>
                    </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                    <p className="text-base-content/80 text-sm font-medium">Change your plan</p>
                    <Link to="/pricing/comparison" className="link hover:link-primary flex items-center gap-2 text-sm">
                        Compare Plans
                    </Link>
                </div>

                <div className="mt-3 grid gap-5 md:grid-cols-3">
                    <div className="rounded-box border-base-300 border p-5 text-center">
                        <p className="text-lg font-medium sm:text-xl">Basic</p>
                        <p className="mt-2 text-3xl font-semibold sm:text-4xl">
                            <span className="text-base-content/60 align-super text-lg font-medium sm:text-xl">$</span>29
                        </p>
                        <p className="text-base-content/60 -mt-1 text-sm">/user/month</p>
                        <button className="btn btn-sm mt-4">Downgrade</button>
                    </div>
                    <div className="rounded-box border-primary/80 shadow-primary/10 relative border-2 p-5 text-center shadow-md">
                        <div className="absolute end-2 top-2">
                            <span className="iconify lucide--check-circle-2 text-primary size-6"></span>
                        </div>
                        <p className="text-primary text-lg font-medium sm:text-xl">Pro</p>
                        <p className="text-primary mt-2 text-3xl font-semibold sm:text-4xl">
                            <span className="text-base-content/60 align-super text-lg font-medium sm:text-xl">$</span>49
                        </p>
                        <p className="text-base-content/60 -mt-1 text-sm">/user/month</p>
                        <button className="btn btn-sm btn-primary mt-4">Selected</button>
                    </div>
                    <div className="rounded-box border-base-300 hover:border-secondary/80 cursor-pointer border p-5 text-center transition-all">
                        <p className="text-lg font-medium sm:text-xl">Enterprise</p>
                        <p className="mt-2 text-3xl font-semibold sm:text-4xl">
                            <span className="text-base-content/60 align-super text-lg font-medium sm:text-xl">$</span>79
                        </p>
                        <p className="text-base-content/60 -mt-1 text-sm">/user/month</p>
                        <button className="btn btn-sm btn-secondary mt-4">Upgrade</button>
                    </div>
                </div>

                <hr className="border-base-300 my-5 border-dashed" />

                <p className="text-base-content/60 text-sm font-medium">Addons</p>

                <div className="mt-3 flex justify-between gap-3">
                    <label htmlFor="number_of_admins">
                        <span className="font-medium max-sm:text-sm">Admin Users</span>
                        <span className="text-base-content/60 block text-xs sm:text-sm">$12 per user/month</span>
                    </label>
                    <label className="input w-36">
                        <span className="iconify lucide--shield text-base-content/80 size-5"></span>
                        <input placeholder="Enter admins" id="number_of_admins" type="number" defaultValue="4" />
                    </label>
                </div>

                <div className="mt-3 flex justify-between gap-3">
                    <label htmlFor="number_of_teams">
                        <span className="font-medium max-sm:text-sm">Additional Team</span>
                        <span className="text-base-content/80 block text-xs sm:text-sm">$16 per team/month</span>
                    </label>
                    <label className="input w-36">
                        <span className="iconify lucide--users text-base-content/80 size-5"></span>
                        <input placeholder="Enter teams" id="number_of_teams" type="number" defaultValue="7" />
                    </label>
                </div>

                <div className="mt-6 flex items-center justify-end">
                    <button className="btn btn-sm btn-primary">
                        <span className="iconify lucide--arrow-up-from-line size-4"></span>
                        Update
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProfileSettingsPage;
