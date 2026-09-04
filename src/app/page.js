"use client";

import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-panel-strong">
      <div className="container flex items-center justify-between h-16 px-4 sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm font-mono">
              UA
            </span>
          </div>
          <span className="font-medium text-foreground tracking-tight">
            UD Atmodjo
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#produk"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Produk
          </a>
          <a
            href="#keunggulan"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Keunggulan
          </a>
          <a
            href="#tentang"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Tentang
          </a>
          <a
            href="#kontak"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Kontak
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Hubungi Kami
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border glass-panel-strong">
          <div className="flex flex-col gap-1 p-4">
            <a
              href="#produk"
              className="text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-muted transition-colors"
            >
              Produk
            </a>
            <a
              href="#keunggulan"
              className="text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-muted transition-colors"
            >
              Keunggulan
            </a>
            <a
              href="#tentang"
              className="text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-muted transition-colors"
            >
              Tentang
            </a>
            <a
              href="#kontak"
              className="text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-muted transition-colors"
            >
              Kontak
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-4 py-2.5 rounded-full text-sm font-medium text-center mt-2"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const rise =
    "animate-in fade-in-0 slide-in-from-bottom-3 duration-700 ease-out motion-reduce:animate-none";

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background layers */}
      <div aria-hidden className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/main.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="hero-aurora" />
        <div className="absolute inset-0 bg-dot-grid opacity-20 mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent_70%)]" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[86vh] flex-col max-w-5xl items-center justify-center gap-7 px-4 py-24 text-center sm:px-6 sm:py-28">
        {/* Badge */}
        <div
          style={{ animationDelay: "0ms", animationFillMode: "both" }}
          className={rise}
        >
          
        </div>

        {/* Heading */}
        <h1
          style={{ animationDelay: "80ms", animationFillMode: "both" }}
          className={`w-full text-pretty text-4xl italic leading-[0.95] tracking-[-0.025em] sm:text-5xl sm:leading-[0.9] md:text-6xl text-display ${rise}`}
        >
          Beton Bis Sumur
          <br />
          <span className="text-primary">Kualitas Terbaik</span>
        </h1>

        {/* Subheading */}
        <p
          style={{ animationDelay: "160ms", animationFillMode: "both" }}
          className={`max-w-xl text-base text-muted-foreground sm:text-lg ${rise}`}
        >
          UD Atmodjo menyediakan beton bis sumur precast berkualitas tinggi
          untuk proyek konstruksi Anda. Tahan lama, presisi, dan sesuai
          standar SNI.
        </p>

        {/* CTA Buttons */}
        <div
          style={{ animationDelay: "240ms", animationFillMode: "both" }}
          className={`flex flex-wrap items-center justify-center gap-3 ${rise}`}
        >
          <a
            href="#produk"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Lihat Produk
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20produk%20beton%20bis%20sumur"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel glass-panel-lit rounded-full px-6 py-3 text-sm font-medium text-foreground hover:bg-card/70 transition-colors"
          >
            Request Harga
          </a>
        </div>

        {/* Bottom info */}
        <div
          style={{ animationDelay: "340ms", animationFillMode: "both" }}
          className={`mt-8 flex flex-col items-center gap-5 ${rise}`}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Melayani Seluruh Indonesia
          </span>
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm font-medium text-foreground/60 sm:gap-x-10">
            {["Jawa", "Bali", "Kalimantan", "Sumatera", "Sulawesi"].map(
              (name) => (
                <li key={name}>{name}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

function MarqueeTicker() {
  const items = [
    "Beton Bis Sumur",
    "Batako Press",
    "Paving Block",
    "Box Culvert",
    "U-Ditch",
    "Panel Beton",
    "Tiang Listrik",
    "Beton Pracet",
  ];

  return (
    <section aria-label="Produk catalog" className="relative -mt-4 pb-4 sm:pb-8">
      <div className="container w-full">
        <div className="relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-[scroll_30s_linear_infinite] gap-3">
            {[...items, ...items, ...items].map((item, i) => (
              <span
                key={i}
                className="glass-panel inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-[11px] tracking-tight text-muted-foreground"
              >
                <span className="size-1 rounded-full bg-muted-foreground/50" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
}

function Stats() {
  const stats = [
    { number: "5.000+", label: "Proyek Selesai" },
    { number: "200+", label: "Klien Puas" },
    { number: "50+", label: "Jenis Produk" },
    { number: "24", label: "Jam Pengiriman" },
  ];

  return (
    <section className="py-16 relative">
      <div className="container">
        <div className="glass-panel glass-panel-lit rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-display text-primary">
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground mt-2 font-mono uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Products() {
  const products = [
    {
      name: "Beton Bis Sumur Ø 80cm",
      desc: "Beton precast untuk sumur resapan dan sumur bor. Ketebalan 8cm, tinggi 40cm per ring.",
      badge: "Best Seller",
      specs: ["Tinggi: 40 cm", "Diameter: 80 cm", "Tebal: 8 cm"],
    },
    {
      name: "Beton Bis Sumur Ø 100cm",
      desc: "Cocok untuk sumur air bersih skala menengah. Reinforced steel untuk kekuatan optimal.",
      badge: "Popular",
      specs: ["Tinggi: 40 cm", "Diameter: 100 cm", "Tebal: 10 cm"],
    },
    {
      name: "Beton Bis Sumur Ø 120cm",
      desc: "Untuk sumur bor profesional dan proyek infrastruktur besar. Daya tahan tinggi.",
      badge: "Premium",
      specs: ["Tinggi: 40 cm", "Diameter: 120 cm", "Tebal: 12 cm"],
    },
    {
      name: "Beton Bis Sumur Ø 150cm",
      desc: "Ukuran besar untuk sumur bor industri. Struktur kuat menahan tekanan tanah dalam.",
      specs: ["Tinggi: 40 cm", "Diameter: 150 cm", "Tebal: 12 cm"],
    },
    {
      name: "Batako Press 20x40",
      desc: "Batako mutu tinggi untuk dinding dan konstruksi. Press hidrolik, padat dan presisi.",
      specs: ["20 x 40 x 20 cm", "Mutu K-225", "Press Hidrolik"],
    },
    {
      name: "Paving Block 6cm",
      desc: "Paving block untuk jalan carport, taman, dan area parkir. Tersedia berbagai motif.",
      specs: ["Tebal: 6 cm", "Motif: Hexagonal", "Mutu K-300"],
    },
  ];

  return (
    <section id="produk" className="py-20 sm:py-28 relative">
      <div className="ambient-halo" />
      <div className="container">
        <div className="text-center mb-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-3 block">
            Produk Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-display italic leading-[0.95] tracking-[-0.02em] mb-4">
            Beton Bis Sumur & Material Bangunan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Produk beton precast berkualitas tinggi dengan standar SNI. Cocok
            untuk proyek rumah tinggal hingga infrastruktur berskala besar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <article
              key={i}
              className="glass-panel glass-panel-lit group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-colors duration-200 hover:bg-card/70"
            >
              {/* Blueprint grid decoration */}
              <div className="pointer-events-none absolute inset-0 z-0 blueprint-corners opacity-30" />

              {/* Image placeholder */}
              <div className="relative z-10 aspect-video rounded-xl bg-muted/50 mb-5 flex items-center justify-center overflow-hidden border border-border">
                <div className="text-muted-foreground/50 text-center">
                  <svg
                    className="w-10 h-10 mx-auto mb-1 opacity-50 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-xs font-mono">Foto Produk</p>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-medium tracking-tight text-foreground">
                    {product.name}
                  </h3>
                  {product.badge && (
                    <span className="shrink-0 font-mono text-[10px] tracking-wider uppercase bg-primary/15 text-primary px-2 py-0.5 rounded-full border border-primary/20">
                      {product.badge}
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {product.desc}
                </p>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {product.specs.map((spec, j) => (
                    <li
                      key={j}
                      className="text-xs text-muted-foreground flex items-center gap-2"
                    >
                      <span className="size-1 rounded-full bg-primary/60" />
                      <span className="font-mono">{spec}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20bertanya%20tentang%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-foreground transition-colors group/link"
                >
                  Tanya Harga
                  <svg
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Standar SNI",
      desc: "Semua produk beton bis sumur kami telah lulus uji laboratorium dan memenuhi standar nasional Indonesia.",
    },
    {
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Pengiriman Cepat",
      desc: "Armada sendiri siap mengirim ke proyek Anda. Pengiriman 24 jam untuk area Jawa & Bali.",
    },
    {
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Harga Terjangkau",
      desc: "Harga pabrik tanpa perantara. Melayani pembelian grosir dan ecer dengan harga bersaing.",
    },
    {
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      title: "Kualitas Terjamin",
      desc: "Menggunakan semen dan aggregate pilihan. Kontrol kualitas ketat di setiap tahap produksi.",
    },
    {
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Tim Ahli",
      desc: "Didukung teknisi berpengalaman yang siap membantu konsultasi teknis dan pemasangan.",
    },
    {
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
      title: "Garansi Produk",
      desc: "Setiap produk beton bis sumur dilengkapi garansi cacat produksi dan penggantian gratis.",
    },
  ];

  const gridSquares = [
    [
      [8, 1],
      [10, 3],
      [9, 5],
    ],
    [
      [9, 2],
      [11, 4],
      [8, 6],
    ],
    [
      [10, 1],
      [8, 4],
      [11, 2],
    ],
    [
      [8, 2],
      [10, 5],
      [9, 1],
    ],
    [
      [11, 3],
      [9, 6],
      [8, 1],
    ],
    [
      [9, 4],
      [11, 1],
      [10, 6],
    ],
  ];

  return (
    <section id="keunggulan" className="py-20 sm:py-28 relative">
      <div className="container">
        <div className="text-center mb-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-3 block">
            Mengapa Kami?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-display italic leading-[0.95] tracking-[-0.02em] mb-4">
            Keunggulan UD Atmodjo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dipercaya ribuan kontraktor dan pemborong di seluruh Indonesia
            karena konsistensi mutu dan pelayanan terbaik.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <article
              key={i}
              className="glass-panel glass-panel-lit group relative flex flex-col gap-5 overflow-hidden rounded-2xl p-7 transition-colors duration-200 hover:bg-card/70"
            >
              {/* Blueprint grid */}
              <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-br from-primary/8 to-transparent mask-[radial-gradient(farthest-side_at_top,white,transparent)]">
                  <svg
                    aria-hidden
                    className="absolute inset-0 h-full w-full fill-primary/10 stroke-primary/25"
                  >
                    <defs>
                      <pattern
                        id={`why-grid-${i}`}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                        x="-12"
                        y="4"
                      >
                        <path d="M.5 20V.5H20" fill="none" />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      strokeWidth={0}
                      fill={`url(#why-grid-${i})`}
                    />
                    <svg x="-12" y="4" className="overflow-visible">
                      {gridSquares[i % gridSquares.length].map(
                        ([col, row], j) => (
                          <rect
                            strokeWidth="0"
                            key={`${col}-${row}-${j}`}
                            width={21}
                            height={21}
                            x={col * 20}
                            y={row * 20}
                          />
                        )
                      )}
                    </svg>
                  </svg>
                </div>
              </div>

              <span className="glass-panel-strong relative z-10 inline-flex size-11 shrink-0 items-center justify-center rounded-full">
                <span className="text-foreground">{feature.icon}</span>
              </span>

              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="text-base font-medium tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      num: "01",
      title: "Konsultasi",
      desc: "Hubungi kami untuk konsultasi kebutuhan material proyek Anda.",
    },
    {
      num: "02",
      title: "Pilih Produk",
      desc: "Tentukan jenis dan jumlah beton bis sumur sesuai spesifikasi proyek.",
    },
    {
      num: "03",
      title: "Pengiriman",
      desc: "Produk dikirim langsung ke lokasi proyek Anda dengan armada kami.",
    },
    {
      num: "04",
      title: "Pemasangan",
      desc: "Tim teknisi kami siap membantu proses pemasangan di lapangan.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="ambient-halo" />
      <div className="container">
        <div className="text-center mb-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-3 block">
            Proses Pemesanan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-display italic leading-[0.95] tracking-[-0.02em]">
            Mudah & Cepat
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <article
              key={i}
              className="glass-panel glass-panel-lit group relative flex flex-col items-center text-center overflow-hidden rounded-2xl p-7 transition-colors duration-200 hover:bg-card/70"
            >
              <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center font-mono text-sm font-bold text-primary mb-4">
                {step.num}
              </div>
              <h3 className="font-medium tracking-tight mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 text-muted-foreground/30">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative isolate py-24 sm:py-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="hero-aurora" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-4 text-center sm:px-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 border border-primary/20 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
          <span className="state-dot" />
          Get Started
        </span>

        <h2 className="text-4xl italic leading-[0.88] tracking-[-0.02em] sm:text-6xl lg:text-7xl text-display">
          Butuh Beton Bis Sumur?
        </h2>

        <p className="max-w-md text-sm text-muted-foreground sm:text-base">
          Hubungi kami sekarang untuk mendapatkan penawaran harga terbaik. Tim
          kami siap membantu Anda 24 jam.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20order%20beton%20bis%20sumur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat WhatsApp
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
          <a
            href="tel:+6281234567890"
            className="glass-panel glass-panel-lit rounded-full px-6 py-3 text-sm font-medium text-foreground hover:bg-card/70 transition-colors inline-flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Telepon Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border pt-16 pb-8">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm font-mono">
                  UA
                </span>
              </div>
              <span className="font-medium tracking-tight">UD Atmodjo</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Supplier material bangunan dan beton bis sumur terpercaya sejak
              1990. Melayani kebutuhan konstruksi di seluruh Indonesia.
            </p>
          </div>

          <div>
            <h3 className="font-medium tracking-tight mb-4">Produk</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Beton Bis Sumur
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Batako Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Paving Block
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Box Culvert
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  U-Ditch
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium tracking-tight mb-4">Perusahaan</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#tentang"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Proyek
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Karir
                </a>
              </li>
              <li>
                <a
                  href="#kontak"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div id="kontak">
            <h3 className="font-medium tracking-tight mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-muted-foreground">
                  Jl. Raya Utama No. 123, Surabaya, Jawa Timur
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 shrink-0 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-muted-foreground">0812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 shrink-0 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-muted-foreground">
                  info@udatmodjo.co.id
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} UD Atmodjo. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <MarqueeTicker />
        <Stats />
        <Products />
        <Features />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
