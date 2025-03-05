import { keyframes } from "@emotion/react";

const horizontalSlideKeyframes = keyframes`
	0% {
		transform: translateX(0);
	}

    100% {
        transform: translateX(calc(-100% - 10.2rem));
	}
`;
const HSlider = `${horizontalSlideKeyframes} 15s linear infinite`;

export { HSlider };
