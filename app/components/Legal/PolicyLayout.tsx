import type { ReactNode } from "react";
import { policyMeta, policyPreamble } from "../../data/privacyPolicy";
import { policyProseClasses } from "./policy-prose";

type PolicyLayoutProps = {
  children: ReactNode;
};

export default function PolicyLayout({ children }: PolicyLayoutProps) {
  const { documentTitle, effectiveDate, lastUpdated, website, supportEmail } =
    policyMeta;

  return (
    <div className="scroll-smooth">
      <div className="mx-auto w-full max-w-[1300px] px-5 py-10 sm:px-6 md:py-14 lg:px-8">
        <header
          className={`${policyProseClasses} mb-10 border-b border-gray-200 pb-8 md:mb-12`}
        >
          <p className="!mt-0 text-xs font-semibold uppercase tracking-widest text-[#2B9AEE] not-prose">
            Legal
          </p>
          <h1 className="!mb-4">{documentTitle}</h1>
          <dl className="not-prose grid gap-2 text-sm text-gray-600 sm:grid-cols-2">
            <div>
              <dt className="font-medium text-gray-700 inline">
                Effective Date:{" "}
              </dt>
              <dd className="inline">{effectiveDate}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-700 inline">
                Last Updated:{" "}
              </dt>
              <dd className="inline">{lastUpdated}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="font-medium text-gray-700 inline">
                Official Website:{" "}
              </dt>
              <dd className="inline">
                <a href={website} target="_blank" rel="noopener noreferrer">
                  {website}
                </a>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="font-medium text-gray-700 inline">
                Official Support Email:{" "}
              </dt>
              <dd className="inline">
                <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
              </dd>
            </div>
          </dl>
          <div className="!mt-6 border-t border-gray-100 pt-6">
            {policyPreamble.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </header>

        <div className="lg:flex lg:items-stretch lg:gap-10 xl:gap-12">
          {children}
        </div>
      </div>
    </div>
  );
}
