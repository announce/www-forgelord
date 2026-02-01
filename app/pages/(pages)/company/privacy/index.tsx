import { MetaData } from "@/components/MetaData";

const PrivacyPage = () => {
    return (
        <>
            <MetaData title="Privacy" />

            <div className="container sm:py-8 xl:py-16 2xl:py-24">
                <div className="grid gap-6 pb-8 sm:gap-8 lg:grid-cols-2 xl:pb-16 2xl:pb-24">
                    <div className="flex flex-col max-lg:order-2">
                        <div className="badge badge-outline border-base-300 badge-sm font-mono">Our Promise</div>
                        <p className="mt-2 text-2xl font-semibold sm:text-3xl">
                            Privacy isn’t a feature. It’s a foundation
                        </p>
                        <p className="text-base-content/80 mt-2 max-sm:text-sm">
                            We take privacy seriously—not because we have to, but because it’s the right thing to do.
                        </p>
                        <div className="mt-auto pt-8 sm:pt-12">
                            <p className="relative max-w-xl italic max-sm:text-sm">
                                We build honest, thoughtful products that respect people not just their time, but their
                                data too
                                <span className="iconify lucide--quote text-base-content/5 absolute -start-6 -top-6 size-12 scale-x-[-1] transform max-sm:hidden"></span>
                            </p>
                            <p className="text-base-content/80 mt-1 text-sm font-medium max-sm:text-end">
                                - Denish, Founder
                            </p>
                        </div>
                    </div>
                    <img
                        src="/images/pages/privacy-hero.jpg"
                        alt=""
                        className="h-50 rounded-lg object-cover max-lg:w-full sm:h-84 lg:ms-auto"
                    />
                </div>
                <div className="py-8 xl:py-16 2xl:py-24">
                    <div className="text-center">
                        <p className="text-xl font-medium sm:text-2xl">Privacy Policy</p>
                        <p className="text-base-content/80 mt-1 inline-block max-w-xl max-sm:text-sm">
                            A clear look at how we protect your data and earn your trust every step of the way
                        </p>
                    </div>
                    <div className="mt-8 flex gap-8 max-lg:flex-col sm:mt-12 sm:gap-16 xl:mt-16">
                        <div className="card bg-base-100 h-fit min-w-72 p-4 shadow sm:p-6 lg:sticky lg:top-24">
                            <p className="text-lg font-medium">Table of Contents</p>
                            <ul className="*:text-base-content/80 *:hover:text-base-content ms-4 mt-3 list-decimal space-y-1 *:transition-all max-sm:text-sm">
                                <li>
                                    <a href="#what-we-collect">What we collect</a>
                                </li>
                                <li>
                                    <a href="#how-we-use">How we use</a>
                                </li>
                                <li>
                                    <a href="#when-we-share">When we share</a>
                                </li>
                                <li>
                                    <a href="#your-choices">Your choices</a>
                                </li>
                                <li>
                                    <a href="#data-security">Data security</a>
                                </li>
                                <li>
                                    <a href="#how-long-we-keep">How Long We Keep It</a>
                                </li>
                                <li>
                                    <a href="#children-privacy">Children’s Privacy</a>
                                </li>
                                <li>
                                    <a href="#updates-to-privacy">Updates to This Policy</a>
                                </li>
                                <li>
                                    <a href="#talk-to-us">Talk to Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="max-sm:text-sm">
                            <div id="what-we-collect" className="scroll-mt-24">
                                <p className="text-base font-medium sm:text-lg">1. What We Collect</p>
                                <p className="mt-1">
                                    We collect only what we need to provide a smooth, secure experience.
                                </p>
                                <ul className="ms-3 mt-3 list-inside list-disc space-y-1">
                                    <li>
                                        <span className="font-medium">Account info:</span> Like your name, email, and
                                        password when you sign up
                                    </li>
                                    <li>
                                        <span className="font-medium">Support messages:</span> So we can respond and
                                        help you effectively
                                    </li>
                                    <li>
                                        <span className="font-medium">Basic usage data:</span> Like pages visited and
                                        actions taken, used to improve the experience
                                    </li>
                                    <li>
                                        <span className="font-medium">Cookies:</span> To keep you logged in and remember
                                        your preferences
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8 scroll-mt-24 sm:mt-12" id="how-we-use">
                                <h2 className="text-base font-medium sm:text-lg">2. How We Use It</h2>
                                <p className="mt-1">We use your information to:</p>
                                <ul className="ms-3 mt-3 list-inside list-disc space-y-1">
                                    <li>Keep your account running smoothly</li>
                                    <li>Answer your questions and provide support</li>
                                    <li>Understand how people use our product</li>
                                    <li>Send important updates related to your account</li>
                                </ul>
                                <p className="mt-2">We do not sell your data. Period.</p>
                            </div>

                            <div className="mt-8 scroll-mt-24 sm:mt-12" id="when-we-share">
                                <h2 className="text-base font-medium sm:text-lg">3. When We Share It</h2>
                                <p className="mt-1">We only share your data when necessary:</p>
                                <ul className="ms-3 mt-3 list-inside list-disc space-y-1">
                                    <li>With services we use to operate the product, like hosting and analytics</li>
                                    <li>If required by law or to respond to legal requests</li>
                                    <li>To prevent fraud, abuse, or harm</li>
                                </ul>
                            </div>

                            <div className="mt-8 scroll-mt-24 sm:mt-12" id="your-choices">
                                <h2 className="text-base font-medium sm:text-lg">4. Your Choices</h2>
                                <p className="mt-1">You have full control over your data:</p>
                                <ul className="ms-3 mt-3 list-inside list-disc space-y-1">
                                    <li>Access or update your account details anytime</li>
                                    <li>Delete your account and data completely</li>
                                    <li>Unsubscribe from emails with one click</li>
                                </ul>
                                <p className="mt-2">Just visit your account settings or contact us directly.</p>
                            </div>

                            <div className="mt-8 scroll-mt-24 sm:mt-12" id="data-security">
                                <h2 className="text-base font-medium sm:text-lg">5. Data Security</h2>
                                <p className="mt-1">
                                    Your data is protected using encryption, secure servers, and strong access controls.
                                    While no system is perfect, we work hard to keep everything safe.
                                </p>
                            </div>

                            <div className="mt-8 scroll-mt-24 sm:mt-12" id="how-long-we-keep">
                                <h2 className="text-base font-medium sm:text-lg">6. How Long We Keep It</h2>
                                <p className="mt-1">
                                    We only keep your data as long as it’s needed. If you delete your account, your
                                    personal info will be removed unless we're required to retain it for legal or safety
                                    reasons.
                                </p>
                            </div>

                            <div className="mt-8 scroll-mt-24 sm:mt-12" id="children-privacy">
                                <h2 className="text-base font-medium sm:text-lg">7. Children’s Privacy</h2>
                                <p className="mt-1">
                                    Our product isn’t meant for children under 13. We don’t knowingly collect data from
                                    anyone in that age group. If we find out we did, we’ll delete it right away.
                                </p>
                            </div>

                            <div className="mt-8 scroll-mt-24 sm:mt-12" id="updates-to-privacy">
                                <h2 className="text-base font-medium sm:text-lg">8. Updates to This Policy</h2>
                                <p className="mt-1">
                                    We might update this policy over time. If there’s a major change, we’ll let you
                                    know. You’ll always find the latest version on this page.
                                </p>
                            </div>

                            <div className="mt-8 scroll-mt-24 sm:mt-12" id="talk-to-us">
                                <h2 className="text-base font-medium sm:text-lg">9. Talk to Us</h2>
                                <p>Questions or concerns? We’re here for you.</p>
                                <div className="mt-2 space-y-1">
                                    <p>
                                        <span className="font-medium">Email:</span> your@email.com
                                    </p>
                                    <p>
                                        <span className="font-medium">Address:</span> Your Company Name, Street, City,
                                        Country
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPage;
