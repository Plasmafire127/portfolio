<script>
    import { fade } from "svelte/transition";
    import GenNav from "$lib/GenNav.svelte";
</script>

<div in:fade={{delay:500,duration:500}} out:fade class="h-screen w-screen">

    <GenNav textBack={"Back to Projects"} pageBack={"projects"} page={""} textNext={""}/>

    <div class="flex small:flex-col medium:flex-row items-center small:text-center medium:text-left justify-center small:space-x-5 medium:space-x-10 small:mx-10 medium:mx-20 small:py-20 py-16 h-full">
    

        <div class="small:flex small:flex-col medium:flex-1 small:px-10 medium:pl-48">

            <div class="small:text-3xl medium:text-6xl small:pb-5 medium:pb-10">
                Hollow Knight Blender Workshop
            </div>
            <div class="small:text-sm medium:text-2xl">
                A Blender Workshop I hosted in collaboration with the Video Game Association group. Through this workshop, over 10 VGA students learned how to make a robot in Blender!
            </div>
        </div>

        <div class="flex-1 overflow-y-scroll h-full small:p-5 medium:p-10 small:space-y-5 medium:space-y-10">
            <img src="../images/projects/Hollow/GDGWorkshop.png" alt="Ad" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/Hollow/image.png" alt="Ad" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/Hollow/Workshop.png" alt="Ad" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/Hollow/Workshop2.png" alt="Ad" class="hover:scale-105 transform duration-300">
            <img src="../images/projects/Hollow/Workshop3.png" alt="Ad" class="hover:scale-105 transform duration-300">  
        </div>
    </div>
</div>