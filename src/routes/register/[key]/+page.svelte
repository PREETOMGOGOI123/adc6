<script>
    let { data } = $props();

    let uploading = $state(false);
    let uploadError = $state("");
    let uploadSuccess = $state(false);

    let paymentForm;

    const DRIVE_UPLOAD_URL =
        "https://script.google.com/macros/s/AKfycbwNX2g9gh_DAACtpN97JECGwZW2Yq7G79srN12Q02zgJ_XY7Xg2ruSnDXsl-7kM_QCJUw/exec";

    async function uploadPaymentProof(event) {
        const file = event.target.files[0];
        if (!file) return;

        uploading = true;
        uploadError = "";
        uploadSuccess = false;

        try {
            // 1️⃣ Convert file → base64
            const base64 = await fileToBase64(file);

            // 2️⃣ Upload to Google Drive
            const uploadForm = new FormData();
            uploadForm.append("file", base64);
            uploadForm.append("filename", file.name);
            uploadForm.append("mimeType", file.type);

            const res = await fetch(DRIVE_UPLOAD_URL, {
                method: "POST",
                body: uploadForm
            });

            const result = await res.json();
            if (!result.success) throw new Error("Drive upload failed");

            uploadSuccess = true;

            // 3️⃣ REAL SvelteKit form submit (this triggers redirect)
            paymentForm.querySelector('input[name="fileUrl"]').value =
                result.fileUrl;

            paymentForm.requestSubmit();

        } catch (err) {
            uploadError = "Upload failed. Try again.";
        } finally {
            uploading = false;
        }
    }

    function fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () =>
                resolve(reader.result.split(",")[1]);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }
</script>

<!-- 🔒 Hidden REAL form for SvelteKit action -->
<form
        method="POST"
        action="?/markPaymentSuccessful"
        bind:this={paymentForm}
        class="hidden"
>
    <input type="hidden" name="fileUrl" />
</form>

<section class="container mx-auto px-4 py-10 text-gray-900">
    <div class="max-w-4xl mx-auto bg-white border rounded-3xl p-8 space-y-6">

        <h1 class="text-3xl font-bold">Rider Details</h1>

        <p class="text-lg">
            Welcome, <b>{data.rider.name}</b>
        </p>

        <!-- REGISTRATION KEY -->
        <div class="p-4 rounded-xl border bg-gray-50">
            <p class="text-sm text-gray-600">
                Save this Registration Key for login
            </p>
            <p class="mt-1 text-2xl font-mono font-bold">
                {data.rider.registrationKey}
            </p>
        </div>

        <!-- STATUS -->
        <div>
            {#if data.rider.payment_successful}
                <span class="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-800 font-semibold">
                    ✅ Registration Complete
                </span>
            {:else}
                <span class="inline-flex px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 font-semibold">
                    ⏳ Registration Incomplete
                </span>
            {/if}
        </div>

        <!-- RIDER DETAILS -->
        <div class="grid md:grid-cols-2 gap-4">
            <p><b>Email:</b> {data.rider.email}</p>
            <p><b>Age:</b> {data.rider.age}</p>
            <p><b>Gender:</b> {data.rider.gender}</p>
            <p><b>Contact:</b> {data.rider.contact}</p>
            <p><b>Emergency:</b> {data.rider.emergency}</p>
            <p><b>Blood Group:</b> {data.rider.blood}</p>
            <p><b>State:</b> {data.rider.state}</p>
            <p><b>Category:</b>
                {Array.isArray(data.rider.category)
                    ? data.rider.category.join(", ")
                    : data.rider.category}
            </p>
            <p><b>Bike Type:</b> {data.rider.bikeType}</p>
            <p><b>Food:</b> {data.rider.food}</p>
            <p><b>Jersey:</b> {data.rider.jersey}</p>
        </div>

        <!-- PAYMENT -->
        {#if !data.rider.parental_consent_required && !data.rider.payment_successful}
            <div class="mt-8 p-6 border rounded-xl bg-blue-50 space-y-6">
                <h2 class="text-xl font-semibold">💳 Payment Pending</h2>

                <div class="flex justify-center">
                    <img src="/upi-qr.png" class="w-48 h-48" />
                </div>

                <div>
                    <label class="block font-semibold mb-2">
                        Upload Payment Screenshot
                    </label>

                    <input
                            type="file"
                            accept="image/*"
                            on:change={uploadPaymentProof}
                            disabled={uploading}
                            class="block w-full border rounded-lg p-3"
                    />

                    {#if uploading}
                        <p class="text-sm text-blue-600">Uploading…</p>
                    {/if}

                    {#if uploadSuccess}
                        <p class="text-sm text-green-600">
                            Upload successful ✅ Redirecting…
                        </p>
                    {/if}

                    {#if uploadError}
                        <p class="text-sm text-red-600">{uploadError}</p>
                    {/if}
                </div>
            </div>
        {/if}

    </div>
</section>
