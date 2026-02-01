import { useEffect, useRef } from "react";

import { NumberCounter } from "./NumberCounter";

export const OnViewCounterDemo = () => {
    const counterRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        if (counterRef.current) {
            new NumberCounter(counterRef.current);
        }
    }, [counterRef]);

    return (
        <div className="flex flex-col items-center gap-1">
            <p className="font-mono text-3xl font-medium">
                <span data-target="25" data-duration="2500" ref={counterRef} data-trigger-on-view>
                    0
                </span>
            </p>
            <p className="text-base-content/50 text-sm font-medium uppercase">Downloads</p>
        </div>
    );
};
