import { UtensilsCrossed } from "lucide-react"

const platforms = [
  { name: "GoFood", color: "text-red-600", bg: "bg-red-50" },
  { name: "GrabFood", color: "text-green-600", bg: "bg-green-50" },
  { name: "ShopeeFood", color: "text-orange-600", bg: "bg-orange-50" },
]

export default function Platforms() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink text-balance md:text-3xl">
            Kelola semua platform online dari satu tim
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            FoodMaster membantu mengelola akun restomu di berbagai platform
            pesan-antar makanan populer.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-3">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center gap-3 rounded-2xl border border-black/5 bg-white p-6 text-center shadow-sm"
            >
              <span className={`flex h-14 w-14 items-center justify-center rounded-full ${p.bg} ${p.color}`}>
                <UtensilsCrossed className="h-7 w-7" />
              </span>
              <span className="text-base font-bold text-ink">{p.name}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-ink-soft">
          Nama platform digunakan untuk tujuan informasi. FoodMaster bukan mitra
          resmi platform tersebut.
        </p>
      </div>
    </section>
  )
}
