import * as React from "react"

function SvgComponent1({ width, height, color1, color2 }) {
    return (
        <svg
            width={1440}
            height={821}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: 'absolute', zIndex: 2, bottom: 0, objectFit: 'contain' }}
        >
            <g filter="url(#prefix__filter0_d)">
                <path
                    d="M-50 941h1540V120c-73.46 7.86-243.23 76.741-334.6 289.386-114.21 265.807-182.308 237.404-600.553 204.179C220.251 586.984 12.201 676.801-50 725.032V941z"
                    fill="url(#prefix__paint0_linear)"
                />
            </g>
            <defs>
                <linearGradient
                    id="prefix__paint0_linear"
                    x1={720}
                    y1={120}
                    x2={720}
                    y2={941}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#8CF691" />
                    <stop offset={1} stopColor="#80EF91" />
                </linearGradient>
                <filter
                    id="prefix__filter0_d"
                    x={-134}
                    y={0}
                    width={1708}
                    height={989}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={-36} />
                    <feGaussianBlur stdDeviation={42} />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

export default SvgComponent1
