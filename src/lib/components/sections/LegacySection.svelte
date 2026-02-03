<script lang="ts">
    import Text from "$lib/components/ui/text.svelte";

    const champions = [
        {
            year: "ADC 5.0 • 2025",
            name: "Rahul Das",
            title: "Men’s Open Champion",
            image:
                "https://images.unsplash.com/photo-1520975958225-8c5c3f2c3fdd?q=80&w=1400&auto=format&fit=crop"
        },
        {
            year: "ADC 4.0 • 2024",
            name: "Neha Sharma",
            title: "Women’s Open Champion",
            image:
                "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=1400&auto=format&fit=crop"
        },
        {
            year: "ADC 3.0 • 2023",
            name: "Arjun Verma",
            title: "Back-to-Back Winner",
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop"
        },
        {
            year: "ADC 2.0 • 2022",
            name: "Kabir Thapa",
            title: "Hardtail King",
            image:
                "https://images.unsplash.com/photo-1520975682031-ae3f9a4b7d44?q=80&w=1400&auto=format&fit=crop"
        },
        {
            year: "ADC 1.0 • 2021",
            name: "Aisha Roy",
            title: "First Champion",
            image:
                "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=1400&auto=format&fit=crop"
        }
    ];

    const team = [
        {
            role: "Race Director",
            name: "Vikram Sen",
            image:
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop"
        },
        {
            role: "Trail Builders",
            name: "Riya & Ankit",
            image:
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
        },
        {
            role: "Medical Support",
            name: "Dr. Prakash",
            image:
                "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop"
        },
        {
            role: "Event Crew",
            name: "Local Volunteers",
            image:
                "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop"
        }
    ];
</script>

<section class="container mx-auto px-6 mt-20 md:mt-28 lg:mt-36">

    <!-- ===================================================== -->
    <!-- 🏆 ADC Hall of Champions -->
    <!-- ===================================================== -->
    <div>
        <div class="mb-10">
            <Text variant="title">
                ADC Hall of Champions
            </Text>

            <Text variant="body">
                Past winners who carved their names into Monkey Temple Trail history.
            </Text>
        </div>

        <!-- Bento Winner Grid -->
        <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
            {#each champions as champ}
                <div
                        class="group relative rounded-lg overflow-hidden h-[340px]
          bg-black border border-white/10
          hover:scale-[1.02] transition"
                >
                    <!-- Background -->
                    <img
                            src={champ.image}
                            alt={champ.name}
                            class="absolute inset-0 w-full h-full object-cover
            group-hover:scale-110 transition duration-700"
                    />

                    <!-- Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>

                    <!-- Text -->
                    <div class="absolute bottom-4 left-4 space-y-1 z-10">
                        <Text variant="muted">{champ.year}</Text>
                        <Text variant="label">
                            <span class="text-amber-300">{champ.name}</span>
                        </Text>
                        <Text variant="body">{champ.title}</Text>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <!-- ===================================================== -->
    <!-- 🎬 The Crew Behind the Chaos -->
    <!-- ===================================================== -->
    <div>
        <div class="mb-10">
            <Text variant="title">
                The Crew Behind the Chaos
            </Text>

            <Text variant="body">
                The builders, medics, and locals who make ADC possible every year.
            </Text>
        </div>

        <!-- Team Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {#each team as person}
                <div
                        class="group relative rounded-lg overflow-hidden h-[280px]
          border border-white/10 bg-black
          hover:scale-[1.02] transition"
                >
                    <!-- Image -->
                    <img
                            src={person.image}
                            alt={person.name}
                            class="absolute inset-0 w-full h-full object-cover
            group-hover:scale-110 transition duration-700"
                    />

                    <!-- Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>

                    <!-- Text -->
                    <div class="absolute bottom-4 left-4 z-10 space-y-1">
                        <Text variant="muted">{person.role}</Text>
                        <Text variant="label">
                            <span class="text-white">{person.name}</span>
                        </Text>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
