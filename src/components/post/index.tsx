import { component$ } from "@builder.io/qwik";

interface TagProps {
    name?: string;
}

interface CommentProps {
    name?: string;
    body?: string;
    created?: string;
}

interface PostProps {
    id?: string,
    title?: string,
    slug?: string,
    body?: string,
    published_at?: string,
    tags?: [],
    comments?: [],
    owner?: string

}

export const Tag = component$<TagProps>((props) => {
    return (
        <>
            <div class="flex w-fit mr-2 py-1 px-2 cursor-pointer items-center border-black border-2 drop-shadow-lg">
                {props.name}    
            </div>
        </>
    )
});

export const Comment = component$<CommentProps>((props) => {
    return (
        <>
            <div class="flex flex-col w-full h-fit p-2 m-1 bg-white border-black border-2 drop-shadow-md">
                <div class="flex p-1">
                    {props.body}
                </div>
                <div class="flex justify-end text-[12px] font-light">
                    <span class="m-1">{props.name}</span>
                    <span class="m-1">[{props.created}]</span>
                </div>
            </div>
        </>
    )
});

export default component$<PostProps>((props) => {
    return (
        <>
        <div class="flex flex-col bg-white p-8 m-2 w-full h-fit border-black border-2 drop-shadow-lg">
            <h2 class="font-bold text-3xl mt-2">{props.title}</h2>

            <div class="flex flex-row justify-between">
                    
                <p class="text-sm">
                    <i class="fa-regular fa-user"></i><a href="/" class="text-pink-700"> {props.owner}</a>
                </p>

                <p class="text-sm text-end font-light"><i class="fa-regular fa-calendar"></i> {props.published_at}</p>
            </div>

            <hr class="my-2" />

            <div class="flex justify-between text-[12px]">
                <div id="Tags" class="flex flex-row">
                    <Tag name="Action" />
                    <Tag name="Supernatural" />
                    <Tag name="Horror" />
                </div>
                <div class="flex flex-row">
                    <span class="my-1 mx-2"><i class="fa-regular fa-comment"></i> 19</span>
                    <span class="my-1 mx-2"><i class="fa-regular fa-share-from-square"></i> </span>
                </div>
            </div>

            <div class="flex justify-center my-2">
                <p>{props.body}</p>
            </div>

            <div class="flex flex-col border-black border-2 px-5 py-2 my-3">
                <h4>Comments</h4>
                <Comment name="Brie" body="Awesome" created="18 Aug 2023"/>
                <Comment name="DigBick001" body="Slat" created="19 Aug 2023"/>

            </div>

            <div class="flex flex-col border-black border-2 px-5 py-2 my-3">
                <h4>Similar Posts</h4>
                
            </div>

        </div>


        </>
    )
});