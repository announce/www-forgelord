import { useState } from "react";

import { MetaData } from "@/components/MetaData";

const AccountSettingsPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <MetaData title="Account Settings" />
            <div>
                <div className="flex items-center justify-between gap-3">
                    <p className="text-lg font-medium">Account</p>
                    <div className="breadcrumbs p-0 text-sm max-md:hidden">
                        <ul>
                            <li className="text-base-content/80">General</li>
                            <li>Account</li>
                        </ul>
                    </div>
                </div>
                <div role="alert" className="alert alert-soft alert-error mt-3 max-sm:text-xs">
                    <span className="iconify lucide--alert-triangle size-4.5"></span>
                    <span>This page contains important details, so make changes with caution.</span>
                </div>
                <p className="text-base-content/80 mt-5 text-sm font-medium">Update Password</p>
                <div className="fieldset mt-4 gap-2">
                    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                        <div className="space-y-2">
                            <label className="fieldset-label" htmlFor="old_password">
                                Old Password
                            </label>
                            <label className="input w-full">
                                <span className="iconify lucide--key-round text-base-content/80 size-5"></span>
                                <input
                                    name="password"
                                    id="old_password"
                                    placeholder="Password"
                                    type={showPassword ? "text" : "password"}
                                />
                                <button
                                    className="btn btn-xs btn-ghost btn-circle"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label="Password">
                                    {showPassword ? (
                                        <span className="iconify lucide--eye-off size-4" />
                                    ) : (
                                        <span className="iconify lucide--eye size-4" />
                                    )}
                                </button>
                            </label>
                        </div>
                        <div className="space-y-2">
                            <label className="fieldset-label" htmlFor="new_password">
                                New Password
                            </label>
                            <label className="input w-full">
                                <span className="iconify lucide--key-round text-base-content/80 size-5"></span>
                                <input
                                    id="new_password"
                                    name="new_password"
                                    placeholder="New Password"
                                    type={showPassword ? "text" : "password"}
                                />
                                <button
                                    className="btn btn-xs btn-ghost btn-circle"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label="Password">
                                    {showPassword ? (
                                        <span className="iconify lucide--eye-off size-4" />
                                    ) : (
                                        <span className="iconify lucide--eye size-4" />
                                    )}
                                </button>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-end">
                    <button className="btn btn-error btn-sm border-transparent">Change Password</button>
                </div>
                <hr className="border-base-300 my-5 border-dashed" />
                <p className="text-base-content/80 text-sm font-medium">Social Accounts</p>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-4">
                    <div className="border-base-300 rounded-box flex flex-col items-center gap-2 border p-3 sm:p-4">
                        <img src="/images/brand-logo/google.svg" className="size-8 dark:invert" alt="" />
                        <p>Google</p>
                        <button className="btn btn-primary btn-sm">Connected</button>
                    </div>
                    <div className="border-base-300 rounded-box flex flex-col items-center gap-2 border p-3 sm:p-4">
                        <img src="/images/brand-logo/github.svg" className="size-8 dark:invert" alt="" />
                        <p>Github</p>
                        <button className="btn btn-primary btn-soft btn-sm">Connect</button>
                    </div>
                    <div className="border-base-300 rounded-box flex flex-col items-center gap-2.5 border p-3 sm:p-4">
                        <img src="/images/brand-logo/x.svg" className="size-7 dark:invert" alt="" />
                        <p>Twitter</p>
                        <button className="btn btn-soft btn-sm">Connecting...</button>
                    </div>
                    <div className="border-base-300 rounded-box flex flex-col items-center gap-2 border p-3 sm:p-4">
                        <img src="/images/brand-logo/apple.svg" className="size-8 dark:invert" alt="" />
                        <p>Apple</p>
                        <button className="btn btn-soft btn-error btn-sm">Need to verify</button>
                    </div>
                </div>
                <div className="hover:bg-base-200 rounded-box mt-4 flex cursor-pointer items-center gap-3 px-3 py-2 sm:gap-4">
                    <span className="iconify lucide--shield-check min-h-5 min-w-5"></span>
                    <div className="grow">
                        <p className="leading-tight font-medium max-sm:text-sm">Enable 2FA Authentication</p>
                        <p className="text-base-content/80 line-clamp-1 text-xs sm:text-sm">
                            Add an extra layer of security to your account.
                        </p>
                    </div>
                    <span className="iconify lucide--chevron-right min-h-4.5 min-w-4.5"></span>
                </div>
                <hr className="border-base-300 my-5 border-dashed" />
                <p className="text-error text-sm font-medium">Danger zone</p>
                <div className="mt-4 space-y-0.5">
                    <div className="hover:bg-base-200 rounded-box flex cursor-pointer items-center gap-3 px-3 py-2 sm:gap-4">
                        <span className="iconify lucide--pause-circle min-h-5 min-w-5"></span>
                        <div className="grow">
                            <p className="leading-tight font-medium max-sm:text-sm">Deactivate Account</p>
                            <p className="text-base-content/80 line-clamp-1 text-xs sm:text-sm">
                                Temporarily disable your account and restore it anytime.
                            </p>
                        </div>
                        <span className="iconify lucide--chevron-right min-h-4.5 min-w-4.5"></span>
                    </div>
                    <div className="hover:bg-error/10 hover:text-error rounded-box flex cursor-pointer items-center gap-3 px-3 py-2 sm:gap-4">
                        <span className="iconify lucide--trash-2 text-error min-h-5 min-w-5"></span>
                        <div className="grow">
                            <p className="leading-tight font-medium max-sm:text-sm">Permanently Delete Account</p>
                            <p className="text-base-content/80 line-clamp-1 text-xs sm:text-sm">
                                This action is irreversible. All your data will be lost.
                            </p>
                        </div>
                        <span className="iconify lucide--chevron-right min-h-4.5 min-w-4.5"></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountSettingsPage;
