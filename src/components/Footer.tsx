import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Heart, MapPin } from 'lucide-react';
import ScrollToTop from './ScrollToTop';

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-16">
      {/* Organic Wave Border (Top) */}
      <div className="absolute -top-[50px] left-0 w-full leading-[0] z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] fill-mangrove">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="bg-mangrove text-bg-paper py-16 pt-24 relative overflow-hidden">
        {/* Stylized Map Background */}
        <div
          className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none invert bg-cover bg-center"
          style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Sundarbans_map.svg/1200px-Sundarbans_map.svg.png")' }}
        />

        {/* Mangrove Roots Silhouette (Bottom) */}
        <div
          className="absolute bottom-0 right-0 w-[300px] h-[200px] opacity-10 pointer-events-none bg-contain bg-no-repeat bg-bottom-right"
          style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2018/04/06/11/21/mangrove-3295764_1280.png")' }}
        />

        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">

            {/* Brand & Mission */}
            <div>
              <h3 className="text-3xl mb-6 text-tiger font-heading">Sundargaan</h3>
              <p className="opacity-90 leading-relaxed text-lg mb-8">
                Preserving the lost arts of the Sundarbans. We are a community-driven platform dedicated to reviving the folk music and crafts of the delta.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-tiger hover:scale-110 transition-transform"><Instagram size={24} /></a>
                <a href="#" className="text-tiger hover:scale-110 transition-transform"><Facebook size={24} /></a>
                <a href="#" className="text-tiger hover:scale-110 transition-transform"><Twitter size={24} /></a>
                <a href="#" className="text-tiger hover:scale-110 transition-transform"><Mail size={24} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl mb-6 text-tiger font-heading font-bold">Explore</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="/artists" className="opacity-80 hover:opacity-100 hover:text-tiger transition-colors inline-block">Find Artists</a></li>
                <li><a href="/digimela" className="opacity-80 hover:opacity-100 hover:text-tiger transition-colors inline-block">DigiMela Store</a></li>
                <li><a href="/gurukul" className="opacity-80 hover:opacity-100 hover:text-tiger transition-colors inline-block">Join Gurukul</a></li>
                <li><a href="/volunteer" className="opacity-80 hover:opacity-100 hover:text-tiger transition-colors inline-block">Volunteer</a></li>
                <li><a href="/about" className="opacity-80 hover:opacity-100 hover:text-tiger transition-colors inline-block">Our Story</a></li>
              </ul>
            </div>

            {/* Location / Map Context */}
            <div>
              <h4 className="text-xl mb-6 text-tiger font-heading font-bold">Find Us</h4>
              <div className="flex gap-4 mb-6 items-start">
                <MapPin size={24} className="text-tiger mt-1 shrink-0" />
                <div>
                  <p className="font-semibold mb-2">Sundargaan Cultural Centre</p>
                  <p className="opacity-80 leading-relaxed">
                    Gosaba, Sundarbans<br />
                    South 24 Parganas<br />
                    West Bengal, India - 743347
                  </p>
                </div>
              </div>
              <p className="text-sm opacity-70 italic">
                "Where the tides tell stories."
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm opacity-70">
            <p className="flex items-center justify-center gap-2">
              © {new Date().getFullYear()} Sundargaan. Made with <Heart size={16} className="fill-tiger text-tiger" /> for the Culture.
            </p>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
};

export default Footer;

