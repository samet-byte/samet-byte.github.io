  // Function to fetch data from the API and display it in the <h1> element
  async function fetchDataAndShow() {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbx8HldRYNkvjCzV_Pay7iAsqbD0hK3GNow_gwF5aStJoel_ew4_fPxPXkyXfeL0IIDW/exec'); // Replace with your API endpoint URL
      const data = await response.text(); // Use response.text() to get plain text data

      // Update the <h1> element with the data from the API
      const h1Element = document.getElementById('apiData');
      h1Element.textContent = data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Call the function to fetch and display the data
  fetchDataAndShow();