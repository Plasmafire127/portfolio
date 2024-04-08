<script>
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import Nav from "$lib/Nav.svelte";
        
    let mouseMoved = false;

    onMount(() => 
{
    window.addEventListener('mousemove', () => {
        mouseMoved = true;
    });
});
</script>

<div out:fade>
    {#if !mouseMoved}
    <div class="h-screen flex flex-row-1 items-center justify-center small:text-4xl medium:text-6xl large:text-9xl">
        <div transition:fade={{delay:500,duration:500}}>
            <p>
                Welcome.
            </p>
        </div>
    </div>
    {/if}

    {#if mouseMoved}
        <div in:fade={{delay:1000,duration:500}} out:fade>
            <Nav />
            <div class="flex min-h-screen items-center justify-center justify-items-center p-10 small:text-2xl medium:text-4xl large:text-5xl">
                <a href="/artwork" class="hover:scale-105 hover:text-White duration-200">
                    Artwork
                </a>  
                <hr width="25%" size="2" class="-rotate-45 bg-Cream">
                <a href="/projects" class="hover:scale-105 hover:text-White duration-200">
                    Projects
                </a>  
            </div>
        </div>
{/if}
</div>

