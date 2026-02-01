import { ComponentPageTitle } from "@/components/ComponentPageTitle";
import { MetaData } from "@/components/MetaData";

const data = [
    {
        image: "/images/avatars/1.png",
        name: "Sarah L.",
        comments:
            "This SaaS template made our launch effortless. Clean design, powerful features, and easy customization!",
        company: "FlowTech",
        position: "Operations Manager",
        location: "San Francisco, USA",
    },
    {
        image: "/images/avatars/2.png",
        name: "David R.",
        comments: "A complete game-changer! The pre-built UI components saved us weeks of development time.",
        company: "SmartBiz",
        position: "CEO",
        location: "London, UK",
    },
    {
        image: "/images/avatars/3.png",
        name: "Emily C.",
        comments:
            "The automation-ready workflows and integrations helped us scale faster than we imagined. Highly recommended!",
        company: "ScaleUp",
        position: "Product Manager",
        location: "Berlin, Germany",
    },
    {
        image: "/images/avatars/4.png",
        name: "Michael T.",
        comments:
            "Seamless and well-optimized! This template gave us everything we needed to build a high-converting SaaS site.",
        company: "InnovateX",
        position: "CTO",
        location: "Sydney, Australia",
    },
];

const SimpleTestimonialExample = () => {
    return (
        <>
            <MetaData title="Simple Testimonial" />
            <div>
                <ComponentPageTitle
                    label="Testimonials"
                    title="Trusted by Innovators, Loved by Teams"
                    description=" See how businesses streamline their workflows, save time, and boost efficiency with our automation platform"
                />
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:mt-16 xl:grid-cols-4 2xl:mt-24">
                    {data.map((item, index) => (
                        <div key={index} className="bg-base-100 card group p-1 shadow">
                            <div className="bg-base-200/40 group-hover:bg-primary/5 rounded-box relative ps-21 pt-3 pb-2.5 transition-all">
                                <p className="font-medium">{item.name}</p>
                                <p className="text-base-content/80 text-sm leading-none">{item.position}</p>
                                <img
                                    src={item.image}
                                    className="bg-base-200/40 group-hover:bg-primary/5 border-base-100 absolute start-4 -bottom-2 size-14 rounded-full border-3 p-1 shadow-xs transition-all"
                                    alt="Avatar"
                                />
                            </div>
                            <div className="px-4 pt-6 pb-3">
                                <p className="line-clamp-3 text-sm">{item.comments}</p>
                                <div className="text-base-content/80 mt-4 flex items-center justify-between text-sm sm:mt-8 xl:mt-16">
                                    <div className="flex items-center justify-between gap-1.5">
                                        <span className="iconify lucide--building"></span>
                                        <span>{item.company}</span>
                                    </div>
                                    <div className="flex items-center justify-between gap-1.5">
                                        <span className="iconify lucide--map-pin"></span>
                                        <span>{item.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SimpleTestimonialExample;
