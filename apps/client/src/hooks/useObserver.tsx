import { useEffect, useRef, RefObject } from 'react';

/**
 * Configuration
 * */
const DEFAULT_OBSERVER_CONFIG: IntersectionObserverInit = {
	root: null,
	rootMargin: '50px',
	threshold: 0.1
};
/**
 * Core
 * */
/**
 * @description Returns a reference that can be attached to a DOM element for observation.
 *
 * The function:
 * - Creates an empty React ref
 * - Sets up observation on the ref's target element
 * - Returns the ref for the user to attach to a specific DOM element
 * - Disconnects the observer when the component unmounts
 *
 * @param {IntersectionObserverCallback} observerCallback - callback function for the observer doesn't forget to wrap it with useCallback.
 * @param {IntersectionObserverInit} observerConfig -use to configure observer object
 * @returns {React.RefObject<HTMLElement>} The React ref object to be attached to a DOM element
 * */

export const useObserver = (
	observerCallback: IntersectionObserverCallback,
	observerConfig: IntersectionObserverInit = DEFAULT_OBSERVER_CONFIG
): RefObject<HTMLElement | null> => {
	const ref = useRef<HTMLElement>(null);
	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(observerCallback, observerConfig);
		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [observerCallback, observerConfig]);
	return ref;
};