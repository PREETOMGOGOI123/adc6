import { fail } from "@sveltejs/kit";
import { connectDB } from "$lib/server/mongo.js";



export const actions = {
    login: async ({ request }) => {
        const data = await request.formData();
        const key = data.get("registrationKey");

        const db = await connectDB();

        // Collection name: registrations (example)
        const rider = await db
            .collection("adc_registrations")
            .findOne({ registrationKey: key });

        if (!rider) {
            return fail(400, {
                error: "Invalid Registration Key"
            });
        }

        return {
            success: true,
            rider: JSON.parse(JSON.stringify(rider))
        };
    }
};
