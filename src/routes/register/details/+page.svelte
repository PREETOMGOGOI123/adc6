<script>
    import { goto } from "$app/navigation";
    import { registrationStore } from "$lib/stores/registration.svelte.js";

    // Guard: if no user, go back
    $effect(() => {
        if (!registrationStore.existingUser) {
            goto("/register");
        }
    });
</script>

{#if registrationStore.existingUser}
    <section class="container mx-auto px-4 mt-10">
        <div class="max-w-4xl mx-auto bg-white border rounded-3xl p-10 space-y-8">

            <!-- Header -->
            <div>
                <h1 class="text-3xl font-bold text-gray-900">
                    Rider Registration Details
                </h1>

                <p class="text-gray-600 mt-2">
                    Welcome back, <b>{registrationStore.existingUser.name}</b>
                </p>
            </div>

            <!-- Details Grid -->
            <div class="grid md:grid-cols-2 gap-6 text-lg text-gray-800">

                <p><b>Registration Key:</b> {registrationStore.existingUser.registrationKey}</p>
                <p><b>Email:</b> {registrationStore.existingUser.email}</p>

                <p><b>Age:</b> {registrationStore.existingUser.age}</p>
                <p><b>Gender:</b> {registrationStore.existingUser.gender}</p>

                <p><b>Contact:</b> {registrationStore.existingUser.contact}</p>
                <p><b>Emergency:</b> {registrationStore.existingUser.emergency}</p>

                <p><b>Blood Group:</b> {registrationStore.existingUser.blood}</p>
                <p><b>State:</b> {registrationStore.existingUser.state}</p>

                <p><b>Category:</b> {registrationStore.existingUser.category}</p>
                <p><b>Bike Type:</b> {registrationStore.existingUser.bikeType}</p>

                <p><b>Food Preference:</b> {registrationStore.existingUser.food}</p>
                <p><b>Jersey Size:</b> {registrationStore.existingUser.jersey}</p>
            </div>

            <!-- Buttons -->
            <div class="pt-6 border-t flex gap-4">
                <button
                        onclick={() => goto("/register")}
                        class="px-6 py-3 rounded-xl bg-gray-200 font-semibold"
                >
                    Back to Login
                </button>

                <button
                        onclick={() => goto("/register")}
                        class="flex-1 px-6 py-3 rounded-xl bg-black text-white font-semibold"
                >
                    Register Another Rider →
                </button>
            </div>

        </div>
    </section>
{/if}
