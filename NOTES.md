# FoodMaster landing — notes (comments from review)

Branch work for the landing-page update. These are the comments that were implemented, kept as notes (not screenshots).

## Contact & footer
- CTA banner: "Konsultasi Gratis via WhatsApp" → `wa.me/6285183151531`
- CTA subhead: trusted by 80+ outlets (Surabaya, Sidoarjo, Malang, Jakarta); free consult, no commitment
- Footer email: `hi@byfoodmaster.com`
- Footer WhatsApp: FoodMaster number `wa.me/6285183151531` (not Fando)
- Footer Instagram: `instagram.com/byfoodmaster`
- Copyright: All rights reserved
- Navbar + footer logo: official `FoodMaster.png` wordmark

## Hero / navbar
- Badge two lines; second line: "tanpa perlu gaji tim sendiri!"
- Nav: "Tentang FoodMaster"; Hubungi Kami + phone icon
- Buttons: "Coba sekarang!" and "Lihat layanannya"
- Platform row: cropped logos from `GGS.png` (GoFood, GrabFood, ShopeeFood), square, slightly oval top
- Phone mockup: slides per platform, food photos, official logos
- Resto carousel: partner outlet photos (Kebab, Roti, Depot 88, Bubur, Sate, Salero, Minang, Parahyangan, Holans)
- Photo box: full image, no crop of name banner; slightly smaller; top aligned with the badge

## About / layanan
- Label: Tentang FoodMaster
- Body: "agar" (not "sehingga")
- Headline roles: Admin, Marketing, Desain, Keuangan
- Team photo: `/images/Teams.png` full picture
- Services headline: "profesional"; body copy per sosmed
- Cards: Admin / Marketing / Desain / Keuangan, alternating white/red

## Cara kerja
- "Mulai dalam 5 langkah mudah" as text cards (not an image):
  1. Audit & Analisis
  2. Rapikan & Standarkan
  3. Optimasi Penjualan
  4. Pantau Performa
  5. Perbaikan Berkelanjutan

## Platforms & why
- Headline: Kelola semua platform online **Bersama FoodMaster** (red)
- Platform logos from `GGS.png`, centered in square frames
- Removed disclaimer: "Nama platform digunakan untuk tujuan informasi…"
- "Kenapa Harus Pilih FoodMaster?" — 6 text cards, 3 per row:
  1. Spesialis Online Food
  2. Tim Profesional Lengkap
  3. Berbasis Data & Hasil
  4. Optimasi Berkelanjutan
  5. Dipercaya Banyak Outlet
  6. Ada Garansi

## Assets
- Source photos live in `public/images/` (Vite serves as `/images`, copies to `dist/images` on build)
- Do not commit only `dist/` as the source of truth
