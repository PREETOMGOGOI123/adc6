import { redirect, fail } from "@sveltejs/kit";
import { connectDB } from "$lib/server/mongo.js";

const ADMIN_KEY = "SPK26ADC";

export const actions = {
    login: async ({ request }) => {
        const data = await request.formData();
        const key = data.get("registrationKey")?.trim().toUpperCase();

        if (!key) {
            return fail(400, { error: "Registration key required" });
        }

        // ✅ ADMIN LOGIN
        if (key === ADMIN_KEY) {
            throw redirect(302, "/admin");
        }

        const db = await connectDB();

        const rider = await db
            .collection("adc_registrations")
            .findOne({ registrationKey: key });

        if (!rider) {
            return fail(400, { error: "Invalid Registration Key" });
        }


        throw redirect(302, `/register/${key}`);
    }
};
