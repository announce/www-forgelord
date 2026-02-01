export const ChatInvitationEngagementDemo = () => {
    return (
        <div className="border-base-300 rounded-box flex max-w-sm items-start gap-3 border p-3 sm:p-4">
            <div className="mask mask-squircle bg-base-200 w-10 min-w-10 sm:w-12 sm:min-w-12">
                <img src="/images/avatars/2.png" alt="avatar" />
            </div>
            <div>
                <p className="font-medium max-sm:text-sm">Need help? Chat with us now!</p>
                <p className="text-base-content/80 max-sm:text-sm">Our team is here to help in real time.</p>
                <div className="mt-4 flex items-center gap-1">
                    <button className="btn btn-sm btn-primary gap-2">
                        <span className="iconify lucide--messages-square size-4"></span>
                        Chat Now
                    </button>
                    <button className="btn btn-sm btn-ghost">Maybe Later</button>
                </div>
            </div>
        </div>
    );
};
