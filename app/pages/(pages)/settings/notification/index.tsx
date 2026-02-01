import { MetaData } from "@/components/MetaData";

const ProfileSettingsPage = () => {
    return (
        <>
            <MetaData title="Notification Settings" />
            <div>
                <div className="flex items-center justify-between gap-3">
                    <p className="text-lg font-medium">Notification</p>
                    <div className="breadcrumbs p-0 text-sm max-md:hidden">
                        <ul>
                            <li className="text-base-content/80">General</li>
                            <li>Notification</li>
                        </ul>
                    </div>
                </div>
                <p className="text-base-content/80 mt-4 text-sm font-medium">Email Notifications</p>
                <div className="fieldset mt-4 grid grid-cols-1 gap-4 xl:grid-cols-2">
                    <div className="flex items-center gap-3">
                        <input
                            className="checkbox checkbox-sm"
                            type="checkbox"
                            id="email_product_updates"
                            defaultChecked
                        />
                        <label htmlFor="email_product_updates" className="text-sm">
                            Product Updates
                        </label>
                    </div>
                    <div className="flex items-center gap-3">
                        <input
                            className="checkbox checkbox-sm"
                            type="checkbox"
                            id="email_security_alerts"
                            defaultChecked
                        />
                        <label htmlFor="email_security_alerts" className="text-sm">
                            Security Alerts
                        </label>
                    </div>
                    <div className="flex items-center gap-3">
                        <input className="checkbox checkbox-sm" type="checkbox" id="email_billing_reminders" />
                        <label htmlFor="email_billing_reminders" className="text-sm">
                            Billing & Payment Reminders
                        </label>
                    </div>
                    <div className="flex items-center gap-3">
                        <input className="checkbox checkbox-sm" type="checkbox" id="email_newsletter_promotions" />
                        <label htmlFor="email_newsletter_promotions" className="text-sm">
                            Newsletter & Promotions
                        </label>
                    </div>
                </div>
                <hr className="border-base-300 my-5 border-dashed" />
                <p className="text-base-content/80 text-sm font-medium">Push Notifications</p>
                <div className="fieldset mt-4 grid grid-cols-1 gap-4 xl:grid-cols-2">
                    <div className="flex items-center gap-3">
                        <input
                            className="checkbox checkbox-sm"
                            type="checkbox"
                            id="push_real_time_alerts"
                            defaultChecked
                        />
                        <label htmlFor="push_real_time_alerts" className="text-sm">
                            Real-Time Alerts
                        </label>
                    </div>
                    <div className="flex items-center gap-3">
                        <input className="checkbox checkbox-sm" type="checkbox" id="push_team_updates" defaultChecked />
                        <label htmlFor="push_team_updates" className="text-sm">
                            Team Activity Updates
                        </label>
                    </div>
                    <div className="flex items-center gap-3">
                        <input className="toggle toggle-sm" type="checkbox" id="push_notification_sound" />
                        <label htmlFor="push_notification_sound" className="text-sm">
                            Notification Sound
                        </label>
                    </div>
                    <div className="flex items-center gap-3">
                        <label htmlFor="quiet_hours" className="text-sm text-nowrap">
                            Quiet Hours
                        </label>
                        <select id="quiet_hours" className="select select-bordered select-sm w-48">
                            <option disabled>Select Quiet Hours</option>
                            <option>None</option>
                            <option>Morning (9 AM - 12 PM)</option>
                            <option>Afternoon (1 PM - 4 PM)</option>
                            <option>Evening (6 PM - 9 PM)</option>
                            <option>Night (10 PM - 6 AM)</option>
                        </select>
                    </div>
                </div>
                <hr className="border-base-300 my-5 border-dashed" />
                <p className="text-base-content/80 text-sm font-medium">SMS Notifications</p>
                <div className="fieldset mt-4 grid grid-cols-1 gap-4 xl:grid-cols-2">
                    <div className="flex items-center gap-3">
                        <input
                            className="checkbox checkbox-sm"
                            type="checkbox"
                            id="sms_payment_confirmations"
                            defaultChecked
                        />
                        <label htmlFor="sms_payment_confirmations" className="text-sm">
                            Payment Confirmations
                        </label>
                    </div>
                    <div className="flex items-center gap-3">
                        <input
                            className="checkbox checkbox-sm"
                            type="checkbox"
                            id="sms_security_warnings"
                            defaultChecked
                        />
                        <label htmlFor="sms_security_warnings" className="text-sm">
                            Security Warnings
                        </label>
                    </div>
                </div>
                <hr className="border-base-300 my-5 border-dashed" />
                <p className="text-base-content/80 text-sm font-medium">In-App Notifications</p>
                <div className="fieldset mt-4 grid grid-cols-1 gap-4 xl:grid-cols-2">
                    <div className="flex items-center gap-3">
                        <input className="checkbox checkbox-sm" type="checkbox" id="inapp_mentions_comments" />
                        <label htmlFor="inapp_mentions_comments" className="text-sm">
                            Mentions & Comments
                        </label>
                    </div>
                    <div className="flex items-center gap-3">
                        <input
                            className="checkbox checkbox-sm"
                            type="checkbox"
                            id="inapp_system_alerts"
                            defaultChecked
                        />
                        <label htmlFor="inapp_system_alerts" className="text-sm">
                            System Alerts
                        </label>
                    </div>
                    <div className="flex items-center gap-3">
                        <label htmlFor="inapp_delivery_method" className="text-sm text-nowrap">
                            Delivery Method
                        </label>
                        <select id="inapp_delivery_method" className="select select-bordered select-sm w-32">
                            <option disabled>Select method</option>
                            <option>None</option>
                            <option>Popup</option>
                            <option>Banner</option>
                        </select>
                    </div>
                </div>
                <div className="mt-5 flex items-center justify-end gap-3">
                    <button className="btn btn-sm">
                        <span className="iconify lucide--bell-off size-3.5"></span>
                        Mute All Notifications
                    </button>
                    <button className="btn btn-sm btn-primary">Save Preference</button>
                </div>
            </div>
        </>
    );
};

export default ProfileSettingsPage;
