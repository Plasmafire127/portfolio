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

    <div class="flex small:flex-col medium:flex-row items-center small:text-center medium:text-left justify-center small:space-x-0 medium:space-x-10 small:mx-10 medium:mx-20 small:py-20 py-16 h-full">
    

        <div class="small:flex small:flex-col medium:flex-1 small:px-10 medium:pl-48">

            <div class="small:text-xl medium:text-6xl small:pb-5 medium:pb-10">
                Hueforge
            </div>
            <div class="small:text-sm medium:text-2xl">
                 Using Hueforge, I've created a few uniquely 3D decorative pieces using 3D printing!
            </div>
        </div>

        <div class="flex-1 overflow-y-scroll h-full small:p-5 medium:p-10 small:space-y-5 medium:space-y-10 relative scroll-container on:scroll={handleScroll}">
            <div transition:fade|local>
                <i class="z-40 absolute bottom-5 left-1/2 fa-solid fa-angle-down text-sm" style="opacity: {Math.max(0, 1 - $scrollPosition / 100)};"></i>
            </div>
            <img src="../images/artwork/Hueforge/car.png" alt="car" class="hover:scale-105 transform duration-300"> 
            <img src="../images/artwork/Hueforge/control.png" alt="control" class="hover:scale-105 transform duration-300"> 
            <img src="../images/artwork/Hueforge/EEAAO.png" alt="EEAAO" class="hover:scale-105 transform duration-300"> 
            <img src="../images/artwork/Hueforge/Bladerunner.png" alt="Bladerunner" class="hover:scale-105 transform duration-300"> 
            <img src="../images/artwork/Hueforge/eye.png" alt="eye" class="hover:scale-105 transform duration-300"> 

        </div>
    </div>
</div>