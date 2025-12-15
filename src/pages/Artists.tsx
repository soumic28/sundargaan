import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import ArtistCard from '../components/ArtistCard';
import { artists } from '../data/artists';

const Artists: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const genres: string[] = ['All', 'Baul Sangeet', 'Bhatiali', 'Folk', 'Kirtan'];

  const filteredArtists = selectedGenre === 'All'
    ? artists
    : artists.filter(artist => artist.genre.includes(selectedGenre) || artist.genre === selectedGenre);

  return (
    <SectionWrapper className="artists-page" style={{ paddingTop: '2rem' }}>
      <div style={{ display: 'flex', gap: '3rem', flexDirection: 'row' }}>

        {/* Sidebar Filters */}
        <aside style={{ width: '250px', flexShrink: 0 }}>
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-sm)',
            position: 'sticky',
            top: '100px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
              <Filter size={20} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Filters</h3>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '1rem', fontWeight: 600 }}>Genre</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {genres.map(genre => (
                  <label key={genre} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="genre"
                      checked={selectedGenre === genre}
                      onChange={() => setSelectedGenre(genre)}
                      style={{ accentColor: 'var(--color-primary)' }}
                    />
                    <span style={{ color: selectedGenre === genre ? 'var(--color-primary)' : 'var(--color-text-main)' }}>
                      {genre}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '1rem', marginBottom: '1rem', fontWeight: 600 }}>Instrument</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.7 }}>
                <label><input type="checkbox" /> Ektara</label>
                <label><input type="checkbox" /> Dotara</label>
                <label><input type="checkbox" /> Flute</label>
                <label><input type="checkbox" /> Harmonium</label>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Artist Community</h1>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Discover {filteredArtists.length} talented artists from the Sundarbans.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {filteredArtists.map(artist => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .artists-page > div { flex-direction: column !important; }
          aside { width: 100% !important; margin-bottom: 2rem; }
        }
      `}</style>
    </SectionWrapper>
  );
};

export default Artists;
