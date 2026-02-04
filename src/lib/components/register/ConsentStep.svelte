<script>
    let { onNext, onBack } = $props();

    // ✅ Reactive state (Svelte 5)
    let uploadedDriveUrl = $state(null);
    let uploading = $state(false);
    let errorMsg = $state("");

    // ✅ Upload Handler
    async function handleUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        // ✅ Allowed file types
        const allowedTypes = [
            "application/pdf",
            "image/jpeg",
            "image/png"
        ];

        if (!allowedTypes.includes(file.type)) {
            alert("Only PDF, JPG, or PNG files are allowed.");
            return;
        }

        // ✅ File size limit (4MB)
        const maxSizeMB = 4;
        const maxSizeBytes = maxSizeMB * 1024 * 1024;

        if (file.size > maxSizeBytes) {
            alert(`File too large! Max allowed size is ${maxSizeMB}MB.`);
            return;
        }

        uploading = true;
        errorMsg = "";

        try {
            // Convert file → Base64
            const base64 = await fileToBase64(file);

            // Upload through SvelteKit backend proxy
            const res = await fetch("/api/consent-upload", {
                method: "POST",
                body: JSON.stringify({
                    fileName: file.name,
                    fileType: file.type,
                    base64: base64
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!res.ok) {
                throw new Error("Upload failed.");
            }

            const data = await res.json();

            if (data.success) {
                uploadedDriveUrl = data.driveUrl;
            } else {
                throw new Error("Apps Script upload failed.");
            }
        } catch (err) {
            console.error("UPLOAD ERROR:", err);
            errorMsg = "Upload failed. Please try again.";
        } finally {
            uploading = false;
        }
    }

    // ✅ Convert File → Base64
    function fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result.split(",")[1]);
            };

            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }
</script>

<!-- ============================= -->
<!-- CONSENT UPLOAD UI -->
<!-- ============================= -->

<div class="space-y-6">

    <!-- Title -->
    <h2 class="text-xl font-semibold">
        Parental Consent Form
    </h2>

    <!-- Info -->
    <p class="text-black leading-7">
        Riders under 18 must download, sign, and upload the parental consent form.
    </p>

    <!-- Download -->
    <a
            href="/consent.pdf"
            download
            class="inline-block px-4 py-3 rounded-lg bg-white border hover:bg-gray-100 transition"
    >
        📄 Download Consent Form
    </a>

    <!-- Upload Section -->
    <div class="mt-6 space-y-2">
        <label class="font-semibold text-black">
            📤 Upload Signed Consent Form *
        </label>

        <!-- ✅ Correct Svelte 5 Event -->
        <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onchange={handleUpload}
                class="w-full px-4 py-3 rounded-lg border"
        />

        <!-- File Limit Note -->
        <p class="text-sm text-gray-500">
            Max file size: 4MB (PDF, JPG, PNG only)
        </p>

        <!-- Uploading State -->
        {#if uploading}
            <p class="text-sm text-yellow-600">
                Uploading...
            </p>
        {/if}

        <!-- Error State -->
        {#if errorMsg}
            <p class="text-sm text-red-600">
                ❌ {errorMsg}
            </p>
        {/if}

        <!-- Success State -->
        {#if uploadedDriveUrl}
            <p class="text-sm text-green-600">
                ✅ Upload successful!
            </p>
        {/if}
    </div>

    <!-- Buttons -->
    <div class="flex gap-3 mt-8">

        <!-- Back Button -->
        <button
                type="button"
                onclick={onBack}
                class="px-5 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
        >
            ← Back
        </button>

        <!-- Continue Button -->
        <button
                type="button"
                onclick={onNext}
                disabled={!uploadedDriveUrl}
                class="flex-1 py-3 rounded-lg font-semibold transition
            {uploadedDriveUrl
                ? 'bg-black text-white hover:scale-[1.02]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'}"
        >
            Continue →
        </button>
    </div>
</div>
