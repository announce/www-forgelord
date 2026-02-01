export type IJobItem = {
    title: string;
    details: string;
    location?: string;
    type: string;
    salary?: string;
    positions?: number;
};

export const JobItem = ({ title, details, location, type, salary, positions }: IJobItem) => {
    return (
        <div className="card card-border bg-base-100 group hover:border-base-300 cursor-pointer p-4 px-5 transition-all">
            <p className="font-medium sm:text-lg">{title}</p>
            <p className="text-base-content/80 max-sm:text-sm">{details}</p>
            <div className="text-base-content/60 mt-4 flex items-center gap-2 max-md:flex-col max-md:items-start md:mt-6 md:gap-4">
                {location && (
                    <div className="flex items-center gap-2">
                        <span className="iconify lucide--map-pin size-4"></span>
                        <p className="text-sm">{location}</p>
                    </div>
                )}
                <div className="flex items-center gap-2">
                    <span className="iconify lucide--clock size-4"></span>
                    <p className="text-sm">{type}</p>
                </div>
                {salary && (
                    <div className="flex items-center gap-2">
                        <span className="iconify lucide--circle-dollar-sign size-4"></span>
                        <p className="text-sm">{salary}</p>
                    </div>
                )}
                {positions && (
                    <div className="ms-auto flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="iconify lucide--users size-4"></span>
                            <p className="text-sm">{positions} spots</p>
                        </div>
                        <div className="bg-base-200 size-1.5 rounded-full"></div>
                        <div className="group-hover:text-base-content flex items-center gap-1 transition-all max-sm:text-sm">
                            <span>Apply</span>
                            <span className="iconify lucide--arrow-up-right"></span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
