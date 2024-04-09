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

    <GenNav textBack={"Back to Artwork"} pageBack={"artwork"} page={""}/>

    <div class="flex small:flex-col medium:flex-row items-center small:text-center medium:text-left justify-center small:space-x-5 medium:space-x-10 small:mx-10 medium:mx-20 small:py-20 py-16 h-full">
    

        <div class="small:flex small:flex-col medium:flex-1 small:pl-0 medium:pl-48">

            <div class="small:3text-xl medium:text-6xl small:pb-5 medium:pb-10">
                Emerging Technology 
                <br>
                Studio Revisioned
            </div>
            <div class="small:text-sm medium:text-2xl">
                Starting as a small scale model of the Emerging Technology Studio, for rearranging items, this project quickly grew to be a full reimagining of the Emerging Technology Studio and one of my most ambitious projects yet.
            </div>
        </div>

        <div class="flex-1 overflow-y-scroll h-full small:p-5 medium:p-10 small:space-y-5 medium:space-y-10 relative scroll-container on:scroll={handleScroll}">
            <div transition:fade|local>
                <i class="z-40 absolute bottom-5 left-1/2 fa-solid fa-angle-down text-sm" style="opacity: {Math.max(0, 1 - $scrollPosition / 100)};"></i>
            </div>
            <img src="../images/artwork/ETS/ETS.PNG" alt="ETS" class="hover:scale-105 transform duration-300"> 
            <img src="../images/artwork/ETS/Render1.png" alt="ETS" class="hover:scale-105 transform duration-300"> 
            <img src="../images/artwork/ETS/Loft2.png" alt="ETS" class="hover:scale-105 transform duration-300"> 
            <img src="../images/artwork/ETS/Render4(3).png" alt="ETS" class="hover:scale-105 transform duration-300"> 
        </div>
    </div>
</div>