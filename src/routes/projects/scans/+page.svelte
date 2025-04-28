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
    

        <div class="small:flex small:flex-col medium:flex-1 small:px-10 medium:pl-48">

            <div class="small:text-3xl medium:text-6xl small:pb-5 medium:pb-10">
                3D scanning
            </div>
            <div class="small:text-sm medium:text-2xl">
                An evolving project in which students of a sculpting art class come in for 3D portrait scans. Initially, we used Polycam on Ipads and I'd clean up the .STL files using blender mesh editing and sculpting. Recently, we invested in an Einstar Shining 3D scanner and the difference has been incredible! Once finalized, we 3D print the scans for the students to use as a sculpting references.
            </div>
            <div class="small:text-sm medium:text-2xl">
                The images involve a mix between old and new scanners to show our equipment upgrade. Additionally, I've added a render of two Greek-style busts I made using Blender and our new scanner.
            </div>
        </div>

        <div class="flex-1 overflow-y-scroll h-full small:p-5 medium:p-10 small:space-y-5 medium:space-y-10 relative scroll-container on:scroll={handleScroll}">
            <div transition:fade|local>
                <i class="z-40 absolute bottom-10 left-1/2 fa-solid fa-angle-down text-sm" style="opacity: {Math.max(0, 1 - $scrollPosition / 100)};"></i>
            </div>
            <img src="../images/projects/scans/bustrender.png" alt="bust render" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/scans/sculpt.JPG" alt="Sculpting class" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/scans/sculpt1.JPG" alt="Sculpting example 1" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/scans/sculpt2.JPG" alt="Sculpting example 2" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/scans/difference.png" alt="Old vs New scanner" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/scans/sculpts.png" alt="Blender Render" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/scans/professor.png" alt="Polycam" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/scans/3Dprint.png" alt="print" class="hover:scale-105 transform duration-300"> 
        </div>
    </div>
</div>