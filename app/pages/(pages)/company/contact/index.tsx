import { Link } from "react-router";

import { MetaData } from "@/components/MetaData";

const ContactPage = () => {
    return (
        <>
            <MetaData title="Contact us" />
            <div className="container sm:py-8 xl:py-16 2xl:py-24">
                <div className="text-center">
                    <div className="badge badge-outline border-base-300 badge-sm font-mono">Support</div>
                    <p className="mt-1 text-2xl font-semibold sm:text-3xl">Let’s Connect!</p>
                    <p className="text-base-content/80 mt-2 max-sm:text-sm">
                        Have questions or need support? Our team is here to help. Reach out, and we’ll get back to you
                        ASAP!
                    </p>
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:mt-12 xl:grid-cols-4">
                    <div className="card group bg-base-100 cursor-pointer shadow transition-all hover:-translate-y-0.5 hover:shadow-md">
                        <div className="p-5">
                            <div className="mask mask-squircle group-hover:bg-primary/10 group-hover:text-primary bg-base-200 inline-flex items-center p-2">
                                <span className="iconify lucide--mail size-5"></span>
                            </div>
                            <p className="mt-3 font-medium sm:mt-5">Email</p>
                            <p className="text-base-content/80 mt-1 text-sm">Need help? Drop us an email.</p>
                            <Link
                                className="link group-hover:link-primary mt-2 inline-block text-sm"
                                to="mailto:me@withden.dev">
                                support@gmail.com
                            </Link>
                        </div>
                    </div>
                    <div className="card group bg-base-100 cursor-pointer shadow transition-all hover:-translate-y-0.5 hover:shadow-md">
                        <div className="p-5">
                            <div className="mask mask-squircle group-hover:bg-primary/10 group-hover:text-primary bg-base-200 inline-flex items-center p-2">
                                <span className="iconify lucide--message-circle size-5"></span>
                            </div>
                            <p className="mt-3 font-medium sm:mt-5">Live Chat</p>
                            <p className="text-base-content/80 mt-1 text-sm">Quick questions? Let’s chat!</p>
                            <Link className="link group-hover:link-primary mt-2 inline-block text-sm" to="#live-chat">
                                Start Conversation
                            </Link>
                        </div>
                    </div>
                    <div className="card group bg-base-100 cursor-pointer shadow transition-all hover:-translate-y-0.5 hover:shadow-md">
                        <div className="p-5">
                            <div className="mask mask-squircle group-hover:bg-primary/10 group-hover:text-primary bg-base-200 inline-flex items-center p-2">
                                <span className="iconify lucide--map-pin size-5"></span>
                            </div>
                            <p className="mt-3 font-medium sm:mt-5">Visit us</p>
                            <p className="text-base-content/80 mt-1 text-sm">Come by our office anytime.</p>
                            <Link
                                className="link group-hover:link-primary mt-2 inline-block text-sm"
                                to="#google-direction">
                                Way to us
                            </Link>
                        </div>
                    </div>
                    <div className="card group bg-base-100 cursor-pointer shadow transition-all hover:-translate-y-0.5 hover:shadow-md">
                        <div className="p-5">
                            <div className="mask mask-squircle group-hover:bg-primary/10 group-hover:text-primary bg-base-200 inline-flex items-center p-2">
                                <span className="iconify lucide--share-2 size-5"></span>
                            </div>
                            <p className="mt-3 font-medium sm:mt-5">Social Media</p>
                            <p className="text-base-content/80 mt-1 text-sm">Stay updated & connect with us.</p>
                            <Link
                                className="link group-hover:link-primary mt-2 inline-block text-sm"
                                to="#follow-online">
                                Follow us
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 grid gap-6 lg:mt-12 lg:grid-cols-5 lg:gap-12 xl:gap-12 2xl:mt-16">
                    <div className="max-md:order-2 lg:col-span-3">
                        <p className="text-xl font-medium sm:text-2xl">Get in touch</p>
                        <p className="text-base-content/80 max-sm:text-sm">
                            Have questions? Send us a message, and we’ll respond soon.
                        </p>
                        <div className="fieldset mt-6 gap-4 sm:mt-8">
                            <div className="grid grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="fieldset-label" htmlFor="first_name">
                                        First Name
                                    </label>
                                    <label className="input w-full focus:outline-0">
                                        <span className="iconify lucide--user size-4.5"></span>
                                        <input
                                            type="text"
                                            className="grow focus:outline-0"
                                            placeholder="Denish"
                                            id="first_name"
                                        />
                                    </label>
                                </div>
                                <div className="space-y-2">
                                    <label className="fieldset-label" htmlFor="last_name">
                                        Last Name
                                    </label>
                                    <label className="input w-full focus:outline-0">
                                        <span className="iconify lucide--user size-4.5"></span>
                                        <input
                                            type="text"
                                            className="grow focus:outline-0"
                                            placeholder="Navadiya"
                                            id="last_name"
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="fieldset-label" htmlFor="email">
                                    Email
                                </label>
                                <label className="input w-full focus:outline-0">
                                    <span className="iconify lucide--mail size-4.5"></span>
                                    <input
                                        type="email"
                                        className="grow focus:outline-0"
                                        placeholder="me@mail.com"
                                        id="email"
                                    />
                                </label>
                            </div>
                            <div className="space-y-2">
                                <label className="fieldset-label" htmlFor="phone">
                                    Phone
                                </label>
                                <label className="input w-full focus:outline-0">
                                    <span className="iconify lucide--phone size-4.5"></span>
                                    <input
                                        type="tel"
                                        className="grow focus:outline-0"
                                        placeholder="+(98) 7654 3210"
                                        id="phone"
                                    />
                                </label>
                            </div>
                            <div className="space-y-2">
                                <label className="fieldset-label" htmlFor="message">
                                    Message
                                </label>
                                <textarea className="textarea h-30 w-full" placeholder="" id="message" />
                            </div>
                            <div className="flex items-center gap-3">
                                <input
                                    className="checkbox checkbox-sm"
                                    aria-label="Checkbox example"
                                    type="checkbox"
                                    id="agreement"
                                />
                                <label htmlFor="agreement" className="text-sm">
                                    I agree with
                                    <span className="link hover:link-primary ms-1">privacy policy</span>
                                </label>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <button className="btn btn-primary gap-2.5">
                                <span className="iconify lucide--send size-4.5"></span>
                                Send a Message
                            </button>
                        </div>
                    </div>
                    <div className="max-md:order-1 lg:col-span-2">
                        <div className="relative">
                            <img
                                src="/images/pages/contact.jpg"
                                className="rounded-box h-72 w-full object-cover lg:h-148"
                                alt="Contact us"
                            />
                            <div className="rounded-b-box absolute start-0 end-0 bottom-0 h-80 bg-linear-to-b from-transparent to-black/80"></div>
                            <div className="rounded-box absolute start-4 end-4 bottom-4 border border-white/15 bg-white/5 p-4 text-white backdrop-blur-lg sm:p-5">
                                <p className="max-sm:text-sm">
                                    The support team was incredibly responsive and helpful. They answered all my
                                    questions quickly and made the entire experience seamless. Highly recommend!
                                </p>
                                <div className="mt-3 flex items-end gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle size-10 bg-white">
                                            <img src="/images/avatars/3.png" alt="Avatar" />
                                        </div>
                                    </div>
                                    <div className="grow">
                                        <p className="font-medium sm:text-lg">John Doe</p>
                                        <p className="text-xs opacity-80 sm:-mt-1 sm:text-sm">CEO@TechCorp</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="iconify lucide--star size-4.5 text-orange-400"></span>
                                        <span className="text-orange-400 sm:hidden">5</span>
                                        <span className="iconify lucide--star size-4.5 text-orange-400 max-sm:hidden"></span>
                                        <span className="iconify lucide--star size-4.5 text-orange-400 max-sm:hidden"></span>
                                        <span className="iconify lucide--star size-4.5 text-orange-400 max-sm:hidden"></span>
                                        <span className="iconify lucide--star size-4.5 text-orange-400 max-sm:hidden"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
