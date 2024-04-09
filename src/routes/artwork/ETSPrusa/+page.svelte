<script>
    import { fade } from "svelte/transition";
    import GenNav from "$lib/GenNav.svelte";
    
</script>

<div in:fade={{delay:500,duration:500}} out:fade class="h-screen w-screen">

    <GenNav textBack={"Back to Artwork"} pageBack={"artwork"} page={""}/>

    <div class="flex small:flex-col medium:flex-row items-center small:text-center medium:text-left justify-center small:space-x-5 medium:space-x-10 small:mx-10 medium:mx-20 small:py-20 py-16 h-full">
    

        <div class="small:flex small:flex-col medium:flex-1 small:pl-0 medium:pl-48">

            <div class="small:3text-xl medium:text-6xl small:pb-5 medium:pb-10">
                Emerging Technology Studio Prusa i3 MK3S+
            </div>
            <div class="small:text-sm medium:text-2xl">
                The Emerging Technology Studio getting 3D printed on a Prusa i3 MK3S+! This was a fun project after modeling the ETS revisioning. I separated all moving parts and animated them through keyframes. Later, I used Blender geometry nodes to create an ASCII version of the animation (hover to view).
            </div>
        </div>

            <div class="flex-1 grid px-10 pb-10 h-full items-center small:pt-10 medium:overflow-x-hidden">
                <!-- svelte-ignore a11y-media-has-caption -->
                <video autoplay loop playsinline disablepictureinpicture class="col-start-1 row-start-1 hover:opacity-0 scale-200">
                    <source src="../images/artwork/ETSPrusa/ETS_Prusa.mov" type="video/mp4">
                        <tack kind="captions"></tack>
                </video>
                <!-- svelte-ignore a11y-media-has-caption -->
                <video autoplay loop playsinline disablepictureinpicture class="col-start-1 row-start-1 opacity-0 hover:opacity-100 scale-210">
                    <source src="../images/artwork/ETSPrusa/ASCII.mov" type="video/mp4">
                        <tack kind="captions"></tack>
                </video>
            </div>
        </div>
    </div>
