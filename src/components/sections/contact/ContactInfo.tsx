import { Mail, MapPin, Clock, Briefcase } from "lucide-react";
import { contactInfo } from "@/content/contact";

export function ContactInfo() {
    const items = [
        { icon: Mail, label: "Email", value: contactInfo.email },
        { icon: MapPin, label: "Location", value: contactInfo.location },
        { icon: Clock, label: "Time Zone", value: contactInfo.timezone },
        { icon: Briefcase, label: "Availability", value: contactInfo.availability },
    ];

    return (
        <div className="rounded-3xl border border-black/5 bg-white/60 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/5 sm:p-8">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Contact Information</h3>
            <div className="mt-6 space-y-5">
                {items.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                        <span className="rounded-full bg-neutral-900/5 p-2 text-neutral-700 dark:bg-white/10 dark:text-neutral-200">
                            <item.icon size={16} strokeWidth={1.75} />
                        </span>
                        <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                                {item.label}
                            </p>
                            <p className="text-sm font-medium text-neutral-900 dark:text-white">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}