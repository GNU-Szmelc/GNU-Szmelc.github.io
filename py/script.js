<script>
    // JavaScript code to handle the POST request
    fetch('header.txt', {
        method: 'POST',
        body: JSON.stringify({ key: 'value' }) // Change this data as needed
    })
    .then(response => response.text())
    .then(data => {
        // Handle the response here
        console.log(data);
        // You can display the content on the page or use it in any way you need.
    })
    .catch(error => {
        console.error('Error:', error);
    });
</script>
