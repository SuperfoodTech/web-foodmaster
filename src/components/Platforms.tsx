const platforms = [
  {
    name: "GoFood",
    logo: "/images/platforms/gofood.png",
    glow: "from-red-500/20 via-red-100 to-white",
    ring: "ring-red-200",
  },
  {
    name: "GrabFood",
    logo: "/images/platforms/grabfood.png",
    glow: "from-green-500/20 via-green-100 to-white",
    ring: "ring-green-200",
  },
  {
    name: "ShopeeFood",
    logo: "/images/platforms/shopeefood.png",
    glow: "from-orange-500/20 via-orange-100 to-white",
    ring: "ring-orange-200",
  },
]

export default function Platforms() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-brand/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1200px] px-5 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink text-balance md:text-3xl">
            Kelola semua platform online{" "}
            <span className="text-brand">Bersama FoodMaster</span>
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
              className={`relative flex min-h-[200px] items-center justify-center overflow-hidden rounded-t-[2.75rem] rounded-b-3xl bg-gradient-to-b ${p.glow} p-5 shadow-sm ring-1 ${p.ring}`}
            >
              <div className="relative z-10 flex aspect-square w-[7.5rem] items-center justify-center overflow-hidden rounded-t-[2.25rem] rounded-b-2xl bg-white p-2 shadow-sm">
                <img
                  src={p.logo}
                  alt={`Logo ${p.name}`}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
