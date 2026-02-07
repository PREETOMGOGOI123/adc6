import { connectDB } from "$lib/server/mongo.js";

export async function load() {
    const db = await connectDB();

    const riders = await db
        .collection("adc_registrations")
        .find({})
        // OLDEST FIRST → first registrant = 1
        .sort({ createdAt: 1 })
        .toArray();

    return {
        riders: JSON.parse(JSON.stringify(riders))
    };
}
