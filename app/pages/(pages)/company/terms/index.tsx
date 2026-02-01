import { MetaData } from "@/components/MetaData";

const TermsPage = () => {
    return (
        <>
            <MetaData title="Terms" />
            <div className="container sm:py-8 xl:py-16 2xl:py-24">
                <div className="grid gap-6 pb-8 sm:gap-8 lg:grid-cols-2 xl:pb-16 2xl:pb-24">
                    <div className="flex flex-col max-lg:order-2">
                        <div className="badge badge-outline border-base-300 badge-sm font-mono">Good to Know</div>
                        <p className="mt-2 text-2xl font-semibold sm:text-3xl">Simple terms, no hidden stuff</p>
                        <p className="text-base-content/80 mt-2">
                            When you use our services, you're trusting us to keep things fair, clear, and respectful—and
                            we take that seriously.
                        </p>
                        <div className="mt-auto pt-8 sm:pt-12">
                            <p className="relative max-w-xl italic max-sm:text-sm">
                                We’re committed to providing tools that are easy to understand, transparent to use, and
                                built around your needs.
                                <span className="iconify lucide--quote text-base-content/5 absolute -start-6 -top-6 size-12 scale-x-[-1] transform max-sm:hidden"></span>
                            </p>
                            <p className="text-base-content/80 mt-1 text-sm font-medium max-sm:text-end">
                                - Denish, Founder
                            </p>
                        </div>
                    </div>
                    <img
                        src="/images/pages/terms-hero.jpg"
                        alt=""
                        className="h-50 rounded-lg object-cover max-lg:w-full sm:h-84 lg:ms-auto"
                    />
                </div>
                <div className="py-8 xl:py-16 2xl:py-24">
                    <div className="text-center">
                        <p className="text-xl font-medium sm:text-2xl">Terms & Conditions</p>
                        <p className="text-base-content/80 mt-1 inline-block max-w-xl max-sm:text-sm">
                            A clear outline of what you can expect from us—and what we expect from you—when using our
                            services
                        </p>
                    </div>
                    <div className="mt-8 flex gap-8 max-lg:flex-col max-sm:text-sm sm:mt-12 sm:gap-16 xl:mt-16">
                        <div className="card bg-base-100 h-fit min-w-72 p-4 shadow sm:p-6 lg:sticky lg:top-24">
                            <p className="text-lg font-medium">Table of Contents</p>
                            <ul className="*:text-base-content/80 *:hover:text-base-content ms-4 mt-3 list-decimal space-y-1 *:transition-all max-sm:text-sm">
                                <li>
                                    <a href="#acceptance">Acceptance of Terms</a>
                                </li>
                                <li>
                                    <a href="#services">Services We Offer</a>
                                </li>
                                <li>
                                    <a href="#account">Account Responsibilities</a>
                                </li>
                                <li>
                                    <a href="#payment">Payment & Billing</a>
                                </li>
                                <li>
                                    <a href="#conduct">User Conduct</a>
                                </li>
                                <li>
                                    <a href="#privacy">Privacy and Data Collection</a>
                                </li>
                                <li>
                                    <a href="#intellectual">Intellectual Property</a>
                                </li>
                                <li>
                                    <a href="#modifications">Modifications</a>
                                </li>
                                <li>
                                    <a href="#termination">Termination of Access</a>
                                </li>
                                <li>
                                    <a href="#liability">Limitation of Liability</a>
                                </li>
                                <li>
                                    <a href="#law">Governing Law</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact Information</a>
                                </li>
                            </ul>
                        </div>
                        <div className="max-sm:text-sm">
                            <div id="acceptance" className="scroll-mt-24">
                                <h2 className="text-base font-medium sm:text-lg">1. Acceptance of Terms</h2>
                                <p className="mt-2">
                                    By using our services, you agree to be bound by these Terms of Service. If you do
                                    not agree to these terms, please do not access or use our platform.
                                    <br />
                                    Our terms ensure that our platform remains a safe, trustworthy, and effective
                                    environment for everyone involved.
                                </p>
                            </div>

                            <div id="services" className="mt-8 scroll-mt-24 sm:mt-12">
                                <h2 className="text-base font-medium sm:text-lg">2. Services We Offer</h2>
                                <p className="mt-2">
                                    [Your Startup Name] provides various digital tools, including website templates,
                                    design resources, and other business aids aimed at helping startups scale quickly
                                    and easily.
                                    <br />
                                    Our services are crafted with startups in mind, so you can focus on growing your
                                    business without needing to start from scratch.
                                </p>
                            </div>

                            <div id="account" className="mt-8 scroll-mt-24 sm:mt-12">
                                <h2 className="text-base font-medium sm:text-lg">3. Account Responsibilities</h2>
                                <p className="mt-2">
                                    To access certain features, you’ll need to create an account with us. You are
                                    responsible for maintaining the confidentiality of your login credentials and
                                    account details.
                                    <br />
                                    Please ensure that all actions you take through your account comply with these terms
                                    and respect the privacy and security of our platform.
                                </p>
                            </div>

                            <div id="payment" className="mt-8 scroll-mt-24 sm:mt-12">
                                <h2 className="text-base font-medium sm:text-lg">4. Payment & Billing</h2>
                                <p className="mt-2">
                                    Some of our features are part of paid plans. By subscribing, you agree to the
                                    pricing outlined in the service plan you choose.
                                    <br />
                                    Payments will be processed securely, and you can manage your subscription directly
                                    from your account settings.
                                </p>
                            </div>

                            <div id="conduct" className="mt-8 scroll-mt-24 sm:mt-12">
                                <h2 className="text-base font-medium sm:text-lg">5. User Conduct</h2>
                                <p className="mt-2">
                                    We expect all users to act responsibly when interacting with our platform. You agree
                                    not to engage in any harmful, illegal, or unethical activities, including spamming,
                                    hacking, or misusing the platform for personal gain.
                                    <br />
                                    Violations of these rules may result in the suspension or termination of your
                                    account.
                                </p>
                            </div>

                            <div id="privacy" className="mt-8 scroll-mt-24 sm:mt-12">
                                <h2 className="text-base font-medium sm:text-lg">6. Privacy and Data Collection</h2>
                                <p className="mt-2">
                                    We take your privacy seriously. We collect data to enhance your experience and
                                    improve our services. By using our platform, you consent to our Privacy Policy,
                                    which outlines how we collect, store, and use your data.
                                    <br />
                                    Your personal information is secure, and we take measures to protect it.
                                </p>
                            </div>

                            <div id="intellectual" className="mt-8 scroll-mt-24 sm:mt-12">
                                <h2 className="text-base font-medium sm:text-lg">7. Intellectual Property</h2>
                                <p className="mt-2">
                                    All content, designs, templates, and materials provided by [Your Startup Name] are
                                    the property of [Your Startup Name] and its licensors.
                                    <br />
                                    You may not reproduce, modify, or distribute any part of our platform without
                                    express written permission.
                                </p>
                            </div>

                            <div id="modifications" className="mt-8 scroll-mt-24 sm:mt-12">
                                <h2 className="text-base font-medium sm:text-lg">
                                    8. Modifications to Services & Terms
                                </h2>
                                <p className="mt-2">
                                    We may update or change these terms and services from time to time. You will be
                                    notified of any significant updates, and your continued use of the platform will
                                    constitute your acceptance of these changes.
                                    <br />
                                    We encourage you to review these terms periodically for any updates.
                                </p>
                            </div>

                            <div id="termination" className="mt-8 scroll-mt-24 sm:mt-12">
                                <h2 className="text-base font-medium sm:text-lg">9. Termination of Access</h2>
                                <p className="mt-2">
                                    We reserve the right to suspend or terminate your access to our services if you
                                    violate these terms.
                                    <br />
                                    We will notify you if such actions are taken, and you may be given the opportunity
                                    to appeal if you believe there has been a mistake.
                                </p>
                            </div>

                            <div id="liability" className="mt-8 scroll-mt-24 sm:mt-12">
                                <h2 className="text-base font-medium sm:text-lg">10. Limitation of Liability</h2>
                                <p className="mt-2">
                                    While we strive to offer high-quality services, we cannot guarantee that our
                                    platform will be error-free or always available.
                                    <br />
                                    Our liability is limited to the amount you paid for the service, in accordance with
                                    applicable law.
                                </p>
                            </div>

                            <div id="law" className="mt-8 scroll-mt-24 sm:mt-12">
                                <h2 className="text-base font-medium sm:text-lg">11. Governing Law</h2>
                                <p className="mt-2">
                                    These terms are governed by the laws of [Your Jurisdiction]. Any disputes arising
                                    out of or relating to these terms will be resolved in the courts located in [Your
                                    Location].
                                    <br />
                                    By using our services, you consent to the jurisdiction and venue of these courts.
                                </p>
                            </div>

                            <div id="contact" className="mt-8 scroll-mt-24 sm:mt-12">
                                <h2 className="text-base font-medium sm:text-lg">12. Contact Information</h2>
                                <p className="mt-2">
                                    If you have any questions, concerns, or need further clarification about these
                                    terms, feel free to contact us at [Your Contact Information].
                                    <br />
                                    We’re here to assist you and ensure you have the best experience possible with our
                                    platform.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsPage;
