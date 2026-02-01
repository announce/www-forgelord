import { MetaData } from "@/components/MetaData";
import { Footer } from "@/components/layouts/Footer";
import { Topbar } from "@/components/layouts/Topbar";

import { BundleOffer } from "./components/BundleOffer";
import { CTA } from "./components/CTA";
import { FAQ } from "./components/FAQ";
import { Hero } from "./components/Hero";
import { Pages } from "./components/Pages";
import { Testimonial } from "./components/Testimonial";

export default function Home() {
    return (
        <div>
            <MetaData />
            <div className="fixed inset-0 -z-20 bg-[url('/images/pages/squares-background.png')] opacity-2 dark:invert"></div>
            <div className="fixed inset-0 -z-19 bg-[url('/images/pages/mesh-background.jpg')] [background-size:110%] object-fill opacity-2"></div>
            <div className="to-base-100 via-base-100/40 fixed inset-0 top-0 -z-1 bg-linear-to-b from-transparent"></div>
            <Topbar />
            <Hero />
            <Pages />
            <Testimonial />
            <CTA />
            <FAQ />
            <BundleOffer />
            <Footer />
        </div>
    );
}
