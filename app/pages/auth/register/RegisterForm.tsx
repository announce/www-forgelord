import { useState } from "react";
import { Link } from "react-router";

export const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div className="fieldset mt-2">
                <div className="grid grid-cols-1 gap-x-4 xl:grid-cols-2">
                    <div className="space-y-2">
                        <label className="fieldset-label" htmlFor="full_name">
                            Full Name
                        </label>
                        <label className="input w-full">
                            <span className="iconify lucide--user text-base-content/80 size-5"></span>
                            <input placeholder="Full Name" type="text" id="full_name" />
                        </label>
                    </div>
                    <div className="space-y-2">
                        <label className="fieldset-label" htmlFor="username">
                            Username
                        </label>
                        <label className="input w-full">
                            <span className="iconify lucide--at-sign text-base-content/80 size-5"></span>
                            <input placeholder="Username" type="text" id="username" />
                        </label>
                    </div>
                </div>
                <div className="mt-2 space-y-2">
                    <label className="fieldset-label" htmlFor="email">
                        Email Address
                    </label>
                    <label className="input w-full">
                        <span className="iconify lucide--mail text-base-content/80 size-5"></span>
                        <input name="email" placeholder="Email Address" id="email" type="email" />
                    </label>
                </div>
                <div className="mt-2 space-y-2">
                    <label className="fieldset-label" htmlFor="password">
                        Password
                    </label>
                    <label className="input w-full">
                        <span className="iconify lucide--key-round text-base-content/80 size-5"></span>
                        <input
                            name="password"
                            placeholder="Password"
                            id="password"
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
                <div className="mt-4 flex items-center gap-3">
                    <input
                        className="checkbox checkbox-sm checkbox-primary"
                        aria-label="Checkbox example"
                        type="checkbox"
                        id="agreement"
                    />
                    <label htmlFor="agreement" className="text-sm">
                        I agree with
                        <span className="text-primary ms-1 cursor-pointer hover:underline">terms and conditions</span>
                    </label>
                </div>
            </div>

            <Link to="/" className="btn btn-primary btn-wide mt-4 max-w-full gap-3 md:mt-6">
                Sign Up
                <span className="iconify lucide--arrow-right size-4" />
            </Link>

            <div className="mt-5 flex items-center gap-3">
                <hr className="border-base-300 grow border-dashed" />
                <span className="text-base-content/80 text-sm">Or sign up with</span>
                <hr className="border-base-300 grow border-dashed" />
            </div>
            <div className="mt-5 flex items-center justify-center gap-3">
                <button className="btn btn-ghost btn-square border-base-300 max-w-full gap-3" aria-label="Google">
                    <img src="/images/brand-logo/google.svg" className="size-6 dark:invert" alt="Google" />
                </button>
                <button className="btn btn-ghost btn-square border-base-300 max-w-full gap-3" aria-label="Apple">
                    <img src="/images/brand-logo/apple.svg" className="size-6 dark:invert" alt="Apple" />
                </button>
                <button className="btn btn-ghost btn-square border-base-300 max-w-full gap-3" aria-label="Github">
                    <img src="/images/brand-logo/github.svg" className="size-6 dark:invert" alt="Github" />
                </button>
                <button className="btn btn-ghost btn-square border-base-300 max-w-full gap-3" aria-label="X">
                    <img src="/images/brand-logo/x.svg" className="size-4.5 dark:invert" alt="X" />
                </button>
            </div>

            <p className="text-base-content/80 mt-5 text-center text-sm md:mt-6">
                Already have an account?
                <Link className="text-primary ms-1 hover:underline" to="/auth/login">
                    Sign in
                </Link>
            </p>
        </>
    );
};
