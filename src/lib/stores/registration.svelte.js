// src/lib/stores/registration.svelte.js

export const registrationStore = $state({
    rulesChecked: false,
    consentChecked: false,
    // Login step

    registrationKey: "",
    existingUser: null,

    // UI flow control
    mode: "login"
});
