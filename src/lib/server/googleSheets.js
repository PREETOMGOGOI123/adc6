import { google } from "googleapis";
import credentials from "./google-service-account.json";

const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
});

export async function appendToSheet(row) {
    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
        spreadsheetId: "1bpwf1u8prH0SPgi5d8AEZVbFZuyyiyfohhPEbNfK2ew/edit?gid=0#gid=0",
        range: "Sheet1!A:E",
        valueInputOption: "USER_ENTERED",
        requestBody: {
            values: [row]
        }
    });
}
