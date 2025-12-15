import React from 'react';
import SectionWrapper from '../components/SectionWrapper';

export const About: React.FC = () => (
  <SectionWrapper>
    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: 'var(--color-primary)' }}>Our Story</h1>
      <p style={{ fontSize: '1.25rem', lineHeight: 1.8, marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
        In the heart of the Sundarbans, a rich tapestry of culture and music is at risk of fading away.
        Sundargaan was born from a desire to bridge the emotional disconnect between these traditional artists and the modern world.
      </p>
      <div style={{ padding: '2rem', backgroundColor: 'var(--color-bg-muted)', borderRadius: 'var(--radius-lg)' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>The Emotional Disconnect</h3>
        <p>
          As the world moves forward, we often leave behind the very roots that ground us.
          Our mission is to reconnect you with the raw, unfiltered emotions of folk art.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export const DigiMela: React.FC = () => (
  <SectionWrapper>
    <div style={{ textAlign: 'center', padding: '4rem 0' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>DigiMela</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
        A marketplace for authentic instruments and local crafts.
      </p>
      <div style={{ padding: '3rem', border: '2px dashed var(--color-secondary)', borderRadius: 'var(--radius-lg)', display: 'inline-block' }}>
        <h3 style={{ color: 'var(--color-secondary)' }}>Coming Soon</h3>
        <p>We are curating the best handcrafted items for you.</p>
      </div>
    </div>
  </SectionWrapper>
);

export const Gurukul: React.FC = () => (
  <SectionWrapper>
    <div style={{ textAlign: 'center', padding: '4rem 0' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Gurukul</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
        Learn directly from the masters. Online and Offline sessions.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', textAlign: 'left' }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ padding: '2rem', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ height: '150px', backgroundColor: 'var(--color-bg-muted)', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}></div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Folk Singing Masterclass</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Learn the basics of Bhatiali with Rina Das.</p>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export const Volunteer: React.FC = () => (
  <SectionWrapper>
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>Join the Movement</h1>
      <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-text-muted)' }}>
        Become a part of our volunteer network and help us preserve our heritage.
      </p>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <input type="text" placeholder="Your Name" style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }} />
        <input type="email" placeholder="Email Address" style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }} />
        <textarea placeholder="Why do you want to join?" rows={4} style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }}></textarea>
        <button style={{
          padding: '1rem',
          backgroundColor: 'var(--color-primary)',
          color: 'white',
          borderRadius: 'var(--radius-md)',
          fontWeight: 600,
          border: 'none',
          cursor: 'pointer'
        }}>
          Sign Up to Volunteer
        </button>
      </form>
    </div>
  </SectionWrapper>
);
