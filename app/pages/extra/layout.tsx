import type { ReactNode } from "react";
import { Link, Outlet } from "react-router";
import { Footer } from "~/components/layouts/Footer";
import { Topbar } from "~/components/layouts/Topbar";
import { Logo } from "~/components/Logo";
import { ThemeToggle } from "~/components/ThemeToggle";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container flex h-screen flex-col py-4">
      <div className="fixed inset-0 -z-20 bg-[url('/images/pages/squares-background.png')] opacity-2 dark:invert"></div>
      <div className="fixed inset-0 -z-19 bg-[url('/images/pages/mesh-background.jpg')] [background-size:110%] object-fill opacity-2"></div>
      <div className="to-base-100 via-base-100/40 fixed inset-0 top-0 -z-1 bg-linear-to-b from-transparent"></div>
      <div className="flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <ThemeToggle className="btn btn-circle btn-sm btn-ghost" />
      </div>
      <div>
        <div className="fixed inset-0 -z-20 bg-[url('/images/pages/squares-background.png')] opacity-2 dark:invert"></div>
        <div className="fixed inset-0 -z-19 bg-[url('/images/pages/mesh-background.jpg')] [background-size:110%] object-fill opacity-2"></div>
        <div className="to-base-100 via-base-100/40 fixed inset-0 top-0 -z-1 bg-linear-to-b from-transparent"></div>
        <Topbar />
        {children}
        <div className="mt-8 lg:mt-12 2xl:mt-16">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
