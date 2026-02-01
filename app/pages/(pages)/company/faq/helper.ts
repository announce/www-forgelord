import { IFAQItem } from "./FAQItem";
import { ITopicItem } from "./TopicItem";

export const faqTopics: ITopicItem[] = [
    {
        icon: "lucide--dollar-sign",
        title: "Pricing & Plans",
        description: "Learn about our pricing, available plans, and what’s included in each subscription.",
    },
    {
        icon: "lucide--settings",
        title: "Getting Started",
        description: "A step-by-step guide to help you set up and make the most out of our platform.",
    },
    {
        icon: "lucide--shield-check",
        title: "Security & Privacy",
        description: "Understand how we protect your data and ensure a secure experience for all users.",
    },
    {
        icon: "lucide--help-circle",
        title: "Support & Troubleshooting",
        description: "Find solutions to common issues and get help from our support team when needed.",
    },
    {
        icon: "lucide--rocket",
        title: "Features & Updates",
        description: "Stay updated with the latest features, improvements, and upcoming releases.",
    },
    {
        icon: "lucide--server",
        title: "Integrations & API",
        description: "Learn how to connect our platform with third-party services and use our API.",
    },
    {
        icon: "lucide--credit-card",
        title: "Billing & Invoices",
        description: "Get details on payments, invoices, refunds, and subscription management.",
    },
    {
        icon: "lucide--users",
        title: "Account & Team Management",
        description: "Manage your account settings, user roles, and team collaboration features.",
    },
];

export const generalFAQs: IFAQItem[] = [
    {
        icon: "lucide--info",
        question: "What is this platform about?",
        answer: "Our platform provides a collection of ready-to-use UI components and tools to streamline your development process.",
    },
    {
        icon: "lucide--globe",
        question: "Is this available worldwide?",
        answer: "Yes, our services are accessible globally, and you can use them from anywhere with an internet connection.",
    },
    {
        icon: "lucide--user",
        question: "Do I need an account to use this?",
        answer: "Some features are available without an account, but creating one gives you access to additional tools and customization options.",
    },
    {
        icon: "lucide--layers",
        question: "Is this suitable for beginners?",
        answer: "Yes! Our platform is designed for developers of all levels, with simple integration and detailed documentation.",
    },
    {
        icon: "lucide--shield-check",
        question: "Is my data secure?",
        answer: "We prioritize security and follow industry best practices to keep your data safe and private.",
    },
    {
        icon: "lucide--message-circle",
        question: "How can I get support if I have issues?",
        answer: "You can reach out to our support team via email, join our community, or check our documentation for solutions.",
    },
    {
        icon: "lucide--zap",
        question: "Are there any upcoming features?",
        answer: "Yes! We're constantly improving and adding new features. Stay tuned to our updates and announcements.",
    },
];

export const integrationFAQs: IFAQItem[] = [
    {
        icon: "lucide--plug",
        question: "How do I install and set up the library?",
        answer: "You can install the library using npm or yarn. Follow the setup guide in our documentation to configure it properly.",
    },
    {
        icon: "lucide--layers",
        question: "Does it work with existing Tailwind CSS projects?",
        answer: "Yes, it’s fully compatible with Tailwind CSS. Just ensure you have Tailwind and DaisyUI installed to take full advantage of all styles.",
    },
    {
        icon: "lucide--server",
        question: "Can I use this with a backend framework like Django or Laravel?",
        answer: "Yes, since the library is frontend-focused, it works with any backend framework. You just need to serve the built frontend separately.",
    },
    {
        icon: "lucide--code",
        question: "Is there support for Next.js and React Server Components?",
        answer: "Yes! It’s optimized for Next.js and supports React Server Components. Some features may require client-side hydration.",
    },
    {
        icon: "lucide--zap",
        question: "How do I add it to an existing project without breaking my styles?",
        answer: "You can gradually introduce components by using the provided variants. We recommend testing in a separate branch before merging.",
    },
    {
        icon: "lucide--git-merge",
        question: "Can I use this with a monorepo setup?",
        answer: "Yes, it works seamlessly with monorepos. Just ensure dependencies are properly installed and linked in your package manager.",
    },
];
