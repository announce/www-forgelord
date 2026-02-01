import { Link } from "react-router";

import { MetaData } from "@/components/MetaData";

const ForgotPasswordPage = () => {
    return (
        <>
            <MetaData title="Forgot Password Auth" />
            <div className="flex flex-col justify-center">
                <div className="text-center">
                    <p className="text-xl font-semibold md:text-2xl">Forgot Your Password?</p>
                    <p className="text-base-content/80 text-sm">Enter your email, and we’ll send you a reset link.</p>
                </div>
                <div className="mt-8">
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
                    </div>
                    <div className="text-end">
                        <Link to="/extra/faq" className="text-base-content/80 text-sm">
                            Need help?
                        </Link>
                    </div>

                    <Link to="/auth/reset-password" className="btn btn-primary btn-wide mt-4 max-w-full gap-3 md:mt-6">
                        Send Reset Link
                        <span className="iconify lucide--arrow-right size-4" />
                    </Link>

                    <p className="text-base-content/80 mt-5 text-center text-sm md:mt-6">
                        Back to
                        <Link className="text-primary ms-1 hover:underline" to="/auth/login">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default ForgotPasswordPage;
