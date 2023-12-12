import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <>
        <footer class="fixed bottom-0">
            <div class="w-screen mx-auto">
                <div class="p-4 border-t-2 border-black bg-purple-200 px-4 py-2.5">
                    <span class="block text-sm text-center text-gray-500">🍱 | © 2023 Roy Thande</span>
                </div>
            </div>
        </footer>
        </>
    )
});