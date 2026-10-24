
export default function LegalPage({ content }) {
    return (
        <>
            <section className="bg-champagner-light px-6 py-14 text-center sm:py-20">
                <h1 className="font-body text-4xl font-medium text-[#827d87] sm:text-5xl">
                    {content.title}
                </h1>
            </section>

            <section className="px-6 py-14 sm:px-10 sm:py-20">
                <div className="mx-auto max-w-[800px] space-y-12">
                    {content.sections.map((section, index) => (
                        <section key={index} className="space-y-5">
                            <h2 className="font-body text-xl font-semibold text-[#827d87] sm:text-2xl">
                                {section.title}
                            </h2>

                            <div className="space-y-4 font-body text-base leading-8 text-[#827d87]">
                                {section.blocks.map((block, blockIndex) => {
                                    if (block.type === "list") {
                                        return (
                                            <ul
                                                key={blockIndex}
                                                className="list-disc space-y-2 pl-6"
                                            >
                                                {block.items.map((item, itemIndex) => (
                                                    <li key={itemIndex}>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        );
                                    }

                                    return (
                                        <p
                                            key={blockIndex}
                                            className="whitespace-pre-line"
                                        >
                                            {block.text}
                                        </p>
                                    );
                                })}
                            </div>
                        </section>
                    ))}
                </div>
            </section>
        </>
    );
}
