import Image from "next/image";

export default function AboutPurposeVisual() {
  return (
    <div
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(39,100,168,0.12)] border border-[#e8eef5]"
      aria-hidden="true"
    >
      <Image
        src="/About Us_Our Purpose.png"
        alt="Our purpose"
        fill
        sizes="(max-width: 1024px) 100vw, 560px"
        className="object-cover"
      />
    </div>
  );
}
