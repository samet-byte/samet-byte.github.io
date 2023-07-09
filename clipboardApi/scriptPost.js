document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'https://script.google.com/macros/s/AKfycbx8HldRYNkvjCzV_Pay7iAsqbD0hK3GNow_gwF5aStJoel_ew4_fPxPXkyXfeL0IIDW/exec';

    const submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', () => {
        const inputWord = document.getElementById('word').value;
        
        
        fetch(API_URL + '?C=' + encodeURIComponent(inputWord), {
            method: 'POST',
        })
        .then(data => {
            // Split the data into separate lines

            const lines = data.split('\n');

            // Create an array of HTML elements for each line
            const lineElements = lines.map(line => {
                const lineElement = document.createElement('div');
                lineElement.textContent = line;
                return lineElement;
            });

            // Get the container element where the lines will be displayed
            const resultContainer = document.getElementById('result');


            // Append each line element to the container
            lineElements.forEach(lineElement => {
                resultContainer.appendChild(lineElement);
            });
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });
    });

    
});
