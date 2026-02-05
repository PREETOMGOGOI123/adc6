<script>
    import { goto } from "$app/navigation";
    let { form } = $props();

    function newRegistration() {
        goto("/register");
    }
</script>

<section class="flex items-center justify-center px-4 mt-24">
    <div class="w-full max-w-md bg-gray-400 border rounded-2xl p-8 space-y-6 text-white">

        <h1 class="text-3xl font-bold text-center">
            Rider Login
        </h1>

        <form method="POST" action="?/login" class="space-y-5">
            <input
                    name="registrationKey"
                    placeholder="Enter Registration Key (e.g. ADC6-0001)"
                    class="w-full border rounded-xl p-4 text-black"
                    required
            />

            {#if form?.error}
                <p class="text-red-500 font-semibold text-center">
                    {form.error}
                </p>
            {/if}

            <button
                    type="submit"
                    class="w-full py-3 rounded-xl bg-black text-white font-semibold"
            >
                Login →
            </button>
        </form>

        <div class="text-center">
            <button
                    type="button"
                    on:click={newRegistration}
                    class="w-full rounded-xl mt-2 bg-blue-800 font-medium p-2"
            >
                + New Registration
            </button>
        </div>

    </div>
</section>
