import { useEffect, useRef } from "react";

function useDebounce(callback: () => void, delay: number) {
	const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (debounceTimeoutRef.current) {
			clearTimeout(debounceTimeoutRef.current);
		}

		debounceTimeoutRef.current = setTimeout(() => {
			callback();
		}, delay);
	});
}

export default useDebounce;
