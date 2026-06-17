import Image from "next/image";

export default function AboutCTAIllustration() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto lg:mx-0" aria-hidden="true">
      <Image
        src="/About_Us CTA.png"
        alt="Get started with Sharkship eWayBill"
        width={840}
        height={672}
        className="w-full h-auto"
      />
    </div>
  );
}
