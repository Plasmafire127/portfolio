<script>
    import { fade } from "svelte/transition";
    import GenNav from "$lib/GenNav.svelte";
</script>

<div in:fade={{delay:500,duration:500}} out:fade class="h-screen w-screen">

    <GenNav textBack={"Back to Projects"} pageBack={"projects"} page={""}/>

    <div class="flex small:flex-col medium:flex-row items-center small:text-center medium:text-left justify-center small:space-x-5 medium:space-x-10 small:mx-10 medium:mx-20 small:py-20 py-16 h-full">
    

        <div class="small:flex small:flex-col medium:flex-1 small:px-10 medium:pl-48">

            <div class="small:text-3xl medium:text-6xl small:pb-5 medium:pb-10">
                Emerging Technology Studio Website
            </div>
            <div class="small:text-sm medium:text-2xl">
                A few webpages I designed for the Emerging Technology Studio. Currently, we are in the processes of rehauling the website (See figma concepts).
            </div>
        </div>

        <div class="flex-1 overflow-y-scroll h-full small:p-5 medium:p-10 small:space-y-5 medium:space-y-10">
            <img src="../images/projects/ETSWebsite/Thumbnail.png" alt="2D Design" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/ETSWebsite/Cricut.png" alt="Cricut" class="hover:scale-105 transform duration-300"> 
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="../images/projects/ETSWebsite/PhotoEditing.png" alt="Photo Editing" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/ETSWebsite/VideoEditing.png" alt="Video Editing" class="hover:scale-105 transform duration-300">
            <!-- svelte-ignore a11y-media-has-caption -->
            <video autoplay loop playsinline disablepictureinpicture>
                <source src="../images/projects/ETSWebsite/TheObjectETS.mov" type="video/mp4">
                    <tack kind="captions"></tack>
            </video>
            <img src="../images/projects/ETSWebsite/Figma2.png" alt="Figma Pages" class="hover:scale-105 transform duration-300">  
            <img src="../images/projects/ETSWebsite/Figma.png" alt="Figma AdminDash" class="hover:scale-105 transform duration-300">  
        </div>
    </div>
</div>