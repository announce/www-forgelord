import { MetaData } from "@/components/MetaData";

import { Actions } from "./components/Actions";
import { CTA } from "./components/CTA";
import { FAQs } from "./components/FAQs";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { Topbar } from "./components/Topbar";

const DeveloperLandingPage = () => {
    return (
        <>
            <MetaData title="Developer Landing" />

            <Topbar />
            <Hero />
            <Features />
            <Actions />
            <Testimonials />
            <Pricing />
            <FAQs />
            <CTA />
            <Footer />
        </>
    );
};

export default DeveloperLandingPage;
