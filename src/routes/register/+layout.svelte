<script>
    let { children } = $props();
</script>

<section class="container mx-auto p-4 mt-5">
    <div
            class="max-w-5xl mx-auto bg-white/80 border border-white/10 rounded-2xl p-8"
    >
        <!-- Page Header -->
        <h1 class="text-3xl text-black font-bold tracking-wide">
            ADC 6.0 Registration
        </h1>

        <p class="text-gray-700 mt-2 leading-7">
            Monkey Temple Trail Race • Official Entry Process
        </p>

        <!-- Step Content -->
        <div class="mt-8">
            {@render children()}
        </div>
    </div>
</section>
