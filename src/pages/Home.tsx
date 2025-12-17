import React from 'react';
import { ArrowRight, Music, Heart, Users, BookOpen, ShoppingBag, Wind, Droplets } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import ArtistCard from '../components/ArtistCard';
import Button from '../components/Button';
import WaveDivider from '../components/WaveDivider';
import { riceContent } from '../data/rice_content';
import { Artist } from '../types';
import AnimatedTitle from '../components/AnimatedTitle';

// Import generated images
import heroBg from '../assets/generated/hero_bg.png';
import agedPaper from '../assets/generated/aged_paper.png';
import mangroveImg from '../assets/generated/mangrove.png';
import tigerImg from '../assets/generated/tiger.png';
import riverImg from '../assets/generated/river.png';
import ektaraImg from '../assets/generated/ektara.png';
import dotaraImg from '../assets/generated/dotara.png';
import musicianImg from '../assets/generated/musician.png';

const Home: React.FC = () => {
  // Map riceContent people to Artist type
  const featuredArtists: Artist[] = riceContent.people.slice(0, 3).map((person, index) => ({
    id: index + 1,
    name: person.name,
    instrument: 'Folk Artist', // Default as data doesn't have this field
    genre: 'Sundarbans Folk',
    location: 'Sundarbans',
    image: person.image
  }));

  const featuredStory = riceContent.stories[0];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden text-mud text-center bg-bg-paper">
        {/* Background Image with Light Filter */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30 z-0 sepia-[0.2] brightness-110 contrast-90"
          style={{ backgroundImage: `url("${heroBg}")` }}
        />

        {/* Gradient Overlay for Blending (Light) */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-bg-paper/80 via-transparent to-bg-paper z-10" />

        {/* Texture Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full opacity-60 z-10 mix-blend-multiply"
          style={{ backgroundImage: `url("${agedPaper}")` }}
        />

        <div className="container mx-auto relative z-20 pt-0">
          <div className="inline-block mb-4 border-b border-tiger pb-2 text-tiger uppercase tracking-[0.2em] text-sm font-semibold animate-in fade-in duration-1000">
            Est. 2024 • Sundarbans
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-none text-mud animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200 fill-mode-backwards flex flex-col items-center">
            Echoes of the <br />
            <AnimatedTitle text="Mangroves" className="w-full max-w-[300px] md:max-w-[500px] h-[60px] md:h-[120px] -mt-2 " />
          </h1>
          <p className="text-2xl max-w-2xl mx-auto mb-10 opacity-90 font-heading leading-relaxed text-text-secondary animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500 fill-mode-backwards">
            Reviving the lost folk arts of Bengal. A journey through the rivers, rhythm, and soul of the Sundarbans.
          </p>
          <div className="flex gap-6 justify-center animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-700 fill-mode-backwards">
            <Button to="/artists" className="bg-tiger text-mud border-none shadow-lg shadow-tiger/40 hover:shadow-xl hover:-translate-y-1">
              Explore Artists <ArrowRight size={20} />
            </Button>
            <Button to="/about" className="bg-transparent text-mud border border-mud hover:bg-mud hover:text-bg-paper">
              Our Mission
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-[100px] left-1/2 -translate-x-1/2 opacity-60 z-20 animate-bounce duration-2000">
          <div className="w-[30px] h-[50px] border-2 border-mud rounded-2xl flex justify-center pt-2">
            <div className="w-1 h-2 bg-mud rounded-full animate-ping" />
          </div>
        </div> */}
      </section>

      {/* The Land of Tides (New Ecology Section) */}
      <SectionWrapper className="pb-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-mud font-heading font-bold">The Land of Tides</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-heading">
            Where the river meets the sea, and the tiger rules the jungle. Our music is born from the rhythm of these tides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Mangroves */}
          <div className="relative h-[300px] rounded-lg overflow-hidden group">
            <img
              src={mangroveImg}
              alt="Mangrove Roots"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-mangrove/90 to-transparent">
              <h3 className="text-tiger text-2xl mb-2 font-heading font-bold">The Mangroves</h3>
              <p className="text-bg-paper text-sm">The guardians of the coast, inspiring resilience in our folk tales.</p>
            </div>
          </div>

          {/* Card 2: Royal Bengal Tiger */}
          <div className="relative h-[300px] rounded-lg overflow-hidden group">
            <img
              src={tigerImg}
              alt="Royal Bengal Tiger"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-mud/90 to-transparent">
              <h3 className="text-tiger text-2xl mb-2 font-heading font-bold">The Royal Spirit</h3>
              <p className="text-bg-paper text-sm">Symbol of power and mystery, often depicted in Bonbibi's Palagaan.</p>
            </div>
          </div>

          {/* Card 3: River Life */}
          <div className="relative h-[300px] rounded-lg overflow-hidden group">
            <img
              src={riverImg}
              alt="River Boat"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-river/90 to-transparent">
              <h3 className="text-tiger text-2xl mb-2 font-heading font-bold">Life on Water</h3>
              <p className="text-bg-paper text-sm">Bhatiali songs are sung by boatmen, their rhythm matching the rowing oars.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* The Dying Art Section (Enhanced with Instruments) */}
      <SectionWrapper className="bg-bg-sand">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl mb-6 text-mud font-heading font-bold">The Dying Art</h2>
            <p className="text-xl text-text-secondary mb-6 font-heading leading-relaxed">
              The Bhatiali melodies that once echoed across the rivers are fading. The rhythmic beats of the Khamak are being drowned out by modern noise.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              <div className="flex gap-4 items-center">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-tiger shrink-0">
                  <img src={ektaraImg} alt="Ektara" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xl text-mud font-bold">Ektara</h4>
                  <p className="text-sm text-text-secondary">The "One String" instrument, soul of Baul music.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-tiger shrink-0">
                  <img src={dotaraImg} alt="Dotara" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xl text-mud font-bold">Dotara</h4>
                  <p className="text-sm text-text-secondary">The four-stringed lute, creating the melody of the soil.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-8">
              <div className="text-center">
                <h4 className="text-4xl text-mangrove font-bold">50+</h4>
                <span className="text-sm uppercase tracking-widest">Lost Instruments</span>
              </div>
              <div className="text-center">
                <h4 className="text-4xl text-mangrove font-bold">200+</h4>
                <span className="text-sm uppercase tracking-widest">Villages</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={musicianImg}
              alt="Musician playing instrument"
              className="w-full rounded-organic shadow-deep sepia-[0.2]"
            />
            {/* Decorative Elements */}
            <div className="absolute -top-5 -right-5 text-tiger opacity-50"><Wind size={48} /></div>
            <div className="absolute -bottom-5 -left-5 text-river opacity-50"><Droplets size={48} /></div>
          </div>
        </div>
      </SectionWrapper>

      {/* Stories from the Delta (New Artist Spotlight) */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4 text-mud font-heading font-bold">Stories from the Delta</h2>
          <p className="text-xl text-text-secondary">Every artist has a journey. Every song has a history.</p>
        </div>

        <div className="bg-bg-paper rounded-lg shadow-soft overflow-hidden flex flex-col md:flex-row border border-clay">
          <div className="flex-1 min-h-[400px]">
            <img
              src={featuredStory.image}
              alt={featuredStory.title}
              className="w-full h-full object-cover grayscale-[20%]"
            />
          </div>
          <div className="flex-1 p-16 flex flex-col justify-center">
            <div className="text-tiger mb-4 uppercase tracking-widest font-semibold">Story Spotlight</div>
            <h3 className="text-4xl mb-6 text-mud font-heading font-bold">{featuredStory.title}</h3>
            <p className="text-lg leading-relaxed mb-8 text-text-secondary">
              "{featuredStory.description}"
            </p>
            <Button to="/about" variant="outline" className="self-start border-mud text-mud hover:bg-mud hover:text-bg-paper">
              Read More Stories
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Artists */}
      <SectionWrapper className="bg-bg-sand relative">
        {/* Top Organic Divider */}
        <WaveDivider />

        <div className="flex justify-between items-end mb-16 pt-20 md:pt-44">
          <div>
            <h2 className="text-3xl md:text-5xl mb-2 text-mud font-heading font-bold">Voices of the Soil</h2>
            <p className="text-mangrove font-heading text-xl">Listen to the authentic melodies of the delta.</p>
          </div>
          <Button to="/artists" variant="ghost" className="text-mud border-b border-mud rounded-none px-0 py-2 hover:bg-transparent hover:opacity-70">
            View All Artists <ArrowRight size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredArtists.map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </SectionWrapper>

      {/* Gurukul & DigiMela Preview */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Gurukul */}
          <div className="bg-mangrove text-bg-paper p-12 rounded-lg relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-4 text-tiger"><BookOpen size={40} /></div>
              <h3 className="text-2xl md:text-4xl mb-4 text-bg-paper font-heading font-bold">Gurukul</h3>
              <p className="mb-8 opacity-90 text-lg">
                Learn the ancient arts directly from the masters. Online and offline sessions available for Ektara, Dotara, and Folk singing.
              </p>
              <Button to="/gurukul" className="bg-tiger text-mud px-6 py-3 hover:bg-white transition-colors">
                Start Learning
              </Button>
            </div>
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-[200px] h-full opacity-30 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
          </div>

          {/* DigiMela */}
          <div className="bg-mud text-bg-paper p-12 rounded-lg relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-4 text-tiger"><ShoppingBag size={40} /></div>
              <h3 className="text-2xl md:text-4xl mb-4 text-bg-paper font-heading font-bold">DigiMela</h3>
              <p className="mb-8 opacity-90 text-lg">
                Support the artisans. Buy authentic handcrafted instruments and local crafts directly from the Sundarbans.
              </p>
              <Button to="/digimela" className="bg-transparent border border-tiger text-tiger px-6 py-3 hover:bg-tiger hover:text-mud transition-colors">
                Visit Store
              </Button>
            </div>
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-[200px] h-full opacity-30 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_75%,transparent_75%,transparent)] bg-[length:20px_20px]" />
          </div>
        </div>
      </SectionWrapper>

      {/* Impact / Stats Section (Refined) */}
      <SectionWrapper className="bg-bg-sand pb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-mud font-heading font-bold">Our Impact</h2>
          <p className="text-text-secondary">Bridging the gap between talent and opportunity.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { icon: <Music size={32} />, count: '5000+', label: 'Local Artists', color: 'text-mud' },
            { icon: <Users size={32} />, count: '100%', label: 'Direct Hiring', color: 'text-mangrove' },
            { icon: <Heart size={32} />, count: '₹99', label: 'Artist Subscription', color: 'text-tiger' }
          ].map((stat, index) => (
            <div key={index} className="p-8 bg-bg-paper rounded-lg shadow-soft hover:-translate-y-1 transition-transform duration-300">
              <div className={`mb-4 inline-flex p-4 bg-bg-sand rounded-full ${stat.color}`}>
                {stat.icon}
              </div>
              <h3 className="text-5xl font-bold text-mud mb-2">{stat.count}</h3>
              <p className="text-river font-heading text-xl italic">{stat.label}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Call to Action / Newsletter */}
      <SectionWrapper className="bg-mud text-bg-paper text-center py-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl mb-6 text-tiger font-heading font-bold">Join the Movement</h2>
          <p className="text-xl mb-10 opacity-90 font-heading">
            Be part of the revival. Subscribe to our newsletter for updates on new artists, upcoming events, and stories from the Sundarbans.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-md border-none w-full max-w-md text-base font-body text-text-primary focus:ring-2 focus:ring-tiger outline-none"
            />
            <Button className="bg-tiger text-mud px-8 py-4 font-semibold hover:bg-white transition-colors">
              Subscribe
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Home;

