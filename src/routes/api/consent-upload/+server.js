export async function POST({ request }) {
    const body = await request.json();

    // ✅ Convert JSON → FormData (Apps Script works best with this)
    const formData = new URLSearchParams();
    formData.append("fileName", body.fileName);
    formData.append("fileType", body.fileType);
    formData.append("base64", body.base64);

    const SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbwuoWhHKew1-VcFuaGVX1n4ldcRX-wVEotffUEc8hZTzcAEOXLpjrn0P8qJY6bPzz1HdA/exec";

    // Forward request to Apps Script
    const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData
    });

    const result = await response.json();

    return new Response(JSON.stringify(result), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}
