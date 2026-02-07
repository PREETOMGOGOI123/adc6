<script>
    let { data } = $props();
    import Text from "$lib/components/ui/text.svelte";

    let uploading = $state(false);
    let uploadError = $state("");
    let uploadSuccess = $state(false);
    let paymentForm;

    const DRIVE_UPLOAD_URL =
        "https://script.google.com/macros/s/AKfycbwNX2g9gh_DAACtpN97JECGwZW2Yq7G79srN12Q02zgJ_XY7Xg2ruSnDXsl-7kM_QCJUw/exec";

    let consentUploading = $state(false);
    let consentError = $state("");
    let consentSuccess = $state(false);
    let consentForm;

    const CONSENT_UPLOAD_URL =
        "https://script.google.com/macros/s/AKfycbxE3_dUtsmq2CKd5FuJqLlB2jiSGcrengPYq52dNwDues2u6jRkoPtHJFJ1GIqu4yI/exec";

    async function uploadPaymentProof(event) {
        const file = event.target.files[0];
        if (!file) return;

        uploading = true;
        uploadError = "";
        uploadSuccess = false;

        try {
            const base64 = await fileToBase64(file);
            const uploadForm = new FormData();
            uploadForm.append("file", base64);
            uploadForm.append("filename", file.name);
            uploadForm.append("mimeType", file.type);

            const res = await fetch(DRIVE_UPLOAD_URL, {
                method: "POST",
                body: uploadForm
            });

            const result = await res.json();
            if (!result.success) throw new Error();

            uploadSuccess = true;
            paymentForm.querySelector('input[name="fileUrl"]').value = result.fileUrl;
            paymentForm.requestSubmit();
        } catch {
            uploadError = "Upload failed. Try again.";
        } finally {
            uploading = false;
        }
    }

    async function uploadParentalConsent(event) {
        const file = event.target.files[0];
        if (!file) return;

        consentUploading = true;
        consentError = "";
        consentSuccess = false;

        try {
            const base64 = await fileToBase64(file);
            const form = new FormData();
            form.append("file", base64);
            form.append("filename", file.name);
            form.append("mimeType", file.type);

            const res = await fetch(CONSENT_UPLOAD_URL, {
                method: "POST",
                body: form
            });

            const result = await res.json();
            if (!result.success) throw new Error();

            consentSuccess = true;
            consentForm.querySelector('input[name="consentUrl"]').value = result.fileUrl;
            consentForm.requestSubmit();
        } catch {
            consentError = "Consent upload failed. Try again.";
        } finally {
            consentUploading = false;
        }
    }

    function fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result.split(",")[1]);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }
</script>

<!-- Hidden backend forms -->
<form method="POST" action="?/markPaymentSuccessful" bind:this={paymentForm} class="hidden">
    <input type="hidden" name="fileUrl" />
</form>

<form method="POST" action="?/submitParentalConsent" bind:this={consentForm} class="hidden">
    <input type="hidden" name="consentUrl" />
</form>

<section class="container mx-auto px-4 py-2 ">
    <div class="max-w-4xl mx-auto  rounded-3xl p-8 space-y-6">

        <Text variant="title">Rider Details</Text>

        <Text variant="body">
            Welcome, <b>{data.rider.name}</b>
        </Text>

        <!-- Registration Key -->
        <div class="p-4 rounded-xl  bg-gray-800">
            <Text variant="label">
