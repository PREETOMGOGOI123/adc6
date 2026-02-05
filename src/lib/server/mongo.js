import { MongoClient } from "mongodb";
import { MONGO_URI } from "$env/static/private";

let client;
let db;

export async function connectDB() {
    if (db) return db;

    client = new MongoClient(MONGO_URI);

    await client.connect();

    console.log("✅ MongoDB Atlas Connected Successfully!");

    db = client.db("adc_participation");

    return db;
}
