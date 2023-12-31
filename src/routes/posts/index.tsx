import { Resource, component$, useResource$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Post from "~/components/post-object";

interface PostListData {
    id?: number,
    title?: string,
    slug?: string,
    body?: string,
    published_at?: string,
    tags?: [],
    comments?: [],
    owner?: string
}

export default component$(() => {
    const postsData = useResource$<PostListData[]>(async () => {
        console.log("Fetching PostListData...")
        const response = await fetch("http://localhost:8000/posts/")
        const posts = await response.json()
        return posts
    })

    return (
        <>
        <Resource 
            value={postsData}
            onPending={() => <>Filling your bento...</>}
            onResolved={(posts) => (
                <>
                {posts.map(post=> (
                    <div key={post.id}>
                        <Post
                        id={post.id}
                        title={post.title}
                        body={post.body} 
                        published_at={post.published_at} 
                        owner={post.owner}
                        />
                    </div>
                ))}
                </>
            )}
        
        />
        </>
    );
});

export const head: DocumentHead = {
    title: "🍱 Bento Box Blog",
    meta: [
        {
            name: "description",
            content: "",
        },
    ],
};
