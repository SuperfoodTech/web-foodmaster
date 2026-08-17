import { useEffect, useState } from "react"
import { Star, Plus } from "lucide-react"

const platforms = [
  {
    key: "gofood",
    name: "GoFood",
    logo: "/images/platforms/gofood.png",
    accent: "bg-[#EE2737]",
    soft: "bg-red-50",
  },
  {
    key: "grabfood",
    name: "GrabFood",
    logo: "/images/platforms/grabfood.png",
    accent: "bg-[#00B14F]",
    soft: "bg-green-50",
  },
  {
    key: "shopeefood",
    name: "ShopeeFood",
    logo: "/images/platforms/shopeefood.png",
    accent: "bg-[#EE4D2D]",
    soft: "bg-orange-50",
  },
]

const menu = [
  {
    name: "Ayam Geprek Juara",
    rating: "4.9 (1.2K+)",
    price: "Rp22.000",
    tag: "Pedas",
    image: "/images/food/bowl.png",
  },
  {
    name: "Nasi Goreng Spesial",
    rating: "4.8 (950+)",
    price: "Rp20.000",
    image: "/images/food/hero-food.png",
  },
  {
    name: "Es Teh Manis",
    rating: "4.8 (1.6K+)",
    price: "Rp5.000",
    image: "/images/food/bowl.png",
  },
]

export default function PhoneMockup() {
  const [index, setIndex] = useState(0)
  const active = platforms[index]

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % platforms.length)
    }, 3200)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="mx-auto w-full rounded-[2.5rem] border-[8px] border-ink bg-white shadow-2xl">
      <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 sm:p-4">
        <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-black/15" />

        {/* platform slider tabs */}
        <div className="mb-3 flex gap-1 rounded-xl bg-neutral-100 p-1">
          {platforms.map((p, i) => (
            <button
              key={p.key}
              type="button"
              onClick={() => setIndex(i)}
              className={`flex flex-1 items-center justify-center gap-1 rounded-lg px-1 py-1.5 transition-all ${
                i === index ? "bg-white shadow-sm" : "opacity-60"
              }`}
              aria-label={`Tampilkan ${p.name}`}
            >
              <img src={p.logo} alt="" className="h-8 w-8 rounded-t-xl rounded-b-md object-contain" />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <img
            src="/images/food/bowl.png"
            alt=""
            className="h-12 w-12 rounded-xl object-cover"
          />
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold leading-tight text-ink">Ayam Geprek Juara</p>
              <span className="shrink-0 rounded-md bg-green-100 px-1.5 py-0.5 text-[10px] font-semibold text-green-700">
                Buka
              </span>
            </div>
            <p className="mt-0.5 flex items-center gap-1 text-xs text-ink-soft">
              <Star className="h-3 w-3 fill-accent text-accent" /> 4.8 (2.1K+) &middot; 15&ndash;25 min
            </p>
          </div>
        </div>

        <div className={`mt-4 overflow-hidden rounded-xl ${active.accent} p-3 text-white transition-colors`}>
          <div className="mb-1 flex items-center gap-1.5">
            <img src={active.logo} alt="" className="h-5 w-5 rounded-t-md rounded-b-sm object-contain" />
            <p className="text-xs font-semibold opacity-90">{active.name} Promo</p>
          </div>
          <p className="text-xl font-extrabold leading-tight">DISKON 30%</p>
          <p className="text-xs opacity-90">Min. Belanja Rp60.000</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs font-bold text-ink">Menu Favorit</p>
          <span className="text-[10px] font-semibold text-brand">Lihat Semua &rsaquo;</span>
        </div>

        <ul className="mt-2 space-y-2.5">
          {menu.map((item) => (
            <li key={item.name} className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="h-11 w-11 shrink-0 rounded-lg object-cover"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-semibold leading-tight text-ink">{item.name}</p>
                  {item.tag && (
                    <span className="shrink-0 rounded bg-brand-light px-1 text-[10px] font-semibold text-brand">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="flex items-center gap-1 text-xs text-ink-soft">
                  <Star className="h-3 w-3 fill-accent text-accent" /> {item.rating}
                </p>
                <p className="text-xs font-bold text-ink">{item.price}</p>
              </div>
              <span className={`flex h-6 w-6 items-center justify-center rounded-md text-white ${active.accent}`}>
                <Plus className="h-3.5 w-3.5" />
              </span>
            </li>
          ))}
        </ul>

        <div className={`mt-4 rounded-xl ${active.soft} px-3 py-2.5`}>
          <p className="text-[10px] text-ink-soft">Sedang ditampilkan di</p>
          <div className="mt-1.5 flex items-center gap-2">
            <img src={active.logo} alt="" className="h-7 w-7 rounded-t-lg rounded-b-md object-contain" />
            <span className="text-xs font-bold text-ink">{active.name}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
