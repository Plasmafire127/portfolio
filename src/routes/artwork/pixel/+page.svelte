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

    <GenNav textBack={"Back to Artwork"} pageBack={"artwork"} page={""} textNext={""}/>

    <div class="flex small:flex-col medium:flex-row items-center small:text-center medium:text-left justify-center small:space-x-5 medium:space-x-10 small:mx-10 medium:mx-20 small:py-20 py-16 h-full">
    

        <div class="small:flex small:flex-col medium:flex-1 small:pl-0 medium:pl-48">

            <div class="small:text-3xl medium:text-6xl small:pb-5 medium:pb-10">
                3D-to-2D Pipeline
            </div>
            <div class="small:text-sm medium:text-2xl">
                This project is a WiP attempt to take 3D animated models and convert them to pixelated 2D sprites for use in Godot!
            </div>
            <br>
            <div class="small:text-sm medium:text-2xl">
                The idea for this project is the strength of the pipeline, allowing the ability to quickly create a rudimentary model, rig + animate it, and output a uniquely stylized sprite sheet. The amount of pixelation is also easily customizable.
            </div>
            <br>
            <div class="small:text-sm medium:text-2xl">
                (Hover over the first video for an unpixelated view!)
            </div>
            
        </div>
        <div class="flex-1 overflow-y-scroll h-full medium:p-10 relative scroll-container on:scroll={handleScroll}">
            <div transition:fade|local>
                <i class="z-40 absolute bottom-5 left-1/2 fa-solid fa-angle-down text-sm" style="opacity: {Math.max(0, 1 - $scrollPosition / 100)};"></i>
            </div>
            <div class="flex-1 grid px-10 h-full items-center medium:overflow-x-hidden">
                <!-- svelte-ignore a11y-media-has-caption -->
                <video autoplay loop playsinline disablepictureinpicture class="col-start-1 row-start-1 hover:opacity-0">
                    <source src="../images/artwork/Pixel/thaumaturge.mov" type="video/mp4">
                        <tack kind="captions"></tack>
                </video>
                <!-- svelte-ignore a11y-media-has-caption -->
                <video autoplay loop playsinline disablepictureinpicture class="col-start-1 row-start-1 opacity-0 hover:opacity-100">
                    <source src="../images/artwork/Pixel/thaumaturgeUnpixelated.mov" type="video/mp4">
                        <tack kind="captions"></tack>
                </video>
            </div>

            <div class="flex-1 grid px-10 h-full items-center medium:overflow-x-hidden">
                <!-- svelte-ignore a11y-media-has-caption -->
                <video autoplay loop playsinline disablepictureinpicture class="col-start-1 row-start-1 scale-150">
                    <source src="../images/artwork/Pixel/demo.mov" type="video/mp4">
                        <tack kind="captions"></tack>
                </video>
            </div>


            <div class="flex-1 grid px-10 h-full items-center medium:overflow-x-hidden">
                <!-- svelte-ignore a11y-media-has-caption -->
                <video autoplay loop playsinline disablepictureinpicture class="col-start-1 row-start-1">
                    <source src="../images/artwork/Pixel/skeleton.mp4" type="video/mp4">
                        <tack kind="captions"></tack>
                </video>
            </div>

            <div class="flex-1 grid px-10 h-full items-center medium:overflow-x-hidden">
                <!-- svelte-ignore a11y-media-has-caption -->
                <video autoplay loop playsinline disablepictureinpicture class="col-start-1 row-start-1">
                    <source src="../images/artwork/Pixel/sentry.mp4" type="video/mp4">
                        <tack kind="captions"></tack>
                </video>
            </div>


            <div class="flex-1 grid px-10 h-full items-center medium:overflow-x-hidden">
                <!-- svelte-ignore a11y-media-has-caption -->
                <video autoplay loop playsinline disablepictureinpicture class="col-start-1 row-start-1">
                    <source src="../images/artwork/Pixel/slime.mp4" type="video/mp4">
                        <tack kind="captions"></tack>
                </video>
            </div>
        </div>
    </div>
</div>