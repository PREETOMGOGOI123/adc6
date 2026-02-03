<script lang="ts">
    import logo from "$lib/assets/logo.png";
</script>

<header class="mt-20 w-full bg-slate-950 border-b border-white/10">
    <div
            class="container mx-auto flex flex-col md:flex-row
        items-center md:justify-between
        gap-4 px-4 py-4"
    >
        <!-- Logo -->
        <div class="flex items-center gap-3">
            <img
                    src={logo}
                    alt="ADC Logo"
                    class="h-15 w-auto object-contain"
            />

            <h1 class="text-sm font-bold text-white tracking-widest">
                GRAVITY • GRIT • GLORY
            </h1>
        </div>

        <!-- Navigation Links -->
        <nav class="flex items-center gap-6 text-sm font-semibold tracking-wide">
            <a
                    href="/"
                    class="text-white/80 hover:text-white transition"
            >
                Home
            </a>

            <a
                    href="/register"
                    class="text-white/80 hover:text-white transition"
            >
                Register
            </a>

            <a
                    href="/schedule"
                    class="text-white/80 hover:text-white transition"
            >
                Schedule
            </a>
        </nav>

        <!-- Social Icons -->
        <div class="flex items-center gap-4">
            <!-- Instagram -->
            <a
                    href="https://instagram.com"
                    target="_blank"
                    class="p-3 rounded-full bg-white/10 text-white
                hover:bg-white hover:text-black transition"
            >
                <i class="fa-brands fa-instagram text-lg"></i>
            </a>

            <!-- Facebook -->
            <a
                    href="https://facebook.com"
                    target="_blank"
                    class="p-3 rounded-full bg-white/10 text-white
                hover:bg-white hover:text-black transition"
            >
                <i class="fa-brands fa-facebook-f text-lg"></i>
            </a>

            <!-- WhatsApp -->
            <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    class="p-3 rounded-full bg-white/10 text-white
                hover:bg-white hover:text-black transition"
            >
                <i class="fa-brands fa-whatsapp text-lg"></i>
            </a>
        </div>
    </div>
</header>
