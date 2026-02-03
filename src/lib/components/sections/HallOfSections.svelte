<script>
    import Text from "$lib/components/ui/text.svelte";


    const adcEditions = [
        {
            edition: "ADC 5.0",
            year: "2025",
            posters: [
                "https://res.cloudinary.com/dcmyqduai/image/upload/t_Croped/v1744133024/Full_suspension_top_5_ufqzif.png",
                "https://res.cloudinary.com/dcmyqduai/image/upload/t_Croped/v1744133024/Hardtail_and_masters_izfjyc.png",
                "https://res.cloudinary.com/dcmyqduai/image/upload/t_Croped/v1744133025/Junior_finals_top_5_n0uyyh.png"
            ]
        },

        {
            edition: "ADC 4.0",
            year: "2024",
            posters: [
                "https://res.cloudinary.com/dcmyqduai/image/upload/v1741440894/26_xb4gru.jpg",
                // "https://res.cloudinary.com/dcmyqduai/image/upload/v1741440892/23_ssxdyu.jpg",
                // "https://res.cloudinary.com/dcmyqduai/image/upload/v1741440891/25_x9kmpu.jpg",
                // "https://res.cloudinary.com/dcmyqduai/image/upload/v1741440886/27_ua5gez.jpg",
                "https://res.cloudinary.com/dcmyqduai/image/upload/v1741440879/20_rzavaa.jpg",
                "https://res.cloudinary.com/dcmyqduai/image/upload/v1741440876/17_ta6lde.jpg",
                // "https://res.cloudinary.com/dcmyqduai/image/upload/v1741440876/18_caazfo.jpg",
                // "https://res.cloudinary.com/dcmyqduai/image/upload/v1741440868/13_kijgci.jpg",
                // "https://res.cloudinary.com/dcmyqduai/image/upload/v1741440858/10_lgmsm0.jpg",
                // "https://res.cloudinary.com/dcmyqduai/image/upload/v1741440850/4_y1mhte.jpg",
                // "https://res.cloudinary.com/dcmyqduai/image/upload/v1741440848/2_itnj7l.jpg",
                // "https://res.cloudinary.com/dcmyqduai/image/upload/v1741440848/3_vql0b0.jpg"
            ]
        },

        {
            edition: "ADC 3.0",
            year: "2023",
            posters: [
                "https://res.cloudinary.com/dcmyqduai/image/upload/v1741441134/PODIUM_4_ynot7f.jpg",
                "https://res.cloudinary.com/dcmyqduai/image/upload/v1741441133/PODIUM_3_swdqch.jpg",
                "https://res.cloudinary.com/dcmyqduai/image/upload/v1741441133/PODIUM_2_wrruna.jpg",
                "https://res.cloudinary.com/dcmyqduai/image/upload/v1741441133/PODIUM_1_agxovr.jpg"
            ]
        },

        {
            edition: "ADC 2.0",
            year: "2022",
            posters: [
                "https://res.cloudinary.com/dcmyqduai/image/upload/v1741457965/1_x3dqld.webp",
                "https://res.cloudinary.com/dcmyqduai/image/upload/v1741457957/6_ekkbqf.webp",
                "https://res.cloudinary.com/dcmyqduai/image/upload/v1741457955/7_akulfe.webp",
                "https://res.cloudinary.com/dcmyqduai/image/upload/v1741457954/8_jst6fd.webp",
                "https://res.cloudinary.com/dcmyqduai/image/upload/v1741457171/16_ji0xmy.webp",
                "https://res.cloudinary.com/dcmyqduai/image/upload/v1741457143/17_pwgjqa.webp",
                // "https://res.cloudinary.com/dcmyqduai/image/upload/v1741457142/18_i3detc.webp",
                // "https://res.cloudinary.com/dcmyqduai/image/upload/v1741457131/24_ocr55f.webp",
                // "https://res.cloudinary.com/dcmyqduai/image/upload/v1741457139/20_1_mujk1q.webp",
                // "https://res.cloudinary.com/dcmyqduai/image/upload/v1741442385/32.webp",
                // "https://res.cloudinary.com/dcmyqduai/image/upload/v1741442309/28.webp",
                // "https://res.cloudinary.com/dcmyqduai/image/upload/v1741442262/27.webp",
                // "https://res.cloudinary.com/dcmyqduai/image/upload/v1741442261/30.webp",
                // "https://res.cloudinary.com/dcmyqduai/image/upload/v1741442201/29.webp",
                // "https://res.cloudinary.com/dcmyqduai/image/upload/v1741442161/34.webp"
            ]
        },

        {
            edition: "ADC 1.0",
            year: "2021",
            posters: [
                "https://res.cloudinary.com/dcmyqduai/image/upload/v1741456752/FINALR_1_fksvgn.webp"
            ]
        }
    ];

    // ✅ Active Tab Index (Fixes Switching)
    let activeIndex = 0;
</script>

<section class="container mx-auto p-4 mt-20 bg-slate-700/20 rounded-md space-y-12">

    <!-- ===================================================== -->
    <!-- Heading -->
    <!-- ===================================================== -->
    <div class="space-y-4 max-w-2xl">
        <Text variant="muted">Legacy Archive</Text>

        <Text variant="title">
            ADC Hall of Champions
        </Text>

        <Text variant="body">
            Official standings posters and championship history from ADC 1.0 to ADC 5.0.
        </Text>

        <div class="h-px w-24 bg-amber-400/60 rounded-full"></div>
    </div>

    <!-- ===================================================== -->
    <!-- Edition Tabs -->
    <!-- ===================================================== -->
    <div class="flex gap-6 overflow-x-auto pb-3 border-b border-white/10">

        {#each adcEditions as ed, i}
            <button
                    on:click={() => (activeIndex = i)}
                    class="uppercase tracking-widest text-sm font-semibold pb-2 transition"
            >
        <span
                class={
            activeIndex === i
              ? "text-amber-300"
              : "text-white/50 hover:text-white"
          }
        >
          {ed.edition}
        </span>
            </button>
        {/each}

    </div>

    <!-- ===================================================== -->
    <!-- Active Edition Posters -->
    <!-- ===================================================== -->
    <div class="space-y-6">

        <!-- Edition Info -->
        <div class="flex justify-between items-end">
            <div>
                <Text variant="label">
          <span class="text-amber-300">
            {adcEditions[activeIndex].edition}
          </span>
                </Text>

                <Text variant="muted">
                    {adcEditions[activeIndex].year}
                </Text>
            </div>

            <Text variant="muted">
                {adcEditions[activeIndex].posters.length} Posters
            </Text>
        </div>

        <!-- Posters Grid -->
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {#each adcEditions[activeIndex].posters as src}
                <div
                        class="group relative rounded-xl overflow-hidden
          border border-white/10 bg-black
          hover:scale-[1.02] transition"
                >
                    <img
                            src={src}
                            alt="ADC Poster"
                            class="
              w-full
              h-[420px]
              sm:h-[520px]
              lg:h-[650px]
              object-contain
              bg-black
              transition duration-700
            "
                    />

                    <!-- Overlay -->
                    <div
                            class="absolute inset-0 bg-gradient-to-t
            from-black/40 via-black/5 to-transparent"
                    ></div>
                </div>
            {/each}

        </div>
    </div>
</section>
