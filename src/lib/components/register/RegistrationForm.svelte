<script>

    // ✅ Form State (Required)


    let { formData, categories, onNext, onBack } = $props();
    // ✅ Derived filtered categories (Svelte 5 correct way)
    const filteredCategories = $derived(() => {
        const age = Number(formData.age);
        const gender = formData.gender;

        return categories.filter((cat) => {
            const name = cat.toLowerCase();

            // -------------------------------
            // RULE 1: Age 18 and Above
            // Remove Junior categories
            // -------------------------------
            if (age >= 18) {
                if (name.includes("junior")) return false;
            }

            // -------------------------------
            // RULE 2: Age Below 18
            // Remove Women's + Masters
            // -------------------------------
            if (age < 18) {
                if (name.includes("women")) return false;
                if (name.includes("master")) return false;
            }

            // -------------------------------
            // RULE 3: Female Gender Selected
            // Remove all Men's categories
            // -------------------------------
            if (gender === "Female") {
                if (name.includes("men")) return false;
            }

            return true;
        });
    });


//https://script.google.com/macros/s/AKfycbzUDUW8zT-UJaAWhXha7KbFfG4QXlX386DdldFVZP31PCbZX0DprWMaMWoDnIIdOkQD/exec
    // ✅ Temporary Submit Handler
    async function handleSubmit() {
        try {
            const body = new URLSearchParams(formData);

            const res = await fetch("https://script.google.com/macros/s/AKfycbzUDUW8zT-UJaAWhXha7KbFfG4QXlX386DdldFVZP31PCbZX0DprWMaMWoDnIIdOkQD/exec\n", {
                method: "POST",
                body
            });

            if (res.ok) {
                alert("Registration Submitted ✅");
                onNext();
            }
        } catch (err) {
            console.error(err);
            alert("Submission failed.");
        }
    }


</script>

