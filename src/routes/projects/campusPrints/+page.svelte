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

    // These values are bound to properties of the video
	let muted = true;
    let muted2 =true;
	
	function handleMute() {
		if (muted) {
			muted = false;
		} else {
			muted = true;
		}
	}

	function handleMute2() {
		if (muted2) {
			muted2 = false;
		} else {
			muted2 = true;
		}
	}
</script>

<div in:fade={{delay:500,duration:500}} out:fade class="h-screen w-screen">

    <GenNav textBack={"Back to Projects"} pageBack={"projects"} page={""}/>

    <div class="flex small:flex-col medium:flex-row items-center small:text-center medium:text-left justify-center small:space-x-0 medium:space-x-10 small:mx-10 medium:mx-20 small:py-20 py-16 h-full">
    

        <div class="max-h-full small:mt-96 medium:mt-0 small:flex small:flex-col medium:flex-1 small:px-0">

            <div class="small:text-xl medium:text-3xl large:text-6xl small:pb-5 medium:pb-10">
                Campus Prints
            </div>
            <div class="small:text-xs medium:text-sm large:text-2xl">
                Campus Prints is a large scale advertisement project for the Emerging Technology Studio. It involves giving away 3D printed items by hiding them on campus. Every print will contain a QR code leading to the ETS website, alongside a special secret message. For each drop of prints, a stylistic video will be posted to the ETS social media accounts. This project was inspired by
                <b>
                    <a href="https://3dfiti.com/about/">
                        3dfiti.
                    </a>
                </b>
                <br>
                <br>
                A lot of research went into making the 3D printing effect. First, I had to model the structure in Blender with reference photos. After, finding a way to convert a .STL into gcode was particularly challenging. With luck, I eventually found a Blender plugin that suited my needs. Tracking the scene smoothly was an additional challenge, and I included a video testing this. If the tracking and perspective wasn't perfect, the effect would be broken as the virtual model gets swapped with the real one! Matching the color grading was also important to sell the effect. Finally, I edited everything together in Davinci Resolve. I had lots of fun figuring out exactly how to make this animation come alive, and am pleased with the results. 
            </div>
        </div>

        <div class="flex-1 overflow-y-scroll h-full small:p-5 medium:p-10 small:space-y-5 medium:space-y-10 relative scroll-container on:scroll={handleScroll}">
            <div transition:fade|local>
                <i class="z-40 absolute bottom-5 left-1/2 fa-solid fa-angle-down text-sm" style="opacity: {Math.max(0, 1 - $scrollPosition / 100)};"></i>
            </div>
            <div>
                <!-- svelte-ignore a11y-media-has-caption -->
                <video autoplay loop playsinline disablepictureinpicture bind:muted>
                    <source src="../images/projects/CampusPrints/CampusPrints.mov" type="video/mp4">
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

              <!-- svelte-ignore a11y-media-has-caption -->
              <video autoplay loop playsinline disablepictureinpicture muted>
                <source src="../images/projects/CampusPrints/Tracked Test.mp4" type="video/mp4">
                    <tack kind="captions"></tack>
            </video>

            <!-- svelte-ignore a11y-media-has-caption -->
            <video autoplay loop playsinline disablepictureinpicture bind:muted>
                <source src="../images/projects/CampusPrints/TheObjectETS.mov" type="video/mp4">
                    <tack kind="captions"></tack>
            </video>
                <!-- svelte-ignore a11y-media-has-caption -->
                <video autoplay loop playsinline disablepictureinpicture bind:muted={muted2} class="scale-110">
                    <source src="../images/projects/CampusPrints/TheObjectRender.mov" type="video/mp4">
                        <tack kind="captions"></tack>
                </video>
                <button on:click={handleMute2}>
                    {#if muted2}
                        <i class="fa-solid fa-volume-off text-sm"></i>
                    {:else}
                        <i class="fa-solid fa-volume-high text-sm"></i>
                    {/if}
                </button>
        </div>
    </div>
</div>