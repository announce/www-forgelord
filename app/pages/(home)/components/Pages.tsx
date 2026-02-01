import { useState } from "react";
import { Link } from "react-router";

// How to generate images
// Make sure change desktop size to 1600x1000 (except auth)
// For auth: 1300x1050 (except auth)
// Any other layout remove extra spacing

const list = [
    {
        title: "Pricing",
        icon: "lucide--dollar-sign",
        items: [
            {
                image: "pricing-lifetime.jpg",
                title: "Lifetime",
                href: "/pricing/lifetime",
            },
            {
                image: "pricing-subscription.jpg",
                title: "Subscription",
                href: "/pricing/subscription",
            },
            {
                image: "pricing-users.jpg",
                title: "Users",
                href: "/pricing/users",
            },
            {
                image: "pricing-comparison.jpg",
                title: "Comparison",
                href: "/pricing/comparison",
            },
        ],
    },
    {
        title: "Settings",
        icon: "lucide--user",
        items: [
            {
                title: "Profile",
                href: "/settings/profile",
                image: "settings-profile.jpg",
            },
            {
                title: "Account",
                href: "/settings/account",
                image: "settings-account.jpg",
            },
            {
                title: "Notification",
                href: "/settings/notification",
                image: "settings-notification.jpg",
            },
            {
                title: "Manage Plan",
                href: "/settings/plan",
                image: "settings-plan.jpg",
            },
        ],
    },
    {
        title: "Testimonials",
        icon: "lucide--message-circle",
        items: [
            {
                title: "Simple",
                href: "/testimonials/simple",
                image: "testimonials-simple.jpg",
            },
            {
                title: "Swiper",
                href: "/testimonials/swiper",
                image: "testimonials-swiper.jpg",
            },
        ],
    },
    {
        title: "Company",
        icon: "lucide--box",
        items: [
            {
                title: "FAQs",
                href: "/company/faq",
                image: "company-faq.jpg",
            },
            {
                title: "Contact",
                href: "/company/contact",
                image: "company-contact.jpg",
            },
        ],
    },
    {
        title: "Auth",
        icon: "lucide--shield-check",
        items: [
            {
                image: "auth-login.jpg",
                title: "Login",
                href: "/auth/login",
            },
            {
                image: "auth-register.jpg",
                title: "Register",
                href: "/auth/register",
            },
            {
                image: "auth-forgot-password.jpg",
                title: "Forgot password",
                href: "/auth/forgot-password",
            },
            {
                image: "auth-reset-password.jpg",
                title: "Reset password",
                href: "/auth/reset-password",
            },
            {
                image: "auth-2-fa.jpg",
                title: "2 FA",
                href: "/auth/2fa",
            },
        ],
    },
] as const;

type IListItem = (typeof list)[number];

