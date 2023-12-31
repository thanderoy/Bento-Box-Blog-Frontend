import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import Post from "~/components/post";

interface PostDetailData {
    id: number;
    title: string;
    body: string;
    published_at: string;
    owner: string;
}

export const usePostDetailData = routeLoader$<PostDetailData>(async (requentEvent) => {
    const productId = requentEvent.params.id
    console.log(`Fetching PostDetailData for postId: ${productId}`);
    const response = await fetch(`http://localhost:8000/posts/${productId}`);
    const post = await response.json();
    return post

})


export default component$(() => {
    const post = usePostDetailData()

    return (
        <>
        <Resource 
            value={post}
            onPending={() => <>Filling your bento...</>}
            onResolved={(post) => (
                <>
                <div>
                    <Post 
                    title={post.title} body={post.body} published_at={post.published_at} owner={post.owner}
                    />
                </div>
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



