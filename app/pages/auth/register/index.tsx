import { MetaData } from "@/components/MetaData";

import { RegisterForm } from "./RegisterForm";

const RegisterPage = () => {
    return (
        <div>
            <MetaData title="Register Auth" />
            <div className="text-center">
                <p className="text-xl font-semibold md:text-2xl">Join Scalo Today</p>
                <p className="text-base-content/80 text-sm">Sign up to access powerful AI tools and features!</p>
            </div>
            <div className="mt-8">
                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;
