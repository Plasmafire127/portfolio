<script>
    import { fade } from "svelte/transition";
    import GenNav from "$lib/GenNav.svelte";
</script>

<div in:fade={{delay:500,duration:500}} out:fade class="h-screen w-screen">

    <GenNav textBack={"Back to Projects"} pageBack={"projects"} page={""} textNext={""}/>

    <div class="flex small:flex-col medium:flex-row items-center small:text-center medium:text-left justify-center small:space-x-5 medium:space-x-10 small:mx-10 medium:mx-20 small:py-20 py-16 h-full">
    

        <div class="small:flex small:flex-col medium:flex-1 small:px-10 medium:pl-48">

            <div class="small:text-3xl medium:text-6xl small:pb-5 medium:pb-10">
                Halloween Costume
            </div>
            <div class="small:text-xs medium:text-2xl">
                A completely 3D printed halloween costume! Printing various items found on thingiverse and tweaking the files in Blender, I made a shaman costume. The jaw was attached using velcro, and moved in accordance with my jaw. The staff was sanded down and measured for the skull to have a snug tolerance fit.
                <br>
                <br>
                <div class="small:text-xs text-sm">
                    *Disclaimer: stick and human not 3D printed
                </div>
            </div>
        </div>

        <div class="flex-1 overflow-y-scroll h-full small:p-5 medium:p-10 small:space-y-5 medium:space-y-10">
            <!-- svelte-ignore a11y-media-has-caption -->
            <video autoplay loop playsinline disablepictureinpicture muted>
                <source src="../images/projects/Halloween/mask.MP4" type="video/mp4">
                    <tack kind="captions"></tack>
            </video>
            <img src="../images/projects/Halloween/creation.png" alt="Manufacturing Process" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/Halloween/bones.png" alt="Bones" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/Halloween/skulls.png" alt="Skulls" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/Halloween/Cropped.png" alt="Final Result" class="hover:scale-105 transform duration-300"> 
        </div>
    </div>
</div>