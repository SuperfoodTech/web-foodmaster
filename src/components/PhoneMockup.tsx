import { Star, Plus } from "lucide-react"

const menu = [
  { name: "Ayam Geprek Juara", rating: "4.9 (1.2K+)", price: "Rp22.000", tag: "Pedas" },
  { name: "Nasi Goreng Spesial", rating: "4.8 (950+)", price: "Rp20.000" },
  { name: "Es Teh Manis", rating: "4.8 (1.6K+)", price: "Rp5.000" },
]

const platforms = ["GoFood", "GrabFood", "ShopeeFood"]

export default function PhoneMockup() {
  return (
    <div className="mx-auto w-full max-w-[300px] rounded-[2.5rem] border-[8px] border-ink bg-white shadow-2xl">
      <div className="relative rounded-[2rem] bg-white p-4">
        {/* notch */}
        <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-black/15" />

        {/* restaurant header */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-xl">
            <span aria-hidden="true">🍛</span>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <p className="truncate text-sm font-bold text-ink">Warung Nusantara</p>
              <span className="rounded-md bg-green-100 px-1.5 py-0.5 text-[10px] font-semibold text-green-700">
                Buka
              </span>
            </div>
            <p className="mt-0.5 flex items-center gap-1 text-[11px] text-ink-soft">
              <Star className="h-3 w-3 fill-accent text-accent" /> 4.8 (2.1K+) &middot; 15&ndash;25 min
            </p>
          </div>
        </div>

        {/* promo banner */}
        <div className="mt-4 overflow-hidden rounded-xl bg-brand p-3 text-white">
          <p className="text-[10px] font-semibold opacity-90">Hemat! Promo Spesial</p>
          <p className="text-lg font-extrabold leading-tight">DISKON 30%</p>
          <p className="text-[10px] opacity-90">Min. Belanja Rp60.000</p>
        </div>

        {/* menu list */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs font-bold text-ink">Menu Favorit</p>
          <span className="text-[10px] font-semibold text-brand">Lihat Semua &rsaquo;</span>
        </div>

        <ul className="mt-2 space-y-2.5">
          {menu.map((item) => (
            <li key={item.name} className="flex items-center gap-3">
              <div className="h-11 w-11 shrink-0 rounded-lg bg-accent-light" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="truncate text-xs font-semibold text-ink">{item.name}</p>
                  {item.tag && (
                    <span className="rounded bg-brand-light px-1 text-[9px] font-semibold text-brand">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="flex items-center gap-1 text-[10px] text-ink-soft">
                  <Star className="h-2.5 w-2.5 fill-accent text-accent" /> {item.rating}
                </p>
                <p className="text-[11px] font-bold text-ink">{item.price}</p>
              </div>
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand text-white">
                <Plus className="h-3.5 w-3.5" />
              </span>
            </li>
          ))}
        </ul>

        {/* available on */}
        <div className="mt-4 border-t border-black/5 pt-3">
          <p className="text-[10px] text-ink-soft">Tersedia di</p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {platforms.map((p) => (
              <span
                key={p}
                className="rounded-md bg-neutral-100 px-2 py-1 text-[10px] font-semibold text-ink"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
