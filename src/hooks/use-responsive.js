"use client";
import { useEffect, useRef, useState } from "react";
/**
 * Hook to detect if the current viewport matches a mobile breakpoint
 * @param breakpoint - The breakpoint to check (default: 768px)
 * @returns boolean indicating if viewport is mobile
 */
export function useMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };
        // Check on mount
        checkMobile();
        // Add event listener
        window.addEventListener("resize", checkMobile);
        // Cleanup
        return () => window.removeEventListener("resize", checkMobile);
    }, [breakpoint]);
    return isMobile;
}
/**
 * Hook for custom media queries
 * @param query - Media query string
 * @returns boolean indicating if query matches
 */
export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [matches, query]);
    return matches;
}
/**
 * Hook for managing collapsible state
 * @param initialState - Initial collapsed state
 * @returns [isCollapsed, toggle, setCollapsed]
 */
export function useCollapse(initialState = false) {
    const [isCollapsed, setIsCollapsed] = useState(initialState);
    const toggle = () => setIsCollapsed((prev) => !prev);
    const collapse = () => setIsCollapsed(true);
    const expand = () => setIsCollapsed(false);
    return {
        isCollapsed,
        toggle,
        collapse,
        expand,
        setIsCollapsed,
    };
}
/**
 * Hook for window size tracking
 * @returns { width, height }
 */
export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 0,
        height: typeof window !== "undefined" ? window.innerHeight : 0,
    });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}
/**
 * Hook for scroll position tracking
 * @returns { x, y }
 */
export function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState({
        x: typeof window !== "undefined" ? window.scrollX : 0,
        y: typeof window !== "undefined" ? window.scrollY : 0,
    });
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition({
                x: window.scrollX,
                y: window.scrollY,
            });
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return scrollPosition;
}
/**
 * Hook for responsive breakpoints
 * @returns { isMobile, isTablet, isDesktop }
 */
export function useResponsive() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
    const isDesktop = useMediaQuery("(min-width: 1025px)");
    return { isMobile, isTablet, isDesktop };
}
/**
 * Hook for keyboard event handling
 * @param targetKey - Key to listen for
 * @param handler - Callback when key is pressed
 */
export function useKeyPress(targetKey, handler) {
    useEffect(() => {
        const downHandler = (event) => {
            if (event.key === targetKey) {
                handler();
            }
        };
        window.addEventListener("keydown", downHandler);
        return () => window.removeEventListener("keydown", downHandler);
    }, [targetKey, handler]);
}
/**
 * Hook for boolean state toggle
 * @param initialValue - Initial boolean value
 * @returns [value, toggle, setValue]
 */
export function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);
    const toggle = () => setValue((prev) => !prev);
    return [value, toggle, setValue];
}
/**
 * Hook for tracking previous value
 * @param value - Current value
 * @returns Previous value
 */
export function usePrevious(value) {
    const ref = useRef(value);
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
/**
 * Hook for debounced values
 * @param value - Value to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced value
 */
export function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => clearTimeout(handler);
    }, [value, delay]);
    return debouncedValue;
}
/**
 * Hook for throttled callbacks
 * @param callback - Function to throttle
 * @param delay - Delay in milliseconds
 * @returns Throttled function
 */
export function useThrottle(callback, delay = 500) {
    const lastRun = useState(Date.now());
    return ((...args) => {
        if (Date.now() - lastRun[0] >= delay) {
            callback(...args);
            lastRun[1](Date.now());
        }
    });
}
