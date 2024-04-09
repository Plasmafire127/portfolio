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

    <GenNav textBack={"Back to Artwork"} pageBack={"artwork"} page={""}/>

    <div class="flex small:flex-col medium:flex-row items-center small:text-center medium:text-left justify-center small:space-x-0 medium:space-x-10 small:mx-10 medium:mx-20 small:py-20 py-16 h-full">
    

        <div class="small:flex small:flex-col medium:flex-1 small:px-10 medium:pl-48">

            <div class="small:text-3xl medium:text-6xl small:pb-5 medium:pb-10">
                Olympics of the Visual Arts Video Submission
            </div>
            <div class="small:text-sm medium:text-2xl">
                This short animation was my contribution to my teams larger submission to the OVA competition during highschool. The OVA is a New York State wide competition in which teams form and compete in creative problem-solving events. My teams chosen topic was censorship. I wanted to focus on the unknown hero, known only as "Tankman," and his courage in standing against the army approaching Tiananmen Square. This project involved setting up a green screen and keying myself into the blender scene. Our team ultimately placed second place!
            </div>
        </div>

        <div class="flex-1 overflow-y-scroll h-full small:p-5 medium:p-10 small:space-y-5 medium:space-y-10">
            <div>
                <!-- svelte-ignore a11y-media-has-caption -->
                <video autoplay loop playsinline disablepictureinpicture bind:muted>
                    <source src="../images/artwork/OVA/OVAFinal.mov" type="video/mp4">
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
            <img src="../images/artwork/OVA/tank4.png" alt="Tankman" class="hover:scale-105 transform duration-300"> 
        </div>
    </div>
</div>