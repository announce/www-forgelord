export const ReserveCTADemo = () => {
    return (
        <div className="flex items-center gap-2 sm:gap-3">
            <button className="btn btn-primary gap-2">
                <span className="iconify lucide--calendar-plus size-4"></span>
                <p>Book Your Spot</p>
            </button>
            <p className="font-medium text-orange-500 italic max-sm:text-sm">Only 7 spots left</p>
        </div>
    );
};
