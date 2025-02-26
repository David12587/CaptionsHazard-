// script.js

const DEEPAI_API_KEY = '360903e5-589b-4d30-b121-a71e2cacf761'; // Get your DeepAI API Key

document.getElementById('generateBtn').addEventListener('click', function() {
    fetch('https://api.deepai.org/api/text-generator', {
        method: 'POST',
        headers: {
            'Api-Key': DEEPAI_API_KEY,
        },
        body: JSON.stringify({
            text: "Generate a creative caption for social media"
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('caption').innerText = data.output;
    })
    .catch(error => console.error('Error:', error));
});