<section class="container mx-auto p-4 mt-20">
    <div
            class=" mx-auto bg-gray-900/80 border border-white rounded-2xl p-8"
    >
        <!-- Header -->
        <h1 class="text-3xl font-bold tracking-wide">
            ADC 6.0 Registration
        </h1>

        <p class="text-white/70 mt-2 leading-7">
            Monkey Temple Trail Race • Official Entry Form
        </p>

        <!-- ✅ FORM -->
        <form
                class="mt-10 space-y-8"
                onsubmit={handleSubmit}
        >
            <!-- Two Column Grid -->
            <div class="grid md:grid-cols-2 gap-6">

                <!-- Name -->
                <div>
                    <label for="name" class="block text-black mb-2">Name *</label>
                    <input
                            id="name"
                            class="w-full rounded-lg bg-white text-black placeholder:text-black/50 border border-black/20 p-3"
                            bind:value={formData.name}
                            placeholder="Full Name"
                            required
                    />
                    <p class="text-sm text-gray-500">
                        Max file size: 4MB (PDF, JPG, PNG)
                    </p>

                </div>

                <!-- Email -->
                <div>
                    <label for="email" class="block text-white/80 mb-2">Email ID *</label>
                    <input
                            type="email"
                            id="email"
                            class="w-full rounded-lg bg-white text-black placeholder:text-black/50 border border-black/20 p-3"
                            bind:value={formData.email}
                            placeholder="you@example.com"
                            required
                    />
                </div>

                <!-- Age -->
                <div>
                    <label for="number" class="block text-white/80 mb-2">Age *</label>
                    <input
                            type="number"
                            id="number"
                            class="w-full rounded-lg bg-white text-black placeholder:text-black/50 border border-black/20 p-3"
                            bind:value={formData.age}
                            placeholder="Age"
                            required
                    />
                </div>

                <!-- Gender -->
                <div>
                    <label for="gender" class="block text-white/80 mb-2">Gender *</label>
                    <select
                            id="gender"
                            class="w-full rounded-lg bg-white text-black placeholder:text-black/50 border border-black/20 p-3"
                            bind:value={formData.gender}
                            required
                    >
                        <option value="">Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>

                <!-- Contact -->
                <div>
                    <label for="contact" class="block text-white/80 mb-2">Contact No *</label>
                    <input
                            id="contact"
                            class="w-full rounded-lg bg-white text-black placeholder:text-black/50 border border-black/20 p-3"
                            bind:value={formData.contact}
                            placeholder="Enter phone number without +91"
                            required
                    />
                </div>

                <!-- Emergency -->
                <div>
                    <label for="emergency" class="block text-white/80 mb-2">
                        Emergency Contact No *
                    </label>
                    <input
                            id="emergency"
                            class="w-full rounded-lg bg-white text-black placeholder:text-black/50 border border-black/20 p-3"
                            bind:value={formData.emergency}
                            placeholder="Emergency Number"
                            required
                    />
                </div>

                <!-- Blood Group -->
                <div>
                    <label for="blood-group" class="block text-white/80 mb-2">
                        Blood Group *
                    </label>

                    <select
                            id="blood-group"
                            class="w-full rounded-lg bg-white text-black border border-black/20 p-3"
                            bind:value={formData.blood}
                            required
                    >
                        <option value="" disabled selected>
                            Select your blood group
                        </option>

                        <option value="A+">A+</option>
                        <option value="A-">A-</option>

                        <option value="B+">B+</option>
                        <option value="B-">B-</option>

                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>

                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>


                <!-- Category -->
                <div>
                    <label for="race-category" class="block text-white/80 mb-2">Race Category *</label>
                    <select
                            id="race-category"
                            class="w-full rounded-lg bg-white text-black placeholder:text-black/50 border border-black/20 p-3"
                            bind:value={formData.category}
                            required
                    >
                        <option value="">Select Category</option>
                        {#each categories as cat}
                            <option value={cat}>{cat}</option>
                        {/each}
                    </select>
                </div>

                <!-- Bike Type -->
                <div>
                    <label for="bike-type" class="block text-white/80 mb-2">Bike Type *</label>
                    <select
                            id="bike-type"
                            class="w-full rounded-lg bg-white text-black border border-black/20 p-3"
                            bind:value={formData.bikeType}
                            required
                    >
                        <option value="">Select Bike Type</option>
                        <option>Full Suspension</option>
                        <option>Hardtail</option>
                    </select>
                </div>

                <!-- Food -->
                <div>
                    <label for="food-preference" class="block text-white/80 mb-2">Food Preference *</label>
                    <select
                            id="food-preference"
                            class="w-full rounded-lg bg-white text-black border border-black/20 p-3"
                            bind:value={formData.food}
                            required
                    >
                        <option value="">Select Food</option>
                        <option>Veg</option>
                        <option>Non Veg</option>
                    </select>
                </div>

                <!-- Jersey -->
                <div>
                    <label for="jersey-size" class="block text-white/80 mb-2">Jersey Size *</label>
                    <select
                            id="jersey-size"
                            class="w-full rounded-lg bg-white text-black border border-black/20 p-3"
                            bind:value={formData.jersey}
                            required
                    >
                        <option value="">Select Jersey Size</option>
                        <option>S (Chest 38)</option>
                        <option>M (Chest 40)</option>
                        <option>L (Chest 42)</option>
                        <option>XL (Chest 44)</option>
                    </select>
                </div>

                <!-- Address Full Width -->
                <!-- State Dropdown -->
                <div class="md:col-span-2">
                    <label for="state" class="block text-white/80 mb-2">
                        State *
                    </label>

                    <select
                            id="state"
                            class="w-full rounded-lg bg-white text-black border border-black/20 p-3"
                            bind:value={formData.state}
                            required
                    >
                        <option value="" disabled selected>
                            Select your State
                        </option>

                        <option>Andhra Pradesh</option>
                        <option>Arunachal Pradesh</option>
                        <option>Assam</option>
                        <option>Bihar</option>
                        <option>Chhattisgarh</option>
                        <option>Goa</option>
                        <option>Gujarat</option>
                        <option>Haryana</option>
                        <option>Himachal Pradesh</option>
                        <option>Jharkhand</option>
                        <option>Karnataka</option>
                        <option>Kerala</option>
                        <option>Madhya Pradesh</option>
                        <option>Maharashtra</option>
                        <option>Manipur</option>
                        <option>Meghalaya</option>
                        <option>Mizoram</option>
                        <option>Nagaland</option>
                        <option>Odisha</option>
                        <option>Punjab</option>
                        <option>Rajasthan</option>
                        <option>Sikkim</option>
                        <option>Tamil Nadu</option>
                        <option>Telangana</option>
                        <option>Tripura</option>
                        <option>Uttar Pradesh</option>
                        <option>Uttarakhand</option>
                        <option>West Bengal</option>

                        <!-- Union Territories -->
                        <option>Andaman and Nicobar Islands</option>
                        <option>Chandigarh</option>
                        <option>Dadra and Nagar Haveli and Daman and Diu</option>
                        <option>Delhi</option>
                        <option>Lakshadweep</option>
                        <option>Puducherry</option>
                        <option>Jammu and Kashmir</option>
                        <option>Ladakh</option>
                    </select>
                </div>

            </div>

            <div class="flex gap-3 mt-8">
                <!-- Back -->
                <button
                        type="button"
                        onclick={onBack}
                        class="px-5 py-3 rounded-lg bg-gray-600/10 hover:bg-white/20 transition"
                >
                    ← Back
                </button>

                <!-- Submit -->
                <button
                        type="submit"
                        class="px-5 py-3 rounded-lg bg-white/40 hover:bg-white/20 transition"
                >
                    Submit Registration
                </button>
            </div>

        </form>
    </div>
</section>
<style>
    /* Chrome, Safari, Edge, Opera */
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type="number"] {
        -moz-appearance: textfield;
    }
</style>

