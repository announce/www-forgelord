import { useEffect, useRef } from "react";

import { NumberCounter } from "./NumberCounter";

export const EaseCounterDemo = () => {
    const counter1Ref = useRef<HTMLSpanElement | null>(null);
    const counter2Ref = useRef<HTMLSpanElement | null>(null);
    const counter3Ref = useRef<HTMLSpanElement | null>(null);
    const counter4Ref = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        if (counter1Ref.current) {
            new NumberCounter(counter1Ref.current);
        }
    }, [counter1Ref]);

    useEffect(() => {
        if (counter2Ref.current) {
            new NumberCounter(counter2Ref.current);
        }
    }, [counter2Ref]);

    useEffect(() => {
        if (counter3Ref.current) {
            new NumberCounter(counter3Ref.current);
        }
    }, [counter3Ref]);

    useEffect(() => {
        if (counter4Ref.current) {
            new NumberCounter(counter4Ref.current);
        }
    }, [counter4Ref]);

    return (
        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4 lg:gap-6">
            <div className="flex flex-col items-center gap-1">
                <p className="text-base-content/80 text-sm uppercase">Linear</p>
                <span
                    data-target="20"
                    data-duration="10000"
                    data-easing="linear"
                    ref={counter1Ref}
                    className="font-mono text-3xl font-medium">
                    0
                </span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <p className="text-base-content/80 text-sm uppercase">In Quad</p>
                <span
                    data-target="20"
                    data-duration="10000"
                    data-easing="easeInQuad"
                    ref={counter2Ref}
                    className="font-mono text-3xl font-medium">
                    0
                </span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <p className="text-base-content/80 text-sm uppercase">Out Quad</p>
                <span
                    data-target="20"
                    data-duration="10000"
                    data-easing="easeOutQuad"
                    ref={counter3Ref}
                    className="font-mono text-3xl font-medium">
                    0
                </span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <p className="text-base-content/80 text-sm uppercase">In Out Quad</p>
                <span
                    data-target="20"
                    data-duration="10000"
                    data-easing="easeInOutQuad"
                    ref={counter4Ref}
                    className="font-mono text-3xl font-medium">
                    0
                </span>
            </div>
        </div>
    );
};
