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
    <div class="space-y-6 border-t pt-8">
        <h2 class="text-2xl font-semibold text-gray">
            ⚠️ Rider Consent & Liability Waiver
        </h2>

        <div class="space-y-5 text-lg text-gray-900 leading-8">

            <p class="font-semibold">
                Assam Downhill Championship – Participant Waiver & Release Form
            </p>

            <p>
                <b>Event Name:</b> Assam Downhill Championship<br />
                <b>Event Type:</b> Mountain Biking / Downhill Race
            </p>

            <p class="font-semibold">
                PLEASE READ CAREFULLY BEFORE AGREEING
            </p>

            <p>
                <b>1. Acknowledgment of Risk</b><br />
                I understand that mountain biking and downhill racing involve
                inherent risks, including but not limited to falls, collisions,
                equipment failure, weather conditions, terrain hazards, serious
                injury, permanent disability, or death. I voluntarily choose to
                participate knowing these risks.
            </p>

            <p>
                <b>2. Assumption of Risk</b><br />
                I freely and voluntarily assume full responsibility for all
                risks, known and unknown, associated with my participation in
                this event.
            </p>

            <p>
                <b>3. Release of Liability</b><br />
                I hereby release, waive, discharge, and hold harmless the event
                organizers, Assam Downhill Championship, sponsors, volunteers,
                officials, landowners, and any associated individuals or
                entities from any and all claims, liabilities, demands, or
                causes of action arising from injury, loss, damage, or death
                related to my participation.
            </p>

            <p>
                <b>4. Indemnification</b><br />
                I agree to indemnify and hold harmless the organizers from any
                claims, damages, costs, or expenses arising due to my actions
                or negligence during the event.
            </p>

            <p>
                <b>5. Medical Authorization</b><br />
                I authorize the event organizers to obtain medical treatment
                on my behalf in the event of an injury or emergency. I
                understand that I am responsible for all medical expenses
                incurred.
            </p>

        </div>

        <div class="flex items-start gap-3 mt-4">
            <input
                    type="checkbox"
                    bind:checked={consentChecked}
                    class="w-5 h-5 mt-1 accent-blue-500"
            />
            <span class="text-lg text-blue-600 font-medium">
                I have read, understood, and agree to the Rider Consent & Liability Waiver *
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
