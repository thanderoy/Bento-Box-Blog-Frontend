import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <>
        <header>
            <nav class="border-b-2 border-black bg-slate-300 px-4 py-2.5">
                <a href="/" class="p-2 no-underline">
                    <div class="flex flex-row p-1 mx-auto place-content-center items-center uppercase ">
                        <div class="px-1 items-center text-4xl"><p class="text-end">🍱</p></div>
                        <div class="px-0 text-lg">
                            <p class="p-0 m-0 leading-none">Bento</p>
                            <p class="p-0 m-0 leading-none">Box</p>
                            <p class="p-0 m-0 leading-none">Blog</p>
                        </div>
                    </div>
                </a>
            </nav>
        </header>
        </>
    )
});