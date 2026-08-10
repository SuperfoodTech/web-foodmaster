export default function ValueProp() {
  return (
    <section id="tentang" className="scroll-mt-20 border-y border-black/5 bg-neutral-50">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 md:py-20 lg:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">
            Tentang Kami
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink text-balance md:text-4xl">
            FoodMaster = <span className="text-brand">Tim Profesional</span> Resto Online Kamu
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
            FoodMaster membantu pemilik resto mengelola operasional penjualan
            online sehingga pemilik resto dapat fokus pada kualitas makanan,
            pelayanan pelanggan, dan operasional offline.
          </p>
        </div>

        <div>
          <img
            src="/images/team.png"
            alt="Tim profesional FoodMaster mengenakan seragam merah"
            className="w-full rounded-3xl object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  )
}
