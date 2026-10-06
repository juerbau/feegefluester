import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
} from "@react-email/components";

export default function ContactMail({
                                        name,
                                        email,
                                        phone,
                                        message,
                                    }) {
    return (
        <Html lang="de">
            <Head />

            <Preview>
                Neue Kontaktanfrage über Feegeflüster
            </Preview>

            <Body style={styles.body}>
                <Container style={styles.container}>
                    <Heading style={styles.heading}>
                        Neue Kontaktanfrage
                    </Heading>

                    <Text style={styles.intro}>
                        Über das Kontaktformular von Feegeflüster ist eine neue
                        Nachricht eingegangen.
                    </Text>

                    <Hr style={styles.divider} />

                    <Section>
                        <Text style={styles.label}>
                            Name
                        </Text>

                        <Text style={styles.value}>
                            {name}
                        </Text>

                        <Text style={styles.label}>
                            E-Mail
                        </Text>

                        <Link
                            href={`mailto:${email}`}
                            style={styles.link}
                        >
                            {email}
                        </Link>

                        {phone && (
                            <>
                                <Text style={styles.label}>
                                    Telefon
                                </Text>

                                <Text style={styles.value}>
                                    {phone}
                                </Text>
                            </>
                        )}
                    </Section>

                    <Hr style={styles.divider} />

                    <Section>
                        <Text style={styles.label}>
                            Nachricht
                        </Text>

                        <Section style={styles.messageBox}>
                            <Text style={styles.message}>
                                {message}
                            </Text>
                        </Section>
                    </Section>

                    <Hr style={styles.divider} />

                    <Text style={styles.footer}>
                        Diese Nachricht wurde über das Kontaktformular von
                        Feegeflüster übermittelt.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}

const styles = {
    body: {
        margin: "0",
        padding: "32px 16px",
        backgroundColor: "#f6f3ee",
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "#827d87",
    },

    container: {
        maxWidth: "600px",
        margin: "0 auto",
        padding: "32px",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
    },

    heading: {
        margin: "0 0 16px",
        fontSize: "28px",
        fontWeight: "400",
        lineHeight: "1.3",
        color: "#827d87",
    },

    intro: {
        margin: "0",
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#827d87",
    },

    divider: {
        margin: "28px 0",
        borderColor: "#e4dfd6",
    },

    label: {
        margin: "0 0 4px",
        fontSize: "13px",
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "#c8a56e",
    },

    value: {
        margin: "0 0 20px",
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#827d87",
    },

    link: {
        display: "block",
        margin: "0 0 20px",
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#827d87",
        textDecoration: "none",
    },

    messageBox: {
        marginTop: "8px",
        padding: "20px",
        backgroundColor: "#f8f7f5",
        borderRadius: "10px",
    },

    message: {
        margin: "0",
        fontSize: "16px",
        lineHeight: "1.7",
        whiteSpace: "pre-wrap",
        color: "#827d87",
    },

    footer: {
        margin: "0",
        fontSize: "12px",
        lineHeight: "1.5",
        color: "#a8a3ac",
    },
};