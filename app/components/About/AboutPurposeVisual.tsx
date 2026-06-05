export default function AboutPurposeVisual() {
  return (
    <div
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(39,100,168,0.12)] border border-[#e8eef5]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#dceaf5] via-[#eef5fc] to-[#f5f0e8]" />

      <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#c4b5a0]/40 to-transparent" />
      <div className="absolute left-[8%] bottom-[12%] w-[18%] h-[55%] bg-[#b8a88e]/50 rounded-sm" />
      <div className="absolute left-[28%] bottom-[18%] w-[14%] h-[48%] bg-[#c9baa0]/45 rounded-sm" />
      <div className="absolute right-[10%] bottom-[15%] w-[20%] h-[50%] bg-[#a89880]/40 rounded-sm" />

      <div className="absolute top-[18%] left-[12%] right-[12%]">
        <div className="bg-[#2a3442] rounded-lg p-2 shadow-2xl">
          <div className="bg-white rounded-md overflow-hidden">
            <div className="h-3 bg-[#f0f7ff] border-b border-[#e8eef5]" />
            <div className="p-3 space-y-2">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded bg-[#2764a8]/15 shrink-0" />
                <div className="flex-1 space-y-1.5 pt-1">
                  <div className="h-1.5 bg-[#2764a8]/25 rounded-full w-2/3" />
                  <div className="h-1 bg-gray-200 rounded-full w-full" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-10 rounded bg-[#f8fafc] border border-[#e8eef5]"
                  />
                ))}
              </div>
              <div className="h-16 rounded bg-[#f0f7ff] border border-[#d6e8f8]" />
            </div>
          </div>
        </div>
        <div className="mx-auto w-[70%] h-2 bg-[#1e2630] rounded-b-lg -mt-0.5" />
        <div className="mx-auto w-[85%] h-1.5 bg-[#141a22] rounded-b-md" />
      </div>
    </div>
  );
}
