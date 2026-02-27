import { Linkedin, Instagram } from 'lucide-react';

const GH = "'Gloria Hallelujah', cursive";

const photos = [
  { src: '/assets/curtis_senate.JPG', caption: 'senator life 🏛️', rotation: -3 },
  { src: '/assets/elephant-photo.jpg', caption: 'international relations 🌍', rotation: 5 },
  { src: '/assets/curtis_sing.jpg', caption: 'probably singing off key 🎤', rotation: 4 },
  { src: '/assets/matcha-photo.JPG', caption: 'matcha hunting 🍵', rotation: -2 },
];

export function About() {
  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Bio column */}
        <div>
          <h2
            style={{ fontFamily: GH, fontSize: '32px', lineHeight: 1.4 }}
            className="mb-6"
          >
            a little about me.
          </h2>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              I'm a product manager based in San Francisco, CA, studying Computer Science
              and Psychology @ UC Davis. I love crafting products at the intersection of AI
              and human-computer interaction that feel seamless and solve real needs.
            </p>

            <div>
              <p className="mb-2">Outside of work, I'm currently:</p>
              <ul className="space-y-2 pl-4 list-disc">
                <li>embracing my inner child by building LEGOs (latest: #10302)</li>
                <li>writing as a creative outlet to share my perspective in the tech space</li>
                <li>traveling and learning about different cultures (recently: Barcelona, Tunisia, France)</li>
                <li>building passion projects in the music and education space</li>
              </ul>
            </div>

            <div>
              <h3
                style={{ fontFamily: GH, fontSize: '20px' }}
                className="mb-2"
              >
                Contacts
              </h3>
              <a
                href="mailto:curchen@ucdavis.edu"
                className="hover:underline"
                style={{ color: '#333' }}
              >
                curchen@ucdavis.edu
              </a>

              <div className="flex items-center gap-4 mt-3">
                <a
                  href="https://linkedin.com/in/curtischen1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>

              <p className="text-gray-500 italic mt-2">feel free to reach out!</p>
            </div>
          </div>
        </div>

        {/* Polaroid grid */}
        <div className="grid grid-cols-2 gap-6">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className="bg-white p-3 shadow-lg hover:shadow-xl transition-shadow"
              style={{
                transform: `rotate(${photo.rotation}deg)`,
                transformOrigin: 'center center',
              }}
            >
              <div className="aspect-square bg-gray-100 mb-2 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <p
                className="text-center italic text-sm"
                style={{ fontFamily: 'Georgia, serif', color: '#555' }}
              >
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
