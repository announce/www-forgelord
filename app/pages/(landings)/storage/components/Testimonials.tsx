import { useState } from "react";
import "swiper/css";
import { Autoplay, EffectCoverflow, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperClass, SwiperProps, SwiperSlide } from "swiper/react";

const testimonials = [
    {
        image: "/images/avatars/1.png",
        name: "Max Turner",
        role: "CTO, GrowthHive",
        comments:
            "This AI storage platform has eliminated clutter and saved us hours of manual work. Automated duplicate removal keeps everything organized and accessible.",
    },
    {
        image: "/images/avatars/2.png",
        name: "Priya Sharma",
        role: "CEO, DataBoost",
        comments:
            "Seamless integrations with our favorite tools helped us centralize files and simplify collaboration. Setup was fast, and our workflow is now effortless.",
    },
    {
        image: "/images/avatars/3.png",
        name: "Liam Chen",
        role: "VP Technology, NovaCore",
        comments:
            "Voice commands and smart prompts are incredibly intuitive. Sharing and managing files takes seconds, and our entire team loves the efficiency.",
    },
    {
        image: "/images/avatars/4.png",
        name: "Emily Davis",
        role: "Head of Operations, BrightPath",
        comments:
            "Real-time security notifications and end-to-end encryption give us peace of mind. Sensitive data stays protected without any extra effort.",
    },
    {
        image: "/images/avatars/5.png",
        name: "Rahul Mehta",
        role: "Head of IT, ApexLogic",
        comments:
            "The dashboard provides clear, actionable insights on storage usage and access trends. We optimize capacity and reduce costs with AI-powered analytics.",
    },
    {
        image: "/images/avatars/6.png",
        name: "Sophia Martinez",
        role: "Manager, ElevateTech",
        comments:
            "Automated organization features mean our teams always find what they need—no more messy folders. It’s become an essential productivity tool.",
    },
];

export const Testimonials = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

    const mainOptions: SwiperProps = {
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 4,
            },
            1440: {
                slidesPerView: 5,
            },
        },
        thumbs: {
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        },
        spaceBetween: 0,
        centerInsufficientSlides: true,
        centeredSlides: true,

        navigation: {
            prevEl: ".testimonials-button-prev",
            nextEl: ".testimonials-button-next",
        },
        loop: true,
        speed: 1500,
        effect: "coverflow",
        autoplay: {
            delay: 5000,
        },
        coverflowEffect: {
            rotate: 0,
            depth: 0,
            scale: 0.85,
            slideShadows: false,
        },
        modules: [Navigation, Autoplay, Thumbs, EffectCoverflow],
    };

    const thumbOptions: SwiperProps = {
        watchSlidesProgress: true,
        slidesPerView: 1,
        spaceBetween: 80,
        onSwiper: setThumbsSwiper,
        speed: 1500,
        loop: true,
        modules: [Thumbs],
    };

    return (
        <div
            className="group/section relative z-10 container scroll-mt-12 py-8 md:py-12 lg:py-16 2xl:py-28"
            id="reviews">
            <p className="group-hover/section:text-primary text-base-content/60 text-center text-[12px] font-medium tracking-[1px] uppercase transition-all duration-300 group-hover/section:tracking-[2px]">
                Results
            </p>
            <p className="mt-2 text-center text-2xl font-semibold sm:text-3xl">What Users Say</p>
            <div className="mt-2 flex justify-center text-center">
                <p className="text-base-content/80 max-w-lg">
                    Hear from innovators using AI storage to boost security, speed, and daily productivity effortlessly
                </p>
            </div>
            <div className="mt-8 flex justify-center lg:mt-16 2xl:mt-24">
                <div className="relative w-xs sm:w-sm md:w-lg">
                    <Swiper {...mainOptions}>
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="group mt-1 min-h-32">
                                <div className="flex flex-col items-center justify-center text-center">
                                    <img
                                        src={testimonial.image}
                                        alt="Avatar"
                                        className="bg-base-200 group-[.swiper-slide-active]:ring-primary ring-offset-base-200 size-12 rounded-full ring-transparent ring-offset-2 grayscale-50 transition-all duration-1500 group-[.swiper-slide-active]:size-16 group-[.swiper-slide-active]:ring-2 group-[.swiper-slide-active]:grayscale-0"
                                    />
                                    <div className="mt-2 scale-80 whitespace-nowrap opacity-0 transition-all duration-1500 group-[.swiper-slide-active]:scale-100 group-[.swiper-slide-active]:opacity-100">
                                        <p className="text-lg font-medium">{testimonial.name}</p>
                                        <p className="text-base-content/80 -mt-1 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="absolute -start-16 top-1/2 z-1 -translate-y-1/2 max-sm:hidden">
                        <button className="testimonials-button-prev btn btn-circle absolute">
                            <span className="iconify lucide--chevron-left size-5"></span>
                        </button>
                    </div>
                    <div className="absolute -end-16 top-1/2 z-1 -translate-y-1/2 max-sm:hidden">
                        <button className="testimonials-button-next btn btn-circle">
                            <span className="iconify lucide--chevron-right size-5"></span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex justify-center lg:mt-6">
                <div className="relative w-xs sm:w-sm md:w-lg">
                    <Swiper {...thumbOptions}>
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div>
                                    <div className="flex items-center justify-center gap-1 *:size-5 *:text-orange-500 *:sm:size-6">
                                        <span className="iconify lucide--star"></span>
                                        <span className="iconify lucide--star"></span>
                                        <span className="iconify lucide--star"></span>
                                        <span className="iconify lucide--star"></span>
                                        <span className="iconify lucide--star"></span>
                                    </div>
                                    <p className="text-base-content/80 mt-10 text-center max-sm:text-sm xl:text-lg">
                                        {testimonial.comments}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};
