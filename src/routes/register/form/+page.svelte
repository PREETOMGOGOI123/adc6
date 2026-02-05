<script>
    import { goto } from "$app/navigation";

    let form  = $props()

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

            <!-- ✅ Success Screen -->
            {#if form?.success}

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

                <!-- ✅ Registration Form -->
                <div class="text-center space-y-2">
                    <h1 class="text-4xl font-bold text-gray-900 tracking-tight">
                        ADC 6.0 Registration
                    </h1>

                    <p class="text-gray-700 text-lg">
                        Monkey Temple Trail Race • Official Entry Form
                    </p>
                </div>

                <form method="POST" class="mt-12 space-y-10 text-gray-800">

                    <div class="grid md:grid-cols-2 gap-8">

                        <!-- Name -->
                        <div>
                            <label class="block font-semibold mb-2 text-gray-800">
                                Full Name *
                            </label>
                            <input
                                    name="name"
                                    class="w-full rounded-xl border border-gray-300 p-4 text-gray-800 bg-white"
                                    required
                            />
                        </div>

                        <!-- Email -->
                        <div>
                            <label class="block font-semibold mb-2 text-gray-800">
                                Email *
                            </label>
                            <input
                                    name="email"
                                    type="email"
                                    class="w-full rounded-xl border border-gray-300 p-4 text-gray-800 bg-white"
                                    required
                            />
                        </div>

                        <!-- Age -->
                        <div>
                            <label class="block font-semibold mb-2 text-gray-800">
                                Age *
                            </label>
                            <input
                                    name="age"
                                    type="number"
                                    class="w-full rounded-xl border border-gray-300 p-4 text-gray-800 bg-white"
                                    required
                            />
                        </div>

                        <!-- Gender -->
                        <div>
                            <label class="block font-semibold mb-2 text-gray-800">
                                Gender *
                            </label>
                            <select
                                    name="gender"
                                    class="w-full rounded-xl border border-gray-300 p-4 text-gray-800 bg-white"
                                    required
                            >
                                <option value="">Select</option>
                                <option class="text-gray-800">Male</option>
                                <option class="text-gray-800">Female</option>
                            </select>
                        </div>

                        <!-- Contact -->
                        <div>
                            <label class="block font-semibold mb-2 text-gray-800">
                                Contact *
                            </label>
                            <input
                                    name="contact"
                                    class="w-full rounded-xl border border-gray-300 p-4 text-gray-800 bg-white"
                                    required
                            />
                        </div>

                        <!-- Emergency -->
                        <div>
                            <label class="block font-semibold mb-2 text-gray-800">
                                Emergency Contact *
                            </label>
                            <input
                                    name="emergency"
                                    class="w-full rounded-xl border border-gray-300 p-4 text-gray-800 bg-white"
                                    required
                            />
                        </div>

                        <!-- Blood -->
                        <div>
                            <label class="block font-semibold mb-2 text-gray-800">
                                Blood Group *
                            </label>
                            <select
                                    name="blood"
                                    class="w-full rounded-xl border border-gray-300 p-4 text-gray-800 bg-white"
                                    required
                            >
                                <option value="">Select</option>
                                <option>A+</option>
                                <option>B+</option>
                                <option>O+</option>
                                <option>AB+</option>
                            </select>
                        </div>

                        <!-- Category (Multiple Select) -->
                        <div>
                            <label class="block font-semibold mb-3 text-gray-800">
                                Race Categories *
                            </label>

                            <div class="space-y-2">
                                {#each categories as cat}
                                    <label class="flex items-center gap-3 cursor-pointer">
                                        <input
                                                type="checkbox"
                                                name="category"
                                                value={cat}
                                                class="w-4 h-4 accent-black"
                                        />
                                        <span class="text-gray-800">{cat}</span>
                                    </label>
                                {/each}
                            </div>
                        </div>

                        <!-- Bike Type -->
                        <div>
                            <label class="block font-semibold mb-2 text-gray-800">
                                Bike Type *
                            </label>
                            <select
                                    name="bikeType"
                                    class="w-full rounded-xl border border-gray-300 p-4 text-gray-800 bg-white"
                                    required
                            >
                                <option value="">Select</option>
                                <option>Full Suspension</option>
                                <option>Hardtail</option>
                            </select>
                        </div>

                        <!-- Food -->
                        <div>
                            <label class="block font-semibold mb-2 text-gray-800">
                                Food Preference *
                            </label>
                            <select
                                    name="food"
                                    class="w-full rounded-xl border border-gray-300 p-4 text-gray-800 bg-white"
                                    required
                            >
                                <option value="">Select</option>
                                <option>Veg</option>
                                <option>Non Veg</option>
                            </select>
                        </div>

                        <!-- Jersey -->
                        <div>
                            <label class="block font-semibold mb-2 text-gray-800">
                                Jersey Size *
                            </label>
                            <select
                                    name="jersey"
                                    class="w-full rounded-xl border border-gray-300 p-4 text-gray-800 bg-white"
                                    required
                            >
                                <option value="">Select</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </div>

                        <!-- State -->
                        <div class="md:col-span-2">
                            <label class="block font-semibold mb-2 text-gray-800">
                                State *
                            </label>
                            <input
                                    name="state"
                                    class="w-full rounded-xl border border-gray-300 p-4 text-gray-800 bg-white"
                                    required
                            />
                        </div>
                    </div>

                    <!-- Buttons -->
                    <div class="flex gap-4 pt-6 border-t border-gray-200">

                        <button
                                type="button"
                                onclick={onBack}
                                class="px-6 py-4 rounded-xl bg-gray-800 text-white"
                        >
                            ← Back
                        </button>

                        <button
                                type="submit"
                                class="flex-1 px-6 py-4 rounded-xl bg-black text-white font-semibold"
                        >
                            Submit Registration →
                        </button>
                    </div>

                </form>
            {/if}
        </div>
    </div>
</section>
