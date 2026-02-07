"use client";

import Image from "next/image";
import { useState } from "react";

const wallpapers = Array.from({ length: 12 }, (_, index) => ({
  src: "/wallpapers/portrait1.png",
  title: `Portrait ${String(index + 1).padStart(2, "0")} — Ink Bloom`,
  width: 900,
  height: 1600,
}));

const backgrounds = Array.from({ length: 12 }, (_, index) => ({
  src: "/backgrounds/landscape1.png",
  title: `Landscape ${String(index + 1).padStart(2, "0")} — Quiet Field`,
  width: 1600,
  height: 900,
}));

function MasonrySection({
  title,
  description,
  items,
  columnsClass,
}: {
  title: string;
  description: string;
  items: Array<{ src: string; title: string; width: number; height: number }>;
  columnsClass: string;
}) {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-[#111418] sm:text-3xl">
          {title}
        </h2>
        <p className="max-w-2xl text-sm text-[#5b6066] sm:text-base">
          {description}
        </p>
      </div>
      <div
        className={`${columnsClass} columns-1 gap-6 [column-fill:balance]`}
      >
        {items.map((item, index) => (
          <GalleryCard
            key={`${item.src}-${index}`}
            item={item}
            priority={index < 2}
          />
        ))}
      </div>
    </section>
  );
}

function GalleryCard({
  item,
  priority,
}: {
  item: { src: string; title: string; width: number; height: number };
  priority: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <figure className="mb-6 inline-block w-full break-inside-avoid rounded-3xl bg-white p-3 shadow-[0_18px_50px_rgba(17,20,24,0.12)]">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative w-full cursor-zoom-in overflow-hidden rounded-2xl bg-[#111418] text-left"
        aria-label="Open artwork preview"
      >
        <Image
          src={item.src}
          alt={item.title}
          width={item.width}
          height={item.height}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="h-auto w-full transition duration-300 ease-out group-hover:scale-[1.04]"
          priority={priority}
        />
        <div className="absolute inset-0 flex items-end justify-between gap-2 bg-black/0 p-4 opacity-0 transition duration-300 ease-out group-hover:bg-black/30 group-hover:opacity-100">
          <span className="rounded-full bg-white/90 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#111418]">
            View
          </span>
        </div>
      </button>
      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 transition-opacity duration-300 ease-out"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative flex h-[90vh] w-[90vw] max-w-6xl items-center justify-center animate-[zoomIn_200ms_ease-out]">
            <Image
              src={item.src}
              alt={item.title}
              width={item.width}
              height={item.height}
              sizes="90vw"
              className="h-full w-full rounded-3xl object-contain"
            />
            <div className="absolute bottom-6 right-6 flex gap-3">
              <a
                href={item.src}
                download
                className="rounded-full bg-white px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#111418] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                onClick={(event) => event.stopPropagation()}
              >
                Download
              </a>
              <button
                className="rounded-full border border-white/70 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                onClick={(event) => event.stopPropagation()}
              >
                Share
              </button>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-6 rounded-full border border-white/50 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white transition duration-200 ease-out hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </figure>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <nav className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-[#111418]/95 px-6 py-4 text-white backdrop-blur sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.3em] text-white/70">
          <a href="#top" className="text-white/80 transition hover:text-white">
            NOIR ATlAS
          </a>
          <div className="flex flex-wrap gap-6 text-[0.7rem]">
            <a href="#gallery" className="transition hover:text-white">
              Gallery
            </a>
            <a href="#wallpapers" className="transition hover:text-white">
              Wallpapers
            </a>
            <a href="#backgrounds" className="transition hover:text-white">
              Backgrounds
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
          </div>
        </div>
      </nav>
      <header
        id="top"
        className="bg-[#111418] px-6 pb-16 pt-24 text-white sm:px-10 lg:px-16"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">
              Personal Art Gallery
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              NOIR ATlAS
            </h1>
            <p className="max-w-2xl text-base text-white/80 sm:text-lg">
              A curated collection of original AI artworks and illustrations, crafted as high-resolution wallpapers and 
              background plates. Every release is designed for crisp, 
              balanced viewing across portrait and landscape screens -
              from mobile to ultra-wide.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
              <span>Creator: Danidu Muhandiram</span>
              <span>Free downloads</span>
              <span>Non‑commercial use only</span>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <button className="rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#111418]">
                Contact
              </button>
              <button className="rounded-full border border-white/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/70">
                Portfolio
              </button>
            </div>
          </div>
        </div>
      </header>

      <main
        id="gallery"
        className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-14 sm:px-10 lg:px-16"
      >
        <section className="grid gap-6 rounded-3xl border border-black/5 bg-white p-6 shadow-[0_18px_50px_rgba(17,20,24,0.08)] sm:grid-cols-3 sm:p-8">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b9096]">
              Statement
            </p>
            <p className="text-lg font-semibold text-[#111418]">
              Personal Arts
            </p>
            <p className="text-sm text-[#5b6066]">
              A curated collection of my AI artworks and illustrations,
              refined into premium wallpapers and atmospheric backgrounds.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b9096]">
              Availability
            </p>
            <p className="text-lg font-semibold text-[#111418]">Free to use</p>
            <p className="text-sm text-[#5b6066]">
              Shared for personal use only. Not licensed for commercial
              projects, resale, or stock redistribution.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b9096]">
              Platforms
            </p>
            <p className="text-lg font-semibold text-[#111418]">
              Stock contributor
            </p>
            <p className="text-sm text-[#5b6066]">
              I contribute to popular stock platforms and publish select works
              here as free downloads for the community.
            </p>
          </div>
        </section>
        <div id="wallpapers">
          <MasonrySection
            title="Wallpapers"
            description="Bold, immersive compositions crafted for desktop and mobile displays."
            items={wallpapers}
            columnsClass="sm:columns-2 lg:columns-3 xl:columns-4"
          />
        </div>
        <div id="backgrounds">
          <MasonrySection
            title="Backgrounds"
            description="Quiet textures and subtle gradients made for UI, print, and motion work."
            items={backgrounds}
            columnsClass="sm:columns-2 lg:columns-2 xl:columns-3"
          />
        </div>
        <section
          id="about"
          className="grid gap-6 rounded-3xl bg-[#111418] p-8 text-white sm:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Collection details</h3>
            <p className="text-sm text-white/75">
              Replace the two sample files with your real artwork. Keep the same
              filenames for instant updates: portrait1.png for wallpapers and
              landscape1.png for backgrounds. The layout will adapt
              automatically—no additional edits needed.
            </p>
          </div>
          <div className="grid gap-3 text-xs text-white/65">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span>Recommended portrait</span>
              <span>9:16 or 4:5</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span>Recommended landscape</span>
              <span>16:9 or 3:2</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Theme</span>
              <span>Ink / White / Light</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white px-6 py-10 text-center text-xs text-[#5b6066] sm:px-10 lg:px-16">
        © 2026 Ink &amp; Light — Art Gallery
      </footer>
    </div>
  );
}
