<?php
// Verify reCAPTCHA response
$secretKey = "6Lf86m0lAAAAAOBHw5geHXIUiHf4nB682QWQ_Np9";
$response = $_POST['g-recaptcha-response'];
$remoteIP = $_SERVER['REMOTE_ADDR'];
$url = "https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$response."&remoteip=".$remoteIP;

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$response = curl_exec($curl);
curl_close($curl);

$result = json_decode($response, true);
if ($result['success'] != 1) {
    // reCAPTCHA validation failed, handle the error
    // You could display an error message to the user or log the error
    exit("reCAPTCHA validation failed");
}

// If reCAPTCHA validation succeeded, process the form data
$name = $_POST['Name'];
$email = $_POST['Email'];
$message = $_POST['Message'];

// Process the form data as needed (send email, save to database, etc.)

// Redirect the user to a thank you page
header("Location: thank_you.html");
exit();
?>
