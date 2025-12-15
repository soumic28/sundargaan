import React from 'react';
import { Play } from 'lucide-react';
import { Artist } from '../types';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <div
      className="bg-white p-4 pb-8 shadow-soft transition-all duration-500 cursor-pointer relative border border-black/5 hover:scale-[1.02] hover:rotate-0 hover:shadow-deep hover:z-10 z-0 group"
      style={{ transform: `rotate(${Math.random() * 2 - 1}deg)` }}
    >
      {/* Tape Effect */}
      <div className="absolute -top-[15px] left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-white/40 shadow-sm z-20 backdrop-blur-sm border border-white/20" />

      <div className="h-[280px] overflow-hidden relative mb-4 sepia-[0.2] contrast-110">
        <img
          src={artist.image || 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?auto=format&fit=crop&q=80&w=800'}
          alt={artist.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-4 left-4 bg-mangrove px-3 py-1 text-xs font-semibold text-tiger tracking-wider uppercase">
          {artist.instrument}
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-2xl mb-1 font-heading text-mud">
          {artist.name}
        </h3>
        <p className="text-river text-sm mb-6 italic font-heading">
          {artist.location || 'Sundarbans, West Bengal'}
        </p>

        <div className="flex justify-center items-center gap-4">
          <span className="text-xs font-semibold text-text-secondary uppercase tracking-widest border-b border-tiger pb-0.5">
            {artist.genre || 'Folk Music'}
          </span>
          <button className="w-10 h-10 rounded-full border border-mud flex items-center justify-center text-mud transition-all duration-300 hover:bg-mud hover:text-bg-paper">
            <Play size={18} fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;

