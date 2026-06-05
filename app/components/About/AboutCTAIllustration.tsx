export default function AboutCTAIllustration() {
  return (
    <div
      className="relative w-full max-w-[360px] aspect-[5/4] mx-auto lg:mx-0"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#e8f4fd] to-[#f0f7ff] border border-[#d6e8f8]" />

      <div className="absolute top-[12%] left-[10%] w-[42%] rounded-xl bg-white shadow-lg border border-[#e1ecf6] p-4">
        <p className="text-[10px] font-bold text-[#2764a8] uppercase tracking-wide mb-2">
          eWay Bill
        </p>
        <div className="space-y-1.5 mb-3">
          <div className="h-1.5 bg-gray-100 rounded-full w-full" />
          <div className="h-1.5 bg-gray-100 rounded-full w-4/5" />
          <div className="h-1.5 bg-gray-100 rounded-full w-3/5" />
        </div>
        <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center ml-auto">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-[14%] right-[8%] w-[55%]">
        <div className="h-[72px] bg-gradient-to-r from-[#2764a8] to-[#2B9AEE] rounded-xl shadow-lg flex items-center justify-center">
          <span className="text-white text-[11px] font-bold tracking-widest">
            SHARKSHIP
          </span>
        </div>
        <div className="flex justify-between px-3 -mt-1">
          <div className="w-7 h-7 rounded-full bg-[#0B1A2D] border-2 border-gray-300" />
          <div className="w-7 h-7 rounded-full bg-[#0B1A2D] border-2 border-gray-300" />
        </div>
        <div className="h-4 bg-[#184FA2] rounded-b-lg mx-2" />
      </div>
    </div>
  );
}
