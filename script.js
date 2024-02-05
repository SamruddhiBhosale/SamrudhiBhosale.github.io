// script.js

// Function to update greeting based on the time of day
function updateGreeting() {
    const hour = new Date().getHours();
    const greeting = document.getElementById('greeting');

    if (hour < 12) {
        greeting.textContent = 'Good Morning!';
    } else if (hour < 18) {
        greeting.textContent = 'Good Afternoon!';
    } else {
        greeting.textContent = 'Good Evening!';
    }
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log('Form data:', data);
    // Add your form handling logic here (e.g., send data to a server)
}

document.addEventListener('DOMContentLoaded', (event) => {
    // Call updateGreeting when the page loads
    updateGreeting();

    // Add event listener for form submission if you have a form
    const form = document.getElementById('your-form-id');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});
