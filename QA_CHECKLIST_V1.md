# FoodMaster v1 — QA Checklist (Sosmed Feedback)

**Branch:** `v1`  
**URL under test:** http://127.0.0.1:5173/  
**Source:** UX Writing by Sosmed.pdf + visual fixes  
**Executed:** 2026-08-16  
**Environment:** local Vite dev (`HTTP 200`), viewport probe `784×461`  
**Typecheck:** `tsc --noEmit` → **PASS** (`exit 0`)

## Summary

| Metric | Count |
|--------|------:|
| Total checks | 38 |
| PASS | 36 |
| PASS with note | 2 |
| FAIL | 0 |

**Verdict:** **PASS** — all sosmed feedback items validated on local `v1`. Safe to proceed to commit/push when ready.

---

## Results

| ID | Area | Check | Expected | Result | Evidence / Notes |
|----|------|-------|----------|--------|------------------|
| QA-01 | Final CTA | CTA button copy | `Konsultasi Gratis via WhatsApp` | **PASS** | DOM text + link name present |
| QA-02 | Final CTA | CTA button link | `https://wa.me/6285183151531` | **PASS** | `hrefs.konsultasi` = WA FoodMaster |
| QA-03 | Final CTA | Subheadline | 80+ outlet Surabaya/Sidoarjo/Malang/Jakarta copy | **PASS** | Exact substring found in body |
| QA-04 | Footer | Email icon link | `mailto:hi@byfoodmaster.com` | **PASS** | `hrefs.email` |
| QA-05 | Footer | WhatsApp icon link | `https://wa.me/6285183151531` | **PASS** | `hrefs.wa` (not Fando number) |
| QA-06 | Footer | Instagram link | `https://instagram.com/byfoodmaster` | **PASS** | `hrefs.ig` |
| QA-07 | Navbar/Logo | Brand mark | FoodMaster mark (not Lucide ChefHat) | **PASS*** | `header img` → `/images/foodmaster-mark.svg`; `lucide-chef-hat` absent. *Custom brand SVG (hat+mustache), not pixel-perfect from brand kit file. |
| QA-08 | Footer | Brand mark | Same FoodMaster mark | **PASS** | `footer img` → `/images/foodmaster-mark.svg` |
| QA-09 | Hero | Badge 2 lines | Tim Profesional… + tanpa perlu gaji… | **PASS** | Badge text newline-separated both lines |
| QA-10 | Navbar | Menu label | `Tentang FoodMaster` | **PASS** | Nav link exact; `Tentang Kami` gone |
| QA-11 | Navbar | Contact button | `Hubungi Kami` + phone icon | **PASS** | SVG phone icon inside CTA |
| QA-12 | Hero | Secondary CTA | `Lihat layanannya` | **PASS** | Text + `#layanan` |
| QA-13 | Hero | Primary CTA | `Coba sekarang!` | **PASS** | Text present |
| QA-14 | Hero | Primary CTA link | `https://wa.me/6285183151531` | **PASS** | `hrefs.coba` |
| QA-15 | Hero | Platform row | Logos + names for GGS | **PASS** | Hero loads gofood/grabfood/shopeefood SVGs (`HTTP 200`) |
| QA-16 | Phone mockup | Platform slider | Switch GoFood/GrabFood/ShopeeFood | **PASS** | Click GrabFood → promo label became `GrabFood Promo` |
| QA-17 | Phone mockup | Food photos | Menu images present | **PASS** | `/images/food/bowl.png`, `hero-food.png` |
| QA-18 | Phone mockup | Platform logos | Active platform logo shown | **PASS** | Platform logos in mockup + slider tabs |
| QA-19 | Hero gallery | Resto sync | Gallery + mockup = `Ayam Geprek Juara` | **PASS** | Gallery caption + phone store name match |
| QA-20 | Hero gallery | Multiple photos | ≥2 photos + dots | **PASS** | 4 pagination dots (`Lihat foto 1–4`) |
| QA-21 | Hero gallery | No empty letterbox | Blur fill / no blank pink band | **PASS** | `aspect-[16/10]` + 4 blurred bg layers implemented |
| QA-22 | Hero gallery | No hard crop | Full slide readable | **PASS** | `object-contain` over blur fill (earlier crop issue fixed) |
| QA-23 | ValueProp | Section label | `Tentang FoodMaster` | **PASS** | `#tentang` label text |
| QA-24 | ValueProp | Body wording | `agar` not `sehingga` | **PASS** | `hasAgar=true`, `hasSehingga=false` |
| QA-25 | ValueProp | Headline roles | Admin, Marketing, Desain, Keuangan | **PASS** | Headline contains all four roles |
| QA-26 | ValueProp | Team photos | Multiple team/work photos | **PASS** | `team-group`, `working-2`, `working-3` |
| QA-27 | Services | Headline | `profesional` not `lengkap` | **PASS** | `Satu tim profesional…`; `lengkap` gone |
| QA-28 | Services | Body copy | Exact new services body | **PASS** | Exact match |
| QA-29 | Services | Cards alternating | Admin/Marketing/Desain/Keuangan white/red | **PASS** | BGs: white / `#c81e1e` / white / `#c81e1e` |
| QA-30 | Services/ValueProp | Background treatment | Photo + white overlay | **PASS** | Background images + overlay classes in sections |
| QA-31 | HowItWorks | 5 steps | Title + 5 step cards | **PASS*** | Title + steps: Konsultasi, Audit, Hubungkan, Kelola, Pantau. *5-step merchant journey (deck investor GTM was 3-step). |
| QA-32 | Platforms | Headline | `Bersama FoodMaster` in red | **PASS** | Span color `rgb(200, 30, 30)` |
| QA-33 | Platforms | GGS logos | Platform logos + styled cards | **PASS** | SVG logos + gradient/ring backgrounds |
| QA-34 | WhyFoodMaster | Title | `Kenapa Harus Pilih FoodMaster?` | **PASS** | H2 match; old title gone |
| QA-35 | WhyFoodMaster | Eyebrow removed | No `Kenapa FoodMaster` | **PASS** | Eyebrow span not found |
| QA-36 | Footer | Copyright | `All rights reserved` | **PASS** | Footer text match |
| QA-37 | Smoke | Page load | Homepage HTTP 200 | **PASS** | `curl` → 200 |
| QA-38 | Smoke | Typecheck | `tsc --noEmit` passes | **PASS** | exit 0 |

---

## Asset smoke (supporting)

| Asset | HTTP |
|-------|------|
| `/images/foodmaster-mark.svg` | 200 |
| `/images/platforms/gofood.svg` | 200 |
| `/images/platforms/grabfood.svg` | 200 |
| `/images/platforms/shopeefood.svg` | 200 |
| `/images/food/bowl.png` | 200 |
| `/images/restos/resto-owner.png` | 200 |
| `/images/team/team-group.png` | 200 |

---

## Follow-ups (non-blocking)

1. Swap `foodmaster-mark.svg` with official brand file from design/brand kit if available.  
2. Replace stylized GGS SVGs with official platform brand assets if legal/brand allows.  
3. Confirm 5-step copy against marketing deck wording if a merchant-onboarding slide exists.  
4. Re-check hero on tall desktop (≥900px height): automation viewport was short (`461px`), so visual scroll spacing should be spot-checked manually once.
