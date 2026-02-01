import { useEffect, useRef } from "react";

import { NumberCounter } from "./NumberCounter";

export const StatsCounterDemo = () => {
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
            <div className="flex flex-col items-center justify-center gap-1">
                <p className="text-3xl font-semibold">
                    <span data-target="5" ref={counter1Ref} data-trigger-on-view>
                        0
                    </span>
                    M+
                </p>
                <p className="text-base-content/60 max-sm:text-sm">Users Worldwide</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
                <p className="text-3xl font-semibold">
                    <span data-target="100" ref={counter2Ref} data-trigger-on-view>
                        0
                    </span>
                    K+
                </p>
                <p className="text-base-content/60 max-sm:text-sm">Companies Onboard</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
                <p className="text-3xl font-semibold">
                    <span data-target="50" ref={counter3Ref} data-trigger-on-view>
                        0
                    </span>
                    +
                </p>
                <p className="text-base-content/60 max-sm:text-sm">Integrations Available</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
                <p className="text-3xl font-semibold">
                    <span data-target="10" ref={counter4Ref} data-trigger-on-view>
                        0
                    </span>
                    B+
                </p>
                <p className="text-base-content/60 max-sm:text-sm">Automated Tasks</p>
            </div>
        </div>
    );
};
