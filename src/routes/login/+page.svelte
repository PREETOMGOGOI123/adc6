<script>
    import { goto } from "$app/navigation";
    import Text from "$lib/components/ui/text.svelte";

    let { form } = $props();

    function newRegistration() {
        goto("/register");
    }
</script>

<section class="flex items-center justify-center px-4 mt-24">
    <div class="w-full max-w-md  bg-slate-700/20  rounded-2xl p-8 space-y-6 ">

        <!-- Title -->
        <div class="text-center flex flex-col gap-4">
            <Text variant="title">
                Rider Login
            </Text>

            <Text variant="muted">
                Enter your registration key to continue
            </Text>
        </div>

        <form method="POST" action="?/login" class="space-y-5 flex flex-col items-center gap-6">
            <input
                    name="registrationKey"
                    placeholder="Enter Registration Key (e.g. ADC6-0001)"
                    class="w-full   p-4 bg-white/10 tracking-wider font-semibold"
                    required
                    oninput={(e) => e.target.value = e.target.value.toUpperCase()}
            />

            {#if form?.error}
                <div class="text-center">
                    <Text variant="label">
                        <span class="text-red-500">
                            {form.error}
                        </span>
                    </Text>
                </div>
            {/if}

            <button
                    type="submit"
                    class="w-60 rounded-xl mt-2 bg-slate-700 font-medium p-2 tracking-wide cursor-pointer hover:scale-105 duration-500 hover:bg-slate-600"
            >
                Login →
            </button>
        </form>

        <div class="text-center">
            <button
                    type="button"
                    onclick={newRegistration}
                    class="w-60 rounded-xl mt-2 bg-blue-800 font-medium p-2 tracking-wide cursor-pointer hover:scale-105 duration-500 hover:bg-blue-600"
            >
                + New Registration
            </button>
        </div>

    </div>
</section>
