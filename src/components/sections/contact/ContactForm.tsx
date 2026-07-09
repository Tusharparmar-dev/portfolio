"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

interface FormData {
    fullName: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    fullName?: string;
    email?: string;
    subject?: string;
    message?: string;
}

const initialFormData: FormData = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
};

function validate(data: FormData): FormErrors {
    const errors: FormErrors = {};

    if (!data.fullName.trim()) {
        errors.fullName = "Full name is required.";
    } else if (data.fullName.trim().length < 2) {
        errors.fullName = "Full name must be at least 2 characters.";
    }

    if (!data.email.trim()) {
        errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = "Please enter a valid email address.";
    }

    if (!data.subject.trim()) {
        errors.subject = "Subject is required.";
    }

    if (!data.message.trim()) {
        errors.message = "Message is required.";
    } else if (data.message.trim().length < 10) {
        errors.message = "Message must be at least 10 characters.";
    }

    return errors;
}

export function ContactForm() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    function handleChange(field: keyof FormData, value: string) {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const validationErrors = validate(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        setStatus("loading");

        try {
            await new Promise((resolve) => setTimeout(resolve, 1200));
            setStatus("success");
            setFormData(initialFormData);
        } catch {
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-4 rounded-3xl border border-black/5 bg-white/60 p-10 text-center backdrop-blur-md dark:border-white/10 dark:bg-white/5"
                role="status"
            >
                <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Message sent successfully</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-2 rounded-full border border-black/10 px-5 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-900/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
                >
                    Send another message
                </button>
            </motion.div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-6 rounded-3xl border border-black/5 bg-white/60 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/5 sm:p-8"
        >
            <div>
                <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-200">
                    Full Name
                </label>
                <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-neutral-900 dark:border-white/10 dark:bg-neutral-900/60 dark:text-white dark:focus:border-white"
                />
                {errors.fullName && (
                    <p id="fullName-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                        {errors.fullName}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-200">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-neutral-900 dark:border-white/10 dark:bg-neutral-900/60 dark:text-white dark:focus:border-white"
                />
                {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                        {errors.email}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-200">
                    Subject
                </label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-neutral-900 dark:border-white/10 dark:bg-neutral-900/60 dark:text-white dark:focus:border-white"
                />
                {errors.subject && (
                    <p id="subject-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                        {errors.subject}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-200">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className="w-full resize-none rounded-xl border border-black/10 bg-white/80 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-neutral-900 dark:border-white/10 dark:bg-neutral-900/60 dark:text-white dark:focus:border-white"
                />
                {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                        {errors.message}
                    </p>
                )}
            </div>

            {status === "error" && (
                <p role="alert" className="text-sm text-red-600 dark:text-red-400">
                    Something went wrong. Please try again.
                </p>
            )}

            <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-neutral-900"
            >
                <AnimatePresence mode="wait" initial={false}>
                    {status === "loading" ? (
                        <motion.span
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                        >
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                        </motion.span>
                    ) : (
                        <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            Send Message
                        </motion.span>
                    )}
                </AnimatePresence>
            </button>
        </form>
    );
}