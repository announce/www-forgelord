import React from "react";

import { ComponentPageTitle } from "@/components/ComponentPageTitle";
import { MetaData } from "@/components/MetaData";

import { Effect1 } from "./Effect1";
import { Effect2 } from "./Effect2";
import { Effect3 } from "./Effect3";
import { Effect4 } from "./Effect4";
import { Effect5 } from "./Effect5";
import { Effect6 } from "./Effect6";
import { Effect7 } from "./Effect7";

const EffectExamplesPage = () => {
    return (
        <>
            <MetaData title="Motion Effects - Interactions" />
            <ComponentPageTitle
                label="Interactions"
                title="Motion Effects"
                description="Discover stunning motion effects designed to enhance user engagement and bring your startup’s
                    visuals to life"
            />
            <p className="mt-16 mb-12 text-center text-xl font-medium sm:mt-24 sm:mb-20">Effect - 1</p>
            <Effect1 />
            <p className="mt-16 mb-12 text-center text-xl font-medium sm:mt-32 sm:mb-20">Effect - 2</p>
            <Effect2 />
            <p className="mt-16 mb-12 text-center text-xl font-medium sm:mt-32 sm:mb-20">Effect - 3</p>
            <Effect3 />
            <p className="mt-16 mb-12 text-center text-xl font-medium sm:mt-32 sm:mb-20">Effect - 4</p>
            <Effect4 />
            <p className="mt-16 mb-12 text-center text-xl font-medium sm:mt-32 sm:mb-20">Effect - 5</p>
            <Effect5 />
            <p className="mt-16 mb-12 text-center text-xl font-medium sm:mt-32 sm:mb-20">Effect - 6</p>
            <Effect6 />
            <p className="mt-16 mb-12 text-center text-xl font-medium sm:mt-32 sm:mb-20">Effect - 7</p>
            <Effect7 />
        </>
    );
};

export default EffectExamplesPage;
