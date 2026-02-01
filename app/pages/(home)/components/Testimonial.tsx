import { useState } from "react";

const testimonials = [
    {
        id: "landing-testimonial-1",
        image: "/images/home/testimonial-pouya.jpg",
        name: "Pouya Saadeghi",
        role: "Creator of daisyUI",
        comment:
            "All the required pages for a startup website are already there. Instead of spending weeks to decide about page layouts, spacing, sizes and details, ship your idea in 30 minutes and start getting users.",
    },
] as const;

export const Testimonial = () => {
    const [currentPosition, setCurrentPosition] = useState(0);

    const next = () => {
        changePosition(currentPosition < testimonials.length - 1 ? currentPosition + 1 : 0);
    };

    const prev = () => {
        changePosition(currentPosition == 0 ? testimonials.length - 1 : currentPosition - 1);
    };

    const changePosition = (position: number) => {
        setCurrentPosition(position);
        document.getElementById(testimonials[position].id)?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
        });
    };

    return (
        <section id="testimonial" className="relative container py-8 md:py-12 xl:py-16 2xl:py-24">
            <div className="relative">
                <div className="text-center">
                    <div className="inline-flex items-center rounded border border-orange-500/10 bg-orange-500/5 p-2">
                        <span className="iconify lucide--sparkles size-5 text-orange-600" />
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Trusted by Innovators</h2>
                    <p className="text-base-content/70 mt-3 inline-block max-w-lg">
                        Real stories from real users who transformed their ideas into success
                    </p>
                </div>

                <div className="relative mt-24 w-full">
                    <div className="carousel w-full">
                        {testimonials.map((testimonial) => (
                            <div
                                id={testimonial.id}
                                key={testimonial.id}
                                className="carousel-item flex w-full flex-col items-center justify-center">
                                <div className="text-center">
                                    <div className="avatar">
                                        <div className="mask mask-squircle bg-base-200 w-24">
                                            <img src={testimonial.image} alt="testimonial" />
                                        </div>
                                    </div>
                                    <p className="mt-6 text-xl font-medium">{testimonial.name}</p>
                                    <p className="text-base-content/80">{testimonial.role}</p>
                                    <div className="mt-6 flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            className="size-6 text-yellow-500"
                                            viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            className="size-6 text-yellow-500"
                                            viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            className="size-6 text-yellow-500"
                                            viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            className="size-6 text-yellow-500"
                                            viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            className="size-6 text-yellow-500"
                                            viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"></path>
                                        </svg>
                                    </div>
                                    <p className="mt-6 inline-block max-w-[600px] max-sm:text-sm">
                                        {testimonial.comment}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between">
                        <button onClick={prev} className="btn btn-circle" aria-label="prev">
                            <span className="iconify lucide--chevron-left size-4" />
                        </button>
                        <button onClick={next} className="btn btn-circle" aria-label="next">
                            <span className="iconify lucide--chevron-right size-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
