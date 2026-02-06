<script>
    let { children } = $props();
</script>

<section class="container mx-auto p-4 mt-5">
    <div
            class="max-w-5xl mx-auto bg-slate-700/20 border text-white rounded-2xl p-8"
    >
        <!-- Page Header -->
        <h1 class="text-3xl text-white/70 font-bold tracking-wide">
            ADC 6.0 Registration
        </h1>

        <p class="text-gray-500 mt-2 leading-7">
            Monkey Temple Trail Race • Official Entry Process
        </p>

        <!-- Step Content -->
        <div class="mt-8">
            {@render children()}
        </div>
    </div>
</section>
