document.addEventListener('DOMContentLoaded', () => {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const destinations = data.destinations.reduce((acc, dest) => {
        acc[dest.name.toLowerCase()] = {
          title: dest.name.toUpperCase(),
          img: dest.images.webp,
          description: dest.description,
          distance: dest.distance,
          travelTime: dest.travel
        };
        return acc;
      }, {});

      document.querySelectorAll('.destinationBtn').forEach(button => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          const destination = button.getAttribute('btn-destination').toLowerCase();
          updateContent(destinations[destination]);
        });
      });

      function updateContent(data) {
        document.getElementById('destinationTitle').innerText = data.title;
        document.getElementById('destinationImg').src = data.img;
        document.getElementById('destinationDescription').innerText = data.description;
        document.getElementById('destinationDistance').innerText = data.distance;
        document.getElementById('destinationTravelTime').innerText = data.travelTime;
      }
    })
    .catch(error => console.error('Error fetching data:', error));
});