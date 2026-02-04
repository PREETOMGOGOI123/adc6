<script>
    import RulesStep from "$lib/components/register/RulesStep.svelte";
    import ConsentStep from "$lib/components/register/ConsentStep.svelte";
    import RegistrationForm from "$lib/components/register/RegistrationForm.svelte";

    // Wizard Step State
    let step = 1;

    // Rules Agreement State
    let agreed = false;

    // Form Data State (Lives Here)
    let formData = {
        name: "",
        email: "",
        age: "",
        gender: "",
        contact: "",
        emergency: "",
        blood: "",
        address: "",
        category: "",
        bikeType: "",
        food: "",
        jersey: "",
        // ✅ Always true (flow guarantees agreement)
        rulesAccepted: true

    };

    // Categories from Poster
    const categories = [
        "Men’s Junior (<18 Years)",
        "Men’s Open",
        "Women’s Open",
        "Masters (30+ Years)",
        "Fastest Hardtail"
    ];

    // Navigation
    function next() {
        step++;
    }

    function back() {
        step--
    }
</script>
<section class="container mx-auto p-4 mt-5">
    <div
            class="max-w-3xl mx-auto bg-white/80 border border-white/10 rounded-2xl p-8"
    >
        <!-- Page Header -->
        <h1 class="text-3xl text-black font-bold tracking-wide">
            ADC 6.0 Registration
        </h1>

        <p class="text-gray-700 mt-2 leading-7">
            Monkey Temple Trail Race • Official Entry Process
        </p>

        <!-- Step Indicator -->
        <p class="mt-6 text-sm text-gray-700">
            Step {step} of 4
        </p>

        <!-- Step Renderer -->
        <div class="mt-10">
            {#if step === 1}
                <RulesStep bind:agreed onNext={next} />

            {:else if step === 2}
                <ConsentStep onNext={next} onBack={back} />

            {:else if step === 3}
                <RegistrationForm
                        bind:formData
                        {categories}
                        onNext={next}
                        onBack={back}
                />
            {/if}
        </div>
    </div>
</section>
