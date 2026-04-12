function Polaroid({
  src,
  caption,
  rotation = 0,
  width = 280,
  imagePosition = 'center',
}: {
  src: string;
  caption: string;
  rotation?: number;
  width?: number;
  imagePosition?: string;
}) {
  return (
    <div
      className="polaroid"
      style={{ transform: `rotate(${rotation}deg)`, width: `${width}px` }}
    >
      <div className="polaroid__frame">
        <img src={src} alt={caption} style={{ objectPosition: imagePosition }} />
      </div>
      <p className="polaroid__caption">{caption}</p>
    </div>
  );
}

export function About() {
  return (
    <div className="design-canvas design-canvas--about" style={{ ['--canvas-design-height' as never]: '1700px' }}>
      <section className="about">
        <div className="page-enter">
          <h1 className="about__title">
            <span className="about__title-line1">A little more</span>{' '}
            <span className="about__title-line2">about me...</span>
          </h1>
        </div>

        <div className="page-enter-delayed">
          <div className="about__row">
            <Polaroid
              src="/assets/baby_curtis.JPEG"
              caption="Legos on floor not pictured"
              rotation={-3}
              width={270}
              imagePosition="center calc(50% - 30px)"
            />
            <p className="about__text">
              I've always been a builder at heart. As a kid, LEGOs were how I brought my imagination to life, turning ideas into something real and tangible.
            </p>
          </div>

          <div className="about__row about__row--reversed">
            <div className="about__text-block">
              <p>
                Along the way I've been on a couple side quests: trained as a monk,
                sang in a choir, ran for student government, explored the world. I've
                always been drawn to new experiences and understanding what makes people
                tick.
              </p>
              <p>
                Product, at its core, has always been about understanding people. The best products use creativity and technology to better how people actually live. As much as I love building products and legos, I love solving <em>real problems with real solutions</em>.
              </p>
            </div>
            <Polaroid
              src="/assets/curtis_boat.jpg"
              caption="back to my roots 🇲🇲"
              rotation={4}
              width={270}
              imagePosition="calc(50% - 30px) center"
            />
          </div>

          <h2 className="about__snippets-title">Some more snippets of my life!</h2>

          <div className="about__grid">
            <div className="about__grid-cell">
              <Polaroid src="/assets/elephant-photo.jpg" caption="international relations🌍" rotation={-4} width={270} />
            </div>
            <div className="about__grid-cell about__grid-cell--down">
              <Polaroid src="/assets/curtis_sing.jpg" caption="Lookin' kinda... #sharp" rotation={3} width={270} />
            </div>
            <div className="about__grid-cell about__grid-cell--up">
              <Polaroid src="/assets/curtis_food.jpg" caption="beli-maxxing😋" rotation={-2} width={270} />
            </div>
            <div className="about__grid-cell about__grid-cell--mid">
              <Polaroid src="/assets/curtis_senate.JPG" caption="repping STEM students" rotation={4} width={270} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
