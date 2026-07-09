"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollState {
    isHidden: boolean;
    isScrolled: boolean;
}

export function useScrollDirection(threshold = 80): ScrollState {
    const [state, setState] = useState<ScrollState>({ isHidden: false, isScrolled: false });
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        lastScrollY.current = window.scrollY;

        const update = () => {
            const currentY = window.scrollY;
            const isScrolled = currentY > 8;
            const scrolledPastThreshold = currentY > threshold;
            const goingDown = currentY > lastScrollY.current;

            setState({
                isHidden: scrolledPastThreshold && goingDown,
                isScrolled,
            });

            lastScrollY.current = currentY;
            ticking.current = false;
        };

        const onScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(update);
                ticking.current = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [threshold]);

    return state;
}