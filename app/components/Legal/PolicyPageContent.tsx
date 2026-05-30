import { policySections, policyTocItems } from "../../data/privacyPolicy";
import { policyProseClasses } from "./policy-prose";
import PolicySection from "./PolicySection";
import TableOfContents from "./TableOfContents";

export default function PolicyPageContent() {
  return (
    <>
      <TableOfContents items={policyTocItems} />
      <article
        className={`${policyProseClasses} w-full min-w-0 flex-1`}
      >
        {policySections.map((section, index) => (
          <PolicySection
            key={section.id}
            id={section.id}
            title={section.title}
            content={section.content}
            isFirst={index === 0}
          />
        ))}
      </article>
    </>
  );
}
