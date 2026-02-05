<script>
    let { data } = $props();

    /* =========================
       PAYMENT STATE (ORIGINAL)
    ========================= */
    let uploading = $state(false);
    let uploadError = $state("");
    let uploadSuccess = $state(false);
    let paymentForm;

    const DRIVE_UPLOAD_URL =
        "https://script.google.com/macros/s/AKfycbwNX2g9gh_DAACtpN97JECGwZW2Yq7G79srN12Q02zgJ_XY7Xg2ruSnDXsl-7kM_QCJUw/exec";

    /* =========================
       CONSENT STATE (NEW ONLY)
    ========================= */
    let consentUploading = $state(false);
    let consentError = $state("");
    let consentSuccess = $state(false);
    let consentForm;

    // ✅ dummy – you will replace
    const CONSENT_UPLOAD_URL =
        "https://script.google.com/macros/s/AKfycbxE3_dUtsmq2CKd5FuJqLlB2jiSGcrengPYq52dNwDues2u6jRkoPtHJFJ1GIqu4yI/exec";

    /* =========================
       PAYMENT UPLOAD (UNCHANGED)
    ========================= */
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

            paymentForm.querySelector('input[name="fileUrl"]').value =
                result.fileUrl;

            paymentForm.requestSubmit();
        } catch {
            uploadError = "Upload failed. Try again.";
        } finally {
            uploading = false;
        }
    }

    /* =========================
       CONSENT UPLOAD (NEW)
    ========================= */
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

            consentForm.querySelector('input[name="consentUrl"]').value =
                result.fileUrl;

            consentForm.requestSubmit();
        } catch {
            consentError = "Consent upload failed. Try again.";
        } finally {
            consentUploading = false;
        }
    }

    /* =========================
       HELPER
    ========================= */
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

<!-- =========================
     HIDDEN BACKEND FORMS
========================= -->

<form
        method="POST"
        action="?/markPaymentSuccessful"
        bind:this={paymentForm}
        class="hidden"
>
    <input type="hidden" name="fileUrl" />
</form>

<form
        method="POST"
        action="?/submitParentalConsent"
        bind:this={consentForm}
        class="hidden"
>
    <input type="hidden" name="consentUrl" />
</form>

<!-- =========================
     PAGE UI
========================= -->

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

        <!-- =========================
             PARENTAL CONSENT (GATE)
        ========================= -->
        {#if data.rider.parental_consent_required && !data.rider.parental_consent_submitted}
            <div class="mt-8 p-6 border rounded-xl bg-orange-50 space-y-6">
                <h2 class="text-xl font-semibold">
                    🧾 Parental Consent Required
                </h2>

                <a
                        href="/parental-consent.pdf"
                        download
                        class="inline-block px-5 py-3 bg-black text-white rounded-lg"
                >
                    Download Consent Form
                </a>

                <input
                        type="file"
                        accept="application/pdf,image/*"
                        onchange={uploadParentalConsent}
                        disabled={consentUploading}
                        class="block w-full border rounded-lg p-3"
                />

                {#if consentUploading}
                    <p class="text-sm text-blue-600">Uploading consent…</p>
                {/if}

                {#if consentSuccess}
                    <p class="text-sm text-green-600">
                        Consent uploaded ✅ Redirecting…
                    </p>
                {/if}

                {#if consentError}
                    <p class="text-sm text-red-600">{consentError}</p>
                {/if}
            </div>
        {/if}

        <!-- =========================
             PAYMENT (UNCHANGED)
        ========================= -->
        {#if
            !data.rider.parental_consent_required ||
            data.rider.parental_consent_submitted
        }
            {#if !data.rider.payment_successful}
                <div class="mt-8 p-6 border rounded-xl bg-blue-50 space-y-6">

                    <h2 class="text-xl font-semibold">💳 Payment Pending</h2>

                    <!-- Bank / UPI Details -->
                    <div class="bg-white border rounded-lg p-4 space-y-2 text-sm text-gray-800">
                        <p><strong>Account Name:</strong> Tshering Namgyal Lama</p>
                        <p><strong>Account No:</strong> 110179190001</p>
                        <p><strong>IFSC:</strong> CNRB0004157</p>
                        <p><strong>Bank:</strong> Canara Bank</p>
                        <p><strong>Mobile No:</strong> 7086619320</p>
                    </div>

                    <!-- QR Code -->
                    <div class="flex justify-center">
                        <img
                                src="/images/qr.jpeg"
                                class="w-48 h-48 rounded-lg border"
                                alt="Payment QR Code"
                        />
                    </div>

                    <!-- Upload Proof -->
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700">
                            Upload Payment Screenshot *
                        </label>

                        <input
                                type="file"
                                accept="image/*"
                                onchange={uploadPaymentProof}
                                disabled={uploading}
                                required
                                class="block w-full border rounded-lg p-3 bg-white"
                        />
                    </div>

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
            {/if}
        {/if}

    </div>
</section>
