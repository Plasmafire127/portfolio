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
                American Riad
            </div>
            <div class="small:text-sm medium:text-2xl">
                The American Riad is a long-term art-and-housing-justice venture in Detroit’s North End. Ghana ThinkTank and local partners are converting a cluster of buildings and lots into a traditional Islamic riad: affordable communal homes and neighborhood-serving businesses encircling a beautifully crafted public courtyard for gatherings, gardening, performances and exhibitions.
            </div>
            <br>
            <div class="small:text-sm medium:text-2xl">
                I was put in contact with one of the founders of the project who was looking to brainstorm more creative architectural ideas. Using Blender, I recreated the house, sculpture, and surrounding area while adding a few variations as a base for new ideas. We are currently iterating closer to a design we are both happy with. If all goes well, these designs might get constructed!
            </div>

            <br>
            <a href="https://www.ghanathinktank.org/current-projects-2/2015/10/2/detroit">
                Check out Ghana Think Tank's American Riad project here!
            </a>
        </div>

        <div class="flex-1 overflow-y-scroll h-full small:p-5 medium:p-10 small:space-y-5 medium:space-y-10 relative scroll-container on:scroll={handleScroll}">
            <img src="../images/projects/Riad/streetview.png" alt="streetview" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/Riad/glass1.png" alt="glass1" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/Riad/glass2.png" alt="glass2" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/Riad/glass3.png" alt="glass3" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/Riad/balcony1.png" alt="balcony1" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/Riad/balcony2.png" alt="balcony2" class="hover:scale-105 transform duration-300"> 
        </div>
    </div>
</div>