import { ComponentPageTitle } from "@/components/ComponentPageTitle";
import { MetaData } from "@/components/MetaData";

const ComparisonPricingPage = () => {
    return (
        <>
            <MetaData title="Pricing Comparison" />
            <div className="group">
                <ComponentPageTitle
                    label="Pricing"
                    title="Find the Right Plan for You"
                    description="Compare features and choose the plan that fits your needs."
                />
                <div className="bg-base-100 rounded-box mt-8 p-4 shadow sm:p-6 xl:mt-16">
                    <div className="relative mx-auto w-full max-w-6xl overflow-x-auto">
                        <div className="min-w-max">
                            <table className="table w-full">
                                <thead className="">
                                    <tr className="border-0">
                                        <th className="bg-base-100 sticky left-0 z-30 p-4"></th>
                                        <th className="text-base-content z-20 mx-4">
                                            <div className="rounded-box p-4 text-center font-normal">
                                                <p className="text-xl font-medium">Basic</p>
                                                <p className="mt-1 text-3xl font-semibold">
                                                    <span className="text-base-content/80 align-super text-xl font-medium">
                                                        $
                                                    </span>
                                                    19
                                                    <span className="text-base-content/80 text-sm font-medium">
                                                        / Month
                                                    </span>
                                                </p>
                                                <p className="text-base-content/80 mt-2 text-sm">
                                                    Individuals & small projects
                                                </p>
                                            </div>
                                        </th>
                                        <th className="text-base-content z-20 mx-4">
                                            <div className="bg-primary/5 rounded-box relative p-4 text-center font-normal">
                                                <div className="bg-primary text-primary-content rounded-box absolute end-4 -top-2 px-2 py-1 text-xs">
                                                    Most Popular
                                                </div>
                                                <p className="text-primary text-xl font-medium">Pro</p>
                                                <p className="text-primary mt-1 text-3xl font-semibold">
                                                    <span className="text-base-content/80 align-super text-xl font-medium">
                                                        $
                                                    </span>
                                                    39
                                                    <span className="text-base-content/80 text-sm font-medium">
                                                        / Month
                                                    </span>
                                                </p>
                                                <p className="text-base-content/80 mt-2 text-sm">
                                                    Freelancers & small businesses
                                                </p>
                                            </div>
                                        </th>
                                        <th className="text-base-content sticky top-0 z-20 mx-4">
                                            <div className="rounded-box p-4 text-center font-normal">
                                                <p className="text-secondary text-xl font-medium">Enterprise</p>
                                                <p className="text-secondary mt-1 text-3xl font-semibold">
                                                    <span className="text-base-content/80 align-super text-xl font-medium">
                                                        $
                                                    </span>
                                                    99
                                                    <span className="text-base-content/80 text-sm font-medium">
                                                        / Month
                                                    </span>
                                                </p>
                                                <p className="text-base-content/80 mt-2 text-sm">
                                                    Businesses & large agencies
                                                </p>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="[&_td]:bg-base-100 max-sm:text-xs [&_td]:first:max-sm:max-w-40">
                                    <tr className="border-0">
                                        <td
                                            className="!bg-base-200 rounded-box sticky start-0 mt-6 mb-2 inline-block px-4 py-1.5 font-medium"
                                            colSpan={3}>
                                            AI & Automation
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="sticky start-0 z-10 p-3 font-medium">AI Tools Access</td>
                                        <td className="p-3 text-center">Limited</td>
                                        <td className="p-3 text-center">All Tools</td>
                                        <td className="p-3 text-center">All Tools + Custom</td>
                                    </tr>
                                    <tr>
                                        <td className="sticky start-0 z-10 inline-block p-3 font-medium">
                                            Workflow Automation
                                        </td>
                                        <td className="p-3 text-center">Basic</td>
                                        <td className="p-3 text-center">Advanced</td>
                                        <td className="p-3 text-center">Unlimited</td>
                                    </tr>
                                    <tr>
                                        <td className="sticky start-0 z-10 inline-block p-3 font-medium">
                                            Processing Speed
                                        </td>
                                        <td className="p-3 text-center">Standard</td>
                                        <td className="p-3 text-center">Fast</td>
                                        <td className="p-3 text-center">Fastest</td>
                                    </tr>
                                    <tr>
                                        <td className="sticky start-0 z-10 inline-block p-3 font-medium">
                                            Custom AI Models
                                        </td>
                                        <td className="p-3 text-center">
                                            <span className="iconify lucide--x text-error size-5"></span>
                                        </td>
                                        <td className="p-3 text-center">
                                            <span className="iconify lucide--check text-success size-5"></span>
                                        </td>
                                        <td className="p-3 text-center">
                                            <span className="iconify lucide--check text-success size-5"></span>
                                        </td>
                                    </tr>
                                    <tr className="border-0">
                                        <td className="!bg-base-200 rounded-box sticky start-0 mt-5 mb-2 inline-block px-4 py-1.5 font-medium">
                                            Storage & Security
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="sticky start-0 z-10 inline-block p-3 font-medium">
                                            Storage Capacity
                                        </td>
                                        <td className="p-3 text-center">10 GB</td>
                                        <td className="p-3 text-center">100 GB</td>
                                        <td className="p-3 text-center">Unlimited</td>
                                    </tr>
                                    <tr>
                                        <td className="sticky start-0 z-10 inline-block p-3 font-medium">
                                            Data History
                                        </td>
                                        <td className="p-3 text-center">30 Days</td>
                                        <td className="p-3 text-center">1 Year</td>
                                        <td className="p-3 text-center">Unlimited</td>
                                    </tr>
                                    <tr>
                                        <td className="sticky start-0 z-10 inline-block p-3 font-medium">
                                            Security & Compliance
                                        </td>
                                        <td className="p-3 text-center">Standard</td>
                                        <td className="p-3 text-center">Enhanced</td>
                                        <td className="p-3 text-center">Enterprise-Grade</td>
                                    </tr>
                                    <tr>
                                        <td className="sticky start-0 z-10 inline-block p-3 font-medium">
                                            Dedicated Infrastructure
                                        </td>
                                        <td className="p-3 text-center">
                                            <span className="iconify lucide--x text-error size-5"></span>
                                        </td>
                                        <td className="p-3 text-center">
                                            <span className="iconify lucide--check text-success size-5"></span>
                                        </td>
                                        <td className="p-3 text-center">
                                            <span className="iconify lucide--check text-success size-5"></span>
                                        </td>
                                    </tr>
                                    <tr className="border-0">
                                        <td className="!bg-base-200 rounded-box sticky start-0 mt-5 mb-2 inline-block px-4 py-1.5 font-medium">
                                            Customization
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="sticky start-0 z-10 inline-block p-3 font-medium">
                                            Third-Party Integrations
                                        </td>
                                        <td className="p-3 text-center">Limited</td>
                                        <td className="p-3 text-center">Extensive</td>
                                        <td className="p-3 text-center">Custom Integrations</td>
                                    </tr>
                                    <tr>
                                        <td className="sticky start-0 z-10 inline-block p-3 font-medium">
                                            Custom Branding
                                        </td>
                                        <td className="p-3 text-center">
                                            <span className="iconify lucide--x text-error size-5"></span>
                                        </td>
                                        <td className="p-3 text-center">
                                            <span className="iconify lucide--check text-success size-5"></span>
                                        </td>
                                        <td className="p-3 text-center">
                                            <span className="iconify lucide--check text-success size-5"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="sticky start-0 z-10 inline-block p-3 font-medium">API Access</td>
                                        <td className="p-3 text-center">
                                            <span className="iconify lucide--x text-error size-5"></span>
                                        </td>
                                        <td className="p-3 text-center">
                                            <span className="iconify lucide--x text-error size-5"></span>
                                        </td>
                                        <td className="p-3 text-center">
                                            <span className="iconify lucide--check text-success size-5"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="sticky start-0 z-10 inline-block p-3 font-medium">
                                            White-Labeling
                                        </td>
                                        <td className="p-3 text-center">
                                            <span className="iconify lucide--x text-error size-5"></span>
                                        </td>
                                        <td className="p-3 text-center">
                                            <span className="iconify lucide--x text-error size-5"></span>
                                        </td>
                                        <td className="p-3 text-center">
                                            <span className="iconify lucide--check text-success size-5"></span>
                                        </td>
                                    </tr>
                                    <tr className="border-0">
                                        <td className="!bg-base-200 rounded-box sticky start-0 mt-5 mb-2 inline-block px-4 py-1.5 font-medium">
                                            Support & Services
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="sticky start-0 z-10 inline-block p-3 font-medium">
                                            Support Type
                                        </td>
                                        <td className="p-3 text-center">Email Support</td>
                                        <td className="p-3 text-center">Priority Support</td>
                                        <td className="p-3 text-center">24/7 Premium Support</td>
                                    </tr>
                                    <tr>
                                        <td className="sticky start-0 z-10 inline-block p-3 font-medium">
                                            Dedicated Account Manager
                                        </td>
                                        <td className="p-3 text-center">
                                            <span className="iconify lucide--x text-error size-5"></span>
                                        </td>
                                        <td className="p-3 text-center">
                                            <span className="iconify lucide--x text-error size-5"></span>
                                        </td>
                                        <td className="p-3 text-center">
                                            <span className="iconify lucide--check text-success size-5"></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="sticky start-0 z-10 inline-block p-3 font-medium">
                                            Onboarding Assistance
                                        </td>
                                        <td className="p-3 text-center">Basic Guide</td>
                                        <td className="p-3 text-center">Live Chat</td>
                                        <td className="p-3 text-center">Personalized Setup</td>
                                    </tr>
                                    <tr className="">
                                        <td className="sticky start-0 z-10 p-3"></td>
                                        <td className="p-3 pt-6">
                                            <button className="btn btn-ghost bg-base-200 btn-block">
                                                Choose Basic
                                            </button>
                                        </td>
                                        <td className="p-3 pt-6">
                                            <button className="btn btn-primary btn-block">Upgrade to Pro</button>
                                        </td>
                                        <td className="p-3 pt-6">
                                            <button className="btn btn-secondary btn-block">Get Enterprise</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 mt-6 shadow">
                    <div className="flex items-center gap-4 px-5 py-4 max-sm:flex-col">
                        <div className="bg-base-200 rounded-full p-2.5">
                            <span className="iconify lucide--wand-sparkles block size-5"></span>
                        </div>
                        <div className="grow max-sm:text-center">
                            <p className="font-medium sm:text-lg">Looking for a custom feature?</p>
                            <p className="text-base-content/80 text-sm">
                                Tell us what you need, and we’ll make it happen.
                            </p>
                        </div>
                        <button className="btn btn-primary">Let's Talk</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComparisonPricingPage;
