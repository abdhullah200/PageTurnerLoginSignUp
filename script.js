document.getElementById('nameInput').addEventListener('input', function() {
  var name = this.value;
  document.getElementById('eye-left').innerHTML = "   "+ name;
});


function register() {
  // Your register function logic
  // Example: You might want to prevent form submission or handle custom validation
  var form = document.getElementById('signupForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    // Add your custom form submission logic here
  });
}
