import { connectDB } from "$lib/server/mongo.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    const key = params.key?.trim().toUpperCase();

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
