import { connectDB } from "$lib/server/mongo.js";
import { error } from "@sveltejs/kit";

export async function load() {
    const db = await connectDB();

    const riders = await db
        .collection("adc_registrations")
        .find({})
        .sort({ created_at: -1 })
        .toArray();

    return {
        riders: JSON.parse(JSON.stringify(riders))
    };
}
