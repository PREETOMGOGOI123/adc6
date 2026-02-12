import { connectDB } from "$lib/server/mongo";
import { redirect, fail } from "@sveltejs/kit";


/* -----------------------------------
   ✅ Generate Random Registration Key
----------------------------------- */
function generateRegistrationKey() {
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `ADC6-${random}`;
}

/* -----------------------------------
   ✅ Form Submit Action
----------------------------------- */
export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData.entries());

        // Get all categories
        data.category = formData.getAll("category");

        // Convert age
        data.age = Number(data.age);

        // Connect DB
        const db = await connectDB();

        /* -----------------------------------
           ✅ CHECK IF PHONE ALREADY EXISTS
        ----------------------------------- */
        const existing = await db
            .collection("adc_registrations")
            .findOne({
                $or: [
                    // phone ↔ phone
                    { contact: data.contact },
                    { emergency: data.contact },

                    // emergency ↔ phone
                    { contact: data.emergency },
                    { emergency: data.emergency },

                    // email
                    { email: data.email }
                ]
            });

        if (existing) {
            return fail(400, {
                error: "Phone number or email already registered"
            });
        }



        // Generate registration key
        data.registrationKey = generateRegistrationKey();

        // Consent logic
        if (data.age < 18) {
            data.parental_consent_required = true;
            data.parental_consent_submitted = false;
        } else {
            data.parental_consent_required = false;
            data.parental_consent_submitted = false;
        }

        // Payment status
        data.payment_successful = false;

        // Timestamp
        data.createdAt = new Date();

        // Save registration
        await db.collection("adc_registrations").insertOne(data);

        console.log("✅ Registration Saved:", data.registrationKey);

        // Redirect
        throw redirect(303, `/register/${data.registrationKey}`);
    }
};
