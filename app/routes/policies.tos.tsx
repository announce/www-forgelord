import { formatISO9075 } from "date-fns";
import { ENV_VAR } from "../env";
import type { Route } from "./+types/policies.tos";
import { MetaData } from "~/components/MetaData";

export interface PolicySection {
  id: string
  title: string
  body: string
}

export const PRIVACY_POLICY: PolicySection[] = [
  {
    id: '1-acceptance-of-terms',
    title: '1. Acceptance of Terms',
    body: `By accessing or using Forgelord, you agree to be bound by these Terms of Service (“Terms”).
    If you do not agree, you must not use the Service.`,
  },
  {
    id: '2-description-of-the-service',
    title: '2. Description of the Service',
    body: `Forgelord is a pre-game planning and preparation tool for League of Legends players.
The Service focuses on organizing champion pools, builds, and related planning data before a match begins.

Forgelord does not provide in-game assistance, automation, or real-time gameplay advantages.`,
  },
  {
    id: '3-eligibility',
    title: '3. Eligibility',
    body: `You must comply with:
	•	Applicable laws and regulations
	•	Riot Games’ Terms of Service and Developer Policies

Forgelord may be unavailable in certain regions.`,
  },
  {
    id: '4-user-responsibilities',
    title: '4. User Responsibilities',
    body: `You agree not to:
	•	Use the Service for cheating, automation, or rule circumvention
	•	Attempt to access non-public or restricted data
	•	Reverse engineer or exploit the Service
	•	Misrepresent affiliation with Riot Games`,
  },
  {
    id: '5-intellectual-property',
    title: '5. Intellectual Property',
    body: `All content, software, and design elements of Forgelord are owned by or licensed to the Service operator.

League of Legends and related trademarks are the property of Riot Games.`,
  },
  {
    id: '6-disclaimer-of-warranties',
    title: '6. Disclaimer of Warranties',
    body: `Forgelord is provided “as is” and “as available.”

We make no guarantees regarding:
	•	Accuracy of recommendations
	•	Availability or uninterrupted operation
	•	Competitive performance outcomes

Use of the Service is at your own risk.`,
  },
  {
    id: '7-limitation-of-liability',
    title: '7. Limitation of Liability',
    body: `To the maximum extent permitted by law, Forgelord shall not be liable for:
	•	Loss of data
	•	Loss of rank, matches, or gameplay outcomes
	•	Indirect or consequential damages`,
  },
  {
    id: '8-termination',
    title: '8. Termination',
    body: `We may suspend or terminate access to the Service at any time if:
	•	These Terms are violated
	•	Required by law or policy
	•	The Service is discontinued`,
  },
  {
    id: '9-changes-to-the-terms',
    title: '9. Changes to the Terms',
    body: `We may modify these Terms at any time.
Continued use of the Service constitutes acceptance of the updated Terms.`,
  },
  {
    id: '10-governing-law',
    title: '10. Governing Law',
    body: `These Terms shall be governed by tha laws of ${ENV_VAR.VITE_SERVICE_JURISDICTION}.`,
  },
  {
    id: '11-contact',
    title: '11. Contact',
    body: `For questions regarding these Terms:
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

export default function TermsOfService({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  const { lastUpdated, sections } = loaderData
  return (<>
    <MetaData title="Terms of Service" />
    <div className="text-center">
      <h2 className="text-xl font-medium sm:text-2xl">Terms of Service</h2>
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
