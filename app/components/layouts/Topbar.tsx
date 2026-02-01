import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
// @ts-ignore
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { Logo } from "../Logo";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { type IMenuItem, TopbarMenuItem } from "./TopbarMenuItem";

const menu: IMenuItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Landings",
    items: [
      {
        title: "Developer",
        href: "/developer",
        icon: "lucide--code",
        anchorProps: {
          target: "_blank",
        },
      },
      {
        title: "Automation",
        href: "/automation",
        icon: "lucide--settings",
        anchorProps: {
          target: "_blank",
        },
      },
      {
        title: "Smart Sales",
        href: "/sales",
        icon: "lucide--badge-dollar-sign",
        anchorProps: {
          target: "_blank",
        },
        badges: ["new"],
      },
      {
        title: "AI Storage",
        href: "/storage",
        icon: "lucide--server-cog",
        anchorProps: {
          target: "_blank",
        },
        badges: ["new"],
      },
    ],
  },
  {
    title: "Pages",
    items: [
      {
        title: "Settings",
        icon: "lucide--user",
        items: [
          {
            title: "Profile",
            href: "/settings/profile",
          },
          {
            title: "Account",
            href: "/settings/account",
          },
          {
            title: "Notification",
            href: "/settings/notification",
          },
          {
            title: "Manage Plan",
            href: "/settings/plan",
          },
        ],
      },
      {
        title: "Auth",
        icon: "lucide--shield-check",
        items: [
          {
            title: "Login",
            href: "/auth/login",
            anchorProps: {
              target: "_blank",
            },
          },
          {
            title: "Register",
            href: "/auth/register",
            anchorProps: {
              target: "_blank",
            },
          },
          {
            title: "Forgot Password",
            href: "/auth/forgot-password",
            anchorProps: {
              target: "_blank",
            },
          },
          {
            title: "Reset Password",
            href: "/auth/reset-password",
            anchorProps: {
              target: "_blank",
            },
          },
          {
            title: "Verify",
            href: "/auth/verify",
            anchorProps: {
              target: "_blank",
            },
          },
          {
            title: "2FA",
            href: "/auth/2fa",
            anchorProps: {
              target: "_blank",
            },
          },
        ],
      },
      {
        title: "Company",
        icon: "lucide--building-2",
        items: [
          {
            title: "Who we are",
            href: "/company/who-we-are",
          },
          {
            title: "Storyline",
            href: "/company/storyline",
          },
          {
            title: "Careers",
            href: "/company/careers",
          },
          {
            isSection: true,
            title: "Reader",
          },
          {
            title: "Blogs",
            href: "/company/blogs",
          },
          {
            title: "Single Blog",
            href: "/company/blogs/single",
          },
          {
            isSection: true,
            title: "Legal",
          },
          {
            title: "Privacy",
            href: "/company/privacy",
          },
          {
            title: "Terms",
            href: "/company/terms",
          },
          {
            isSection: true,
            title: "Help & Support",
          },
          {
            title: "Contact",
            href: "/company/contact",
          },
          {
            title: "FAQs",
            href: "/company/faq",
          },
        ],
      },
      {
        title: "Extra",
        icon: "lucide--box",
        items: [
          {
            title: "Coming Soon",
            href: "/extra/coming-soon",
            anchorProps: {
              target: "_blank",
            },
          },
          {
            title: "Maintenance",
            href: "/extra/maintenance",
            anchorProps: {
              target: "_blank",
            },
          },
          {
            title: "Notify",
            href: "/extra/notify",
            anchorProps: {
              target: "_blank",
            },
          },
          {
            title: "Error 404",
            href: "/extra/errors-404",
            anchorProps: {
              target: "_blank",
            },
          },
        ],
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Blocks",
        icon: "lucide--blocks",
        badges: ["new"],
        items: [
          {
            title: "Cookies",
            href: "/components/blocks/cookies",
          },
          {
            title: "Banners",
            href: "/components/blocks/banners",
          },
          {
            title: "Feedbacks",
            href: "/components/blocks/feedbacks",
          },
          {
            title: "CTA Actions",
            href: "/components/blocks/cta-actions",
          },
          {
            title: "Engagements",
            href: "/components/blocks/engagements",
          },
        ],
      },
      {
        title: "Interactive",
        icon: "lucide--layers",
        badges: ["new"],
        items: [
          {
            title: "Counter",
            href: "/components/interactions/counter",
          },
          {
            title: "Motion Effects",
            href: "/components/interactions/motion-effects",
          },
        ],
      },
      {
        title: "Pricing",
        icon: "lucide--dollar-sign",
        items: [
          {
            title: "Lifetime",
            href: "/components/pricing/lifetime",
          },
          {
            title: "Subscription",
            href: "/components/pricing/subscription",
          },
          {
            title: "Users",
            href: "/components/pricing/users",
          },
          {
            title: "Comparison",
            href: "/components/pricing/comparison",
          },
          {
            isSection: true,
            title: "Options",
          },
          {
            title: "Single",
            href: "/components/pricing/single",
          },
          {
            title: "Double",
            href: "/components/pricing/double",
          },
          {
            title: "Custom",
            href: "/components/pricing/custom",
          },
        ],
      },
      {
        title: "Testimonials",
        icon: "lucide--message-circle",
        items: [
          {
            title: "Simple",
            href: "/components/testimonials/simple",
          },
          {
            title: "Swiper",
            href: "/components/testimonials/swiper",
          },
        ],
      },
    ],
  },
];

export const Topbar = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const { pathname } = useLocation();

  const handleScroll = useCallback(() => {
    setScrollPosition(window.scrollY);
  }, []);

  useEffect(() => {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className="data-[at-top=false]:bg-base-100/95 hover:bg-base-100 sticky top-0 z-50 transition-all duration-500 data-[at-top=false]:shadow data-[at-top=false]:backdrop-blur-lg"
      data-at-top={scrollPosition < 30}>
      <div className="container flex h-16 items-center justify-items-start-safe">
        <div className="flex items-between gap-3">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        {/* <div className="hidden items-center gap-1 md:flex">
          {menu.map((item, index) => (
            <TopbarMenuItem {...item} key={index} />
          ))}
        </div> */}

        {/* <div className="flex items-center gap-2.5">
          <ThemeToggle className="btn btn-ghost btn-square btn-sm" />
          <PurchaseButton />
        </div> */}
      </div>
    </div>
  );
};
