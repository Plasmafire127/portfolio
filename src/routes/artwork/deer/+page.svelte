<script>
    import { fade } from "svelte/transition";
    import GenNav from "$lib/GenNav.svelte";
</script>

<div in:fade={{delay:500,duration:500}} out:fade class="h-screen w-screen">

    <GenNav textBack={"Back to Artwork"} pageBack={"artwork"} page={""} textNext={""}/>

    <div class="flex small:flex-col medium:flex-row items-center small:text-center medium:text-left justify-center small:space-x-5 medium:space-x-10 small:mx-10 medium:mx-20 small:py-20 py-16 h-full">
    

        <div class="small:flex small:flex-col medium:flex-1 small:px-10 medium:pl-48">

            <div class="small:text-3xl medium:text-6xl small:pb-5 medium:pb-10">
                Deer
            </div>
            <div class="small:text-sm medium:text-2xl">
                One of my first blender projects, I learned more about asset management and volumetrics with the help of a few tutorials.
            </div>
        </div>

        <div class="flex-1 p-10 space-y-10">
            <img src="../images/artwork/Deer/Deer.png" alt="Deer" class="hover:scale-105 transform duration-300"> 
        </div>
    </div>
</div>