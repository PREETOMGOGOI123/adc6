<script>
    let { onNext, onBack } = $props();

</script>

<div class="space-y-6">
    <h2 class="text-xl font-semibold">Parental Consent Form</h2>

    <p class="text-black leading-7">
        Riders under 18 must bring a signed parental consent form.
    </p>

    <a
            href="/consent-form.pdf"
            download
            class="inline-block px-4 py-3 rounded-lg bg-white hover:bg-white/20 transition"
    >
        📄 Download Consent Form
    </a>

    <div class="flex gap-3 mt-8">
        <button
                on:click={onBack}
                class="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition"
        >
            ← Back
        </button>

        <button
                on:click={onNext}
                class="flex-1 py-3 rounded-lg bg-white text-black font-semibold hover:scale-[1.02] transition"
        >
            Continue →
        </button>
    </div>
</div>
