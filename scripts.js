document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signin-form');
    form.addEventListener('submit', function(event) {
        const email = document.getElementById('email').value;
        if (!email) {
            alert('Please enter your email or phone.');
            event.preventDefault();  // Prevent the form from submitting
        }
    });
});
