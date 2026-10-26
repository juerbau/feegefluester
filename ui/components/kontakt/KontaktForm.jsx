"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils/cn";
import { contactSchema } from "@/lib/validation/contactSchema";
import MainButton from "@/ui/components/common/MainButton";


export default function KontaktForm({ className, form }) {
    const [submitStatus, setSubmitStatus] = useState(null);

    const inputClasses = cn(
        "mt-3 w-full",
        "rounded-2xl",
        "border border-[#d8d5dc]",
        "bg-transparent",
        "px-5 py-4",
        "font-body text-lg text-[#827d87]",
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
        reset,
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
            website: "",
        },
    });

    async function onSubmit(data) {
        setSubmitStatus(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);

                throw new Error(
                    errorData?.message ||
                    `Nachricht konnte nicht gesendet werden (HTTP ${response.status}).`
                );
            }

            setSubmitStatus("success");
            reset();
        } catch (error) {
            console.error("Kontaktformular Fehler:", error);
            setSubmitStatus("error");
        }
    }

    return (
        <section
            id="kontaktformular"
            className={cn(
                "w-full bg-white",
                "px-6 py-16 md:px-10 lg:py-24",
                className
            )}
            aria-labelledby="kontaktformular-title"
        >
            <div className="mx-auto w-full max-w-160">

                {/* Einleitung */}
                <div className="mx-auto max-w-2xl text-center">
                    <h2
                        id="kontaktformular-title"
                        className={cn(
                            "font-handwrite",
                            "text-[#c8a56e]",
                            "text-[clamp(2rem,3vw,3rem)]",
                            "leading-[1.3]"
                        )}
                    >
                        {form.title}
                    </h2>

                    <p
                        className={cn(
                            "mx-auto mt-6 max-w-xl",
                            "font-body text-[#827d87]",
                            "text-[clamp(1rem,0.94rem+0.25vw,1.125rem)]",
                            "leading-[1.9]"
                        )}
                    >
                        {form.description}
                    </p>
                </div>

                {/* Kontaktformular */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-14 space-y-8"
                    noValidate
                >
                    {/* Honeypot – für echte Besucher unsichtbar */}
                    <div
                        className="absolute left-[-9999px] h-px w-px overflow-hidden"
                        aria-hidden="true"
                    >
                        <label htmlFor="contact-website">
                            Website
                        </label>

                        <input
                            id="contact-website"
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                            {...register("website")}
                        />
                    </div>

                    {/* Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-2 block font-body text-base text-[#827d87]"
                        >
                            {form.fields.name}
                        </label>

                        <input
                            id="name"
                            type="text"
                            autoComplete="name"
                            aria-invalid={!!errors.name}
                            aria-describedby={
                                errors.name ? "name-error" : undefined
                            }
                            {...register("name")}
                            className={inputClasses}
                        />

                        {errors.name && (
                            <p
                                id="name-error"
                                className="mt-2 text-sm text-[#b8860b]"
                            >
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* E-Mail */}
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block font-body text-base text-[#827d87]"
                        >
                            {form.fields.email}
                        </label>

                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            aria-invalid={!!errors.email}
                            aria-describedby={
                                errors.email ? "email-error" : undefined
                            }
                            {...register("email")}
                            className={inputClasses}
                        />

                        {errors.email && (
                            <p
                                id="email-error"
                                className="mt-2 text-sm text-[#b8860b]"
                            >
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Telefon */}
                    <div>
                        <label
                            htmlFor="phone"
                            className="mb-2 block font-body text-base text-[#827d87]"
                        >
                            {form.fields.phone}

                            <span className="ml-2 text-sm text-[#b7b2bc]">
                                {form.fields.optional}
                            </span>
                        </label>

                        <input
                            id="phone"
                            type="tel"
                            autoComplete="tel"
                            aria-invalid={!!errors.phone}
                            aria-describedby={
                                errors.phone ? "phone-error" : undefined
                            }
                            {...register("phone")}
                            className={inputClasses}
                        />

                        {errors.phone && (
                            <p
                                id="phone-error"
                                className="mt-2 text-sm text-[#b8860b]"
                            >
                                {errors.phone.message}
                            </p>
                        )}
                    </div>

                    {/* Nachricht */}
                    <div>
                        <label
                            htmlFor="message"
                            className="mb-2 block font-body text-base text-[#827d87]"
                        >
                            {form.fields.message}
                        </label>

                        <textarea
                            id="message"
                            rows={8}
                            aria-invalid={!!errors.message}
                            aria-describedby={
                                errors.message ? "message-error" : undefined
                            }
                            {...register("message")}
                            className={cn(
                                inputClasses,
                                "min-h-56 resize-y leading-relaxed"
                            )}
                        />

                        {errors.message && (
                            <p
                                id="message-error"
                                className="mt-2 text-sm text-[#b8860b]"
                            >
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    {/* Datenschutzhinweis */}
                    <p
                        className={cn(
                            "font-body text-sm text-[#827d87]",
                            "leading-[1.8]"
                        )}
                    >
                        {form.privacy.before}{" "}
                        <Link
                            href={form.privacy.href}
                            className={cn(
                                "text-[#b99760] underline",
                                "underline-offset-4",
                                "transition-colors",
                                "hover:text-[#827d87]"
                            )}
                        >
                            {form.privacy.linkLabel}
                        </Link>
                        .
                    </p>

                    {/* Versandstatus */}
                    {submitStatus === "success" && (
                        <p
                            role="status"
                            className={cn(
                                "rounded-xl bg-[#afbdaf]/20",
                                "px-5 py-4",
                                "font-body text-[#657765]"
                            )}
                        >
                            {form.status.success}
                        </p>
                    )}

                    {submitStatus === "error" && (
                        <p
                            role="alert"
                            className={cn(
                                "rounded-xl bg-[#c8a56e]/10",
                                "px-5 py-4",
                                "font-body text-[#827d87]"
                            )}
                        >
                            {form.status.error}
                        </p>
                    )}

                    {/* Absenden */}
                    <div className="flex justify-end pt-2">
                        <MainButton
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting
                                ? form.submit.loading
                                : form.submit.idle}
                        </MainButton>
                    </div>
                </form>
            </div>
        </section>
    );
}
