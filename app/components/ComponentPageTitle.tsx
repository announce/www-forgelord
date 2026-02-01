type IPageTitle = {
    label?: string;
    title: string;
    description: string;
    centered?: boolean;
};

export const ComponentPageTitle = ({ title, description, label, centered = true }: IPageTitle) => {
    return (
        <div className={`${centered ? "text-center" : ""}`}>
            <div className="badge bg-base-100 badge-outline border-base-300 badge-sm font-mono">{label}</div>
            <p className="mt-1 text-2xl font-semibold sm:text-3xl">{title}</p>
            <div className="mt-2 flex items-center justify-center">
                <p className="text-base-content/80 max-w-lg max-sm:text-sm">{description}</p>
            </div>
        </div>
    );
};
