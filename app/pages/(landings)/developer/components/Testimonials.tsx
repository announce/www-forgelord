import { Link } from "react-router";

const testimonials = [
    {
        logo: "/images/brand-logo/google-full.svg",
        userImage: "/images/avatars/1.png",
        userName: "Alex Carter",
        userPosition: "Indie Developer",
        comments:
            "Feels like having a senior dev by my side. It eliminates repetitive tasks, so I can focus on real problems. My workflow has never been this smooth!",
    },
    {
        logo: "/images/brand-logo/microsoft-full.svg",
        userImage: "/images/avatars/2.png",
        userName: "Sarah Lee",
        userPosition: "CTO, DevTech",
        comments:
            "We cut development time in half. AI automation transformed our workflow and made engineers more productive. A must-have for any dev team!",
    },
    {
        logo: "/images/brand-logo/oracle-full.svg",
        userImage: "/images/avatars/3.png",
        userName: "James Novak",
        userPosition: "Startup Founder",
        comments:
            "Launching our MVP was effortless. We generated a full-stack app in minutes—it saved us months of work and huge costs!",
    },
    {
        logo: "/images/brand-logo/ibm-full.svg",
        userImage: "/images/avatars/4.png",
        userName: "Lisa Wong",
        userPosition: "Software Engineer",
        comments:
            "From writing boilerplate to debugging, AI handles the heavy lifting. It’s like pair programming with an expert who never sleeps!",
    },
];

export const Testimonials = () => {
    return (
        <div className="relative" id="testimonials">
            <div className="absolute inset-0 bg-[url('/images/developer/testimonial-background.svg')] bg-cover bg-center bg-no-repeat opacity-5"></div>

            <div className="group/section relative z-10 container scroll-mt-24 py-8 md:py-12 lg:py-16 2xl:py-28">
                <div className="grid gap-6 md:grid-cols-2 xl:gap-12">
                    <div>
                        <div className="bg-base-200/40 border-base-300/50 shadow-base-300/20 text-base-content/60 group-hover/section:text-base-content inline rounded-full border px-2.5 py-0.5 font-mono text-xs shadow-inner transition-all duration-300">
                            Proven Results
                        </div>
                        <p className="mt-2 text-2xl font-semibold sm:text-3xl">What Developers Are Saying</p>
                        <p className="text-base-content/80 mt-2 max-w-lg">
                            From individual coders to enterprise teams, see how AI is transforming the way software is
                            built and deployed
                        </p>
                        <div className="mt-4 md:mt-10">
                            <div className="avatar-group -space-x-4 *:transition-all *:hover:-translate-x-2">
                                {testimonials.map((testimonial, index) => (
                                    <div className="avatar" key={index}>
                                        <div className="bg-base-200 w-8">
                                            <img alt="avatar" src={testimonial.userImage} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-base-content/80 mt-2 max-w-[200px] text-sm">
                                <span className="font-medium">1,200+</span> developers rely on us to build and ship
                                faster.
                            </p>
                        </div>
                        <Link
                            to="#testimonials"
                            className="link text-base-content/60 hover:text-base-content link-hover mt-4 flex items-center gap-2 text-sm italic transition-all md:mt-10">
                            Read all success stories
                            <span className="iconify lucide--arrow-right size-3.5"></span>
                        </Link>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="border-base-300/50 bg-base-100/80 hover:bg-base-100 hover:border-base-300/80 card cursor-pointer border p-4 transition-all">
                                <div className="flex gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle bg-base-200 size-9">
                                            <img src={testimonial.userImage} alt="Avatar" />
                                        </div>
                                    </div>
                                    <div className="grow">
                                        <p className="leading-none font-medium">{testimonial.userName}</p>
                                        <p className="text-base-content/80 text-sm">{testimonial.userPosition}</p>
                                    </div>
                                    <img src="/images/brand-logo/x.svg" alt="X" className="size-3.5 invert" />
                                </div>
                                <p className="text-base-content/80 mt-3 line-clamp-4 text-sm">{testimonial.comments}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
