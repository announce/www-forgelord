import { useState } from "react";
import { Link } from "react-router";

export const ResetPasswordForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div className="fieldset mt-2 space-y-2">
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

            <Link to="/" className="btn btn-primary btn-wide mt-4 max-w-full gap-3 md:mt-6">
                Update Password
                <span className="iconify lucide--arrow-right size-4" />
            </Link>

            <p className="text-base-content/80 mt-5 text-center text-sm md:mt-6">
                Back to
                <Link className="text-primary ms-1 hover:underline" to="/auth/login">
                    Login
                </Link>
            </p>
        </>
    );
};
