import { MapPin } from 'lucide-react';

const GH = "'Gloria Hallelujah', cursive";

export function Hero() {
  return (
    <section className="text-center" style={{ paddingTop: '40px', paddingBottom: '64px' }}>
      {/* Title + portrait */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <h1 style={{ fontFamily: GH, fontSize: '96px', lineHeight: 1.15 }}>
          Hey, I'm Curtis
        </h1>
        <img
          src="/assets/my-notion-face-portrait.svg"
          alt="Curtis"
          style={{ width: '160px', height: '160px', flexShrink: 0 }}
        />
      </div>

      {/* Location */}
      <div
        className="flex items-center justify-center gap-2"
        style={{ fontFamily: GH, fontSize: '26px', color: '#444', marginBottom: '48px' }}
      >
        <MapPin className="w-5 h-5" style={{ flexShrink: 0 }} />
        <span>San Francisco, CA</span>
      </div>

      {/* Education */}
      <p
        style={{ fontFamily: GH, fontSize: '26px', color: '#444' }}
        className="mb-5"
      >
        computer science and psychology @ uc davis
      </p>

      {/* Tagline + LEGO icon */}
      <div className="flex items-center justify-center gap-4">
        <p style={{ fontFamily: GH, fontSize: '26px', color: '#444' }}>
          building products and legos
        </p>
        <img
          src="/assets/notion_lego.svg"
          alt="lego"
          style={{ height: '44px' }}
        />
      </div>
    </section>
  );
}
