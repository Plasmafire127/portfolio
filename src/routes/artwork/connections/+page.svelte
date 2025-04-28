<script>
    import { fade } from "svelte/transition";
    import GenNav from "$lib/GenNav.svelte";
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { base } from '$app/paths';

    let scrollPosition = writable(0);

    onMount(() => {
        const scrollContainer = document.querySelector('.scroll-container');
        scrollContainer.addEventListener('scroll', handleScroll);
    });

    function handleScroll(event) {
        scrollPosition.set(event.target.scrollTop);
    }

        // These values are bound to properties of the video
	let muted = true;
	
	function handleMute() {
		if (muted) {
			muted = false;
		} else {
			muted = true;
		}
	}

</script>


<div in:fade={{delay:500,duration:500}} out:fade class="h-screen w-screen">

    <GenNav textBack={"Back to Artwork"} pageBack={"artwork"} page={""}/>

    <div class="flex small:flex-col medium:flex-row items-center small:text-center medium:text-left justify-center small:space-x-0 medium:space-x-10 small:mx-10 medium:mx-20 small:py-20 py-16 h-full">
    

        <div class="small:flex small:flex-col medium:flex-1 small:pl-0 medium:pl-48">

            <div class="small:3text-xl medium:text-6xl small:pb-5 medium:pb-10">
                Connections
            </div>
            <div class="small:text-sm medium:text-2xl">
                Inspired by a scene in the animated show Arcane, I decided to make a mock submission for Designer's Edge, a design competition I helped host. Since I was on the judging panel, I couldn't submit my work, but I didn't want to miss out on the designing fun!
            </div>
            <br>
            <div class="small:text-sm medium:text-2xl">
                This project let me dive into Blender geometry nodes for the first time, allowing a new level of creativity I couldn't achieve without them. These nodes, visible in the video, are broken down roughly like so:
            </div>
            <br>
            <div class="small:text-sm medium:text-2xl">
                1) Distribute 100s of points randomly into a volumetric cube
            </div>
            <div class="small:text-sm medium:text-2xl">
                2) Instance our human model onto each point
            </div>
            <div class="small:text-sm medium:text-2xl">
                3) Calculate the rotation for each instance such that they are rotated to face the origin
            </div>
            <div class="small:text-sm medium:text-2xl">
                4) Instance a bezier curve between the two nearest instances to connect them
            </div>
            <div class="small:text-sm medium:text-2xl">
                5) Apply a cryptomatte to mask by material so we can apply compositing effects like bloom
            </div>
            <br>
            <a href="{base}/projects/designersEdge">
                Check out Designer's Edge here!
            </a>
        </div>

        <div class="flex-1 overflow-y-scroll h-full small:p-5 medium:p-10 small:space-y-5 medium:space-y-10 relative scroll-container on:scroll={handleScroll}">
            <div transition:fade|local>
                <i class="z-40 absolute bottom-5 left-1/2 fa-solid fa-angle-down text-sm" style="opacity: {Math.max(0, 1 - $scrollPosition / 100)};"></i>
            </div>
            <div>
                <!-- svelte-ignore a11y-media-has-caption -->
                <video autoplay loop playsinline disablepictureinpicture bind:muted>
                    <source src="../images/artwork/Connections/Connections.mov" type="video/mp4">
                        <tack kind="captions"></tack>
                </video>
                <button on:click={handleMute}>
                    {#if muted}
                        <i class="fa-solid fa-volume-off text-sm"></i>
                    {:else}
                        <i class="fa-solid fa-volume-high text-sm"></i>
                    {/if}
                </button>
            </div>  
            <div>
                <!-- svelte-ignore a11y-media-has-caption -->
                <video autoplay loop playsinline disablepictureinpicture bind:muted>
                    <source src="../images/artwork/Connections/Blender.mov" type="video/mp4">
                        <tack kind="captions"></tack>
                </video>
            </div>  
        </div>
    </div>
</div>