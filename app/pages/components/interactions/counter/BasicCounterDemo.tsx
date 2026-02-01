import { useEffect, useRef } from "react";

import { NumberCounter } from "./NumberCounter";

export const BasicCounterDemo = () => {
    const counterRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        if (counterRef.current) {
            new NumberCounter(counterRef.current);
        }
    }, [counterRef]);

    return (
        <div className="flex flex-col items-center gap-1">
            <span data-target="10" ref={counterRef} className="font-mono text-3xl font-medium">
                0
            </span>
            <p className="text-base-content/80 text-sm uppercase">Users</p>
        </div>
    );
};
