<script>
    import { fade } from "svelte/transition";
    import GenNav from "$lib/GenNav.svelte";
</script>

<div in:fade={{delay:500,duration:500}} out:fade class="h-screen w-screen">

    <GenNav textBack={"Back to Projects"} pageBack={"projects"} page={""}/>

    <div class="flex small:flex-col medium:flex-row items-center small:text-center medium:text-left justify-center small:space-x-5 medium:space-x-10 small:mx-10 medium:mx-20 small:py-20 py-16 h-full">
    

        <div class="small:flex small:flex-col medium:flex-1 small:px-10 medium:pl-48">

            <div class="small:text-3xl medium:text-6xl small:pb-5 medium:pb-10">
                Robot Blender Workshop
            </div>
            <div class="small:text-sm medium:text-2xl">
                A Blender Workshop I hosted in collaboration with the Society of Hispanic Professional Engineers. Through this workshop, over 30 SHPE students learned how to make a robot in Blender!
            </div>
        </div>

        <div class="flex-1 overflow-y-scroll h-full small:p-5 medium:p-10 small:space-y-5 medium:space-y-10">
            <img src="../images/projects/SHPEBot/SHPEBot.png" alt="SHPEBot" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/SHPEBot/SHPEAd.jpeg" alt="SHPEAd" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/SHPEBot/SHPE1.jpeg" alt="SHPE1" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/SHPEBot/SHPE2.jpeg" alt="SHPE2" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/SHPEBot/SHPE3.jpeg" alt="SHPE3" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/SHPEBot/SHPE4.jpeg" alt="SHPE4" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/SHPEBot/SHPE5.jpeg" alt="SHPE5" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/SHPEBot/SHPE6.jpeg" alt="SHPE6" class="hover:scale-105 transform duration-300"> 
        </div>
    </div>
</div>