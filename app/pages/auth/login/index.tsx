import { MetaData } from "@/components/MetaData";

import { LoginForm } from "./LoginForm";

const LoginPage = () => {
    return (
        <div>
            <MetaData title="Login Auth" />

            <div className="text-center">
                <p className="text-xl font-semibold md:text-2xl">Welcome Back!</p>
                <p className="text-base-content/80 text-sm">Sign in to continue your AI-powered experience</p>
            </div>
            <div className="mt-8">
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
