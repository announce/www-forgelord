import React from "react";
import { Link } from "react-router";
import { Logo } from "../Logo";
import { ENV_VAR } from "~/env";


export const Footer = () => {
  return (
    <div>
      <div className="from-primary to-secondary h-1 w-full bg-linear-to-r"></div>
      <div className="flex flex-wrap items-center justify-between gap-5 p-6 md:px-24 md:py-8">
        <div>
          <Link to="/">
            <img className="h-24"
              src={`${ENV_VAR.VITE_APP_STORAGE_ENDPOINT}/assets/forgelord-title-logo.png`} alt="Title Logo" />
          </Link>
          <p className="text-base-content/80 mt-3 max-w-sm max-sm:text-sm">
            Prep for League, together.
          </p>
          <div className="mt-3 flex items-center gap-2 lg:mt-8">
            <Link
              aria-label="Twitter"
              to="https://x.com/forgelordHq"
              target="_blank"
              className="btn btn-sm btn-circle">
              <span className="iconify ri--twitter-x-fill size-3.5" />
            </Link>
            <Link
              aria-label="Discord"
              to="https://discord.gg/H9wHFycdhs"
              target="_blank"
              className="btn btn-sm btn-circle">
              <span className="iconify ri--discord-fill size-3.5" />
            </Link>
            <Link
              aria-label="Tip via Paypal"
              to="https://streamelements.com/kesoapne/tip"
              target="_blank"
              className="btn btn-sm btn-circle">
              <span className="iconify ri--paypal-fill size-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-base-300 flex flex-wrap items-center justify-between gap-2 border-t border-dashed px-6 py-4 max-sm:text-sm md:px-24">
        <p>&copy; {new Date().getFullYear()} Forgelord</p>
        <div className="inline-flex items-center gap-4">
          <Link className="link hover:link-primary no-underline" to="/policies/tos">
            Terms
          </Link>
          <Link className="link hover:link-primary no-underline" to="/policies/privacy">
            Privacy
          </Link>
        </div>
      </div>
    </div>
  );
};

// export const Footer = () => {
//   return (
//     <div>
//       <div className="from-primary to-secondary h-1 w-full bg-linear-to-r"></div>
//       <div className="flex flex-wrap items-center justify-between gap-5 p-6 md:px-24 md:py-8">
//         <div>
//           <Link to="/">
//             <Logo />
//           </Link>
//           <p className="text-base-content/80 mt-3 max-w-sm max-sm:text-sm">
//             A place for league players to refine your champion pool, runes, and itemisation.
//           </p>
//         </div>
//         {/* <div>
//           <p className="font-medium">Stay Updated with the Latest AI Trends</p>
//           <div className="mt-1 flex items-center gap-3">
//             <label className="input w-full">
//               <span className="iconify lucide--mail text-base-content/80 size-5"></span>
//               <input name="email" placeholder="Email Address" type="email" />
//             </label>
//             <button className="btn btn-neutral">Subscribe</button>
//           </div>
//           <p className="text-base-content/80 mt-1 text-xs italic">No spam, just useful updates.</p>
//         </div> */}
//       </div>
//       <div className="border-base-300 border-t border-dashed p-6 md:px-24 md:py-8">
//         <div className="grid gap-6 lg:grid-cols-3">
//           <div className="col-span-1">
//             <p className="font-medium">Connect</p>
//             {/* <div className="mt-3 flex items-center gap-2.5">
//               <span className="iconify lucide--mail size-4.5"></span>
//               <p>Your email</p>
//             </div>
//             <div className="mt-2 flex items-center gap-2.5">
//               <span className="iconify lucide--phone size-4.5"></span>
//               <p>Your number</p>
//             </div>
//             <div className="mt-2 flex items-center gap-2.5">
//               <span className="iconify lucide--map-pin size-4.5"></span>
//               <p>Your address</p>
//             </div> */}
//             <div className="mt-3 flex items-center gap-2 lg:mt-8">
//               <Link
//                 aria-label="Twitter"
//                 to="https://x.com/forgelordHq"
//                 target="_blank"
//                 className="btn btn-sm btn-circle">
//                 <span className="iconify lucide--twitter-x-fill size-3.5" />
//               </Link>
//               <Link
//                 aria-label="Discord"
//                 to="https://discord.gg/H9wHFycdhs"
//                 target="_blank"
//                 className="btn btn-sm btn-circle">
//                 <span className="iconify lucide--discord-fill size-3.5" />
//               </Link>
//               <Link
//                 aria-label="Paypal"
//                 to="https://streamelements.com/kesoapne/tip"
//                 target="_blank"
//                 className="btn btn-sm btn-circle">
//                 <span className="iconify lucide--paypal-fill size-3.5" />
//               </Link>

//             </div>
//           </div>
//           <div className="col-span-2 grid gap-6 md:grid-cols-3">
//             <div>
//               <h2 className="text-lg font-medium">Quick Links</h2>
//               <div className="mt-2 flex flex-col gap-2">
//                 <Link className="hover:link-primary" to="#">
//                   Home
//                 </Link>
//                 <Link className="hover:link-primary" to="#">
//                   Features
//                 </Link>
//                 <Link className="hover:link-primary" to="#">
//                   Pricing
//                 </Link>
//                 <Link className="hover:link-primary" to="#">
//                   About Us
//                 </Link>
//                 <Link className="hover:link-primary" to="#">
//                   Contact
//                 </Link>
//               </div>
//             </div>
//             <div>
//               <h2 className="text-lg font-medium">Resources</h2>
//               <div className="mt-2 flex flex-col gap-2">
//                 <Link className="hover:link-primary" to="#">
//                   Documentation
//                 </Link>
//                 <Link className="hover:link-primary" to="#">
//                   Help Center
//                 </Link>
//                 <Link className="hover:link-primary" to="#">
//                   FAQs
//                 </Link>
//                 <Link to="#" className="hover:link-primary flex items-center gap-2">
//                   Community <div className="badge badge-sm badge-primary rounded-full">New</div>
//                 </Link>

//                 <Link className="hover:link-primary" to="#">
//                   Blog
//                 </Link>
//               </div>
//             </div>
//             <div>
//               <h2 className="text-lg font-medium">Legal</h2>
//               <div className="mt-2 flex flex-col gap-2">
//                 <Link to="#" className="hover:link-primary flex items-center gap-2">
//                   Privacy Policy
//                   <div className="badge badge-sm badge-error badge-outline rounded-full">Updated</div>
//                 </Link>
//                 <Link className="hover:link-primary" to="#">
//                   Terms of Service
//                 </Link>
//                 <Link className="hover:link-primary" to="#">
//                   GDPR
//                 </Link>
//                 <Link className="hover:link-primary" to="#">
//                   Compliance
//                 </Link>
//                 <Link className="hover:link-primary" to="#">
//                   Cookies Policy
//                 </Link>
//                 <Link className="hover:link-primary" to="#">
//                   Security & Compliance
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="border-base-300 flex flex-wrap items-center justify-between gap-2 border-t border-dashed px-6 py-4 max-sm:text-sm md:px-24">
//         <p>&copy; {new Date().getFullYear()} Forgelord - Prep for League, together.</p>
//         <div className="inline-flex items-center gap-4">
//           <Link className="link hover:link-primary no-underline" to="/policies/tos">
//             Terms
//           </Link>
//           <Link className="link hover:link-primary no-underline" to="/policies/privacy">
//             Privacy
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };
