import { cn } from "@/lib/utils/cn";
import MainButton from "@/ui/components/common/MainButton";

export default function WegeZueinanderContent({content}) {

    const [
        ausgangssituation,
        tiergespraech,
        rueckkehr,
        neuePerspektive,
    ] = content.chapters;

    const bodyTextClass = cn(
        "font-body text-[#827d87]",
        "text-[clamp(1.000rem,0.94rem+0.25vw,1.125rem)]",
        "leading-[1.9]"
    );

    const sectionTitleClass = cn(
        "font-body font-light text-[#827d87]",
        "text-[clamp(1.9rem,3vw,3rem)]",
        "leading-[1.2]"
    );

    const handwrittenClass = cn(
        "font-handwrite text-[#c8a56e]",
        "text-[clamp(2.1rem,3.2vw,3.4rem)]",
        "leading-[1.2]"
    );

    return (
        <>
            {/* 1. Einstieg und Ausgangssituation */}
            <section className="w-full bg-champagner-light">
                <div
                    className={cn(
                        "mx-auto w-full max-w-5xl",
                        "px-6 py-16 md:px-10 lg:py-24"
                    )}
                >
                    <div className="mx-auto max-w-3xl text-center">
                        <p className={handwrittenClass}>
                            {content.subtitle}
                        </p>

                        <h1
                            className={cn(
                                "mt-5 font-body font-light text-[#827d87]",
                                "text-[clamp(2.5rem,4.5vw,4.5rem)]",
                                "leading-[1.1]"
                            )}
                        >
                            {content.title}
                        </h1>

                        <div
                            className="mx-auto mt-10 h-px w-20 bg-[#c8a56e]/60"
                            aria-hidden="true"
                        />
                    </div>

                    <div className="mx-auto mt-16 max-w-2xl">
                        <h2 className={sectionTitleClass}>
                            {ausgangssituation.title}
                        </h2>

                        <div className="mt-8 space-y-5">
                            {ausgangssituation.paragraphs.map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className={bodyTextClass}
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>

                        {/* Fragen der Menschen */}
                        <div
                            className={cn(
                                "my-12 border-l-2 border-[#c8a56e]/60",
                                "pl-6 md:pl-8"
                            )}
                        >
                            <div className="space-y-4">
                                {ausgangssituation.questions.map(
                                    (question, index) => (
                                        <p
                                            key={index}
                                            className={cn(
                                                "font-body text-[#827d87]",
                                                "text-[clamp(1.1rem,1.5vw,1.35rem)]",
                                                "leading-[1.7]"
                                            )}
                                        >
                                            {question}
                                        </p>
                                    )
                                )}
                            </div>
                        </div>

                        <p className={bodyTextClass}>
                            {ausgangssituation.closing}
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Das Tiergespräch */}
            <section className="w-full bg-white">
                <div
                    className={cn(
                        "mx-auto w-full max-w-5xl",
                        "px-6 py-16 md:px-10 lg:py-24"
                    )}
                >
                    <div className="mx-auto max-w-2xl">
                        <h2 className={sectionTitleClass}>
                            {tiergespraech.title}
                        </h2>

                        <div className="mt-8 space-y-5">
                            {tiergespraech.paragraphs.map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className={bodyTextClass}
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>
                    </div>

                    {/* Die Sorgen der Katze */}
                    <div
                        className={cn(
                            "mx-auto my-14 max-w-3xl",
                            "py-8 text-center"
                        )}
                    >
                        <div
                            className="mx-auto mb-8 h-px w-16 bg-[#c8a56e]/50"
                            aria-hidden="true"
                        />

                        <div className="space-y-2">
                            {tiergespraech.concerns.map(
                                (concern, index) => (
                                    <p
                                        key={index}
                                        className={cn(
                                            "font-handwrite text-[#c8a56e]",
                                            "text-[clamp(1.8rem,2.8vw,2.8rem)]",
                                            "leading-[1.35]"
                                        )}
                                    >
                                        {concern}
                                    </p>
                                )
                            )}
                        </div>

                        <div
                            className="mx-auto mt-8 h-px w-16 bg-[#c8a56e]/50"
                            aria-hidden="true"
                        />
                    </div>

                    <div className="mx-auto max-w-2xl">
                        <div className="space-y-5">
                            {tiergespraech.continuation.map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className={bodyTextClass}
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>

                        <p
                            className={cn(
                                "mt-12 text-center",
                                handwrittenClass
                            )}
                        >
                            {tiergespraech.closing}
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Die Rückkehr */}
            <section className="w-full bg-champagner-light">
                <div
                    className={cn(
                        "mx-auto w-full max-w-4xl",
                        "px-6 py-16 md:px-10 lg:py-24"
                    )}
                >
                    <div className="mx-auto max-w-2xl">
                        <h2 className={sectionTitleClass}>
                            {rueckkehr.title}
                        </h2>

                        <div className="mt-9 space-y-6">
                            {rueckkehr.paragraphs.map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className={cn(
                                            bodyTextClass,
                                            index === 1 &&
                                            "font-medium text-[#827d87]"
                                        )}
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Neue Perspektiven */}
            <section className="w-full bg-white">
                <div
                    className={cn(
                        "mx-auto w-full max-w-5xl",
                        "px-6 py-16 md:px-10 lg:py-24"
                    )}
                >
                    <div className="mx-auto max-w-2xl">
                        <h2 className={sectionTitleClass}>
                            {neuePerspektive.title}
                        </h2>

                        <div className="mt-8 space-y-5">
                            {neuePerspektive.paragraphs.map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className={bodyTextClass}
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>

                        {/* Mögliche neue Blickwinkel */}
                        <div
                            className={cn(
                                "my-12 space-y-5",
                                "border-l-2 border-[#afbdaf]",
                                "pl-6 md:pl-8"
                            )}
                        >
                            {neuePerspektive.possibilities.map(
                                (possibility, index) => (
                                    <p
                                        key={index}
                                        className={bodyTextClass}
                                    >
                                        {possibility}
                                    </p>
                                )
                            )}
                        </div>

                        <div className="space-y-5">
                            {neuePerspektive.continuation.map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className={bodyTextClass}
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>
                    </div>

                    {/* Manuelas persönlicher Gedanke */}
                    <blockquote
                        className={cn(
                            "mx-auto my-16 max-w-3xl",
                            "text-center"
                        )}
                    >
                        <div
                            className="mx-auto mb-8 h-px w-20 bg-[#c8a56e]/60"
                            aria-hidden="true"
                        />

                        <p className={handwrittenClass}>
                            {neuePerspektive.quote}
                        </p>
                    </blockquote>

                    <div className="mx-auto max-w-2xl">
                        <div className="space-y-3">
                            {neuePerspektive.reflections.map(
                                (reflection, index) => (
                                    <p
                                        key={index}
                                        className={bodyTextClass}
                                    >
                                        {reflection}
                                    </p>
                                )
                            )}
                        </div>

                        <div className="mt-12 space-y-5">
                            {neuePerspektive.invitation.map(
                                (paragraph, index) => (
                                    <p
                                        key={index}
                                        className={cn(
                                            bodyTextClass,
                                            index === 1 &&
                                            "font-medium"
                                        )}
                                    >
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>
                    </div>

                    {/* Letzter Gedanke */}
                    <div
                        className={cn(
                            "mx-auto mt-16 max-w-3xl",
                            "text-center"
                        )}
                    >
                        <p className={bodyTextClass}>
                            {neuePerspektive.ending[0]}
                        </p>

                        <p
                            className={cn(
                                "mt-6",
                                handwrittenClass
                            )}
                        >
                            {neuePerspektive.ending[1]}
                        </p>

                        <div className="mt-14 flex justify-center">
                            <MainButton
                                href={content.backLink.href}
                            >
                                {content.backLink.label}
                            </MainButton>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
