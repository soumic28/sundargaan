import React from 'react';


interface WaveDividerProps {
    className?: string;
    fill?: string;
}

const WaveDivider: React.FC<WaveDividerProps> = ({
    className = "absolute -top-[1px] left-0 w-full overflow-hidden leading-[0] rotate-180 z-10",
    fill = "fill-bg-paper"
}) => {
    return (
        <div className={className}>
            <svg
                className="relative block w-[200%] h-[60px] sm:h-[100px] md:h-[150px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <defs>
                    <path
                        id="wave-path"
                        d="M0,60 C150,60 150,0 300,0 C450,0 450,60 600,60 C750,60 750,0 900,0 C1050,0 1050,60 1200,60 V120 H0 V60Z"
                    />
                </defs>
                <g>
                    <use
                        xlinkHref="#wave-path"
                        x="0"
                        y="5"
                        className={`${fill} opacity-50 animate-wave-slow`}
                    />
                    <use
                        xlinkHref="#wave-path"
                        x="0"
                        y="0"
                        className={`${fill} opacity-30 animate-wave-medium`}
                    />
                    <use
                        xlinkHref="#wave-path"
                        x="0"
                        y="-5"
                        className={`${fill} animate-wave-fast`}
                    />
                </g>
            </svg>
        </div>
    );
};

export default WaveDivider;
