<script>

    // ✅ Form State (Required)


    let { formData, categories, onNext, onBack } = $props();

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
                on:submit|preventDefault={handleSubmit}
        >
            <!-- Two Column Grid -->
            <div class="grid md:grid-cols-2 gap-6">

                <!-- Name -->
                <div>
                    <label class="block text-black mb-2">Name *</label>
                    <input
                            class="w-full rounded-lg bg-white text-black placeholder:text-black/50 border border-black/20 p-3"
                            bind:value={formData.name}
                            placeholder="Full Name"
                            required
                    />
                </div>

                <!-- Email -->
                <div>
                    <label class="block text-white/80 mb-2">Email ID *</label>
                    <input
                            type="email"
                            class="w-full rounded-lg bg-white text-black placeholder:text-black/50 border border-black/20 p-3"
                            bind:value={formData.email}
                            placeholder="you@example.com"
                            required
                    />
                </div>

                <!-- Age -->
                <div>
                    <label class="block text-white/80 mb-2">Age *</label>
                    <input
                            type="number"
                            class="w-full rounded-lg bg-white text-black placeholder:text-black/50 border border-black/20 p-3"
                            bind:value={formData.age}
                            placeholder="Age"
                            required
                    />
                </div>

                <!-- Gender -->
                <div>
                    <label class="block text-white/80 mb-2">Gender *</label>
                    <select
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
                    <label class="block text-white/80 mb-2">Contact No *</label>
                    <input
                            class="w-full rounded-lg bg-white text-black placeholder:text-black/50 border border-black/20 p-3"
                            bind:value={formData.contact}
                            placeholder="Phone Number"
                            required
                    />
                </div>

                <!-- Emergency -->
                <div>
                    <label class="block text-white/80 mb-2">
                        Emergency Contact No *
                    </label>
                    <input
                            class="w-full rounded-lg bg-white text-black placeholder:text-black/50 border border-black/20 p-3"
                            bind:value={formData.emergency}
                            placeholder="Emergency Number"
                            required
                    />
                </div>

                <!-- Blood Group -->
                <div>
                    <label class="block text-white/80 mb-2">Blood Group *</label>
                    <input
                            class="w-full rounded-lg bg-white text-black placeholder:text-black/50 border border-black/20 p-3"
                            bind:value={formData.blood}
                            placeholder="e.g. O+"
                            required
                    />
                </div>

                <!-- Category -->
                <div>
                    <label class="block text-white/80 mb-2">Race Category *</label>
                    <select
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
                    <label class="block text-white/80 mb-2">Bike Type *</label>
                    <select
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
                    <label class="block text-white/80 mb-2">Food Preference *</label>
                    <select
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
                    <label class="block text-white/80 mb-2">Jersey Size *</label>
                    <select
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
                <div class="md:col-span-2">
                    <label class="block text-white/80 mb-2">
                        Short Address (Locality, Town, State) *
                    </label>
                    <input
                            class="w-full rounded-lg bg-white text-black border border-black/20 p-3"
                            bind:value={formData.address}
                            placeholder="Locality, Town, State"
                            required
                    />
                </div>
            </div>

            <div class="flex gap-3 mt-8">
                <!-- Back -->
                <button
                        type="button"
                        on:click={onBack}
                        class="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition"
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
