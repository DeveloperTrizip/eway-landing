import type { PolicyContentBlock } from "../../data/privacyPolicy";

type PolicySectionProps = {
  id: string;
  title: string;
  content: PolicyContentBlock[];
  isFirst?: boolean;
};

export default function PolicySection({
  id,
  title,
  content,
  isFirst = false,
}: PolicySectionProps) {
  return (
    <section
      id={id}
      className={
        isFirst
          ? "scroll-mt-28"
          : "scroll-mt-28 mt-12 border-t border-gray-200 pt-12 md:mt-14 md:pt-14"
      }
    >
      <h2>{title}</h2>
      {content.map((block) => (
        <div key={block.heading}>
          <h3>{block.heading}</h3>
          {block.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      ))}
    </section>
  );
}
