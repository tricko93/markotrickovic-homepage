document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('hardware-card-container');

    fetch('hardware-data.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('hardware-card');

                const title = document.createElement('h3');
                title.textContent = item.name;

                const image = document.createElement('img');
                image.src = item.images[0];

                card.appendChild(title);
                card.appendChild(image);
                container.appendChild(card);

                // Add click event listener to navigate to detail page
                card.addEventListener('click', function() {
                    // Navigate to hardware detail page with item ID or name
                    window.location.href = `photos.html?item=${encodeURIComponent(item.name)}`;
                })
            });
        })
        .catch(error => console.error('Error fetching hardware data:', error));
});
