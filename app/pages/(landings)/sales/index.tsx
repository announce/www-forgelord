import { Capabilities } from "./components/Capabilities";
import { FAQs } from "./components/FAQs";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { Topbar } from "./components/Topbar";

const SalesLandingPage = () => {
    return (
        <>
            <Topbar />
            <Hero />
            <Capabilities />
            <Features />
            <Testimonials />
            <Pricing />
            <FAQs />
            <Footer />
        </>
    );
};

export default SalesLandingPage;
