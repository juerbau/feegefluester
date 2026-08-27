"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils/cn";
import { contactSchema } from "@/lib/validation/contactSchema";

import MainButton from "@/ui/components/MainButton";
import PageContentWidth from "@/ui/components/utils/PageContentWidth";

export default function ContactForm({
                                        content,
                                        className,
                                    }) {
    const inputClasses = cn(
        "mt-3 w-full",
        "rounded-2xl",
        "border border-[#d8d5dc]",
        "bg-transparent",
        "px-5 py-4",
        "text-xl text-[#827d87]",
        "placeholder:text-[#b7b2bc]",
        "outline-none",
        "transition-colors duration-300",
        "hover:border-[#b7b2bc]",
        "focus:border-[#c8a56e]",
        "focus:ring-0"
    );

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    async function onSubmit(data) {
        console.log(data);
    }

    return (
        <section
            className={cn(
                "px-8 py-20",
                className
            )}
        >
            <PageContentWidth width="narrow">
                <div>
                    <h2
                        className={cn(
                            "font-accent font-light",
                            "text-4xl",
                            "tracking-tight",
                            "leading-tight",
                            "text-[#827d87]"
                        )}
                    >
                        {content.title}
                    </h2>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-14 space-y-8"
                        noValidate
                    >
                        {/* Name */}

                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-base text-[#827d87]"
                            >
                                Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                autoComplete="name"
                                {...register("name")}
                                className={inputClasses}
                            />

                            {errors.name && (
                                <p className="mt-2 text-sm text-[#b8860b]">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* E-Mail */}

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-base text-[#827d87]"
                            >
                                E-Mail
                            </label>

                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                {...register("email")}
                                className={inputClasses}
                            />

                            {errors.email && (
                                <p className="mt-2 text-sm text-[#b8860b]">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Telefon */}

                        <div>
                            <label
                                htmlFor="phone"
                                className="mb-2 block text-base text-[#827d87]"
                            >
                                Telefon
                                <span className="ml-2 text-sm text-[#b7b2bc]">
                                    (optional)
                                </span>
                            </label>

                            <input
                                id="phone"
                                type="tel"
                                autoComplete="tel"
                                {...register("phone")}
                                className={inputClasses}
                            />

                            {errors.phone && (
                                <p className="mt-2 text-sm text-[#b8860b]">
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>

                        {/* Nachricht */}

                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block text-base text-[#827d87]"
                            >
                                Nachricht
                            </label>

                            <textarea
                                id="message"
                                rows={8}
                                {...register("message")}
                                className={cn(
                                    inputClasses,
                                    "min-h-56 resize-y",
                                    "leading-relaxed"
                                )}
                            />

                            {errors.message && (
                                <p className="mt-2 text-sm text-[#b8860b]">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        <div className="flex justify-end pt-6">
                            <MainButton
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting
                                    ? "Nachricht wird gesendet..."
                                    : "Nachricht senden"}
                            </MainButton>
                        </div>
                    </form>
                </div>
            </PageContentWidth>
        </section>
    );
}