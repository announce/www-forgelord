import { formatISO9075 } from "date-fns";
import { ENV_VAR } from "../env";
import type { Route } from "./+types/policies.privacy";
import { MetaData } from "~/components/MetaData";


export interface PolicySection {
  id: string
  title: string
  body: string
}

export const PRIVACY_POLICY: PolicySection[] = [
  {
    id: '1-introduction',
    title: '1. Introduction',
    body: `Forgelord (“the Service”, “we”, “us”) respects your privacy and is committed to protecting it.
          This Privacy Policy explains how we collect, use, store, and protect information when you use Forgelord.

          Forgelord is an independent service and is not endorsed by or affiliated with Riot Games.`,
  },
  {
    id: '2-information-we-collect',
    title: '2. Information We Collect',
    body: `2.1 Information You Provide

    We may collect the following information when you use the Service:
    •	Account identifiers
    •	Game region for League of Legends
    •	User-generated content (e.g., champion pools, builds, notes, or preferences)

    2.2 Information Obtained via Riot Games APIs

    With your authorization, we may access limited data through official Riot Games APIs, such as:
    •	Summoner identifiers (e.g., PUUID)
    •	Public profile-related data permitted by Riot Games

    We do not access live match data or in-game information.

    2.3 Automatically Collected Information

    We may collect basic technical data for operational and security purposes, including:
    •	IP address
    •	Browser type and device information
    •	Access timestamps`,
  },
  {
    id: '3-how-we-use-information',
    title: '3. How We Use Information',
    body: `We use collected information solely to:
    •	Provide and operate the Service
    •	Personalize and save user configurations
    •	Improve usability, performance, and reliability
    •	Ensure compliance with applicable policies and legal obligations

    We do not sell personal data or use it for advertising purposes.`,
  },
  {
    id: '4-data-storage-and-security',
    title: '4. Data Storage and Security',
    body: `•	Data is stored using industry-standard security practices.
    •	Access to stored data is restricted to authorized personnel only.
    •	We retain data only as long as necessary to provide the Service or comply with legal requirements.`,
  },
  {
    id: '5-data-sharing',
    title: '5. Data Sharing',
    body: `We do not share personal data with third parties, except:
    •	When required by law
    •	When necessary to comply with Riot Games’ Developer Policies
    •	When using infrastructure providers strictly for hosting or analytics purposes`,
  },
  {
    id: '6-your-rights',
    title: '6. Your Rights',
    body: `Depending on your jurisdiction, you may have the right to:
    •	Access your data
    •	Request correction or deletion
    •	Withdraw consent for data usage

    Requests can be made via the contact information listed below.`,
  },
  {
    id: '7-changes-to-this-policy',
    title: '7. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time.
    Changes will be posted within the Service, with an updated revision date.`,
  },
  {
    id: '8-contact',
    title: '8. Contact',
    body: `For privacy-related inquiries:
    Email: ${ENV_VAR.VITE_SERVICE_CONTACT_EMAIL}`,
  },
];

export async function loader({
  context,
}: Route.LoaderArgs) {
  return { sections: PRIVACY_POLICY, lastUpdated: new Date(2026, 0, 20) };
}

export interface TableOfContentsProps {
  sections: PolicySection[]
}

const TableOfContents = ({ sections }: TableOfContentsProps) => {
  return (
    <div className="card bg-base-100 h-fit min-w-72 p-4 shadow sm:p-6 lg:sticky lg:top-24">
      <p className="text-lg font-medium">Table of Contents</p>
      <ul className="*:text-base-content/80 *:hover:text-base-content ms-4 mt-3 *:transition-all max-sm:text-sm">
        {sections.map(section => (
          <li key={section.id}>
            <a href={`#${section.id}`}>{section.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Privacy({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  const { lastUpdated, sections } = loaderData
  return (<>
    <MetaData title="Privacy Policy" />
    <div className="text-center">
      <h2 className="text-xl font-medium sm:text-2xl">Privacy Policy</h2>
      <p className="text-base-content/80 mt-1 inline-block max-w-xl max-sm:text-sm">
        Last updated: {formatISO9075(lastUpdated, { representation: 'date' })}
      </p>
    </div>
    <div className="divider"></div>
    <div className="mt-8 flex gap-8 max-lg:flex-col sm:mt-12 sm:gap-16 xl:mt-16">
      <TableOfContents sections={sections} />
      <div className="max-sm:text-sm">
        {sections.map(section => (
          <div key={section.id} id={section.id} className="card bg-base-200 card-md shadow-sm mt-4">
            <div className="card-body whitespace-pre-line">
              <h4 className="card-title">{section.title}</h4>
              <p className="mt-2">{section.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>);
}
