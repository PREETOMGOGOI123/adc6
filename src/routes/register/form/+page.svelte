<script>
    import { goto } from "$app/navigation";
    import { indiaStatesAndUTs } from "$lib/data/indiaStates.js";

    let form = $props();

    const categories = [
        "Men’s Junior (<18 Years)",
        "Men’s Open",
        "Women’s Open",
        "Masters (30+ Years)",
        "Fastest Hardtail"
    ];

    function onBack() {
        goto("/register");
    }
</script>

<section class="container mx-auto px-4">
    <div class="max-w-5xl mx-auto">

        <div class="bg-white border border-gray-200 rounded-3xl shadow-sm p-10">

            {#if form?.success}

                <!-- ✅ Success Screen -->
                <div class="text-center space-y-6">
                    <h2 class="text-4xl font-bold text-green-700">
                        Registration Successful 🎉
                    </h2>

                    <p class="text-lg text-gray-800">
                        Your Rider Registration Key is:
                    </p>

                    <p class="text-3xl font-mono font-bold text-gray-900">
                        {form.registrationKey}
                    </p>

                    <p class="text-gray-700">
                        Please save this key. You will use it to login and check your race status.
                    </p>

                    <button
                            class="px-6 py-3 rounded-xl bg-black text-white font-semibold"
                            onclick={() => goto("/register")}
                    >
                        Go to Login →
                    </button>
                </div>

            {:else}

                <!-- ✅ Header -->
                <div class="text-center space-y-2">
                    <h1 class="text-4xl font-bold text-gray-900 tracking-tight">
                        ADC 6.0 Registration
                    </h1>

                    <p class="text-gray-700 text-lg">
                        Monkey Temple Trail Race • Official Entry Form
                    </p>
                </div>

                <!-- ✅ Form -->
                <form method="POST" class="mt-12 space-y-10 text-gray-800">

                    <div class="grid md:grid-cols-2 gap-8">

                        <!-- Full Name -->
                        <div>
                            <label class="block font-semibold mb-2">Full Name *</label>
                            <input name="name" required
                                   class="w-full rounded-xl border border-gray-300 p-4 bg-white" />
                        </div>

                        <!-- Email -->
                        <div>
                            <label class="block font-semibold mb-2">Email *</label>
                            <input type="email" name="email" required
                                   class="w-full rounded-xl border border-gray-300 p-4 bg-white" />
                        </div>

                        <!-- Age -->
                        <div>
                            <label class="block font-semibold mb-2">Age *</label>
                            <input type="number" name="age" required
                                   class="w-full rounded-xl border border-gray-300 p-4 bg-white" />
                        </div>

                        <!-- Gender -->
                        <div>
                            <label class="block font-semibold mb-2">Gender *</label>
                            <select name="gender" required
                                    class="w-full rounded-xl border border-gray-300 p-4 bg-white">
                                <option value="">Select</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>

                        <!-- Contact -->
                        <div>
                            <label class="block font-semibold mb-2">Contact *</label>
                            <input name="contact" required
                                   class="w-full rounded-xl border border-gray-300 p-4 bg-white" />
                        </div>

                        <!-- Emergency Contact -->
                        <div>
                            <label class="block font-semibold mb-2">Emergency Contact *</label>
                            <input name="emergency" required
                                   class="w-full rounded-xl border border-gray-300 p-4 bg-white" />
                        </div>

                        <!-- Blood Group -->
                        <div>
                            <label class="block font-semibold mb-2">Blood Group *</label>
                            <select name="blood" required
                                    class="w-full rounded-xl border border-gray-300 p-4 bg-white">
                                <option value="">Select</option>
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>O+</option>
                                <option>O-</option>
                            </select>
                        </div>

                        <!-- Race Category -->
                        <div>
                            <label class="block font-semibold mb-2">Race Category *</label>
                            <select name="category" required
                                    class="w-full rounded-xl border border-gray-300 p-4 bg-white">
                                <option value="">Select Category</option>
                                {#each categories as cat}
                                    <option value={cat}>{cat}</option>
                                {/each}
                            </select>
                        </div>

                        <!-- Bike Type -->
                        <div>
                            <label class="block font-semibold mb-2">Bike Type *</label>
                            <select name="bikeType" required
                                    class="w-full rounded-xl border border-gray-300 p-4 bg-white">
                                <option value="">Select</option>
                                <option>Full Suspension</option>
                                <option>Hardtail</option>
                            </select>
                        </div>

                        <!-- Food -->
                        <div>
                            <label class="block font-semibold mb-2">Food Preference *</label>
                            <select name="food" required
                                    class="w-full rounded-xl border border-gray-300 p-4 bg-white">
                                <option value="">Select</option>
                                <option>Veg</option>
                                <option>Non Veg</option>
                            </select>
                        </div>

                        <!-- Jersey -->
                        <div>
                            <label class="block font-semibold mb-2">Jersey Size *</label>
                            <select name="jersey" required
                                    class="w-full rounded-xl border border-gray-300 p-4 bg-white">
                                <option value="">Select</option>
                                <option value="38">38 (S)</option>
                                <option value="40">40 (M)</option>
                                <option value="42">42 (L)</option>
                                <option value="44">44 (XL)</option>
                            </select>
                        </div>

                        <!-- State -->
                        <div class="md:col-span-2">
                            <label class="block font-semibold mb-2">State / Union Territory *</label>
                            <select name="state" required
                                    class="w-full rounded-xl border border-gray-300 p-4 bg-white">
                                <option value="">Select</option>
                                {#each indiaStatesAndUTs as state}
                                    <option value={state}>{state}</option>
                                {/each}
                            </select>
                        </div>

                    </div>

                    <!-- Buttons -->
                    <div class="flex gap-4 pt-6 border-t border-gray-200">
                        <button type="button"
                                onclick={onBack}
                                class="px-6 py-4 rounded-xl bg-gray-800 text-white">
                            ← Back
                        </button>

                        <button type="submit"
                                class="flex-1 px-6 py-4 rounded-xl bg-black text-white font-semibold">
                            Submit Registration →
                        </button>
                    </div>

                </form>
            {/if}
        </div>
    </div>
</section>
