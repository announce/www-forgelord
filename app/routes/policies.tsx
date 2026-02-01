import { Link, Outlet, redirect } from "react-router";
import PageLayout from "~/pages/(pages)/layout";


export default function Layout() {
  return (
    <main>
      <Outlet />
    </main>
  );
};
