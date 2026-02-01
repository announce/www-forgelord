import { Link } from "react-router";

export const Actions = () => {
    return (
        <div className="relative">
            <div
                className="group/section relative z-10 container scroll-mt-12 py-8 md:py-12 lg:py-16 2xl:py-28"
                id="actions">
                <div className="flex items-center justify-center">
                    <div className="bg-base-200/40 border-base-300/50 shadow-base-300/10 text-base-content/60 group-hover/section:text-base-content rounded-full border px-2.5 py-0.5 font-mono text-xs shadow-inner transition-all duration-300">
                        AI in Action
                    </div>
                </div>

                <p className="mt-2 text-center text-3xl font-semibold">See What’s Possible</p>
                <div className="mt-2 flex justify-center text-center">
                    <p className="text-base-content/80 max-w-lg">
                        From concept to deployment, experience real-world AI-driven development
                    </p>
                </div>
                <div className="mt-8 grid gap-8 lg:mt-12 xl:grid-cols-2 2xl:mt-16">
                    <div className="rounded-box bg-base-100 border-base-300/60 hover:border-base-300 border p-6 transition-all">
                        <div className="relative h-96 overflow-hidden">
                            <div className="to-base-100 via-base-100/90 pointer-events-none absolute bottom-0 z-1 h-40 w-full cursor-auto bg-gradient-to-b from-transparent via-[80%]"></div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="border-base-300/60 rounded-box hover:border-base-300 border transition-all">
                                    <div className="bg-base-200/40 border-base-300/40 flex items-center gap-3 border-b px-4 py-3 text-lg font-medium">
                                        <span className="iconify lucide--monitor size-4"></span>
                                        Frontend
                                    </div>
                                    <div className="divide-base-300/40 *:hover:bg-base-200/20 divide-y *:cursor-pointer *:transition-all">
                                        <div className="flex items-center justify-between p-3">
                                            <p>Create React App</p>
                                            <span className="iconify lucide--chevron-right text-base-content/60 size-4"></span>
                                        </div>
                                        <div className="flex items-center justify-between p-3">
                                            <p>Vue</p>
                                            <span className="iconify lucide--chevron-right text-base-content/60 size-4"></span>
                                        </div>
                                        <div className="flex items-center justify-between p-3">
                                            <p>SvelteKit</p>
                                            <span className="iconify lucide--chevron-right text-base-content/60 size-4"></span>
                                        </div>
                                        <div className="flex items-center justify-between p-3">
                                            <p>Next.js</p>
                                            <span className="iconify lucide--chevron-right text-base-content/60 size-4"></span>
                                        </div>
                                        <div className="flex items-center justify-between p-3">
                                            <p>Angular</p>
                                            <span className="iconify lucide--chevron-right text-base-content/60 size-4"></span>
                                        </div>
                                        <div className="flex items-center justify-between p-3">
                                            <p>Typescript</p>
                                            <span className="iconify lucide--chevron-right text-base-content/60 size-4"></span>
                                        </div>
                                        <div className="flex items-center justify-between p-3">
                                            <p>Solid</p>
                                            <span className="iconify lucide--chevron-right size-4"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-base-300/60 rounded-box hover:border-base-300 border transition-all">
                                    <div className="bg-base-200/40 border-base-300/40 flex items-center gap-3 border-b px-4 py-3 text-lg font-medium">
                                        <span className="iconify lucide--server size-4"></span>
                                        Backend
                                    </div>
                                    <div className="divide-base-300/40 *:hover:bg-base-200/20 divide-y *:cursor-pointer *:transition-all">
                                        <div className="flex items-center justify-between p-3">
                                            <p>Node.js</p>
                                            <span className="iconify lucide--chevron-right text-base-content/60 size-4"></span>
                                        </div>
                                        <div className="flex items-center justify-between p-3">
                                            <p>Django</p>
                                            <span className="iconify lucide--chevron-right text-base-content/60 size-4"></span>
                                        </div>
                                        <div className="flex items-center justify-between p-3">
                                            <p>Laravel</p>
                                            <span className="iconify lucide--chevron-right text-base-content/60 size-4"></span>
                                        </div>
                                        <div className="flex items-center justify-between p-3">
                                            <p>PostgreSQL</p>
                                            <span className="iconify lucide--chevron-right text-base-content/60 size-4"></span>
                                        </div>
                                        <div className="flex items-center justify-between p-3">
                                            <p>Firebase</p>
                                            <span className="iconify lucide--chevron-right text-base-content/60 size-4"></span>
                                        </div>
                                        <div className="flex items-center justify-between p-3">
                                            <p>MongoDB</p>
                                            <span className="iconify lucide--chevron-right text-base-content/60 size-4"></span>
                                        </div>
                                        <div className="flex items-center justify-between p-3">
                                            <p>MongoDB</p>
                                            <span className="iconify lucide--chevron-right size-4"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 text-xl font-medium">Build with Your Tech Stack</p>
                        <p className="text-base-content/80 mt-1 text-sm">
                            Select from a vast library of frameworks, databases, and tools—AI adapts to your stack,
                            ensuring a seamless development experience from the ground up
                        </p>
                    </div>
                    <div className="rounded-box bg-base-100 border-base-300/60 hover:border-base-300 border p-6 transition-all">
                        <div className="relative h-96 overflow-hidden">
                            <div className="to-base-100 via-base-100/90 pointer-events-none absolute bottom-0 z-2 h-40 w-full cursor-auto bg-gradient-to-b from-transparent via-[80%]"></div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="border-base-300/60 hover:border-base-300 rounded-box border p-3 transition-all">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-base-200 text-base-content/80 rounded-full p-1.5">
                                            <span className="iconify lucide--check block size-3.5"></span>
                                        </div>
                                        <p className="text-lg">Project Initialization</p>
                                    </div>
                                    <ul className="text-base-content/60 ms-2.5 mt-2.5 list-inside list-disc space-y-1 text-sm">
                                        <li>Generate Project Structure</li>
                                        <li>Install Dependencies</li>
                                        <li>Set Up Git Repository</li>
                                    </ul>
                                </div>
                                <div className="border-base-300/60 hover:border-base-300 rounded-box border p-3 transition-all">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-base-200 text-base-content/80 rounded-full p-1.5">
                                            <span className="iconify lucide--check block size-3.5"></span>
                                        </div>
                                        <p className="text-lg">Backend Setup</p>
                                    </div>
                                    <ul className="text-base-content/60 ms-2.5 mt-2.5 list-inside list-disc space-y-1 text-sm">
                                        <li>Generate API Endpoints</li>
                                        <li>Connect Database</li>
                                        <li>Authentication System</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="border-base-300/60 hover:border-base-300 rounded-box mt-4 border p-3 transition-all">
                                <div className="flex items-center gap-3">
                                    <div className="bg-base-200 animate-hourglass rounded-full p-1.5">
                                        <span className="iconify lucide--hourglass block size-3.5"></span>
                                    </div>
                                    <p className="grow text-lg">Frontend Development</p>
                                    <div
                                        aria-label="Radial progress"
                                        className="radial-progress text-primary/80 outline-primary/10 outline-1 -outline-offset-1 [--size:22px] [--value:80]"
                                        role="progressbar"
                                    />
                                </div>
                                <ul className="text-base-content/60 ms-2.5 mt-2.5 list-inside list-disc space-y-1 text-sm">
                                    <li>Generate UI Components</li>
                                    <li>Create Dynamic Pages</li>
                                    <li>Integrate AI-Powered Features</li>
                                </ul>
                            </div>
                            <div className="border-base-300/60 hover:border-base-300 rounded-box mt-4 border p-3 transition-all">
                                <div className="flex items-center gap-3">
                                    <div className="bg-base-200 rounded-full p-1.5">
                                        <span className="iconify lucide--step-forward block size-3.5"></span>
                                    </div>
                                    <p className="grow text-lg">Optimization & Testing</p>
                                    <span className="text-sm">Waiting...</span>
                                </div>
                                <ul className="text-base-content/60 ms-2.5 mt-2.5 list-inside list-disc space-y-1 text-sm">
                                    <li>Optimize Performance</li>
                                    <li>Run Automated Tests</li>
                                    <li>Fix Bugs & Debug</li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-3 text-xl font-medium">From Tasks to Completion</p>
                        <p className="text-base-content/80 mt-1 text-sm">
                            Track AI-powered development in real time—see tasks being processed and the entire project
                            coming together effortlessly.
                        </p>
                    </div>
                    <div className="rounded-box bg-base-100 border-base-300/60 hover:border-base-300 border p-6 transition-all">
                        <div className="relative h-96 overflow-hidden">
                            <div className="to-base-100 via-base-100/90 pointer-events-none absolute bottom-0 z-2 h-40 w-full cursor-auto bg-gradient-to-b from-transparent via-[80%]"></div>
                            <div className="border-base-300/60 hover:border-base-300 rounded-box flex items-center gap-2 border p-3 transition-all">
                                <div className="bg-base-200 text-base-content/80 rounded-full p-1.5">
                                    <span className="iconify lucide--folder block size-3.5"></span>
                                </div>
                                <p className="grow">
                                    <span className="text-lg font-medium">My Portfolio</span>
                                    <span className="text-base-content/60 ms-1 text-sm max-md:hidden">
                                        (Generated 26 min ago)
                                    </span>
                                </p>
                                <select className="select select-sm w-32 max-md:hidden" aria-label="Deployment">
                                    <option disabled>Deployed to</option>
                                    <option>Vercel</option>
                                    <option>Netlify</option>
                                    <option>Github Pages</option>
                                </select>
                                <button className="btn btn-neutral btn-sm">Deploy</button>
                            </div>
                            <div className="border-base-300/60 hover:border-base-300 rounded-box mt-4 border p-3 transition-all">
                                <div className="flex items-center gap-3">
                                    <div className="bg-base-200 rounded-full p-1.5">
                                        <span className="iconify lucide--arrow-up-from-line block size-3.5"></span>
                                    </div>
                                    <p className="grow text-lg font-medium">Deploying to Vercel</p>
                                    <span className="text-base-content/80 text-sm">45s</span>
                                </div>
                                <div className="ms-1 mt-3 space-y-1.5">
                                    <div className="text-base-content/40 flex items-center gap-3 text-sm">
                                        <span className="iconify lucide--check"></span>
                                        <p>
                                            Preparing Build Environment . . . . . . <span className="">[2s]</span>
                                        </p>
                                    </div>
                                    <div className="text-base-content/40 flex items-center gap-3 text-sm">
                                        <span className="iconify lucide--check"></span>
                                        <p>
                                            Building Project . . . . . . <span className="">[32s]</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="iconify lucide--loader animate-[spin_6s_linear_infinite]"></span>
                                        <p>Uploading to Servers . . . . . .</p>
                                    </div>
                                    <div className="text-base-content/60 flex items-center gap-3 text-sm">
                                        <span className="iconify lucide--hourglass"></span>
                                        <p>Finalizing & Verifying</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-base-300/60 hover:border-base-300 rounded-box mt-4 border p-3 transition-all">
                                <div className="flex items-center gap-3">
                                    <div className="bg-base-200 rounded-full p-1.5">
                                        <span className="iconify lucide--activity block size-3.5"></span>
                                    </div>
                                    <p className="grow text-lg font-medium">Stats & Monitoring</p>
                                    <button className="btn btn-xs">Manage</button>
                                </div>
                                <div className="mt-4 grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <p className="text-lg/none font-medium">99.98%</p>
                                        <p className="mt-0.5 text-sm">Server uptime</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-lg/none font-medium">4</p>
                                        <p className="mt-0.5 text-sm">Instances</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-lg/none font-medium">v1.3</p>
                                        <p className="mt-0.5 text-sm">Deployed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 text-xl font-medium">Deploy & Manage with Ease</p>
                        <p className="text-base-content/80 mt-1 text-sm">
                            AI automates deployment, monitors performance, and scales your project—so you can focus on
                            building, not maintaining
                        </p>
                    </div>
                    <div className="rounded-box bg-base-100 border-base-300/60 hover:border-base-300 border p-6 transition-all">
                        <div className="relative h-96 overflow-hidden">
                            <div className="to-base-100 via-base-100/90 pointer-events-none absolute bottom-0 z-2 h-40 w-full cursor-auto bg-gradient-to-b from-transparent via-[80%]"></div>
                            <div className="border-base-300/60 hover:border-base-300 rounded-box flex items-center gap-3 border p-3 transition-all">
                                <div className="bg-base-200 text-base-content/80 rounded-full p-1.5">
                                    <span className="iconify lucide--alert-octagon block size-3.5"></span>
                                </div>
                                <p className="grow">We detected an error</p>
                                <Link to="#" className="link link-hover text-base-content/40 text-xs max-md:hidden">
                                    2 hours ago
                                </Link>
                                <button className="btn btn-xs btn-error">Apply Fix</button>
                            </div>
                            <div className="border-base-300/60 hover:border-base-300 rounded-box mt-4 border p-3 transition-all">
                                <div className="flex items-center gap-3">
                                    <div className="bg-base-200 rounded-full p-1.5">
                                        <span className="iconify lucide--git-branch block size-3.5"></span>
                                    </div>
                                    <p className="grow text-lg font-medium">Manage Versions</p>
                                    <button className="btn btn-xs btn-ghost">Older Versions</button>
                                </div>
                                <div className="mt-5 grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <p className="text-lg/none font-medium">v1.5.0</p>
                                        <p className="text-base-content/60 mt-1 text-sm">Previous</p>
                                        <button className="btn btn-xs mt-1">Rollback</button>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-lg/none font-medium">v1.5.1</p>
                                        <p className="text-base-content/60 mt-1 text-sm">Current</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-lg/none font-medium">v1.5.2</p>
                                        <p className="text-base-content/60 mt-1 text-sm">Fixed</p>
                                        <button className="btn btn-xs btn-primary mt-1">Update</button>
                                    </div>
                                </div>
                            </div>
                            <div className="border-base-300/60 hover:border-base-300 rounded-box mt-4 border p-3 transition-all">
                                <div className="flex items-center gap-3">
                                    <div className="bg-base-200 rounded-full p-1.5">
                                        <span className="iconify lucide--wrench block size-3.5"></span>
                                    </div>
                                    <p className="grow text-lg font-medium">Fixing a Problem</p>
                                    <span className="text-base-content/80 text-sm">58s</span>
                                </div>
                                <div className="ms-1 mt-3 space-y-1.5">
                                    <div className="text-base-content/50 flex items-center gap-3 text-sm">
                                        <span className="iconify lucide--check"></span>
                                        <p>
                                            Analyzes & Applies a Fix . . . . . . <span className="">[18s]</span>
                                        </p>
                                    </div>
                                    <div className="text-base-content/50 flex items-center gap-3 text-sm">
                                        <span className="iconify lucide--check"></span>
                                        <p>
                                            Re-Building Project . . . . . . <span className="">[24s]</span>
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="iconify lucide--loader animate-[spin_6s_linear_infinite]"></span>
                                        <p>Prepares a New Deployment . . . . . .</p>
                                    </div>
                                    <div className="text-base-content/60 flex items-center gap-3 text-sm">
                                        <span className="iconify lucide--hourglass"></span>
                                        <p>Re-direct traffic to new version</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="mt-3 text-xl font-medium">Self-Healing Deployment. Zero Downtime</p>
                        <p className="text-base-content/80 mt-1 text-sm">
                            AI continuously monitors, detects issues, applies fixes, and redeploys—keeping your app
                            stable and always online
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
