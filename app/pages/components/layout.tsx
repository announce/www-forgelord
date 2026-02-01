import { ReactNode } from "react";

import { Footer } from "@/components/layouts/Footer";
import { Topbar } from "@/components/layouts/Topbar";

const ComponentLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <div className="fixed inset-0 -z-20 bg-[url('/images/pages/squares-background.png')] opacity-3 dark:invert"></div>
            <div className="fixed inset-0 -z-19 bg-[url('/images/pages/mesh-background.jpg')] [background-size:110%] object-fill opacity-2"></div>
            <div className="to-base-100 via-base-100/40 fixed inset-0 top-0 -z-1 bg-linear-to-b from-transparent"></div>
            <Topbar />
            <div className="container sm:py-8 xl:py-12 2xl:py-16">{children}</div>
            <div className="mt-8 lg:mt-12 2xl:mt-16">
                <Footer />
            </div>
        </div>
    );
};

export default ComponentLayout;
