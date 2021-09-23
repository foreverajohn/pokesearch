import * as React from "react"

function SvgComponent2({ width, height, color1, color2 }) {
    return (
        <svg
            width={width}
            height={height}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: 'absolute', zIndex: 1, bottom: 0, objectFit: 'contain' }}
        >
            <path
                d="M0 1004h1441.5V0C965.314 518.626 643.677 571.095 0 359.5V1004z"
                fill="#62E18E"
            />
        </svg>
    )
}

export default SvgComponent2