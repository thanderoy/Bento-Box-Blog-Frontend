import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface Post {
    id?: number,
    title?: string,
    slug?: string,
    body?: string,
    published_at?: string,
    tags?: [],
    comments?: [],
    owner?: string

}

export default component$<Post>((props) => {
    const parsedDate = new Date(props.published_at).toLocaleDateString();

    return (
        <>
        <card class="flex flex-col bg-white p-8 m-2 w-full h-fit border-2 border-black drop-shadow-lg">
            <header class="flex font-light text-sm">
                <p><i class="fa-regular fa-calendar"></i> {parsedDate}</p>
            </header>
            <h2 class="font-bold text-3xl mt-2">{props.title}</h2>

            <p class="text-sm">
                <a href="/" class="text-pink-700"><i class="fa-regular fa-user"></i> {props.owner}</a>
            </p>

            <p>{props.body}</p>
            <Link href={`/posts/${props.id}/`}>
                <button class="text-end">Read More</button>
            </Link>
        </card>
        </>
    )
});
