// script.js
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Basic form validation (you can add more robust validation)
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const password = document.getElementById('password').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const languages = document.querySelectorAll('input[name="language"]:checked');
    const phone = document.getElementById('phone').value;

    if (!firstName || !lastName || !email || !age || !password || !gender || languages.length === 0 || !phone) {
        alert('Please fill in all fields.');
        return;
    }

    // You can add logic to send this data to a server
    console.log({
        firstName,
        lastName,
        email,
        age,
        password,
        gender: gender.value,
        languages: Array.from(languages).map(lang => lang.value),
        phone
    });
    alert('You have successfully login in!'); // Replace with actual submission logic
});
