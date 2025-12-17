import React, { useEffect, useState, useRef } from 'react';

interface Footprint {
    id: number;
    x: number;
    y: number;
    rotation: number;
    opacity: number;
}

const TigerCursor: React.FC = () => {
    const [footprints, setFootprints] = useState<Footprint[]>([]);
    const lastPositionRef = useRef({ x: 0, y: 0 });
    const footprintIdRef = useRef(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const dx = clientX - lastPositionRef.current.x;
            const dy = clientY - lastPositionRef.current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Threshold for new footprint (e.g., every 40px)
            if (distance > 40) {
                const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90; // +90 to align paw forward

                const newFootprint: Footprint = {
                    id: footprintIdRef.current++,
                    x: clientX,
                    y: clientY,
                    rotation: angle,
                    opacity: 1,
                };

                setFootprints((prev) => [...prev, newFootprint]);
                lastPositionRef.current = { x: clientX, y: clientY };

                // Remove footprint after delay
                setTimeout(() => {
                    setFootprints((prev) => prev.filter((fp) => fp.id !== newFootprint.id));
                }, 1000);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {footprints.map((fp) => (
                <div
                    key={fp.id}
                    className="absolute w-6 h-6 transition-opacity duration-1000 ease-out"
                    style={{
                        left: fp.x,
                        top: fp.y,
                        transform: `translate(-50%, -50%) rotate(${fp.rotation}deg)`,
                        opacity: fp.opacity,
                        animation: 'fadeOut 1s forwards',
                    }}
                >
                    {/* Tiger Paw SVG */}
                    <svg
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="text-tiger/60"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M178.6 153.1c-22.9 13.7-54.4 10.8-70.6-6.6-16.1-17.4-10.5-44.6 12.4-58.3 22.9-13.7 54.4-10.8 70.6 6.6 16.1 17.4 10.5 44.6-12.4 58.3zm-39.8 288.5c-39.7 14.8-82.3-6.9-95.2-48.4-12.9-41.5 8.2-83.9 47.9-98.7 39.7-14.8 82.3 6.9 95.2 48.4 12.9 41.5-8.2 83.9-47.9 98.7zm234.6-288.5c22.9 13.7 54.4 10.8 70.6-6.6 16.1-17.4 10.5-44.6-12.4-58.3-22.9-13.7-54.4-10.8-70.6 6.6-16.1 17.4-10.5 44.6 12.4 58.3zm39.8 288.5c39.7 14.8 82.3-6.9 95.2-48.4 12.9-41.5-8.2-83.9-47.9-98.7-39.7-14.8-82.3 6.9-95.2 48.4-12.9 41.5 8.2 83.9 47.9 98.7zM256 208c-61.9 0-112 50.1-112 112 0 61.9 50.1 112 112 112s112-50.1 112-112c0-61.9-50.1-112-112-112z" />
                    </svg>
                </div>
            ))}
            <style>{`
        @keyframes fadeOut {
          0% { opacity: 0.8; transform: translate(-50%, -50%) rotate(var(--tw-rotate)) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) rotate(var(--tw-rotate)) scale(0.5); }
        }
      `}</style>
        </div>
    );
};

export default TigerCursor;
