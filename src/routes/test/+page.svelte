<script>
    let { data } = $props();
    const rider = $derived(() => data.rider);

</script>

<section class="container mx-auto px-4 py-10">
    <div class="max-w-4xl mx-auto bg-white border rounded-3xl p-8 space-y-6">

        <h1 class="text-3xl font-bold text-gray-900">
            Rider Details
        </h1>

        <p class="text-lg text-gray-700">
            Welcome, <b>{rider.name}</b>
        </p>

        <div class="grid md:grid-cols-2 gap-4 text-gray-800">

            <p><b>Registration Key:</b> {rider.registrationKey}</p>
            <p><b>Email:</b> {rider.email}</p>

            <p><b>Age:</b> {rider.age}</p>
            <p><b>Gender:</b> {rider.gender}</p>

            <p><b>Contact:</b> {rider.contact}</p>
            <p><b>Emergency:</b> {rider.emergency}</p>

            <p><b>Blood Group:</b> {rider.blood}</p>
            <p><b>State:</b> {rider.state}</p>

            <p><b>Category:</b> {rider.category}</p>
            <p><b>Bike Type:</b> {rider.bikeType}</p>

            <p><b>Food:</b> {rider.food}</p>
            <p><b>Jersey:</b> {rider.jersey}</p>

            <p><b>Registered At:</b>
                {new Date(rider.createdAt).toLocaleString()}
            </p>
        </div>

        <div class="pt-6 border-t flex gap-4">
            <a
                    href="/login"
                    class="px-6 py-3 rounded-xl bg-gray-200 font-semibold"
            >
                Back to Login
            </a>

            <a
                    href="/register/rules"
                    class="flex-1 px-6 py-3 rounded-xl bg-black text-white font-semibold text-center"
            >
                Register Another Rider →
            </a>
        </div>

    </div>
</section>
