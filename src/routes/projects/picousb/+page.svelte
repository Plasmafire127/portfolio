<script>
    import { fade } from "svelte/transition";
    import GenNav from "$lib/GenNav.svelte";
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    let scrollPosition = writable(0);

    onMount(() => {
        const scrollContainer = document.querySelector('.scroll-container');
        scrollContainer.addEventListener('scroll', handleScroll);
    });

    function handleScroll(event) {
        scrollPosition.set(event.target.scrollTop);
    }
</script>

<div in:fade={{delay:500,duration:500}} out:fade class="h-screen w-screen">

    <GenNav textBack={"Back to Projects"} pageBack={"projects"} page={""}/>

    <div class="flex small:flex-col medium:flex-row items-center small:text-center medium:text-left justify-center small:space-x-5 medium:space-x-10 small:mx-10 medium:mx-20 small:py-20 py-16 h-full">
    

        <div class="small:flex small:flex-col medium:flex-1 small:px-10 medium:pl-48">

            <div class="small:text-3xl medium:text-6xl small:pb-5 medium:pb-10">
                Pico BadUSB
            </div>
            <div class="small:text-sm medium:text-2xl">
                Being a broke college student, I wanted a RubberDucky without paying $70. So, I built one following
                <b>
                    <a href="https://github.com/dbisu/pico-ducky" class="hover:text-White duration-200">
                        this Github tutorial
                    </a>
                </b>
                and had a badUSB for $5!
                <br>
                <br>
                To reduce the form factor, I stipped a Micro USB to USB A adaptor and soldered shorter wiring that wraps around the pico.
                Afterwards, my co-worker and I designed a case to 3D print.
            </div>
        </div>

        <div class="flex-1 overflow-y-scroll h-full small:p-5 medium:p-10 small:space-y-5 medium:space-y-10 relative scroll-container on:scroll={handleScroll}">
            <div transition:fade|local>
                <i class="z-40 absolute bottom-5 left-1/2 fa-solid fa-angle-down text-sm" style="opacity: {Math.max(0, 1 - $scrollPosition / 100)};"></i>
            </div>
            <img src="../images/projects/picoUSB/setup.png" alt="Setup" class="hover:scale-105 transform duration-300"> 
            <img src="../images/projects/picoUSB/casing.png" alt="Casing" class="hover:scale-105 transform duration-300"> 
            <!-- svelte-ignore a11y-media-has-caption -->
            <video autoplay loop playsinline disablepictureinpicture muted>
                <source src="../images/projects/picoUSB/demo.MOV" type="video/mp4">
                    <tack kind="captions"></tack>
            </video>
        </div>
    </div>
</div>