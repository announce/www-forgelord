import { Link } from "react-router";

const purchaseLink = "https://daisyui.com/store/475050";

export const CTA = () => {
    return (
        <div className="container rounded-lg py-8 md:py-12 xl:py-16 2xl:py-24">
            <div className="text-center">
                <div className="from-primary to-secondary text-primary-content inline-flex items-center rounded-full bg-linear-to-tr p-2.5">
                    <span className="iconify lucide--rocket size-5" />
                </div>
                <p className="text-primary mt-4 text-2xl font-semibold sm:text-3xl">Launch Your Project Now</p>
                <p className="mt-3 inline-block max-w-2xl">
                    Get it once, own it forever. No subscriptions, no worries, just seamless tools and endless
                    possibilities to build with confidence.
                </p>
            </div>

            <div className="mt-6 flex justify-center xl:mt-8">
                <ul className="max-w-md space-y-3 text-center">
                    <li className="flex items-center gap-2 max-sm:text-sm">
                        <span className="iconify lucide--badge-check size-6 text-green-500"></span>
                        Built with Tailwind CSS 4 & DaisyUI 5
                    </li>
                    <li className="flex items-center gap-2 max-sm:text-sm">
                        <span className="iconify lucide--badge-check size-6 text-green-500"></span>
                        Lifetime access with free updates
                    </li>
                    <li className="flex items-center gap-2 max-sm:text-sm">
                        <span className="iconify lucide--badge-check size-6 text-green-500"></span>
                        Fully responsive & optimized for all devices
                    </li>
                </ul>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3 sm:gap-5 xl:mt-8">
                <Link
                    to={purchaseLink}
                    target="_blank"
                    className="btn from-primary to-secondary group text-primary-content relative gap-3 border-0 bg-linear-to-r text-base">
                    <span className="iconify lucide--shopping-cart size-4 sm:size-5" />
                    Buy Now
                    <div className="from-primary to-secondary absolute inset-x-1 top-2 -z-1 h-10 bg-linear-to-r opacity-40 blur-md transition-all duration-500 group-hover:inset-x-0 group-hover:opacity-80 group-hover:blur-lg dark:opacity-20 group-hover:dark:!opacity-40"></div>
                </Link>
                <a href="#faqs" className="btn btn-ghost">
                    Need help?
                    <span className="iconify lucide--arrow-down size-3.5" />
                </a>
            </div>
        </div>
    );
};
