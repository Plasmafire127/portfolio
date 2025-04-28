<script>
    import { fade } from "svelte/transition";
    import GenNav from "$lib/GenNav.svelte";
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    // These values are bound to properties of the video
	let muted = true;
	
	function handleMute() {
		if (muted) {
			muted = false;
		} else {
			muted = true;
		}
	}

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
    

        <div class="small:flex small:flex-col medium:flex-1 small:px-10 medium:pl-48">

            <div class="small:text-3xl medium:text-6xl small:pb-5 medium:pb-10">
                Designer's Edge
            </div>
            <div class="small:text-sm medium:text-2xl">
                This event started as an ETS intern's capstone project, but quickly became a team effort. Designer's Edge is a free and welcoming competitive event in which students of any background/major have 48 hours to create and submit a project under nearly any medium - so long as it follows the theme.  The ETS hopes for this event to become an annual competition, strengthening the bridge between the multiple clubs and schools that exist within Binghamton University.
            </div>
            <br>
            <div class="small:text-sm medium:text-2xl">
                The day's were jam packed with workshops from multiple campus clubs and food catering from our generous sponsors (shoutout Redbull!), all hosted within Binghamton University's Innovation Lab. 
            </div>
            <br>
            <div class="small:text-sm medium:text-2xl">
                I provided a helping hand in planning and hosting the event, as well as being a Blender workshop host and competition Judge. In my moments of downtime, I snuck in some work on my own submission! 
            </div>
            <br>
            <a href="{base}/artwork/connections">
                Check out my mock submission here!
            </a>
        </div>

        <div class="flex-1 overflow-y-scroll h-full small:p-5 medium:p-10 small:space-y-5 medium:space-y-10 relative scroll-container on:scroll={handleScroll}">
            <img src="../images/projects/DesignersEdge/Thumbnail.png" alt="Award winners" class="hover:scale-105 transform duration-300"> 
            <div transition:fade|local>
                <i class="z-40 absolute bottom-5 left-1/2 fa-solid fa-angle-down text-sm" style="opacity: {Math.max(0, 1 - $scrollPosition / 100)};"></i>
            </div>
            <div>
                <!-- svelte-ignore a11y-media-has-caption -->
                <video autoplay loop playsinline disablepictureinpicture bind:muted>
                    <source src="../images/projects/DesignersEdge/WorkshopMov1.MOV" type="video/mp4">
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
                    <source src="../images/projects/DesignersEdge/WorkshopMov2.MOV" type="video/mp4">
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
            <img src="../images/projects/DesignersEdge/Workshop6.png" alt="workshop" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/DesignersEdge/Food2.png" alt="Food2" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/DesignersEdge/Food.png" alt="Food" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/DesignersEdge/Lunch.png" alt="Lunch" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/DesignersEdge/Redbull1.png" alt="Redbull1" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/DesignersEdge/Redbull2.png" alt="Redbull2" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/DesignersEdge/Crowd.png" alt="Crowd" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/DesignersEdge/Judge1.png" alt="Judging" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/DesignersEdge/Judge2.png" alt="Judging" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/DesignersEdge/Judge3.png" alt="Judging" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/DesignersEdge/Judge4.png" alt="Judging" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/DesignersEdge/Judge5.png" alt="Judging" class="hover:scale-105 transform duration-300"> 




        </div>
    </div>
</div>