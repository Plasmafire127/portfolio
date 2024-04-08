<script>
    import { fade } from "svelte/transition";
    import GenNav from "$lib/GenNav.svelte";
</script>

<div in:fade={{delay:500,duration:500}} out:fade class="h-screen w-screen">

    <GenNav textBack={"Back to Artwork"} pageBack={"artwork"} page={""}/>

    <div class="flex small:flex-col medium:flex-row items-center small:text-center medium:text-left justify-center small:space-x-5 medium:space-x-10 small:mx-10 medium:mx-20 small:py-20 py-16 h-full">
    

        <div class="small:flex small:flex-col medium:flex-1 small:px-10 medium:pl-48">

            <div class="small:text-3xl medium:text-6xl small:pb-5 medium:pb-10">
                Cyberpunk City
            </div>
            <div class="small:text-sm medium:text-2xl">
                 A render of a cyberpunk inspired city. 
                 <br>
                 Unfortunately, this file got lost and I was only able to recover this one render :(
            </div>
        </div>

        <div class="flex-1 p-5 space-y-10">
            <img src="../images/artwork/City/City.JPEG" alt="City" class="hover:scale-105 transform duration-300"> 
        </div>
    </div>
</div>