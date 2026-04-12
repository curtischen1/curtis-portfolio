import { MapPin } from 'lucide-react';
import { SlantedUnderline } from './SlantedUnderline';

export function Hero() {
  return (
    <div className="design-canvas design-canvas--hero" style={{ ['--canvas-design-height' as never]: '600px' }}>
      <section className="hero">
        <div className="hero__title-row">
          <h1 className="hero__title">
            <span className="hero__title-greeting">Hey, I'm</span>{' '}
            <span className="hero__title-name">
              <SlantedUnderline thickness={6} animated>Curtis</SlantedUnderline>
              <span className="notion-face-bounce hero__portrait-wrap">
                <img
                  src="/assets/my-notion-face-portrait.svg"
                  alt="Curtis"
                  className="hero__portrait"
                />
              </span>
            </span>
          </h1>
        </div>

        <div className="hero__location">
          <MapPin className="w-5 h-5" style={{ flexShrink: 0 }} />
          <span>San Francisco, CA</span>
        </div>

        <p className="hero__line">
          computer science and psychology{' '}
          <span className="hero__nowrap">@ uc davis</span>
        </p>

        <p className="hero__tagline">
          building products and{' '}
          <span className="hero__tagline-end">
            legos
            <img src="/assets/notion_lego.svg" alt="lego" className="hero__lego" />
          </span>
        </p>
      </section>
    </div>
  );
}