const ShowcaseList = () => {
    const [showFull, setShowFull] = useState(true);

    return (
        <div className={`relative space-y-16 ${!showFull ? "h-[1200px] overflow-hidden" : ""}`}>
            {list.map((item, index) => (
                <div key={index}>
                    <div className="flex items-center justify-center gap-6">
                        <div className="bg-base-content/10 h-0.5 w-4 rounded-full"></div>
                        <p className="text-center text-xl font-medium sm:text-2xl">{item.title}</p>
                        <div className="bg-base-content/10 h-0.5 w-4 rounded-full"></div>
                    </div>
                    <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-5">
                        {item.items.map((item, index) => (
                            <Link
                                to={item.href}
                                target="_blank"
                                className="rounded-box group dark:border-base-300/40 border-base-300/60 bg-base-100 relative border p-1"
                                key={index}>
                                <img
                                    src={"/images/home/screenshots/light/" + item.image}
                                    alt=""
                                    className="rounded-box dark:hidden"
                                />
                                <img
                                    src={"/images/home/screenshots/dark/" + item.image}
                                    alt=""
                                    className="rounded-box hidden dark:block"
                                />
                                <div className="rounded-box absolute inset-x-0 bottom-0 flex h-28 items-center justify-center bg-gradient-to-b from-transparent to-black/50 opacity-0 transition-all group-hover:opacity-100">
                                    <button className="bg-base-200 rounded-box mt-8 px-3 py-1 font-medium">
                                        {item.title}
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
            <div
                className={`to-base-100 absolute inset-x-0 bottom-0 flex h-50 items-center justify-center bg-linear-to-b from-transparent to-[90%] ${showFull ? "hidden" : ""}`}
                onClick={() => setShowFull(true)}>
                <button className="btn btn-neutral mt-16">View more</button>
            </div>
        </div>
    );
};

const SectionNavigator = () => {
    const [selectedItem, setSelectedItem] = useState<IListItem>(list[0]);

    return (
        <div className="flex gap-5">
            <div className="card bg-base-100 sticky top-24 h-fit w-56 min-w-56 px-3 py-4 shadow">
                <p className="text-base-content/80 px-3 text-sm font-medium">Browse Sections</p>
                <div className="menu mt-2 w-full space-y-0.5 p-0">
                    {list.map((item, index) => (
                        <li key={index} onClick={() => setSelectedItem(item)}>
                            <div
                                className={`flex items-center gap-3 ${selectedItem.title == item.title ? "bg-base-200 font-medium" : ""}`}>
                                <span className={`iconify ${item.icon} size-4`}></span>
                                {item.title}
                            </div>
                        </li>
                    ))}
                </div>
            </div>
            <div className="grow">
                <div className="grid gap-5 xl:grid-cols-2">
                    {selectedItem.items.map((item, index) => (
                        <Link
                            to={item.href}
                            target="_blank"
                            className="rounded-box group dark:border-base-300/40 border-base-300/60 bg-base-100 relative border p-1"
                            key={index}>
                            <img
                                src={"/images/home/screenshots/light/" + item.image}
                                alt=""
                                className="rounded-box dark:hidden"
                            />
                            <img
                                src={"/images/home/screenshots/dark/" + item.image}
                                alt=""
                                className="rounded-box hidden dark:block"
                            />
                            <div className="rounded-box absolute inset-x-0 bottom-0 flex h-28 items-center justify-center bg-gradient-to-b from-transparent to-black/50 opacity-0 transition-all group-hover:opacity-100">
                                <button className="bg-base-200 rounded-box mt-8 px-3 py-1 font-medium">
                                    {item.title}
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Pages = () => {
    const [style, setStyle] = useState<"list" | "section">("list");

    return (
        <div className="py-8 md:py-12 xl:py-16 2xl:py-24" id="pages">
            <div className="container">
                <div className="text-center">
                    <div className="rounded-box border-secondary/10 bg-secondary/5 text-secondary inline-flex items-center border p-2">
                        <span className="iconify lucide--zap size-5" />
                    </div>
                    <p className="mt-4 text-2xl font-semibold sm:text-3xl">Explore Pages</p>
                    <p className="text-base-content/70 mt-3 inline-block max-w-lg">
                        A visual walkthrough of our platform. Browse through the pages and see it in action.
                    </p>
                </div>

                <div className="group mt-8 flex items-center justify-center gap-2 max-sm:hidden lg:mt-12">
                    <label
                        className="group-has-[[name=pages-style]:checked]:text-base-content/60 cursor-pointer transition-all"
                        htmlFor="pages-style">
                        List
                    </label>
                    <input
                        id="pages-style"
                        className="toggle"
                        type="checkbox"
                        name="pages-style"
                        onChange={() => setStyle(style === "list" ? "section" : "list")}
                    />
                    <label
                        className="text-base-content/60 group-has-[[name=pages-style]:checked]:text-base-content cursor-pointer transition-all"
                        htmlFor="pages-style">
                        Section
                    </label>
                </div>
                <div className="mt-8 xl:mt-16">
                    <div className="max-sm:hidden">{style == "list" ? <ShowcaseList /> : <SectionNavigator />}</div>
                    <div className="sm:hidden">
                        <ShowcaseList />
                    </div>
                </div>
            </div>
        </div>
    );
};
