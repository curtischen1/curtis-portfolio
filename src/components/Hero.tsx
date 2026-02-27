import { MapPin } from 'lucide-react';

const GH = "'Gloria Hallelujah', cursive";

export function Hero() {
  return (
    <section className="text-center py-16">
      {/* Title + portrait */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <h1 style={{ fontFamily: GH, fontSize: '56px', lineHeight: 1.2 }}>
          Hey, I'm Curtis
        </h1>
        <img
          src="/assets/my-notion-face-portrait.svg"
          alt="Curtis"
          style={{ width: '80px', height: '80px', flexShrink: 0 }}
        />
      </div>

      {/* Location */}
      <div
        className="flex items-center justify-center gap-2 mb-4"
        style={{ fontFamily: GH, fontSize: '16px', color: '#555' }}
      >
        <MapPin className="w-4 h-4" />
        <span>San Francisco, CA</span>
      </div>

      {/* Education */}
      <p
        style={{ fontFamily: GH, fontSize: '16px', color: '#555' }}
        className="mb-4"
      >
        computer science and psychology @ uc davis
      </p>

      {/* Tagline + LEGO icon */}
      <div className="flex items-center justify-center gap-3">
        <p style={{ fontFamily: GH, fontSize: '16px', color: '#555' }}>
          building products and legos
        </p>
        <img
          src="/assets/notion_lego.svg"
          alt="lego"
          style={{ height: '36px' }}
        />
      </div>
    </section>
  );
}
