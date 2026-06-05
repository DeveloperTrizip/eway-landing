export default function FAQHeroIllustration() {
  return (
    <div
      className="relative w-full max-w-[420px] aspect-[4/3] mx-auto lg:mx-0 lg:ml-auto"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#e8f4fd] to-[#f0f7ff] border border-[#d6e8f8]" />

      <div className="absolute top-[8%] right-[12%] w-10 h-10 rounded-full bg-[#2B9AEE]/20 flex items-center justify-center">
        <svg className="w-5 h-5 text-[#2764a8]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      </div>
      <div className="absolute top-[18%] left-[8%] w-8 h-8 rounded-full bg-[#2764a8]/15 flex items-center justify-center">
        <svg className="w-4 h-4 text-[#2764a8]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      </div>

      <div className="absolute top-[22%] left-[18%] w-[38%] rounded-xl bg-white shadow-md border border-[#e1ecf6] p-3">
        <p className="text-[9px] font-bold text-[#2764a8] uppercase tracking-wide mb-1">
          E-Way Bill
        </p>
        <div className="w-10 h-10 rounded-lg bg-[#f0f7ff] flex items-center justify-center mx-auto">
          <span className="text-xl font-bold text-[#2764a8]">?</span>
        </div>
        <div className="mt-2 space-y-1">
          <div className="h-1.5 bg-gray-100 rounded-full w-full" />
          <div className="h-1.5 bg-gray-100 rounded-full w-4/5" />
          <div className="h-1.5 bg-gray-100 rounded-full w-3/5" />
        </div>
      </div>

      <div className="absolute bottom-[18%] right-[10%] w-[52%]">
        <div className="relative">
          <div className="h-16 bg-gradient-to-r from-[#2764a8] to-[#2B9AEE] rounded-lg shadow-lg flex items-center justify-center">
            <span className="text-white text-[10px] font-bold tracking-widest">
              SHARKSHIP
            </span>
          </div>
          <div className="flex justify-between px-2 -mt-1">
            <div className="w-5 h-5 rounded-full bg-[#0B1A2D] border-2 border-gray-300" />
            <div className="w-5 h-5 rounded-full bg-[#0B1A2D] border-2 border-gray-300" />
          </div>
          <div className="h-3 bg-[#184FA2] rounded-b-md mx-1" />
        </div>
      </div>

      <div className="absolute bottom-[28%] left-[12%] flex gap-1.5">
        <div className="w-8 h-8 bg-[#f5c16c] rounded-sm shadow-sm border border-[#e8b84d]" />
        <div className="w-7 h-7 bg-[#d4a574] rounded-sm shadow-sm border border-[#c4956a] mt-2" />
        <div className="w-6 h-6 bg-[#8B6914]/30 rounded-sm shadow-sm mt-1" />
      </div>
    </div>
  );
}
