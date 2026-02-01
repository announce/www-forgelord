import { useState } from "react";
import { Link } from "react-router";

export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div className="fieldset mt-2">
                <div className="space-y-2">
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
                <div className="text-end">
                    <Link className="label-text text-base-content/80 text-xs" to="/auth/forgot-password">
                        Forgot Password?
                    </Link>
                </div>

                <div className="mt-2 flex items-center gap-3">
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
                Sign In
                <span className="iconify lucide--arrow-right size-4" />
            </Link>

            <div className="mt-5 flex items-center gap-3">
                <hr className="border-base-300 grow border-dashed" />
                <span className="text-base-content/80 text-sm">Or sign in with</span>
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
                Don't have an account?
                <Link className="text-primary ms-1 hover:underline" to="/auth/register">
                    Create One
                </Link>
            </p>
        </>
    );
};
