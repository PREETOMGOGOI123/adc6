<script lang="ts">
    import Text from "$lib/components/ui/text.svelte";
</script>

<section class="container mx-auto px-6 mt-20 md:mt-28 lg:mt-36 max-w-4xl">

    <!-- Heading Block -->
    <div class="space-y-4 mb-10">

        <!-- Label -->
        <Text variant="muted">
            About The Championship
        </Text>

<!--        &lt;!&ndash; Title &ndash;&gt;-->
<!--        <Text variant="muted">-->
<!--            Assam Downhill Championship-->
<!--        </Text>-->

        <!-- Subtitle -->
        <Text variant="subtitle">
            Built on Speed. Carved in Dirt.
        </Text>

        <!-- Divider Line -->
        <div class="h-px w-24 bg-amber-400/60 rounded-full"></div>
    </div>

    <!-- Story Paragraphs -->
    <div class="space-y-7">

        <Text variant="body">
            ADC is the premier gravity race of the Northeast — where riders battle raw terrain,
            brutal descents, and the clock itself.
        </Text>

        <Text variant="body">
            Monkey Temple Trail is iconic because it demands control at full speed —
            a descent that rewards courage and punishes hesitation.
        </Text>

        <Text variant="body">
            Every edition evolves. Every category changes.
            ADC is not just an event — it is a downhill tradition.
        </Text>
    </div>

    <!-- Accent Tag -->
    <div
            class="mt-10 inline-flex items-center gap-3
    px-6 py-3 rounded-lg
    border border-amber-400/30
    bg-amber-400/10"
    >
        <span class="h-2.5 w-2.5 rounded-full bg-amber-300"></span>

        <span class="uppercase tracking-[0.25em] text-amber-200 text-sm font-semibold">
      Gravity • Grit • Glory
    </span>
    </div>

</section>
