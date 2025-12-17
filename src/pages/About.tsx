import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { riceContent } from '../data/rice_content';
import WaveDivider from '../components/WaveDivider';

const About: React.FC = () => {
    const { title, description, images } = riceContent.about;

    return (
        <div className="pt-24 min-h-screen bg-bg-paper">
            <SectionWrapper>
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl mb-6 text-mud font-heading font-bold">{title}</h1>
                    <div className="w-24 h-1 bg-tiger mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-6 text-lg text-text-secondary leading-relaxed font-heading">
                        {description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className={`rounded-lg overflow-hidden shadow-soft ${index % 2 === 1 ? 'mt-8' : ''}`}
                            >
                                <img
                                    src={img}
                                    alt={`About Rice ${index + 1}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            <WaveDivider />
        </div>
    );
};

export default About;
