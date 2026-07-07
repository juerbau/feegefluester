import {client} from "@/sanity/client";

const TEST_QUERY = `*[_type == "test"]{_id, title}`;

const options = {next: {revalidate: 30}};

export default async function HomePage() {
    const posts = await client.fetch(TEST_QUERY, {}, options);

    return (
        <main className="container mx-auto min-h-screen max-w-3xl p-8">
            <h1 className="text-4xl font-bold mb-8">Posts</h1>
            <ul className="flex flex-col gap-y-4">
                {posts.map((post) => (
                    <li key={post._id}>
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                    </li>
                ))}
            </ul>
        </main>
    );
}