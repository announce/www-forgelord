export type ITeamMember = {
    name: string;
    role: string;
    image: string;
    quote: string;
};

export const TeamMember = ({ name, quote, role, image }: ITeamMember) => {
    return (
        <div className="card bg-base-100 group cursor-pointer shadow transition-all duration-300 hover:shadow-md">
            <div className="bg-base-200/40 flex justify-center pt-3">
                <img
                    src={image}
                    alt={name}
                    className="size-40 grayscale-100 transition-all duration-300 group-hover:grayscale-0"
                />
            </div>
            <div className="p-4">
                <p className="text-base-content/80 font-mono text-xs tracking-wide uppercase">{role}</p>
                <p className="text-lg font-medium">{name}</p>
                <p className="text-base-content/80 mt-1 text-sm">{quote}</p>
            </div>
        </div>
    );
};
