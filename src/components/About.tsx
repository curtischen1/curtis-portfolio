import { Linkedin, Instagram } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Photo = {
  image: string;
  caption: string;
  rotation: number;
  isCustomImage: boolean;
};

export function About() {
  const photos: Photo[] = [
    { image: 'person skiing mountain', caption: 'happy place 😊', rotation: 5, isCustomImage: false },
    { image: '/assets/elephant-photo.jpg', caption: 'international relations🌍', rotation: -3, isCustomImage: true },
    { image: 'person filming video', caption: 'filming cinematic videos', rotation: 4, isCustomImage: false },
    { image: '/assets/matcha-photo.jpg', caption: 'matcha hunting🍵', rotation: -2, isCustomImage: true },
    { image: '/assets/big-eater-photo.jpg', caption: 'big eater/lover🍜', rotation: 3, isCustomImage: true }
  ];

  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
            <h2 
            className="text-gray-700 mb-6"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Hey, a little more <span className="text-[#ff6b35] italic">about me</span>.
          </h2>
          
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              I'm a product manager based in San Francisco, CA, studying Computer Science 
              and Psychology @ UC Davis. I love crafting products at the intersection of AI 
              and human-computer interaction that feel seamless and solve real needs.
            </p>
            
            <div>
              <p className="mb-2">Outside of work, <span className="text-[#ff6b35] italic">I'm currently:</span></p>
              <ul className="space-y-2 pl-4">
                <li>embracing my inner child by building LEGOs (latest: #10302)</li>
                <li>writing as a creative outlet to share my perspective in the tech space</li>
                <li>traveling and learning about different cultures (recently: Barcelona, Tunisia, France)</li>
                <li>building passion projects in the music and education space</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gray-900 mb-2">Contacts</h3>
              <a 
                href="mailto:curchen@ucdavis.edu" 
                className="text-[#ff6b35] hover:underline"
              >
                curchen@ucdavis.edu
              </a>
              
              <div className="flex items-center gap-4 mt-3">
                <a 
                  href="#" 
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
        
        <div className="grid grid-cols-2 gap-4">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className="bg-white p-3 shadow-lg hover:shadow-xl transition-shadow"
              style={{
                transform: `rotate(${photo.rotation}deg)`,
                transformOrigin: 'center center'
              }}
            >
              <div className="aspect-square bg-gray-100 mb-2 overflow-hidden">
                <ImageWithFallback
                  src={photo.isCustomImage ? photo.image : `https://via.placeholder.com/300x300`}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                  unsplashQuery={photo.isCustomImage ? undefined : photo.image}
                  style={{ objectPosition: 'center' }}
                />
              </div>
              <p className="text-center text-gray-600 italic" style={{ fontFamily: 'Georgia, serif' }}>
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
