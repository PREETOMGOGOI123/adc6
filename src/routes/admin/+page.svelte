<script>
    let { data } = $props();

    function paymentStatus(rider) {
        return rider.payment_successful ? "Done" : "Pending";
    }

    function consentStatus(rider) {
        if (!rider.parental_consent_required) return "N/A";
        return rider.parental_consent_submitted ? "Done" : "Pending";
    }

    function badgeClass(status) {
        if (status === "Done") return "bg-green-500/20 text-green-300";
        if (status === "Pending") return "bg-yellow-500/20 text-yellow-300";
        return "bg-gray-500/20 text-gray-300";
    }
</script>

<section class="container mx-auto px-4 mt-20">
    <!-- ================= HEADER ================= -->
    <div class="mb-8 py-2 bg-gradient-to-br from-orange-500 to-red-600">
        <h1 class="text-3xl font-bold text-white">
            Admin Dashboard
        </h1>
        <p class="text-sm text-white/60">
            ADC 6.0 Registrations Overview
        </p>
    </div>

    <!-- ================= SUMMARY CARDS ================= -->
    <div class="flex justify-between gap-4 mb-10 ">
        <div class="rounded-lg p-5 bg-gradient-to-br from-indigo-600 to-indigo-800">
            <p class="text-xl ">Total Registrations</p>
            <p class="text-3xl font-bold text-white">
                {data.riders.length}
            </p>
        </div>

        <div class="rounded-lg p-5 bg-gradient-to-br from-green-600 to-green-800">
            <p class="text-xl ">Payments Completed</p>
            <p class="text-3xl font-bold text-white">
                {data.riders.filter(r => r.payment_successful).length}
            </p>
        </div>

        <div class="rounded-lg p-5 bg-gradient-to-br from-amber-600 to-amber-800">
            <p class="text-xl ">Consent Pending</p>
            <p class="text-3xl font-bold text-white">
                {data.riders.filter(
                    r => r.parental_consent_required && !r.parental_consent_submitted
                ).length}
            </p>
        </div>
    </div>

    <!-- ================= TABLE ================= -->
    <div class="overflow-x-auto rounded-2xl border border-black/10 bg-white backdrop-blur p-4">
        <table class="admin-table w-full text-base text-left text-black">
            <thead class="bg-slate-200 uppercase tracking-wider">
            <tr>
                <th class="px-6 py-4 font-semibold text-left">#</th>
                <th class="px-6 py-4 font-semibold text-left">Name</th>
                <th class="px-6 py-4 font-semibold text-left">Gender</th>
                <th class="px-6 py-4 font-semibold text-left">Reg Key</th>
                <th class="px-6 py-4 font-semibold text-left">Category</th>
                <th class="px-6 py-4 font-semibold text-left">Payment</th>
                <th class="px-6 py-4 font-semibold text-left">Parental Consent</th>
            </tr>
            </thead>

            <tbody>
            {#each data.riders as rider, index}
                {@const payment = paymentStatus(rider)}
                {@const consent = consentStatus(rider)}
                {@const hasPending = payment === 'Pending' || consent === 'Pending'}

                <tr
                        class="
        admin-row
        border-t border-black/10

        {hasPending ? 'is-pending' : ''}
    "
                >

                <!-- SERIAL -->
                    <td class="px-6 py-4 font-medium">
                        {index + 1}
                    </td>

                    <!-- NAME -->
                    <td class="px-6 py-4 text-lg font-semibold">
                        {rider.name}
                    </td>

                    <!-- GENDER -->
                    <td class="px-6 py-4 capitalize">
                        {rider.gender ?? "—"}
                    </td>

                    <!-- REG KEY -->
                    <td class="px-6 py-4 font-mono tabular-nums">
                        {rider.registrationKey}
                    </td>

                    <!-- CATEGORY -->
                    <td class="px-6 py-4">
                        {Array.isArray(rider.category)
                            ? rider.category.join(", ")
                            : rider.category}
                    </td>

                    <!-- PAYMENT -->
                    <td class="px-6 py-4">
                        <div class="flex items-center gap-4">
                        <span
                                class="
                                inline-flex px-4 py-1.5 rounded-full
                                text-sm font-semibold
                                {payment === 'Pending'
                                    ? 'bg-red-500/20 text-red-700 ring-1 ring-red-400/40'
                                    : 'bg-green-500/20 text-green-700'}
                            "
                        >
                            {payment}
                        </span>

                            {#if rider.payment_proof_url}
                                <a
                                        href={rider.payment_proof_url}
                                        target="_blank"
                                        class="text-sm underline "
                                >
                                    View
                                </a>
                            {/if}
                        </div>
                    </td>

                    <!-- CONSENT -->
                    <td class="px-6 py-4">
                        <div class="flex items-center gap-4">
                        <span
                                class="
                                inline-flex px-4 py-1.5 rounded-full
                                text-sm font-semibold
                                {consent === 'Pending'
                                    ? 'bg-red-500/20 text-red-700 ring-1 ring-red-400/40'
                                    : consent === 'Done'
                                        ? 'bg-green-500/20 text-green-700'
                                        : 'bg-gray-300/40 text-gray-700'}
                            "
                        >
                            {consent}
                        </span>

                            {#if rider.consent_url}
                                <a
                                        href={rider.consent_url}
                                        target="_blank"
                                        class="text-sm underline text-black/70 hover:text-black"
                                >
                                    View
                                </a>
                            {/if}
                        </div>
                    </td>
                </tr>
            {/each}

            {#if data.riders.length === 0}
                <tr>
                    <td colspan="7" class="px-6 py-10 text-center text-black/50">
                        No registrations found.
                    </td>
                </tr>
            {/if}
            </tbody>
        </table>
    </div>
</section>

<style>
    /* Force left alignment for table headers */

    .admin-table thead {
        background-color: #F7FAEE;
        border-radius: 10px 0 10px 0;
    }
    .admin-table thead th {
        text-align: left;
        color: #1f2937; /* slate-800 */

    }
    /* ===============================
   ADMIN TABLE ROW HOVER
================================ */

    .admin-row {
        transition: background-color 0.5s ease, transform 0.5s ease;
    }

    /* Hover highlight */
    .admin-row:hover {
        background-color: rgba(0, 0, 0, 0.06);
    }

    /* Pending rows base */


    /* Pending rows hover (still visible) */
    .admin-row.is-pending:hover {
        background-color: rgba(239, 68, 68, 0.18);
    }

    a{
        color: dodgerblue;
        cursor: pointer;
    }
    a:hover {
        color: blue;
        font-weight: bold;
        transition: all 0.2s ease-in-out;
    }

</style>