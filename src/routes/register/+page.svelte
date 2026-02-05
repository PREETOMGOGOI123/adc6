<script>
    import { goto } from "$app/navigation";

    // local state only
    let rulesChecked = false;
    let consentChecked = false;

    function nextStep() {
        if (rulesChecked && consentChecked) {
            goto("/register/form");
        }
    }
</script>

<div class="space-y-10">

    <!-- RULES SECTION -->
    <div class="space-y-6">
        <h2 class="text-2xl font-semibold text-gray">
            📜 Rules & Regulations
        </h2>

        <ul class="space-y-3 text-lg text-gray-900 leading-8">
            <li>✅ Full-face helmet (or removable chin guard) is mandatory</li>
            <li>✅ Knee pads are compulsory and goggles are required</li>
            <li>✅ Be at the start line at least <b>20 minutes</b> early</li>
            <li>✅ Protective gear checks will happen before entering the start zone</li>
            <li>✅ Riders must follow marshal instructions at all times</li>
            <li>✅ No shortcuts or course cutting — stay within marked tape</li>
            <li>✅ No pushing, blocking, or unsportsmanlike conduct</li>
            <li>✅ Riders must complete the full course to appear in results</li>
            <li>✅ Timed downhill run (<b>1.13 km</b> course)</li>
            <li>✅ Start interval: <b>40–60 seconds</b> between riders</li>
            <li>✅ Practice only during official times</li>
            <li>✅ Bike inspection before each official run is compulsory</li>
            <li>✅ No sharing bikes, helmets, or safety gear</li>
            <li>✅ Race director and marshal decisions are final</li>
        </ul>

        <div class="flex items-start gap-3 mt-4">
            <input
                    type="checkbox"
                    bind:checked={rulesChecked}
                    class="w-5 h-5 mt-1 accent-blue-500"
            />
            <span class="text-lg text-blue-600 font-medium">
                I agree to all rules & regulations *
            </span>
        </div>
    </div>

    <!-- CONSENT SECTION -->
    <div class="space-y-5 border-t pt-8">
        <h2 class="text-2xl font-semibold text-gray">
            ⚠️ Rider Consent & Liability Waiver
        </h2>

        <p class="text-lg text-gray-900 leading-8">
            I understand the risks associated with downhill racing on bicycles
            and I am aware that the organizers will not undertake any responsibility
            for any harm that I may endure.
        </p>

        <div class="flex items-start gap-3 mt-4">
            <input
                    type="checkbox"
                    bind:checked={consentChecked}
                    class="w-5 h-5 mt-1 accent-blue-500"
            />
            <span class="text-lg text-blue-600 font-medium">
                I understand and accept the above waiver *
            </span>
        </div>
    </div>

    <!-- CONTINUE BUTTON -->
    <button
            onclick={nextStep}
            disabled={!(rulesChecked && consentChecked)}
            class="w-full py-4 rounded-lg text-lg font-semibold transition
        {rulesChecked && consentChecked
            ? 'bg-black text-white hover:scale-[1.02]'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'}"
    >
        Continue →
    </button>

</div>
