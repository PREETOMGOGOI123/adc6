<script>
    import { enhance } from "$app/forms";
    import { registrationStore } from "$lib/stores/registration.svelte.js";

    const loginEnhance = enhance(() => {
        return async ({ result }) => {
            // success response from +page.server.js
            if (result.type === "success") {
                registrationStore.existingUser = result.data.rider;
                registrationStore.mode = "details";
            }

            // invalid key error
            if (result.type === "failure") {
                console.log("Login failed");
            }
        };
    });
</script>

<form
        method="POST"
        action="?/login"
        use:loginEnhance
        class="space-y-6 max-w-md mx-auto"
>
    <h2 class="text-2xl font-bold">
        Enter Registration Key
    </h2>

    <input
            name="registrationKey"
            placeholder="ADC6-0001"
            class="w-full border p-3 rounded-lg"
            required
    />

    <button
            type="submit"
            class="w-full py-3 bg-black text-white rounded-lg font-semibold"
    >
        Login →
    </button>

    <button
            type="button"
            on:click={() => (registrationStore.mode = "rules")}
            class="w-full py-3 bg-gray-200 rounded-lg font-semibold"
    >
        + New Registration
    </button>
</form>