<span class="blink text-red-500  font-bold">
        Save this Registration Key for login
    </span>            </Text>

            <Text variant="subtitle">
                <span class="text-2xl font-mono font-bold">
                    {data.rider.registrationKey}
                </span>
            </Text>
        </div>

        <!-- Status -->
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

        <!-- Rider Details -->
        <div class="grid md:grid-cols-2 gap-4">
            <Text variant="body"><b>Email:</b> {data.rider.email}</Text>
            <Text variant="body"><b>Age:</b> {data.rider.age}</Text>
            <Text variant="body"><b>Gender:</b> {data.rider.gender}</Text>
            <Text variant="body"><b>Contact:</b> {data.rider.contact}</Text>
            <Text variant="body"><b>Emergency:</b> {data.rider.emergency}</Text>
            <Text variant="body"><b>Blood Group:</b> {data.rider.blood}</Text>
            <Text variant="body"><b>State:</b> {data.rider.state}</Text>
            <Text variant="body"><b>Category:</b>
                {Array.isArray(data.rider.category)
                    ? data.rider.category.join(", ")
                    : data.rider.category}
            </Text>
            <Text variant="body"><b>Bike Type:</b> {data.rider.bikeType}</Text>
            <Text variant="body"><b>Food:</b> {data.rider.food}</Text>
            <Text variant="body"><b>Jersey:</b> {data.rider.jersey}</Text>
        </div>

        <!-- Parental Consent -->
        {#if data.rider.parental_consent_required && !data.rider.parental_consent_submitted}
            <div class="mt-8 p-6 border rounded-xl bg-white/10 space-y-6">
                <!-- Highlight Steps -->
                <div class="space-y-2">
                    <Text variant="label">
        <span class="text-blue-400 font-semibold tracking-wide">
            How to proceed:
        </span>
                    </Text>

                    <Text variant="muted">
        <span class="text-gray-200">
            1️⃣ Download the parental consent form
        </span>
                    </Text>

                    <Text variant="muted">
        <span class="text-gray-200">
            2️⃣ Get it filled and signed by the parent / guardian
        </span>
                    </Text>

                    <Text variant="muted">
        <span class="text-gray-200">
            3️⃣ Upload the completed form here
        </span>
                    </Text>

                    <Text variant="muted">
        <span class="text-blue-400 font-medium tracking-wide">
            4️⃣ Payment options will unlock automatically
        </span>
                    </Text>
                </div>

                <Text variant="subtitle">🧾 Parental Consent Required</Text>

                <a
                        href="/parental-consent.pdf"
                        download
                        class="inline-block px-5 py-3 bg-blue-800 hover:scale-101 duration-200 text-white rounded-lg"
                >
                    Download Consent Form
                </a>

                <label
                        class="group flex items-center justify-center gap-3
           w-full px-5 py-4 rounded-lg
           border border-blue-500/60
           text-blue-300 font-semibold
           cursor-pointer
           transition
           hover:bg-blue-500/10 hover:border-blue-400"
                >
                    ⬆️ Upload Signed Consent Form

                    <input
                            type="file"
                            accept="application/pdf,image/*"
                            onchange={uploadParentalConsent}
                            disabled={consentUploading}
                            class="hidden"
                    />
                </label>


                {#if consentUploading}
                    <Text variant="muted" class="text-blue-600">
                        Uploading consent…
                    </Text>
                {/if}

                {#if consentSuccess}
                    <Text variant="muted" class="text-green-600">
                        Consent uploaded ✅ Redirecting…
                    </Text>
                {/if}

                {#if consentError}
                    <Text variant="muted" class="text-red-600">
                        {consentError}
                    </Text>
                {/if}

            </div>
        {/if}

        <!-- Payment -->
        <!-- Payment -->
        {#if !data.rider.parental_consent_required || data.rider.parental_consent_submitted}
            {#if !data.rider.payment_successful}
                <div class="mt-8 p-6 border rounded-xl bg-white/10 space-y-6">

                    <Text variant="subtitle">💳 Payment Pending</Text>
                    <!-- Registration Fee -->
                    <div class="p-4 rounded-lg bg-blue-500/10 border border-blue-400/40">
                        <Text variant="label" class="text-blue-300">
                            Registration Fee
                        </Text>
                        <div class="p-4 rounded-lg">
                        <Text variant="title" class="text-blue-400 ">
                            ₹ 3,000
                        </Text>
                        </div>
                        <Text variant="muted" class="text-gray-300">
                            (Non-refundable)
                        </Text>
                    </div>

                    <!-- Bank / UPI Details -->
                    <div class="border rounded-lg p-4 space-y-2 text-gray-200">
                        <Text variant="body"><b>Account Name:</b> Tshering Namgyal Lama</Text>
                        <Text variant="body"><b>Account No:</b> 110179190001</Text>
                        <Text variant="body"><b>IFSC:</b> CNRB0004157</Text>
                        <Text variant="body"><b>Bank:</b> Canara Bank</Text>
                        <Text variant="body"><b>Mobile No:</b> 7086619320</Text>
                    </div>

                    <!-- QR Code -->
                    <div class="flex justify-center">
                        <img
                                src="/images/qr.jpeg"
                                class="w-44 h-44 rounded-lg border border-white/20"
                                alt="Payment QR Code"
                        />
                    </div>

                    <!-- Upload Button -->
                    <div class="space-y-2">
                        <Text variant="label">
                            Upload Payment Screenshot *
                        </Text>

                        <label
                                class="flex items-center justify-center gap-3
                           w-full px-5 py-4 rounded-lg
                           border border-blue-500/60
                           text-blue-300 font-semibold
                           cursor-pointer
                           transition
                           hover:bg-blue-500/10 hover:border-blue-400 duration-500
                           {uploading ? 'opacity-50 cursor-not-allowed' : ''}"
                        >
                            ⬆️ Upload Payment Proof

                            <input
                                    type="file"
                                    accept="image/*"
                                    onchange={uploadPaymentProof}
                                    disabled={uploading}
                                    class="hidden"
                            />
                        </label>
                    </div>

                    {#if uploading}
                        <Text variant="muted" class="text-blue-400">
                            Uploading payment proof…
                        </Text>
                    {/if}

                    {#if uploadSuccess}
                        <Text variant="muted" class="text-green-400">
                            Payment proof uploaded ✅ Redirecting…
                        </Text>
                    {/if}

                    {#if uploadError}
                        <Text variant="muted" class="text-red-400">
                            {uploadError}
                        </Text>
                    {/if}

                </div>
            {/if}
        {/if}

    </div>
</section>
<style>
    .blink {
        animation: softBlink 1.8s ease-in-out infinite;
    }

    @keyframes softBlink {
        0% {
            opacity: 1;
            transform: translateX(100%);
        }
        50% {
            opacity: 0.5;
            transform: translateX(200%);
        }
        100% {
            opacity: 1;
            transform: translateX(100%);
        }
    }

</style>
