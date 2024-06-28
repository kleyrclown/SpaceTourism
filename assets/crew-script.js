document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const crewLists = data.crew.reduce((acc, crew) => {
                acc[crew.name.toLowerCase()] = {
                    name: crew.name.toUpperCase(),
                    img: crew.images.webp,
                    role: crew.role.toUpperCase(),
                    bio: crew.bio
                };
                return acc;
            }, {});

            document.querySelectorAll('.crewListBtn').forEach(button => {
                button.addEventListener('click', event => {
                    event.preventDefault();
                    const crewName = button.getAttribute('btn-selections').toLowerCase();
                    updateContent(crewLists[crewName]);
                });
            });

            function updateContent(crewData) {
                document.getElementById('crewJobs').innerText = crewData.role;
                document.getElementById('crewName').innerText = crewData.name;
                document.getElementById('crewInfo').innerText = crewData.bio;
                document.getElementById('crewImages').src = crewData.img;
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});
