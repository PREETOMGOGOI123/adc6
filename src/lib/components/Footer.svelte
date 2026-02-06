<script>
    import Text from "$lib/components/ui/text.svelte";
    import logoSpokehubRacing from '$lib/assets/logos/spokehub racing white (1).png'
    import logoTrailHeads from '$lib/assets/logos/Trail Head Crew 2.png'
</script>

<footer class="mt-20 bg-gray-900 text-gray-300">
    <div
            class="max-w-6xl mx-auto px-6 py-12
               grid gap-10
               grid-cols-1
               md:grid-cols-3
               text-center md:text-left"
    >

        <!-- Address -->
        <div class="space-y-3">
            <Text variant="label">📍 Address</Text>

            <Text variant="muted">
                Ground Floor, VIP Rd,<br />
                near All Assam Tennis Association,<br />
                Borbari, Guwahati,<br />
                Assam 781036
            </Text>
        </div>

        <!-- Contact -->
        <div class="space-y-3">
            <Text variant="label">📞 Contact (WhatsApp)</Text>

            <ul class="space-y-2">
                <li>
                    <a
                            href="https://wa.me/917086619320"
                            target="_blank"
                            class="hover:text-green-400 transition"
                    >
                        +91 70866 19320
                    </a>
                </li>
                <li>
                    <a
                            href="https://wa.me/918118951202"
                            target="_blank"
                            class="hover:text-green-400 transition"
                    >
                        +91 81189 51202
                    </a>
                </li>
                <li>
                    <a
                            href="https://wa.me/917895210600"
                            target="_blank"
                            class="hover:text-green-400 transition"
                    >
                        +91 78952 10600
                    </a>
                </li>
            </ul>
        </div>

        <!-- Powered By -->
        <div class="space-y-4">
            <Text variant="label">⚡ Powered By</Text>

            <div
                    class="flex flex-col items-center gap-6
                       md:flex-row md:justify-start"
            >
                <img
                        src={logoSpokehubRacing}
                        alt="SpokeHub Racing logo"
                        class="w-28 md:w-32"
                />

                <img
                        src={logoTrailHeads}
                        alt="Trail Heads Crew logo"
                        class="w-28 md:w-32"
                />
            </div>
        </div>

    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/10 py-4 text-center">
        <Text variant="muted">
            © {new Date().getFullYear()} Assam Downhill Championship. All rights reserved.
        </Text>
    </div>
</footer>
