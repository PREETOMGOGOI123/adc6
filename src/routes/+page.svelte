<script lang="ts">
    import Text from "$lib/components/ui/text.svelte";
    import LegacySection from "$lib/components/sections/LegacySection.svelte";
    import AboutAdc from "$lib/components/sections/AboutAdc.svelte";
    import HallOfSections from "$lib/components/sections/HallOfSections.svelte";

    let active = false;

    function toggleZoom() {
        active = !active;
    }
</script>

<section class="container mx-auto p-4 mt-20 bg-slate-700/20 rounded-md">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">

        <!-- ===================================================== -->
        <!-- 1. Trail Map Card (Hover + Click Zoom Expand) -->
        <!-- ===================================================== -->
        <div class="hidden md:flex col-span-2 md:col-span-2 flex-col h-auto md:h-full">
            <a
                    href="#"
                    on:click|preventDefault={toggleZoom}
                    class="group relative flex flex-col rounded-lg px-4 pb-4 pt-64 flex-grow
               overflow-visible transition hover:z-50"
            >
                <!-- Image -->
                <img
                        src="/images/trailmap.png"
                        alt="ADC 6.0 Trail Map"
                        class="absolute inset-0 h-full w-full object-cover
                 transition-all duration-500 ease-in-out
                 group-hover:scale-105
                 {active ? 'scale-105 z-50' : ''}"
                />

                <!-- Overlay -->
                <div
                        class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70
                 transition duration-500
                 group-hover:opacity-0
                 {active ? 'opacity-0' : ''}"
                ></div>

                <!-- Text -->
                <div
                        class="absolute bottom-4 left-4 z-10
                 transition duration-300
                 group-hover:opacity-0
                 {active ? 'opacity-0' : ''}"
                >
                    <Text variant="label">
            <span class="text-amber-300 drop-shadow-lg">
              Monkey Temple Trail
            </span>
                    </Text>

                    <Text variant="body">
            <span class="text-amber-100/90 drop-shadow-md">
              Borbari, Guwahati
            </span>
                    </Text>
                </div>
            </a>
        </div>

        <!-- ===================================================== -->
        <!-- 2. Middle Column (Mobile Reverse Order Cards) -->
        <!-- ===================================================== -->
        <div class="col-span-2 md:col-span-2 flex flex-col gap-4">

            <!-- 🎥 Video Card (FIRST on Mobile) -->
            <div
                    class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-64 bg-black
               order-1 md:order-2"
            >
                <!-- YouTube Video Background -->
                <div class="absolute inset-0 w-full h-full overflow-hidden">
                    <iframe
                            class="absolute inset-0 w-[140%] h-[140%] -translate-x-[20%] -translate-y-[20%]"
                            src="https://www.youtube.com/embed/Wa1EpncD5wE?autoplay=1&mute=1&loop=1&playlist=Wa1EpncD5wE&controls=0&modestbranding=1"
                            title="ADC 6.0 Race Clip"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                    ></iframe>
                </div>

                <!-- Overlay -->
                <div class="absolute inset-0 bg-black/50"></div>

                <!-- Text Overlay -->
                <div class="absolute bottom-4 left-4 z-10">
                    <Text variant="label">Race Highlights</Text>
                    <Text variant="body">
                        Experience the Monkey Temple Trail descent
                    </Text>
                </div>
            </div>

            <!-- 🏁 Race Announcement Card (SECOND on Mobile) -->
            <a
                    href="#"
                    class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-64
               order-2 md:order-1"
            >
                <img
                        src="https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?q=80&w=2940&auto=format&fit=crop"
                        alt="ADC 6.0 Downhill Race"
                        class="absolute inset-0 h-full w-full object-cover
                 group-hover:scale-105 transition duration-500"
                />

                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/95 to-gray-900/85"></div>

                <!-- Text -->
                <div class="absolute top-0 left-0 p-5 z-10 flex flex-col gap-2">
                    <Text variant="title">ADC 6.0 Downhill Championship</Text>
                    <Text variant="subtitle">21st & 22nd February 2026</Text>

                    <Text variant="body">
            <span class="text-amber-300 drop-shadow-lg">
              Monkey Temple Trail
            </span>
                    </Text>
                </div>
            </a>
        </div>

        <!-- ===================================================== -->
        <!-- 3. Right Tall Card (Map + Register + Sponsors) -->
        <!-- ===================================================== -->
        <div class="col-span-2 md:col-span-1 flex flex-col h-auto md:h-full">
            <div
                    class="bg-gradient-to-br from-orange-500 to-indigo-700 rounded-lg p-6
               flex-grow flex flex-col justify-between hover:shadow-xl transition"
            >
                <!-- Google Map -->
                <div>
                    <div class="overflow-hidden rounded-lg border border-white/20">
                        <iframe
                                title="Monkey Temple Trail Location"
                                src="https://www.google.com/maps?q=Monkey+Temple+Trail+Borbari+Guwahati&output=embed"
                                width="100%"
                                height="180"
                                style="border:0;"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <!-- Register Button -->
                    <!-- Register Button -->
                    <a
                            href="/register"
                            class="mt-6 inline-block
         w-fit sm:w-full
         ml-auto sm:ml-0
         px-5 py-2
         text-center
         bg-white text-black font-semibold
         rounded-lg hover:bg-white/90 transition"
                    >
                        Register Now
                    </a>

                    <!-- Trail Map Link (Mobile Only) -->
                    <a
                            href="https://scontent.fgau3-3.fna.fbcdn.net/v/t51.82787-15/626697563_18111069586634386_8443230228019943870_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3t6RLtpvE4MQ7kNvwG4YlXg&_nc_oc=AdkH5LtgBb3601k8TfUo43zoch7OyMhlV-hxFqr8nrILSXOdZKN2cRFphmIwegDNqLSKzZcu2VWgxIyx4zVCuN6Q&_nc_zt=23&_nc_ht=scontent.fgau3-3.fna&_nc_gid=amf2VCFrUXX3-RuJKpSZNw&oh=00_AftLghLpgzbvAN1OxatzzaLHL3evMnOfw9XQy6sp_9gWEQ&oe=69872BAB"
                            target="_blank"
                            class="mt-3 block md:hidden text-center text-sm font-semibold
         text-white underline underline-offset-4 hover:text-amber-200 transition"
                    >
                        View Trail Map →
                    </a>

                </div>

                <!-- Sponsors -->
                <div class="mt-4 pt-4 border-t border-white/30">
                    <Text variant="muted">Powered By</Text>

                    <!-- Animation Window -->
                    <div class="relative overflow-hidden h-16 mt-3">
                        <div class="sponsor-marquee absolute top-0 left-0 w-full">
                            <p>SpokeHub Racing</p>
                            <p>Trailheads Crew</p>
                            <p>Whacky Talky</p>
                            <p>Pratiksha</p>

                            <!-- Duplicate for smooth loop -->
                            <p>SpokeHub Racing</p>
                            <p>Trailheads Crew</p>
                            <p>Whacky Talky</p>
                            <p>Pratiksha</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
<AboutAdc/>
<HallOfSections/>


<style>
    .sponsor-marquee {
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-size: 0.9rem;
        font-weight: 600;
        color: white;
        animation: scrollUp 6s linear infinite;
    }

    @keyframes scrollUp {
        0% {
            transform: translateY(0%);
        }
        100% {
            transform: translateY(-50%);
        }
    }
</style>
