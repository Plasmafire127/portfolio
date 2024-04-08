<script>
    import { fade } from "svelte/transition";
    import GenNav from "$lib/GenNav.svelte";
</script>

<div in:fade={{delay:500,duration:500}} out:fade class="h-screen w-screen">

    <GenNav textBack={"Back to Projects"} pageBack={"projects"} page={""}/>

    <div class="flex small:flex-col medium:flex-row items-center small:text-center medium:text-left justify-center small:space-x-5 medium:space-x-10 small:mx-10 medium:mx-20 small:py-20 py-16 h-full">
    

        <div class="small:flex small:flex-col medium:flex-1 small:px-10 medium:pl-48">

            <div class="small:text-3xl medium:text-6xl small:pb-5 medium:pb-10">
                Gamecube Controller Fix
            </div>
            <div class="small:text-sm medium:text-2xl">
                My friend's Gamecube controller met its untimely demise to his dog. In an attempt to fix it, he let me dissasemble the controller to inspect the chewed coord. This was my first time soldering and dissasembling an electronic, but I was able to fix and get it working for a few weeks! Eventually, the wires got pulled on too hard and my fix became un-fixed.
            </div>
        </div>

        <div class="flex-1 overflow-y-scroll h-full small:p-5 medium:p-10 small:space-y-5 medium:space-y-10">
            <img src="../images/projects/GCC/far.png" alt="far" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/GCC/wires.png" alt="Wires" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/GCC/close.png" alt="close" class="hover:scale-105 transform duration-300"> 
        </div>
    </div>
</div>