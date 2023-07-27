
function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Get form data
    const formData = new FormData(event.target);
  
    // Convert data to JSON
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    const jsonData = JSON.stringify(data);
    
    // URL of the API endpoint (replace '...' with the actual API URL)
    
    const apiUrl = "https://script.google.com/macros/s/AKfycbyQ7-M6a5ZfzfwMNjTqh38Kkz2A5VtUrQoVGOhdu6_fWEOXMtJ6sT9AVnjLCj7OQ0_E/exec?C=https://script.google.com/macros/s/AKfycbyQ7-M6a5ZfzfwMNjTqh38Kkz2A5VtUrQoVGOhdu6_fWEOXMtJ6sT9AVnjLCj7OQ0_E/exec?A=p&C=";
  
    // Send data to the API using Fetch API
    fetch(apiUrl, {
      method: "POST",
      body: jsonData,
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then(responseText => {
        console.log("Data sent successfully to the API. Response:", responseText);
        // You can do something with the API response here if needed
      })
      .catch(error => {
        console.error("Error sending data to the API:", error);
      });
  
    alert("Form submitted successfully!");
    event.target.reset(); // Reset the form
  }
  
