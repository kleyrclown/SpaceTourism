document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const technologies = data.technology.reduce((acc, tech) => {
          acc[tech.name.toLowerCase()] = {
            title: tech.name.toUpperCase(),
            imgportrait: tech.images.portrait,
            imglandscape: tech.images.landscape,
            info: tech.description
          };
          return acc;
        }, {});
  
        document.querySelectorAll('.technologiesBtn').forEach(button => {
          button.addEventListener('click', (e) => {
            e.preventDefault();
            const technology = button.getAttribute('btn-selections').toLowerCase();
            updateContent(technologies[technology]);
          });
        });
  
        function updateContent(data) {
          document.getElementById('techTitle').innerText = data.title;
          document.getElementById('techDescription').innerText = data.info;
          document.getElementById('technologyImgPortrait').src = data.imgportrait;
          document.getElementById('technologyImgLandscape').src = data.imglandscape;
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  