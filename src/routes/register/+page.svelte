<script>
    import { goto } from "$app/navigation";
    import Text from "$lib/components/ui/text.svelte";

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
        <Text variant="title">
            📜 Rules & Regulations
        </Text>

        <ul class="space-y-3 leading-8">
            <li><Text variant="body">✅ Full-face helmet (or removable chin guard) is mandatory</Text></li>
            <li><Text variant="body">✅ Knee pads are compulsory and goggles are required</Text></li>
            <li><Text variant="body">✅ Be at the start line at least <b>20 minutes</b> early</Text></li>
            <li><Text variant="body">✅ Protective gear checks will happen before entering the start zone</Text></li>
            <li><Text variant="body">✅ Riders must follow marshal instructions at all times</Text></li>
            <li><Text variant="body">✅ No shortcuts or course cutting — stay within marked tape</Text></li>
            <li><Text variant="body">✅ No pushing, blocking, or unsportsmanlike conduct</Text></li>
            <li><Text variant="body">✅ Riders must complete the full course to appear in results</Text></li>
            <li><Text variant="body">✅ Timed downhill run (<b>1.13 km</b> course)</Text></li>
            <li><Text variant="body">✅ Start interval: <b>40–60 seconds</b> between riders</Text></li>
            <li><Text variant="body">✅ Practice only during official times</Text></li>
            <li><Text variant="body">✅ Bike inspection before each official run is compulsory</Text></li>
            <li><Text variant="body">✅ No sharing bikes, helmets, or safety gear</Text></li>
            <li><Text variant="body">✅ Race director and marshal decisions are final</Text></li>
        </ul>

        <div class="flex items-start gap-3 mt-4">
            <input
                    type="checkbox"
                    bind:checked={rulesChecked}
                    class="w-5 h-5 mt-1 accent-blue-500"
            />
            <Text variant="label">
                <span class="text-blue-600">
                    I agree to all rules & regulations *
                </span>
            </Text>
        </div>
    </div>

    <!-- CONSENT SECTION -->
    <div class="space-y-6 border-t pt-8">
        <Text variant="title">
            ⚠️ Rider Consent & Liability Waiver
        </Text>

        <div class="space-y-5 leading-8">

            <Text variant="subtitle">
                Assam Downhill Championship – Participant Waiver & Release Form
            </Text>

            <Text variant="body">
                <b>Event Name:</b> Assam Downhill Championship<br />
                <b>Event Type:</b> Mountain Biking / Downhill Race
            </Text>

            <Text variant="label">
                PLEASE READ CAREFULLY BEFORE AGREEING
            </Text>

            <Text variant="body">
                <b>1. Acknowledgment of Risk</b><br />
                I understand that mountain biking and downhill racing involve
                inherent risks, including but not limited to falls, collisions,
                equipment failure, weather conditions, terrain hazards, serious
                injury, permanent disability, or death. I voluntarily choose to
                participate knowing these risks.
            </Text>

            <Text variant="body">
                <b>2. Assumption of Risk</b><br />
                I freely and voluntarily assume full responsibility for all
                risks, known and unknown, associated with my participation.
            </Text>

            <Text variant="body">
                <b>3. Release of Liability</b><br />
                I hereby release, waive, discharge, and hold harmless the event
                organizers, Assam Downhill Championship, sponsors, volunteers,
                officials, landowners, and any associated individuals or
                entities from any and all claims, liabilities, demands, or
                causes of action arising from injury, loss, damage, or death
                related to my participation.
            </Text>

            <Text variant="body">
                <b>4. Indemnification</b><br />
                I agree to indemnify and hold harmless the organizers from any
                claims, damages, costs, or expenses arising due to my actions
                or negligence during the event.
            </Text>

            <Text variant="body">
                <b>5. Medical Authorization</b><br />
                I authorize the event organizers to obtain medical treatment
                on my behalf in the event of an injury or emergency. I
                understand that I am responsible for all medical expenses
                incurred.
            </Text>

        </div>

        <div class="flex items-start gap-3 mt-4">
            <input
                    type="checkbox"
                    bind:checked={consentChecked}
                    class="w-5 h-5 mt-1 accent-blue-500"
            />
            <Text variant="label">
                <span class="text-blue-600">
                    I have read, understood, and agree to the Rider Consent & Liability Waiver *
                </span>
            </Text>
        </div>
    </div>

    <!-- CONTINUE BUTTON -->
    <button
            onclick={nextStep}
            disabled={!(rulesChecked && consentChecked)}
            class="w-full py-4 rounded-lg transition font-semibold tracking-wide
        {rulesChecked && consentChecked
            ? 'bg-blue-800 text-white hover:scale-101 hover:bg-blue-600 duration-500 cursor-pointer'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'}"
    >
        Continue →
    </button>

</div>
