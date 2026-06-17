import Image from "next/image";

export default function FAQHeroIllustration() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto lg:mx-0 lg:ml-auto" aria-hidden="true">
      <Image
        src="/E-way bill FAQs.png"
        alt="E-Way Bill FAQs"
        width={1040}
        height={780}
        className="w-full h-auto"
      />
    </div>
  );
}
