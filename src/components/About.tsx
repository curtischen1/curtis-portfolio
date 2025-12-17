import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const photos = [
    { image: 'person skiing mountain', caption: 'happy place 😊', rotation: 5 },
    { image: 'mountain hiking yosemite', caption: 'weekend adventures 🌲', rotation: -3 },
    { image: 'person filming video', caption: 'filming cinematic videos', rotation: 4 },
    { image: 'person eating ramen', caption: 'big eater/lover', rotation: -2 }
  ];

  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 
            className="text-gray-700 mb-6"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Hey, a little bit more <span className="text-[#ff6b35] italic">about me</span>.
          </h2>
          
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              I'm a product manager based in San Francisco, CA, studying Engineering 
              and Design @ UC Berkeley. I love building consumer-facing products, and 
              finding unconventional ways to apply AI to solve people problems.
            </p>
            
            <div>
              <p className="mb-2">Outside of work, <span className="text-[#ff6b35] italic">I'm currently:</span></p>
              <ul className="space-y-2 pl-4">
                <li>• filming cinematic videos and short films (check out my <a href="#" className="text-[#ff6b35] hover:underline">channel</a>!)</li>
                <li>• trying to find the best matcha spot in sf</li>
                <li>• bulking up to 150lbs to bench 225 (currently benching 195 @ 145lbw)</li>
                <li>• side questing to have some dad lore for my future kids</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gray-900 mb-2">Contacts</h3>
              <a 
                href="mailto:nicholaschua@berkeley.edu" 
                className="text-[#ff6b35] hover:underline"
              >
                nicholaschua@berkeley.edu
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
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
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
              <div className="aspect-square bg-gray-100 mb-2">
                <ImageWithFallback
                  src={`https://via.placeholder.com/300x300`}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                  unsplashQuery={photo.image}
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
