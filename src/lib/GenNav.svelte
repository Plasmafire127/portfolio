<script>
    export let textBack;
    export let pageBack;
    export let page;
    import { base } from '$app/paths';
</script>
<div class="fixed w-screen h-16 flex small:text-sm medium:text-xl justify-between items-center z-40 py-5 small:px-5 medium:px-20 bg-Black drop-shadow-2xl shadow-2xl">
    <a href="{base}/{pageBack}" class="hover:scale-105 hover:text-White duration-200">
        <i class="fa-solid fa-arrow-left text-sm"></i>
        {textBack}
    </a>

    <div class="small:text-3xl medium:text-5xl">
        {page}
    </div>

</div>