import { MetaData } from "@/components/MetaData";

import { VerifyForm } from "./VerifyForm";

const VerifyPage = () => {
    return (
        <div>
            <MetaData title="Verify Auth" />

            <div className="text-center">
                <p className="text-xl font-semibold md:text-2xl">Verify Account</p>
                <p className="text-base-content/80 text-sm">
                    Enter the 6-digit code we emailed you to verify your account.
                </p>
            </div>
            <div className="mt-8">
                <VerifyForm />
            </div>
        </div>
    );
};

export default VerifyPage;
