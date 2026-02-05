import { connectDB } from "$lib/server/mongo.js";
import { error, redirect } from "@sveltejs/kit";

/* -----------------------------------
   LOAD RIDER DATA
----------------------------------- */
export async function load({ params }) {
    const key = params.key?.trim().toUpperCase();

    if (!key) {
        throw error(400, "Invalid registration key");
    }

    const db = await connectDB();

    const rider = await db
        .collection("adc_registrations")
        .findOne({ registrationKey: key });

    if (!rider) {
        throw error(404, "Rider not found");
    }

    return {
        rider: JSON.parse(JSON.stringify(rider))
    };
}

/* -----------------------------------
   ACTIONS
----------------------------------- */
export const actions = {
    markPaymentSuccessful: async ({ params, request }) => {
        const key = params.key?.trim().toUpperCase();

        if (!key) {
            throw error(400, "Invalid registration key");
        }

        const formData = await request.formData();
        const fileUrl = formData.get("fileUrl");

        if (!fileUrl) {
            throw error(400, "File URL missing");
        }

        const db = await connectDB();

        await db.collection("adc_registrations").updateOne(
            { registrationKey: key },
            {
                $set: {
                    payment_successful: true,
                    payment_proof_url: fileUrl,
                    payment_marked_at: new Date()
                }
            }
        );

        // ✅ HARD reload the same page → load() runs again
        throw redirect(303, `/register/${key}`);
    }
};
