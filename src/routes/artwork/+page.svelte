<script>
    import { fade } from "svelte/transition";
    import GenNav from "$lib/GenNav.svelte";
</script>

    <div in:fade={{delay:500,duration:500}} out:fade>

        <GenNav textBack={"Back to Home"} pageBack={""} page={"Artwork"} textNext={"Projects"} pageNext={"projects"} />


    <div class="h-screen pt-20 small:mx-5 medium:mx-20 grid small:grid-cols-2 medium:grid-cols-3 grid-flow-row small:gap-5 medium:gap-10">

        <a href="/artwork/ETS">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/ETS/Loft2.png" alt="ETS" class="imageImg  "> 
                <div class="imageOverlay">
                    <div class="imageTitle">
                        ETS
                    </div>
                    <div class="imageDescription">
                        A revisioning of the Emerging Technology Studio
                    </div>
                </div>      
            </div>
        </a>

        <a href="/artwork/ETSPrusa">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/ETSPrusa/ETSPrusa.png" alt="ETSPrusa" class = " ">
                <div class="imageOverlay">
                    <div class="imageTitle">
                        ETS Prusa
                    </div>
                    <div class="imageDescription">
                        The ETS on a Prusa i3 MK3S+!
                    </div>
                </div>      
            </div>
        </a>

        <a href="/artwork/dormatory">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/Dorm/Render5.png" alt="Dorm" > 
                <div class="imageOverlay">
                    <div class="imageTitle">
                        Dormatory 
                    </div>
                    <div class="imageDescription">
                        A mock design of my future dormatory room
                    </div>
                </div>      
            </div>
        </a>

        <a href="/artwork/traveler">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/Traveler/Traveler4.png" alt="Traveler" >
                <div class="imageOverlay">
                    <div class="imageTitle">
                        Traveler Series
                    </div>
                    <div class="imageDescription">
                        A series of renders featuring an adventurer traversing abstract landscapes
                    </div>
                </div>      
            </div>
        </a>

        <a href="/artwork/city">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/City/City.JPEG" alt="City" >
                <div class="imageOverlay">
                    <div class="imageTitle">
                        Cyberpunk City
                    </div>
                    <div class="imageDescription">
                        A cyberpunk inspired city
                    </div>
                </div>      
            </div>
        </a>

        <a href="/artwork/chess">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/Chess/Japanese Scene.png" alt="JapaneseScene" >
                <div class="imageOverlay">
                    <div class="imageTitle">
                        Chess gone <strike> wrong</strike> right
                    </div>
                    <div class="imageDescription">
                        Originally modeling chess pieces, inspiration struck to create this render
                    </div>
                </div>      
            </div>
        </a>
        <a href="/artwork/deer">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/Deer/Deer.png" alt="Deer" >
                <div class="imageOverlay">
                    <div class="imageTitle">
                        Deer 
                    </div>
                    <div class="imageDescription">
                        A deer during dawn
                    </div>
                </div>      
            </div>
        </a>

        <a href="/artwork/deskFan">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/Desk Fan/Fan.png" alt="Fan" >
                <div class="imageOverlay">
                    <div class="imageTitle">
                        Desk fan
                    </div>
                    <div class="imageDescription">
                        Modeling challenge of an amazon product
                    </div>
                </div>      
            </div>
        </a>

        <a href="/artwork/pollutant">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/Pollution/Pollutant.png" alt="Pollutant" >
                <div class="imageOverlay">
                    <div class="imageTitle">
                        Pollution short-story
                    </div>
                    <div class="imageDescription">
                        A short animation about pollution corrupting nature
                    </div>
                </div>      
            </div>
        </a>

        <a href="/artwork/OVA">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/OVA/tank4.png" alt="OVA" >
                <div class="imageOverlay">
                    <div class="imageTitle">
                        Tankman
                    </div>
                    <div class="imageDescription">
                        My Olympic Visual Art video submission about censorship
                    </div>
                </div>      
            </div>
        </a>

        <a href="/artwork/sword">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/Sword/Sword3.png" alt="Sword" >
                <div class="imageOverlay">
                    <div class="imageTitle">
                        Excalibur
                    </div>
                    <div class="imageDescription">
                        A short animation featuring the legendary sword Excalibur
                    </div>
                </div>      
            </div>
        </a>

        <a href="/artwork/robot">
            <div class="image hover:scale-105 transition ease-in-out duration-300">
                <img src="images/artwork/Robot/Jet1.png" alt="Jet" >
                <div class="imageOverlay">
                    <div class="imageTitle">
                        Robot
                    </div>
                    <div class="imageDescription">
                        A futuristic robot design
                    </div>
                </div>      
            </div>
        </a>

    </div>
</div>