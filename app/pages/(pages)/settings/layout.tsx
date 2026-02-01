import { ReactNode } from "react";
import { Link, useLocation } from "react-router";

const AccountLayout = ({ children }: { children: ReactNode }) => {
    const { pathname } = useLocation();

    return (
        <div className="container xl:py-12 2xl:py-16">
            <div className="flex gap-6 lg:mx-12 xl:mx-20 2xl:mx-30">
                <div className="card bg-base-100 sticky top-24 z-10 h-fit w-56 px-3 py-4 shadow max-md:hidden lg:w-64">
                    <p className="mx-2 text-lg font-medium">Settings</p>
                    <p className="text-base-content/60 mx-2 mt-2 text-sm font-medium">General</p>
                    <ul className="menu rounded-box mt-2 w-full space-y-1 p-0">
                        <li>
                            <Link
                                to="/settings/profile"
                                className={`flex items-center gap-2.5 ${pathname === "/settings/profile" ? "bg-base-200" : ""}`}>
                                <span className="iconify lucide--user size-4.5"></span>
                                <p className="grow">Profile</p>
                                <span className="iconify lucide--chevron-right"></span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/settings/account"
                                className={`flex items-center gap-2.5 ${pathname === "/settings/account" ? "bg-base-200" : ""}`}>
                                <span className="iconify lucide--settings-2 size-4.5"></span>
                                <p className="grow">Account</p>
                                <div className="tooltip tooltip-warning" data-tip="Need your attention">
                                    <span className="iconify lucide--alert-triangle text-warning block size-4"></span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/settings/notification"
                                className={`flex items-center gap-2.5 ${pathname === "/settings/notification" ? "bg-base-200" : ""}`}>
                                <span className="iconify lucide--bell size-4.5"></span>
                                <p className="grow">Notification</p>
                                <span className="iconify lucide--chevron-right"></span>
                            </Link>
                        </li>
                    </ul>
                    <p className="text-base-content/60 mx-2 mt-3 text-sm font-medium">Workspace</p>
                    <ul className="menu rounded-box mt-2 w-full space-y-1 p-0">
                        <li>
                            <Link
                                to="/settings/plan"
                                className={`flex items-center gap-2.5 ${pathname === "/settings/plan" ? "bg-base-200" : ""}`}>
                                <span className="iconify lucide--layers-2 size-4.5"></span>
                                <p className="grow">Manage Plan</p>
                                <span className="iconify lucide--chevron-right"></span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="menu rounded-box mt-28 w-full space-y-1 p-0">
                        <li>
                            <Link to="/auth/login" className="text-error hover:bg-error/5 flex items-center gap-2.5">
                                <span className="iconify lucide--log-out size-4.5"></span>
                                <p className="grow">Logout</p>
                            </Link>
                        </li>
                    </ul>
                    <hr className="border-base-300 mt-3 border-dashed" />
                    <p className="text-base-content/60 mx-2 mt-3 flex items-center justify-between gap-3 text-sm font-medium">
                        Switch Account
                    </p>
                    <div className="dropdown dropdown-hover dropdown-center dropdown-top mt-1">
                        <div className="rounded-box hover:bg-base-200 flex cursor-pointer items-center gap-3 px-2 py-1">
                            <div className="avatar">
                                <div className="bg-base-200 mask mask-squircle size-10">
                                    <img src="/images/avatars/1.png" alt="Avatar" />
                                </div>
                            </div>
                            <div className="grow">
                                <p className="font-medium">Denish</p>
                                <p className="text-base-content/60 -mt-1.5 text-sm">@withden</p>
                            </div>
                            <span className="text-base-content/60 iconify lucide--chevrons-up-down size-3.5"></span>
                        </div>
                        <div
                            tabIndex={0}
                            className="dropdown-content bg-base-100 card z-1 w-full space-y-0.5 p-1 text-sm shadow hover:shadow-lg">
                            <div className="hover:bg-base-200 rounded-box flex cursor-pointer items-center gap-2.5 px-2 py-1">
                                <div className="avatar">
                                    <div className="bg-base-200 mask mask-squircle size-9">
                                        <img src="/images/avatars/3.png" alt="Avatar" />
                                    </div>
                                </div>
                                <div className="grow">
                                    <p className="text-sm font-medium">Project Manager</p>
                                    <p className="text-base-content/60 -mt-1 text-sm">@manager</p>
                                </div>
                            </div>
                            <div className="hover:bg-base-200 rounded-box flex cursor-pointer items-center gap-2.5 px-2 py-1">
                                <div className="avatar">
                                    <div className="bg-base-200 mask mask-squircle size-9">
                                        <img src="/images/avatars/4.png" alt="Avatar" />
                                    </div>
                                </div>
                                <div className="grow">
                                    <p className="text-sm font-medium">Lead Developer</p>
                                    <p className="text-base-content/60 -mt-1 text-sm">@devlead</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grow">
                    <div className="card bg-base-100 p-4 shadow md:p-6">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default AccountLayout;
