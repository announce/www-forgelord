import { Link } from "react-router";

import { MetaData } from "@/components/MetaData";

const ProfileSettingsPage = () => {
    return (
        <>
            <MetaData title="Profile Settings" />
            <div>
                <div className="flex items-center justify-between gap-3">
                    <p className="text-lg font-medium">Profile</p>
                    <div className="breadcrumbs p-0 text-sm max-md:hidden">
                        <ul>
                            <li className="text-base-content/80">General</li>
                            <li>Profile</li>
                        </ul>
                    </div>
                </div>
                <p className="text-base-content/80 mt-4 text-sm font-medium">Public Avatar</p>
                <div className="mt-4 flex items-center gap-4">
                    <div className="avatar">
                        <div className="bg-base-200 mask mask-squircle w-16">
                            <img src="/images/avatars/1.png" alt="Avatar" />
                        </div>
                    </div>
                    <button className="btn btn-sm btn-primary">Change Avatar</button>
                    <button className="btn btn-sm btn-error btn-soft">Remove</button>
                </div>
                <hr className="border-base-300 my-5 border-dashed" />
                <p className="text-base-content/80 text-sm font-medium">Personal Information</p>
                <div className="fieldset mt-4 gap-2">
                    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                        <div className="space-y-2">
                            <label className="fieldset-label" htmlFor="full_name">
                                Full Name
                            </label>
                            <label className="input w-full">
                                <span className="iconify lucide--user text-base-content/80 size-5"></span>
                                <input placeholder="Full Name" id="full_name" type="text" defaultValue="Denish" />
                            </label>
                        </div>
                        <div className="space-y-2">
                            <label className="fieldset-label" htmlFor="username">
                                Username
                            </label>
                            <label className="input w-full">
                                <span className="iconify lucide--at-sign text-base-content/80 size-5"></span>
                                <input placeholder="Username" id="username" type="text" defaultValue="withden" />
                            </label>
                        </div>
                        <div className="space-y-2">
                            <label className="fieldset-label" htmlFor="email">
                                Email Address
                            </label>
                            <label className="input w-full">
                                <span className="iconify lucide--mail text-base-content/80 size-5"></span>
                                <input
                                    id="email"
                                    name="email"
                                    placeholder="Email Address"
                                    type="email"
                                    defaultValue="me@email.com"
                                />
                            </label>
                        </div>
                        <div className="space-y-2">
                            <label className="fieldset-label" htmlFor="phone_number">
                                Phone Number <span className="text-base-content/60">(optional)</span>
                            </label>
                            <label className="input w-full">
                                <span className="iconify lucide--phone text-base-content/80 size-5"></span>
                                <input
                                    id="phone_number"
                                    name="phone_number"
                                    placeholder="Phone Number"
                                    type="tel"
                                    defaultValue="(+98) 7654 3210"
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <hr className="border-base-300 my-5 border-dashed" />
                <p className="text-base-content/80 text-sm font-medium">Address</p>
                <div className="fieldset mt-4 gap-2">
                    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                        <div className="space-y-2">
                            <label className="fieldset-label" htmlFor="state">
                                State
                            </label>
                            <label className="input w-full">
                                <span className="iconify lucide--map-pin text-base-content/80 size-5"></span>
                                <input
                                    name="state"
                                    id="state"
                                    placeholder="State"
                                    type="text"
                                    defaultValue="California"
                                />
                            </label>
                        </div>
                        <div className="space-y-2">
                            <label className="fieldset-label" htmlFor="country">
                                Country
                            </label>
                            <label className="input w-full">
                                <span className="iconify lucide--globe text-base-content/80 size-5"></span>
                                <input
                                    placeholder="Country"
                                    id="country"
                                    name="country"
                                    type="text"
                                    defaultValue="United States"
                                />
                            </label>
                        </div>
                        <div className="space-y-2">
                            <label className="fieldset-label" htmlFor="postal_code">
                                Postal code <span className="text-base-content/60"></span>
                            </label>
                            <label className="input w-full">
                                <span className="iconify lucide--mailbox text-base-content/80 size-5"></span>
                                <input
                                    name="postal_code"
                                    id="postal_code"
                                    placeholder="Postal Code"
                                    type="text"
                                    defaultValue="90210"
                                />
                            </label>
                        </div>
                        <div className="space-y-2">
                            <label className="fieldset-label" htmlFor="tax_id">
                                Tax ID
                            </label>
                            <label className="input w-full">
                                <span className="iconify lucide--file-text text-base-content/80 size-5"></span>
                                <input
                                    placeholder="Tax ID"
                                    id="tax_id"
                                    type="text"
                                    name="tax_id"
                                    defaultValue="12-3456789"
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex items-center justify-end gap-4">
                    <Link to="/settings/account" className="btn btn-error btn-sm btn-soft border-transparent">
                        Change Password
                    </Link>
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
