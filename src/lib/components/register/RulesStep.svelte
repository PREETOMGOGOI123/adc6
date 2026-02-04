<script>
    let { agreed, onNext } = $props();
</script>

<div class="space-y-6">
    <h2 class="text-2xl font-semibold text-gray">
        📜 Rules & Regulations
    </h2>

    <!-- Rules List -->
    <ul class="space-y-3 text-lg text-gray-900 leading-8">
        <li>✅ Full-face helmet (or removable chin guard) is mandatory</li>

        <li>✅ Knee pads are compulsory and goggles are required</li>

        <li>✅ Be at the start line at least <b>20 minutes</b> before your scheduled time</li>

        <li>✅ Helmet & protective gear checks will happen before entering the start zone</li>

        <li>✅ Riders must follow marshal instructions at all times</li>

        <li>✅ No shortcuts or course cutting — stay within marked tape/route</li>

        <li>✅ No pushing, blocking, or unsportsmanlike conduct — respect fellow riders</li>

        <li>✅ Riders must complete the full course to appear in final results</li>

        <li>✅ Format: Timed individual downhill run (<b>1.13 km</b> course)</li>

        <li>✅ Seeding run decides final start order (slowest first, fastest last)</li>

        <li>✅ Start interval: <b>40–60 seconds</b> between riders</li>

        <li>✅ Missed start = time penalty. Be ready at least <b>10 minutes</b> early</li>

        <li>✅ Practice only during official times (min 3 runs, max 4 runs allowed)</li>

        <li>✅ Bike inspection before each official run is compulsory</li>

        <li>✅ No sharing bikes, helmets, or safety gear — each rider must have their own</li>

        <li>✅ Decisions by race director and marshals are final</li>
    </ul>

    <!-- Checkbox -->
    <div class="flex items-center gap-3 mt-6">
        <input
                type="checkbox"
                bind:checked={agreed}
                class="w-5 h-5 accent-blue-500"
        />
        <span class="text-lg text-blue-500 font-medium">
            I agree to all rules & regulations *
        </span>
    </div>

    <!-- Button -->
    <button
            onclick={onNext}
            disabled={!agreed}
            class="w-full py-4 rounded-lg text-lg font-semibold transition
        {agreed
            ? 'bg-white text-black hover:scale-[1.02]'
            : 'bg-white/20 text-white/40 cursor-not-allowed'}"
    >
        Continue →
    </button>
</div>
