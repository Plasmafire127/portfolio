<script>
    import { fade } from "svelte/transition";
    import GenNav2 from "$lib/GenNav2.svelte";
    import { base } from '$app/paths';
</script>

    <div in:fade={{delay:500,duration:500}} out:fade>

        <GenNav2 textBack={"Back to Home"} page={"Artwork"} textNext={"Projects"} pageNext={"projects"} />


    <div class="h-screen pt-20 small:mx-5 medium:mx-20 grid small:grid-cols-2 medium:grid-cols-3 grid-flow-row small:gap-5 medium:gap-10">

        <a href="{base}/artwork/pixel">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/Pixel/thaumaturge.png" alt="pixelart" class="imageImg  "> 
                <div class="imageOverlay">
                    <div class="medium:imageTitle small:imageTitleSmall">
                        3D-to-2D Pipeline
                    </div>
                    <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                        Transforming 3D models into 2D pixelart
                    </div>
                </div>      
            </div>
        </a>

        <a href="{base}/artwork/ETS">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/ETS/Loft2.png" alt="ETS" class="imageImg  "> 
                <div class="imageOverlay">
                    <div class="medium:imageTitle small:imageTitleSmall">
                        ETS
                    </div>
                    <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                        A revisioning of the Emerging Technology Studio
                    </div>
                </div>      
            </div>
        </a>

        <a href="{base}/artwork/ETSPrusa">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/ETSPrusa/ETSPrusa.png" alt="ETSPrusa" class = " ">
                <div class="imageOverlay">
                    <div class="medium:imageTitle small:imageTitleSmall">
                        ETS Prusa
                    </div>
                    <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                        The ETS on a Prusa i3 MK3S+!
                    </div>
                </div>      
            </div>
        </a>

        <a href="{base}/artwork/dormatory">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/Dorm/Render5.png" alt="Dorm" > 
                <div class="imageOverlay">
                    <div class="medium:imageTitle small:imageTitleSmall">
                        Dormatory 
                    </div>
                    <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                        A mock design of my future dormatory room
                    </div>
                </div>      
            </div>
        </a>

        <a href="{base}/artwork/traveler">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/Traveler/Traveler4.png" alt="Traveler" >
                <div class="imageOverlay">
                    <div class="medium:imageTitle small:imageTitleSmall">
                        Traveler Series
                    </div>
                    <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                        A series of renders featuring an adventurer traversing abstract landscapes
                    </div>
                </div>      
            </div>
        </a>

        <a href="{base}/artwork/city">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/City/City.JPEG" alt="City" >
                <div class="imageOverlay">
                    <div class="medium:imageTitle small:imageTitleSmall">
                        Cyberpunk City
                    </div>
                    <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                        A cyberpunk inspired city
                    </div>
                </div>      
            </div>
        </a>

        <a href="{base}/artwork/chess">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/Chess/Japanese Scene.png" alt="JapaneseScene" >
                <div class="imageOverlay">
                    <div class="medium:imageTitle small:imageTitleSmall">
                        Chess gone <strike> wrong</strike> right
                    </div>
                    <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                        Originally modeling chess pieces, inspiration struck to create this render
                    </div>
                </div>      
            </div>
        </a>
        <a href="{base}/artwork/deer">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/Deer/Deer.png" alt="Deer" >
                <div class="imageOverlay">
                    <div class="medium:imageTitle small:imageTitleSmall">
                        Deer 
                    </div>
                    <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                        A deer during dawn
                    </div>
                </div>      
            </div>
        </a>

        <a href="{base}/artwork/deskFan">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/Desk Fan/Fan.png" alt="Fan" >
                <div class="imageOverlay">
                    <div class="medium:imageTitle small:imageTitleSmall">
                        Desk fan
                    </div>
                    <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                        Modeling challenge of an amazon product
                    </div>
                </div>      
            </div>
        </a>

        <a href="{base}/artwork/pollutant">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/Pollution/Pollutant.png" alt="Pollutant" >
                <div class="imageOverlay">
                    <div class="medium:imageTitle small:imageTitleSmall">
                        Pollution short-story
                    </div>
                    <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                        A short animation about pollution corrupting nature
                    </div>
                </div>      
            </div>
        </a>

        <a href="{base}/artwork/OVA">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/OVA/tank4.png" alt="OVA" >
                <div class="imageOverlay">
                    <div class="medium:imageTitle small:imageTitleSmall">
                        Tankman
                    </div>
                    <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                        My Olympic Visual Art video submission about censorship
                    </div>
                </div>      
            </div>
        </a>

        <a href="{base}/artwork/sword">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/Sword/Sword3.png" alt="Sword" >
                <div class="imageOverlay">
                    <div class="medium:imageTitle small:imageTitleSmall">
                        Excalibur
                    </div>
                    <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                        A short animation featuring the legendary sword Excalibur
                    </div>
                </div>      
            </div>
        </a>

        <a href="{base}/artwork/robot">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/Robot/Jet1.png" alt="Jet" >
                <div class="imageOverlay">
                    <div class="medium:imageTitle small:imageTitleSmall">
                        Robot
                    </div>
                    <div class="medium:imageDescription small:imageDescriptionSmall text-center">
                        A futuristic robot design
                    </div>
                </div>      
            </div>
        </a>

    </div>
</div>