import FAQDashboardPreview from "../FAQ/FAQDashboardPreview";

export default function AboutHeroMockup() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto lg:mx-0 lg:ml-auto" aria-hidden="true">
      <div className="relative z-10 shadow-[0_24px_60px_rgba(39,100,168,0.18)] rounded-2xl">
        <FAQDashboardPreview />
      </div>

      <div className="absolute -bottom-6 -left-4 md:-left-8 w-[120px] md:w-[140px] z-20">
        <div className="rounded-[28px] border-[6px] border-[#0B1A2D] bg-white shadow-xl overflow-hidden">
          <div className="h-5 bg-[#f0f7ff] flex items-center justify-center">
            <div className="w-10 h-1 rounded-full bg-[#0B1A2D]/20" />
          </div>
          <div className="p-3 space-y-2 bg-white">
            <div className="h-2 bg-[#2764a8]/20 rounded-full w-3/4" />
            <div className="grid grid-cols-2 gap-1.5">
              <div className="h-8 rounded-md bg-[#f0f7ff] border border-[#d6e8f8]" />
              <div className="h-8 rounded-md bg-[#f0f7ff] border border-[#d6e8f8]" />
            </div>
            <div className="h-14 rounded-md bg-[#f8fafc] border border-[#e8eef5]" />
            <div className="h-2 bg-gray-100 rounded-full" />
            <div className="h-2 bg-gray-100 rounded-full w-4/5" />
          </div>
        </div>
      </div>

      <div className="absolute -top-4 -right-2 w-16 h-16 rounded-2xl bg-[#2764a8]/10 border border-[#d6e8f8] -z-0" />
      <div className="absolute top-1/2 -left-6 w-10 h-10 rounded-full bg-[#2B9AEE]/15 -z-0" />
    </div>
  );
}
