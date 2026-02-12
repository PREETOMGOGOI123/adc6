<script>
    import { goto } from "$app/navigation";
    import { indiaStatesAndUTs } from "$lib/data/indiaStates.js";
    import Text from "$lib/components/ui/text.svelte";

    let form = $props();

    const categories = [
        "Men’s Junior (<18 Years) [Full Sus]",
        "Men’s Open [Full Sus]",
        "Women’s Open [Full Sus]",
        "Masters (30+ Years) [Full Sus]",
        "Hardtail"
    ];

    function onBack() {
        goto("/register");
    }


</script>

<section class="container mx-auto px-4">
    <div class="max-w-5xl mx-auto">
        <div class="  rounded-3xl shadow-sm p-10">

            {#if form?.success}

                <!-- ✅ Success Screen -->
                <div class="text-center space-y-6">
                    <Text variant="title">
                        Registration Successful 🎉
                    </Text>

                    <Text variant="body">
                        Your Rider Registration Key is:
                    </Text>

                    <Text variant="label">
                        <span class="text-3xl font-mono font-bold text-gray-900">
                            {form.registrationKey}
                        </span>
                    </Text>

                    <Text variant="muted">
                        Please save this key. You will use it to login and check your race status.
                    </Text>

                    <button
                            class="px-6 py-3 rounded-xl bg-blue-800 text-white font-semibold"
                            onclick={() => goto("/register")}
                    >
                        Go to Login →
                    </button>
                </div>

            {:else}

                <!-- ✅ Header -->
                <div class="text-center space-y-2">
                    <Text variant="title" class>
                        ADC 6.0 Registration
                    </Text>

                    <Text variant="subtitle">
                        Monkey Temple Trail Race • Official Entry Form
                    </Text>
                </div>

                <!-- ✅ Form -->
                <form method="POST" class="mt-12 space-y-10 text-gray-800">

                    <div class="grid md:grid-cols-2 gap-8">

                        <!-- Full Name -->
                        <div>
                            <Text variant="label">Full Name *</Text>
                            <input
                                    name="name"
                                    required
                                    class="w-full rounded-xl border border-gray-300 p-4 bg-white mt-2"
                            />
                        </div>

                        <!-- Email -->
                        <div>
                            <Text variant="label">Email *</Text>
                            <input
                                    type="email"
                                    name="email"
                                    required
                                    class="w-full rounded-xl border border-gray-300 p-4 bg-white mt-2"
                            />
                        </div>

                        <!-- Age -->
                        <div>
                            <Text variant="label">Age *</Text>
                            <input
                                    type="number"
                                    name="age"
                                    required
                                    min="10"
                                    class="w-full rounded-xl border border-gray-300 p-4 bg-white mt-2"
                                    oninput={(e) => {
            const input = e.currentTarget; // ✅ HTMLInputElement
            if (input.value && Number(input.value) < 10) {
                input.setCustomValidity("Rider must be at least 10 years old");
            } else {
                input.setCustomValidity("");
            }
        }}
                            />
                        </div>



                        <!-- Gender -->
                        <div>
                            <Text variant="label">Gender *</Text>
                            <select
                                    name="gender"
                                    required
                                    class="w-full rounded-xl border border-gray-300 p-4 bg-white mt-2"
                            >
                                <option value="">Select</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>

                        <!-- Contact -->
                        <!-- Contact -->
                        <div>
                            <Text variant="label">Contact *</Text>

                            <div class="relative mt-2">
                                <!-- Prefix -->
                                <span
                                        class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                                >
            +91
        </span>

                                <!-- Input -->
                                <input
                                        type="tel"
                                        name="contact"
                                        required
                                        maxlength="10"
                                        inputmode="numeric"
                                        class="w-full rounded-xl border border-gray-300 p-4 pl-14 bg-white"
                                        oninput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
            }}
                                />
                            </div>
                        </div>

                        <!-- Emergency Contact -->
                        <div>
                            <Text variant="label">Emergency Contact *</Text>

                            <div class="relative mt-2">
                                <!-- Prefix -->
                                <span
                                        class="absolute left-4 inset-y-0 flex items-center text-gray-500 pointer-events-none"
                                >
            +91
        </span>

                                <!-- Input -->
                                <input
                                        type="tel"
                                        name="emergency"
                                        required
                                        maxlength="10"
                                        inputmode="numeric"
                                        class="w-full rounded-xl border border-gray-300 p-4 pl-14 bg-white"
                                        oninput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
            }}
                                />
                            </div>
                        </div>



                        <!-- Blood Group -->
                        <div>
                            <Text variant="label">Blood Group *</Text>
                            <select
                                    name="blood"
                                    required
                                    class="w-full rounded-xl border border-gray-300 p-4 bg-white mt-2"
                            >
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
                            <Text variant="label">Race Category *</Text>
                            <select
                                    name="category"
                                    required
                                    class="w-full rounded-xl border border-gray-300 p-4 bg-white mt-2"
                            >
                                <option value="">Select Category</option>
                                {#each categories as cat}
                                    <option value={cat}>{cat}</option>
                                {/each}
                            </select>
                        </div>

                        <!-- Bike Type -->
                        <div>
                            <Text variant="label">Bike Type *</Text>
                            <select
                                    name="bikeType"
                                    required
                                    class="w-full rounded-xl border border-gray-300 p-4 bg-white mt-2"
                            >
                                <option value="">Select</option>
                                <option>Full Suspension</option>
                                <option>Hardtail</option>
                            </select>
                        </div>

                        <!-- Food -->
                        <div>
                            <Text variant="label">Food Preference *</Text>
                            <select
                                    name="food"
                                    required
                                    class="w-full rounded-xl border border-gray-300 p-4 bg-white mt-2"
                            >
                                <option value="">Select</option>
                                <option>Veg</option>
                                <option>Non Veg</option>
                            </select>
                        </div>

                        <!-- Jersey -->
                        <div>
                            <Text variant="label">Jersey Size *</Text>
                            <select
                                    name="jersey"
                                    required
                                    class="w-full rounded-xl border border-gray-300 p-4 bg-white mt-2"
                            >
                                <option value="">Select</option>
                                <option value="38">38 (S)</option>
                                <option value="40">40 (M)</option>
                                <option value="42">42 (L)</option>
                                <option value="44">44 (XL)</option>
                            </select>
                        </div>

                        <!-- State -->
                        <div class="md:col-span-2">
                            <Text variant="label">State / Union Territory *</Text>
                            <select
                                    name="state"
                                    required
                                    class="w-full rounded-xl border border-gray-300 p-4 bg-white mt-2"
                            >
                                <option value="">Select</option>
                                {#each indiaStatesAndUTs as state}
                                    <option value={state}>{state}</option>
                                {/each}
                            </select>
                        </div>

                    </div>

                    <!-- Buttons -->
                    <div class="flex gap-4 pt-6 border-t border-gray-200">
                        <button
                                type="button"
                                onclick={onBack}
                                class="px-6 py-4 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-600 hover:scale-101 duration-500 cursor-pointer"
                        >
                            ← Back
                        </button>

                        <button
                                type="submit"
                                class="flex-1 px-6 py-4 rounded-xl bg-blue-800 text-white font-semibold tracking-wide cursor-pointer hover:scale-101 hover:bg-blue-600 duration-500"
                        >
                            Submit Registration →
                        </button>
                    </div>

                </form>
            {/if}
        </div>
    </div>
</section>

<style>
    /* Remove number input arrows (Chrome, Safari, Edge) */
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Remove number input arrows (Firefox) */
    input[type="number"] {
        -moz-appearance: textfield;
    }

</style>