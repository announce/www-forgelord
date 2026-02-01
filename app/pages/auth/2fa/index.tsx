import { Link } from "react-router";

import { MetaData } from "@/components/MetaData";

const TwoFactorAuthPage = () => {
    return (
        <>
            <MetaData title="2 Factor Auth" />
            <div>
                <div className="text-center">
                    <p className="text-xl font-semibold md:text-2xl">Two-Factor Authentication</p>
                    <p className="text-base-content/80 text-sm">Add a verification step for extra protection.</p>
                </div>
                <div className="mt-8">
                    <p className="font-medium">Scan QR code</p>
                    <p className="text-base-content/80 text-sm">
                        Use your authenticator app to scan or enter the key manually.
                    </p>
                    <div className="mt-5 text-center">
                        <img src="/images/auth/2fa-qr.png" className="inline size-36 dark:invert" alt="2FA QR Code" />
                    </div>
                    <p className="text-base-content/80 mt-5 text-center text-sm">Enter the code manually below</p>
                    <div className="mt-2 flex items-center justify-center gap-2">
                        <div className="border-secondary/60 bg-secondary/5 text-secondary rounded-box border px-3 py-0.5">
                            X9B3 · KD7Q · P4W2 · M8F6 · Z7T1
                        </div>
                        <button className="btn btn-sm btn-outline max-sm:btn-square border-base-300 gap-2">
                            <span className="iconify lucide--copy size-3.5"></span>
                            <span className="max-sm:hidden">Copy</span>
                        </button>
                    </div>
                    <hr className="border-base-300 my-5 border-dashed" />
                    <p className="font-medium">Backup codes</p>
                    <p className="mt-1 text-sm">
                        <Link className="text-primary me-1" to="#">
                            Download
                        </Link>
                        these one-time use codes in case you lose access to your device.
                    </p>
                    <Link
                        to="/settings/profile"
                        className="text-base-content/80 hover:text-base-content mt-4 flex items-center justify-center gap-2 text-sm transition-all">
                        <span className="iconify lucide--arrow-left size-3.5"></span>
                        <p>Back to profile</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default TwoFactorAuthPage;
