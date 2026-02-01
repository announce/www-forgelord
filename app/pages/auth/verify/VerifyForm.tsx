import { Link } from "react-router";

export const VerifyForm = () => {
    return (
        <>
            <div className="fieldset mt-2">
                <div className="space-y-2">
                    <label className="fieldset-label" htmlFor="otp">
                        Verification Code
                    </label>
                    <label className="input w-full">
                        <span className="iconify lucide--binary text-base-content/80 size-5"></span>
                        <input
                            type="number"
                            inputMode="numeric"
                            maxLength={6}
                            pattern="\d*"
                            name="otp"
                            id="otp"
                            placeholder="••••••"
                        />
                    </label>
                </div>
            </div>

            <Link to="/automation" className="btn btn-primary btn-wide mt-4 max-w-full gap-3 md:mt-6">
                Verify Code
                <span className="iconify lucide--arrow-right size-4" />
            </Link>

            <p className="text-base-content/80 mt-5 text-center text-sm md:mt-6">
                Didn’t receive the code?
                <Link className="text-primary ms-1 hover:underline" to="/auth/register">
                    Resend
                </Link>
            </p>
        </>
    );
};
