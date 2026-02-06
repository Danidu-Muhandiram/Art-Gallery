import Image from "next/image";

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
}: {
  title: string;
  description: string;
  items: Array<{ src: string; title: string; width: number; height: number }>;
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
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4 [column-fill:balance]">
        {items.map((item, index) => (
          <figure
            key={item.src}
            className="mb-6 inline-block w-full break-inside-avoid rounded-3xl bg-white p-3 shadow-[0_18px_50px_rgba(17,20,24,0.12)]"
          >
            <div className="overflow-hidden rounded-2xl bg-[#111418]">
              <Image
                src={item.src}
                alt={item.title}
                width={item.width}
                height={item.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="h-auto w-full"
                priority={index < 2}
              />
            </div>
            <figcaption className="pt-3 text-sm text-[#5b6066]">
              {item.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <header className="bg-[#111418] px-6 pb-16 pt-8 text-white sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <nav className="flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.3em] text-white/70">
            <span>Ink &amp; Light</span>
            <div className="flex gap-6 text-[0.7rem]">
              <span>Gallery</span>
              <span>Wallpapers</span>
              <span>Backgrounds</span>
              <span>About</span>
            </div>
          </nav>
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">
              Personal Art Gallery
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Ink &amp; Light
            </h1>
            <p className="max-w-2xl text-base text-white/80 sm:text-lg">
              A personal collection of monochrome studies—wallpapers and
              backgrounds crafted from my original artwork. Each piece is
              presented cleanly and responsively in portrait or landscape.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-white/60">
              <span>Ink black: #111418</span>
              <span>White: #ffffff</span>
              <span>Light background: #f9fafb</span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-14 sm:px-10 lg:px-16">
        <section className="grid gap-6 rounded-3xl border border-black/5 bg-white p-6 shadow-[0_18px_50px_rgba(17,20,24,0.08)] sm:grid-cols-3 sm:p-8">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b9096]">
              Statement
            </p>
            <p className="text-lg font-semibold text-[#111418]">Personal work</p>
            <p className="text-sm text-[#5b6066]">
              A curated selection of my original art studies—focused on light,
              depth, and clean monochrome balance.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b9096]">
              Medium
            </p>
            <p className="text-lg font-semibold text-[#111418]">
              Digital abstracts
            </p>
            <p className="text-sm text-[#5b6066]">
              Built with layered gradients and soft textures, designed for
              wallpapers, posters, and motion backdrops.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b9096]">
              Release
            </p>
            <p className="text-lg font-semibold text-[#111418]">
              Ongoing series
            </p>
            <p className="text-sm text-[#5b6066]">
              New works added regularly—each piece explores contrast, scale, and
              quiet spatial rhythm.
            </p>
          </div>
        </section>
        <MasonrySection
          title="Wallpapers"
          description="High-impact compositions built for desktop and mobile screens. Add any resolution—Next.js handles sizing, compression, and lazy loading automatically."
          items={wallpapers}
        />
        <MasonrySection
          title="Backgrounds"
          description="Minimal textures and gradients for UI, print, and motion. Mix portrait and landscape formats freely—everything stays aligned."
          items={backgrounds}
        />
        <section className="grid gap-6 rounded-3xl bg-[#111418] p-8 text-white sm:grid-cols-[1.2fr_0.8fr]">
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
