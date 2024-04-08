<script>
    import { fade } from "svelte/transition";
    import GenNav from "$lib/GenNav.svelte";

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

    <GenNav textBack={"Back to Projects"} pageBack={"projects"} page={""}/>

    <div class="flex small:flex-col medium:flex-row items-center small:text-center medium:text-left justify-center small:space-x-5 medium:space-x-10 small:mx-10 medium:mx-20 small:py-20 py-16 h-full">
    

        <div class="small:flex small:flex-col medium:flex-1 small:px-10 medium:pl-48">

            <div class="small:text-3xl medium:text-6xl small:pb-5 medium:pb-10">
                DOVE: Connectable Shelves.
            </div>
            <div class="small:text-sm medium:text-2xl">
                This project came to fruition when I tried testing how capable Blender is for designing something for 3D printing. Afterwards, I made an Apple inspired advertisement for them! 
            </div>
        </div>

        <div class="flex-1 overflow-y-scroll h-full small:p-5 medium:p-10 small:space-y-5 medium:space-y-10">
            <div>
                <!-- svelte-ignore a11y-media-has-caption -->
                <video autoplay loop playsinline disablepictureinpicture bind:muted>
                    <source src="../images/projects/Dove/DOVE.mp4" type="video/mp4">
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
            <img src="../images/projects/Dove/Dove.jpg" alt="Dove Shelf" class="hover:scale-105 transform duration-300"> 
        </div>
    </div>
</div>