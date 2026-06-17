import Image from "next/image";

export default function AboutHeroMockup() {
  return (
    <div
      className="relative w-full max-w-[560px] mx-auto lg:mx-0 lg:ml-auto"
      aria-hidden="true"
    >
      <div className="relative z-10 overflow-hidden rounded-2xl border border-[#d6e4fa] bg-white shadow-[0_24px_60px_rgba(39,100,168,0.18)]">
        <Image
          src="/E-way bill About Us Hero.png"
          alt="About Sharkship eWayBill"
          width={1120}
          height={840}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="absolute -top-4 -right-2 w-16 h-16 rounded-2xl bg-[#2764a8]/10 border border-[#d6e8f8] -z-0" />
      <div className="absolute top-1/2 -left-6 w-10 h-10 rounded-full bg-[#2B9AEE]/15 -z-0" />
    </div>
  );
}
