<script>
    import { fade } from "svelte/transition";
    import GenNav from "$lib/GenNav.svelte";
</script>

<div in:fade={{delay:500,duration:500}} out:fade class="h-screen w-screen">

    <GenNav textBack={"Back to Artwork"} pageBack={"artwork"} page={""}/>

        <div class="flex small:flex-col medium:flex-row items-center small:text-center medium:text-left justify-center small:space-x-5 medium:space-x-10 small:mx-10 medium:mx-20 small:py-20 py-16 h-full">
    

            <div class="small:flex small:flex-col medium:flex-1 small:px-10 medium:pl-48">
    
                <div class="small:text-3xl medium:text-6xl small:pb-5 medium:pb-10">
                    Dormatory Design 
                    <br>
                    Studio Revisioned
                </div>
                <div class="small:text-sm medium:text-2xl">
                    Wanting to move in with a gameplan, I modeled my freshman dormatory room with the  intent to figure out furniture arrangement. For sophomore year, I stepped it up and did a full decorative design!                </div>
            </div>

        <div class="flex-1 overflow-y-scroll h-full small:p-5 medium:p-10 small:space-y-5 medium:space-y-10">
            <img src="../images/artwork/Dorm/Dorm Rooms.png" alt="Freshman Dormatory" class="hover:scale-105 transform duration-300"> 
            <img src="../images/artwork/Dorm/Render3.png" alt="Sophomore Dormatory1" class="hover:scale-105 transform duration-300"> 
            <img src="../images/artwork/Dorm/Render4.png" alt="Sophomore Dormatory2" class="hover:scale-105 transform duration-300"> 
            <img src="../images/artwork/Dorm/Render5.png" alt="Sophomore Dormatory3" class="hover:scale-105 transform duration-300"> 
        </div>
    </div>
</div>