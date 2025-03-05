import { keyframes } from "@emotion/react";

const pulseKeyframes = keyframes`
    0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
    80% { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
`;
const PulseAnimation = `${pulseKeyframes} 1.5s ease-out infinite`;

export { PulseAnimation };
