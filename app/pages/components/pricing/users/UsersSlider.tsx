import { useState } from "react";

export const UsersSlider = () => {
    const [members, setMembers] = useState(24);
    return (
        <div>
            <input
                type="range"
                min="1"
                max="101"
                value={members}
                onChange={(e) => setMembers(Number.parseInt(e.target.value))}
                className={`range range-xs w-full ${members > 100 ? "range-secondary" : members > 20 ? "range-primary" : ""}`}
            />
            <div className="flex justify-between gap-3">
                <p className="max-sm:text-sm">
                    <span>{members > 100 ? "100+" : members}</span> Users
                </p>
                <p className="text-sm">
                    Suggestion:
                    <span
                        className={`ms-1 font-medium ${members > 100 ? "text-secondary" : members > 20 ? "text-primary" : ""}`}>
                        {members > 100 ? "Enterprise" : members > 20 ? "Pro" : "Basic"}
                    </span>
                </p>
            </div>
        </div>
    );
};
