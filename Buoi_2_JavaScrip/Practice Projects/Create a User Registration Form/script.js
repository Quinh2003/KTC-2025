document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    const getVal = id => document.getElementById(id);
    const showError = (id, msg) => { getVal(id).textContent = msg; isValid = false; };
    const clearError = id => getVal(id).textContent = "";

    const fullName = getVal("fullName").value.trim();
    const email = getVal("email").value.trim();
    const password = getVal("password").value;
    const confirmPassword = getVal("confirmPassword").value;
    const phone = getVal("phone").value.trim();
    const dob = getVal("dob").value;
    const country = getVal("country").value;
    const hobbies = document.querySelectorAll("input[name='hobbies']:checked");
    const gender = document.querySelector("input[name='gender']:checked");

    fullName.length < 3 ? showError("nameError", "At least 3 characters.") : clearError("nameError");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    !emailRegex.test(email) ? showError("emailError", "Invalid email.") : clearError("emailError");

    const passRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    !passRegex.test(password) ? showError("passwordError", "Min 8 chars with letters & numbers.") : clearError("passwordError");

    confirmPassword !== password || confirmPassword === ""
        ? showError("confirmPasswordError", "Passwords must match.")
        : clearError("confirmPasswordError");

    !/^\d{10,}$/.test(phone)
        ? showError("phoneError", "At least 10 digits.")
        : clearError("phoneError");

    !gender ? showError("genderError", "Select gender.") : clearError("genderError");

    if (!dob) {
        showError("dobError", "Enter your birth date.");
    } else {
        const age = new Date().getFullYear() - new Date(dob).getFullYear();
        age < 18 ? showError("dobError", "You must be over 18.") : clearError("dobError");
    }

    country === "" ? showError("countryError", "Select your country.") : clearError("countryError");

    hobbies.length === 0 ? showError("hobbiesError", "Choose at least one hobby.") : clearError("hobbiesError");

    if (isValid) {
        getVal("successMessage").textContent = "🎉 Registration successful!";
        this.reset();
        setTimeout(() => getVal("successMessage").textContent = "", 5000);
    } else {
        getVal("successMessage").textContent = "";
    }
});
