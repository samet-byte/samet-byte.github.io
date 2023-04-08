<?php
// Get the user's response from the form submission
$user_response = $_POST['g-recaptcha-response'];

// Send a POST request to the reCAPTCHA verification API
$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6Lf86m0lAAAAAOBHw5geHXIUiHf4nB682QWQ_Np9&response=".$user_response);

// Decode the response from the API
$response_data = json_decode($response);

// Check if the response is valid
if ($response_data->success) {
  // The user is not a robot, process the form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Do something with the form data, such as send an email or store in a database
  // ...

  // Redirect the user to a thank you page
  header("Location: thank_you.html");
} else {
  // The user is a robot, show an error message
  echo "Sorry, we could not verify that you are human.";
}
?>
