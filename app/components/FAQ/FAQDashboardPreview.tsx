export default function FAQDashboardPreview() {
  const stats = [
    { label: "Total EWB", value: "12,456" },
    { label: "Active EWB", value: "8,234" },
    { label: "Expiring Soon", value: "142" },
    { label: "Expired", value: "23" },
  ];

  const rows = [
    { ewb: "3410 0092 1234", date: "05 Jun 2026", gstin: "06AABCU9603R1ZM", status: "Active" },
    { ewb: "3410 0092 5678", date: "04 Jun 2026", gstin: "07AABCU9603R1ZN", status: "Active" },
    { ewb: "3410 0092 9012", date: "03 Jun 2026", gstin: "06AABCU9603R1ZM", status: "Active" },
  ];

  return (
    <div
      className="w-full max-w-[480px] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(39,100,168,0.15)] border border-[#d6e4fa] bg-white"
      aria-hidden="true"
    >
      <div className="flex">
        <div className="w-12 bg-[#2764a8] shrink-0 py-4 flex flex-col items-center gap-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-6 h-1.5 bg-white/30 rounded-full" />
          ))}
        </div>
        <div className="flex-1 p-4 min-w-0">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg bg-[#f8fafc] border border-[#e8eef5] px-3 py-2"
              >
                <p className="text-[9px] text-gray-500 font-medium truncate">
                  {stat.label}
                </p>
                <p className="text-sm font-bold text-[#0B1A2D]">{stat.value}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-[#e8eef5] overflow-hidden">
            <div className="grid grid-cols-4 gap-1 bg-[#f0f7ff] px-2 py-1.5 text-[8px] font-semibold text-[#2764a8]">
              <span>EWB No.</span>
              <span>Date</span>
              <span className="col-span-1 truncate">GSTIN</span>
              <span>Status</span>
            </div>
            {rows.map((row) => (
              <div
                key={row.ewb}
                className="grid grid-cols-4 gap-1 px-2 py-1.5 text-[8px] text-gray-600 border-t border-[#f0f4f8]"
              >
                <span className="truncate font-medium">{row.ewb}</span>
                <span>{row.date}</span>
                <span className="truncate">{row.gstin}</span>
                <span className="text-emerald-600 font-semibold">{row.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
