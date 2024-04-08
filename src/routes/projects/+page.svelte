<script>
    import { fade } from "svelte/transition";
    import GenNav2 from "$lib/GenNav2.svelte";
    import { base } from '$app/paths';
</script>


<div in:fade={{delay:500,duration:500}} out:fade class="h-screen">

    
    <GenNav2 textBack={"Back to Home"} page={"Projects"} textNext={"Artwork"} pageNext={"artwork"}/>


    <div class="small:px-5 medium:px-32 large:px-96 pt-20 grid grid-cols-2 grid-flow-row gap-10 items-center">

        <a href="{base}/projects/campusPrints">
            <div class="image hover:scale-105 transition ease-in-out duration-300">    
                <img src="images/projects/CampusPrints/TheObjectTitled.png" alt="The Object" class="w-full">
                <div class="imageOverlay">
                    <div class="medium:imageTitle small:imageTitleSmall">
                        Campus Prints
                    </div>
                    <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                        An ad campaign for the Emerging Technology Studio
                    </div>
                </div>      
            </div>
        </a>

        <a href="{base}/projects/SHPE">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/projects/SHPEBot/SHPEAd.jpeg" alt="Robot Workshop" class="w-full">
                <div class="imageOverlay">
                    <div class="medium:imageTitle small:imageTitleSmall">
                        Robot Blender Workshop
                    </div>
                    <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                        A workshop I hosted, collaborating with the Society of Hispanic Professional Engineers
                    </div>
                </div>      
            </div>
        </a>

        <a href="{base}/projects/Hollow">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/projects/Hollow/HollowKnightAd.png" alt="Hollow Knight Workshop" class="w-full ">
                <div class="imageOverlay">
                    <div class="medium:imageTitle small:imageTitleSmall">
                        Hollow Knight Blender Workshop
                    </div>
                    <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                        A workshop I hosted, collaborating with the Video Game Association group
                    </div>
                </div>      
            </div>
        </a>

        <a href="{base}/projects/ETSWebsite">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/projects/ETSWebsite/Thumbnail.png" alt="ETS Website" class="w-full ">
                <div class="imageOverlay">
                    <div class="medium:imageTitle small:imageTitleSmall">
                        ETS Website
                    </div>
                    <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                        Some website pages from ETS (WIP)
                    </div>
                </div>      
            </div>
        </a>
    
        <a href="{base}/projects/campus">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/projects/Campus/Campus.jpg" alt="Campus" class="w-full  object-fill">
                <div class="imageOverlay">
                    <div class="medium:imageTitle small:imageTitleSmall">
                        Campus
                    </div>
                    <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                        A 3D printed map of Binghamton University's campus
                    </div>
                </div>      
            </div>
        </a>
        

    <a href="{base}/projects/dove">
        <div class="image hover:scale-105 transition ease-in-out duration-300">
            <img src="images/projects/Dove/Dove.jpg" alt="Dove" class="w-full ">
            <div class="imageOverlay">
                <div class="medium:imageTitle small:imageTitleSmall">
                    Dove: Connectable Shelves
                </div>
                <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                    A prototype modular shelf with an Apple inspired advertisement
                </div>
            </div>      
        </div>
    </a>

    <a href="{base}/projects/GCC">
        <div class="image hover:scale-105 transition ease-in-out duration-300">
            <img src="images/projects/GCC/farCrop.png" alt="GCC" class="w-full">
            <div class="imageOverlay">
                <div class="medium:imageTitle small:imageTitleSmall">
                    Gamecube Controller Fix
                </div>
                <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                    Fixing a dog-bitten Gamecube controller
                </div>
            </div>      
        </div>
    </a>

    <a href="{base}/projects/picousb">
        <div class="image hover:scale-105 transition ease-in-out duration-300">
            <img src="images/projects/picoUSB/setup.png" alt="GCC" class="w-full">
            <div class="imageOverlay">
                <div class="medium:imageTitle small:imageTitleSmall">
                    Pico BadUSB
                </div>
                <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                    Creating a BadUSB with a Raspberry Pi Pico
                </div>
            </div>      
        </div>
    </a>

    <a href="{base}/projects/NFC">
        <div class="image hover:scale-105 transition ease-in-out duration-300">
            <img src="images/projects/NFC/frontGradient.png" alt="NFC" class="w-full">
            <div class="imageOverlay">
                <div class="medium:imageTitle small:imageTitleSmall">
                    NFC Album
                </div>
                <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                    Designing a decorative smart album
                </div>
            </div>      
        </div>
    </a>

    <a href="{base}/projects/scans">
        <div class="image hover:scale-105 transition ease-in-out duration-300">
            <img src="images/projects/scans/3Dprint.png" alt="sculptures" class="w-full">
            <div class="imageOverlay">
                <div class="medium:imageTitle small:imageTitleSmall">
                    3D scanning
                </div>
                <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                    3D scanning and 3D printing students of an art class
                </div>
            </div>      
        </div>
    </a>

    </div>

    <a href="{base}/projects/halloween">
        <div class="image flex justify-center">
            <img src="images/projects/Halloween/Cropped2.png" alt="Halloween Costume" class="small:w-48 medium:w-64 large:w-96 small:mt-20 medium:mt-10">
            <div class="imageOverlay">
                <div class="medium:imageTitle small:imageTitleSmall"> 
                    Halloween Costume
                </div>
                <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                    A 3D printed halloween shaman costume
                </div>
            </div>      
        </div>
    </a>

</div>
