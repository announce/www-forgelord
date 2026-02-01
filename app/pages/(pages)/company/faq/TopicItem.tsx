export type ITopicItem = {
    icon: string;
    title: string;
    description: string;
};

export const TopicItem = ({ title, description, icon }: ITopicItem) => {
    return (
        <div className="card group bg-base-100 cursor-pointer shadow transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="p-4">
                <div className="mask mask-squircle bg-base-200 group-hover:bg-primary/10 group-hover:text-primary inline-flex items-center p-2 transition-all">
                    <span className={`iconify ${icon} size-5`}></span>
                </div>
                <p className="mt-3 font-medium sm:text-lg">{title}</p>
                <p className="text-base-content/80 line-clamp-2 text-sm">{description}</p>
            </div>
        </div>
    );
};
