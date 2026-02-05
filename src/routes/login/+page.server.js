import { redirect, fail } from "@sveltejs/kit";
import { connectDB } from "$lib/server/mongo.js";

export const actions = {
    login: async ({ request }) => {
        const data = await request.formData();
        const key = data.get("registrationKey")?.trim().toUpperCase();

        if (!key) {
            return fail(400, { error: "Registration key required" });
        }

        const db = await connectDB();

        const rider = await db
            .collection("adc_registrations")
            .findOne({ registrationKey: key });

        if (!rider) {
            return fail(400, { error: "Invalid Registration Key" });
        }

        console.log("✅ LOGIN SUCCESS — RIDER:", rider.name);

        // ✅ correct route
        throw redirect(302, `/register/${key}`);
    }
};
