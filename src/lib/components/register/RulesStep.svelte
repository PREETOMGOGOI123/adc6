<script>
    let { agreed, onNext } = $props();
</script>

<div class="space-y-6">
    <h2 class="text-xl font-semibold text-gray">Rules & Regulations</h2>

    <ul class="list-disc pl-6 text-gray-900 leading-7 space-y-2">
        <li>Helmet is mandatory at all times.</li>
        <li>Respect marshals and volunteers.</li>
        <li>Unsafe riding may lead to disqualification.</li>
        <li>Organizers are not responsible for injury or loss.</li>
    </ul>

    <div class="flex items-center gap-3 mt-6">
        <input
                type="checkbox"
                bind:checked={agreed}
                class="w-5 h-5 accent-blue-500"
        />
        <span class="text-blue-500">
      I agree to all rules & regulations *
    </span>
    </div>

    <button
            on:click={onNext}
            disabled={!agreed}
            class="w-full py-3 rounded-lg font-semibold transition
      {agreed
        ? 'bg-white text-black hover:scale-[1.02]'
        : 'bg-white/20 text-white/40 cursor-not-allowed'}"
    >
        Continue →
    </button>
</div>
