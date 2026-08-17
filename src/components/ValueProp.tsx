export default function ValueProp() {
  return (
    <section id="tentang" className="scroll-mt-20 relative overflow-hidden border-y border-black/5">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/team/working-1.png')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-white/90" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:py-20 lg:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">
            Tentang FoodMaster
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink text-balance md:text-4xl">
            FoodMaster = <span className="text-brand">Tim Profesional</span>{" "}
            Admin, Marketing, Desain, Keuangan
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
            FoodMaster membantu pemilik resto mengelola operasional penjualan
            online agar pemilik resto dapat fokus pada kualitas makanan,
            pelayanan pelanggan, dan operasional offline.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-black/5">
          <img
            src="/images/Teams.png"
            alt="Tim profesional FoodMaster"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}
