const GH = "'Gloria Hallelujah', cursive";

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
      style={{
        backgroundColor: 'white',
        padding: '10px 10px 28px 10px',
        border: '3px solid black',
        boxShadow: '3px 5px 16px rgba(0,0,0,0.18)',
        transform: `rotate(${rotation}deg)`,
        width: `${width}px`,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: '100%',
          aspectRatio: '1',
          overflow: 'hidden',
          backgroundColor: '#d0d0d0',
          border: '3px solid black',
        }}
      >
        <img
          src={src}
          alt={caption}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: imagePosition }}
        />
      </div>
      <p
        style={{
          fontFamily: GH,
          fontSize: '15px',
          textAlign: 'center',
          marginTop: '20px',
          color: '#333',
          lineHeight: 1.3,
        }}
      >
        {caption}
      </p>
    </div>
  );
}

export function About() {
  return (
    <section className="py-12">
      {/* Main heading */}
      <div className="page-enter">
      <h1
        style={{
          fontFamily: GH,
          fontSize: '72px',
          lineHeight: 1.2,
          marginBottom: '88px',
          textAlign: 'center',
        }}
      >
        A little more about me...
      </h1>
      </div>

      {/* Section 1: Baby photo left + text right */}
      <div className="page-enter-delayed">
      <div
        style={{
          display: 'flex',
          gap: '64px',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '72px',
        }}
      >
        <Polaroid
          src="/assets/baby_curtis.JPEG"
          caption="Legos on floor not pictured"
          rotation={-3}
          width={270}
          imagePosition="center calc(50% - 30px)"
        />
        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.75,
            color: '#333',
            maxWidth: '400px',
          }}
        >
          I've always been a builder at heart. As a kid, LEGOs were how I brought my imagination to life, turning ideas into something real and tangible.
        </p>
      </div>

      {/* Section 2: Text left + boat photo right */}
      <div
        style={{
          display: 'flex',
          gap: '64px',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '88px',
        }}
      >
        <div style={{ maxWidth: '400px' }}>
          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.75,
              color: '#333',
              marginBottom: '24px',
            }}
          >
            Along the way I've been on a couple side quests: trained as a monk,
            sang in a choir, ran for student government, explored the world. I've
            always been drawn to new experiences and understanding what makes people
            tick.
          </p>
          <p style={{ fontSize: '18px', lineHeight: 1.75, color: '#333' }}>
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

      {/* Snippets heading */}
      <h2
        style={{
          fontFamily: GH,
          fontSize: '52px',
          lineHeight: 1.2,
          marginBottom: '48px',
          textAlign: 'center',
        }}
      >
        Some more snippets of my life!
      </h2>

      {/* 2×2 photo grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px 56px',
          maxWidth: '700px',
          margin: '0 auto',
          alignItems: 'start',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Polaroid
            src="/assets/elephant-photo.jpg"
            caption="international relations🌍"
            rotation={-4}
            width={270}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Polaroid
            src="/assets/curtis_sing.jpg"
            caption="Lookin' kinda... #sharp"
            rotation={3}
            width={270}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-10px' }}>
          <Polaroid
            src="/assets/curtis_food.jpg"
            caption="beli-maxxing😋"
            rotation={-2}
            width={270}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <Polaroid
            src="/assets/curtis_senate.JPG"
            caption="repping STEM students"
            rotation={4}
            width={270}
          />
        </div>
      </div>
      </div>
    </section>
  );
}
