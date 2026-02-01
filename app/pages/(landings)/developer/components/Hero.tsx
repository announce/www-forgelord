import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });
    const rotate = useTransform(scrollYProgress, [0, 1], [10, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

    return (
        <div className="relative" id="hero">
            <img src="/images/developer/hero-gradient.png" alt="" className="absolute z-1 opacity-40 dark:opacity-80" />
            <div
                className="relative z-2 container pt-24 pb-8 md:pt-28 lg:pt-32 lg:pb-16 xl:pt-40 xl:pb-20 2xl:pt-56 2xl:pb-24"
                ref={containerRef}>
                <div className="flex items-center justify-center">
                    <div className="max-w-200 text-center">
                        <div className="flex justify-center">
                            <div className="bg-base-200/20 border-base-300/80 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
                                <span className="iconify lucide--code-2 size-4"></span>
                                AI-Powered Coding
                            </div>
                        </div>
                        <p className="mt-3 text-2xl leading-tight font-extrabold transition-all duration-1000 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl starting:scale-105 starting:blur-sm">
                            Write Less. Build{" "}
                            <span className="relative inline">
                                More.
                                <span className="bg-primary text-primary-content rounded-box absolute end-0 top-0 rotate-12 px-1.5 py-0 text-sm font-normal max-xl:hidden 2xl:top-2">
                                    Unlimited
                                </span>
                            </span>
                        </p>
                        <p className="text-2xl leading-tight font-extrabold transition-all duration-1000 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl starting:scale-105 starting:blur-sm">
                            Let AI Handle the Code
                        </p>
                        <p className="text-base-content/80 mt-5 sm:text-lg">
                            Turn ideas into production-ready code with AI. From pair programming to full project
                            generation, build faster and smarter—effortlessly.
                        </p>
                        <div className="mt-10 flex justify-center gap-3">
                            <div>
                                <label className="input bg-base-200/20 border-base-300/80 w-44 rounded-full px-1.5 !outline-0 sm:w-70">
                                    <div className="border-base-300/80 rounded-full border p-1.5">
                                        <span className="iconify lucide--edit-3 text-base-content/80 block size-4"></span>
                                    </div>
                                    <input name="prompt" placeholder="Create UI using Nexus Dashboard" type="text" />
                                </label>
                                <p className="text-base-content/50 mt-0.5 text-start text-sm italic">
                                    150% better than ChaiGPT
                                </p>
                            </div>
                            <button className="btn btn-neutral gap-2 rounded-full">
                                <span className="iconify lucide--wand-2"></span>
                                Create
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-4 [perspective:1000px]">
                    <motion.div
                        style={{
                            rotateX: rotate,
                            scale,
                        }}>
                        <div className="border-base-300/50 rounded-box bg-base-200/20 w-full border p-3">
                            <img
                                src="/images/developer/hero-dashboard-light.jpg"
                                className="h-full rounded-sm dark:hidden"
                                alt="Dashboard"
                            />
                            <img
                                src="/images/developer/hero-dashboard-dark.jpg"
                                className="hidden h-full rounded-sm dark:block"
                                alt="Dashboard"
                            />
                        </div>
                    </motion.div>
                </div>
                <div className="mt-6 text-center">
                    <div className="border-base-300/60 bg-base-200/20 hover:bg-base-200/40 inline-flex cursor-pointer items-center gap-3 rounded-full border px-3.5 py-1 transition-all lg:gap-6">
                        <div className="text-base-content/60 hover:text-base-content flex items-center gap-2 transition-all">
                            <span className="iconify lucide--code size-4"></span>
                            <span>Code</span>
                        </div>
                        <div className="bg-base-200 size-1.5 rounded-full"></div>
                        <div className="text-base-content/60 hover:text-base-content flex items-center gap-2 transition-all">
                            <span className="iconify lucide--upload-cloud size-4"></span>
                            <span>Deploy</span>
                        </div>
                        <div className="bg-base-200 size-1.5 rounded-full"></div>
                        <div className="text-base-content/60 hover:text-base-content flex items-center gap-2 transition-all">
                            <span className="iconify lucide--settings size-4"></span>
                            <span>Optimize</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tooltip absolute start-60 top-60 z-2 max-xl:hidden 2xl:start-100">
                <div className="tooltip-content">
                    <div className="px-1 text-base font-medium tracking-normal">Typescript</div>
                </div>
                <div className="bg-base-200/20 border-base-300/80 rounded-box cursor-pointer border p-1 transition-all hover:scale-110">
                    <img src="/images/brand-logo/typescript.svg" className="h-6 rounded-sm" alt="Typescript" />
                </div>
            </div>
            <div className="tooltip absolute start-40 top-110 z-2 max-xl:hidden 2xl:top-120">
                <div className="tooltip-content">
                    <div className="px-1 text-base font-medium tracking-normal">Intellij IDEA</div>
                </div>
                <div className="bg-base-200/20 border-base-300/80 rounded-box cursor-pointer border p-2 transition-all hover:scale-110">
                    <img src="/images/brand-logo/intellij.svg" className="h-8 rounded-sm" alt="Intellij" />
                </div>
            </div>
            <div className="tooltip absolute start-20 top-180 z-2 max-xl:hidden 2xl:top-200">
                <div className="tooltip-content">
                    <div className="px-1 text-base font-medium tracking-normal">Vue</div>
                </div>
                <div className="bg-base-200/20 border-base-300/80 rounded-box cursor-pointer border p-1.5 transition-all hover:scale-110">
                    <img src="/images/brand-logo/vue.svg" className="h-7 rounded-sm" alt="Vue" />
                </div>
            </div>
            <div className="tooltip absolute end-60 top-60 z-2 max-xl:hidden 2xl:end-100">
                <div className="tooltip-content">
                    <div className="px-1 text-base font-medium tracking-normal">React</div>
                </div>
                <div className="bg-base-200/20 border-base-300/80 rounded-box cursor-pointer border p-2 transition-all hover:scale-110">
                    <img src="/images/brand-logo/react.svg" className="h-8 rounded-sm" alt="React" />
                </div>
            </div>

            <div className="tooltip absolute end-40 top-110 z-2 max-xl:hidden 2xl:top-120">
                <div className="tooltip-content">
                    <div className="px-1 text-base font-medium tracking-normal">VS Code</div>
                </div>
                <div className="bg-base-200/20 border-base-300/80 rounded-box cursor-pointer border p-1.5 transition-all hover:scale-110">
                    <img src="/images/brand-logo/vs-code.svg" className="h-7 rounded-sm" alt="VS Code" />
                </div>
            </div>

            <div className="tooltip absolute end-20 top-180 z-2 max-xl:hidden 2xl:top-200">
                <div className="tooltip-content">
                    <div className="px-1 text-base font-medium tracking-normal">Python</div>
                </div>
                <div className="bg-base-200/20 border-base-300/80 rounded-box cursor-pointer border p-1 transition-all hover:scale-110">
                    <img src="/images/brand-logo/python.svg" className="h-6 rounded-sm" alt="Python" />
                </div>
            </div>
        </div>
    );
};
