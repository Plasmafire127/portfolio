<script>
    import { fade } from "svelte/transition";
    import GenNav from "$lib/GenNav.svelte";
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    let scrollPosition = writable(0);

    onMount(() => {
        const scrollContainer = document.querySelector('.scroll-container');
        scrollContainer.addEventListener('scroll', handleScroll);
    });

    function handleScroll(event) {
        scrollPosition.set(event.target.scrollTop);
    }
</script>

<div in:fade={{delay:500,duration:500}} out:fade class="h-screen w-screen">

    <GenNav textBack={"Back to Projects"} pageBack={"projects"} page={""}/>

    <div class="flex small:flex-col medium:flex-row items-center small:text-center medium:text-left justify-center small:space-x-0 medium:space-x-10 small:mx-10 medium:mx-20 small:py-20 py-16 h-full">
    

        <div class="small:flex small:flex-col medium:flex-1 small:px-10 medium:pl-10">

            <div class="small:text-3xl medium:text-6xl small:pb-5 medium:pb-10">
                Emerging Technology Studio Website
            </div>
            <div class="small:text-sm medium:text-2xl">
                A complete redesign of the previous Emerging Technology Studio website, built using Sveltekit and TailwindCSS. 
            </div>
            <br>
            <div class="small:text-sm medium:text-2xl">
                After building the website, I've assigned guided tasks to other staff members so they can also get hands on experience in website development.
            </div>
            <br>
            <div class="small:text-sm medium:text-2xl">
                Binghamton University's previous website is attached below for comparison!
            </div>
        </div>

        <div class="flex-1 overflow-y-scroll h-full small:p-5 medium:p-10 small:space-y-5 medium:space-y-10 relative scroll-container on:scroll={handleScroll}">
            <div transition:fade|local>
                <i class="z-40 absolute bottom-5 left-1/2 fa-solid fa-angle-down text-sm" style="opacity: {Math.max(0, 1 - $scrollPosition / 100)};"></i>
            </div>
            <div class="small:visible medium:collapse">
                The embedded website is too small to view on mobile.
            </div>
            <a href="https://www.etsbing.tech/" class="small:visible medium:collapse">
                Click here to be redirected!
            </a>
            <iframe 
            src="https://www.etsbing.tech/"
            class="w-full h-full small:collapse medium:visible"
            ></iframe>
            <img src="../images/projects/ETSWebsite/Old.png" alt="Old website" class="hover:scale-105 transform duration-300"> 
        </div>
    </div>
</div>