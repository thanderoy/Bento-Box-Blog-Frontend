import { component$, Slot } from "@builder.io/qwik";
import Header from "~/components/header";
import Footer from "~/components/footer";



export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <div class="flex flex-row min-h-screen w-full p-0 m-0 justify-center">
          <div class="bg-yellow-100 w-1/12 p-5 border-e-2 border-black"></div>
          <div class="bg-green-100 flex flex-col w-7/12 p-5 border-e-2 border-black">
            <Slot />
          </div>
          <div class="bg-blue-100 w-3/12 p-5 border-e-2 border-black"></div>
          <div class="bg-yellow-100 w-1/12 p-5 "></div>
        </div>
      </main>
      <Footer />
    </>
  );
});
