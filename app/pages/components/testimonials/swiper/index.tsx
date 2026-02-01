import "swiper/css";
import { Autoplay, EffectCoverflow, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ComponentPageTitle } from "@/components/ComponentPageTitle";
import { MetaData } from "@/components/MetaData";

const testimonials = [
    {
        logo: "/images/brand-logo/google-full.svg",
        userImage: "/images/avatars/1.png",
        userName: "Alex Carter",
        userPosition: "Indie Developer",
        comments:
            "This AI feels like having a senior developer by my side. It eliminates repetitive tasks, so I can focus on solving real problems. My workflow has never been this efficient before!",
    },
    {
        logo: "/images/brand-logo/microsoft-full.svg",
        userImage: "/images/avatars/2.png",
        userName: "Sarah Lee",
        userPosition: "CTO, DevTech",
        comments:
            "We cut our development time in half. AI-powered automation has completely transformed our workflow, making our engineers more productive. It’s a must-have tool for any serious development team.",
    },
    {
        logo: "/images/brand-logo/oracle-full.svg",
        userImage: "/images/avatars/3.png",
        userName: "James Novak",
        userPosition: "Startup Founder",
        comments:
            "Building a startup is tough, but this AI tool made launching our MVP effortless. We generated a full-stack app in minutes—unbelievable! It saved us months of development work and costly resources.",
    },
    {
        logo: "/images/brand-logo/ibm-full.svg",
        userImage: "/images/avatars/4.png",
        userName: "Lisa Wong",
        userPosition: "Software Engineer",
        comments:
            "From writing boilerplate to debugging, AI handles the heavy lifting. It’s like pair programming with an expert who never sleeps. The accuracy and efficiency have completely exceeded my expectations.",
    },
    {
        logo: "/images/brand-logo/adobe-full.svg",
        userImage: "/images/avatars/5.png",
        userName: "David Kim",
        userPosition: "Lead Developer, CodeX",
        comments:
            "AI-generated code used to feel experimental, but this system writes production-ready code that we trust. It’s a massive competitive advantage, and our deployment cycle has never been this fast.",
    },
];

const SwiperTestimonialExample = () => {
    return (
        <>
            <MetaData title="Swiper Testimonial" />
            <ComponentPageTitle
                label="Trusted Globally"
                title="Real Developers. Real Results."
                description="Developers worldwide are building faster and smarter with AI-powered coding. See what they say"
            />
            <div className="mt-8 lg:mt-16">
                <Swiper
                    spaceBetween={0}
                    breakpoints={{
                        480: {
                            slidesPerView: 1.1,
                        },
                        768: {
                            slidesPerView: 1.8,
                        },
                        1280: {
                            slidesPerView: 2.2,
                        },
                    }}
                    centeredSlides
                    centerInsufficientSlides
                    loop
                    speed={1500}
                    effect="coverflow"
                    autoplay={{
                        delay: 5000,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        depth: 0,
                        scale: 0.9,
                        slideShadows: false,
                    }}
                    navigation={{
                        prevEl: ".testimonials-button-prev",
                        nextEl: ".testimonials-button-next",
                    }}
                    modules={[Navigation, Autoplay, Thumbs, EffectCoverflow]}>
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-base-100 border-base-200 rounded-box group hover:border-base-300 flex justify-between gap-6 border p-6 transition-all max-xl:flex-col md:gap-12 lg:p-8 xl:h-86 xl:gap-32">
                                <div className="flex flex-col items-start justify-between gap-4 text-nowrap max-xl:flex-col-reverse">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="bg-base-200 mask size-12 mask-circle">
                                                <img src={testimonial.userImage} alt="Avatar" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-lg font-medium">{testimonial.userName}</p>
                                            <p className="text-base-content/80 -mt-1 text-sm">
                                                {testimonial.userPosition}
                                            </p>
                                        </div>
                                    </div>
                                    <img
                                        src={testimonial.logo}
                                        className="h-6 grayscale transition-all duration-300 group-hover:grayscale-0 lg:h-8"
                                        alt="Testimonial"
                                    />
                                </div>
                                <div className="bg-base-200/60 border-base-200 rounded-box group-hover:border-base-300 relative border p-6 transition-all">
                                    <p className="text-base-content/80 lg:text-lg">{testimonial.comments}</p>
                                    <span className="iconify lucide--quote text-base-content/5 absolute -end-6 -top-6 size-20"></span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="mt-8 flex items-center justify-center gap-4 xl:mt-16">
                    <button className="testimonials-button-prev btn btn-circle">
                        <span className="iconify lucide--chevron-left size-5"></span>
                    </button>
                    <button className="testimonials-button-next btn btn-circle">
                        <span className="iconify lucide--chevron-right size-5"></span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default SwiperTestimonialExample;
