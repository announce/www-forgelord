import { MetaData } from "@/components/MetaData";

import { ResetPasswordForm } from "./ResetPasswordForm";

const LoginPage = () => {
    return (
        <div>
            <MetaData title="Reset Password Auth" />
            <div className="text-center">
                <p className="text-xl font-semibold md:text-2xl">Reset Your Password</p>
                <p className="text-base-content/80 text-sm">Enter a new password for your account.</p>
            </div>
            <div className="mt-8">
                <ResetPasswordForm />
            </div>
        </div>
    );
};

export default LoginPage;
