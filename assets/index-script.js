document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetDiv = document.getElementById(targetId);

            // Hide all content divs
            document.querySelectorAll('.content').forEach(div => {
                div.style.display = 'none';
            });

            // Show the targeted div
            targetDiv.style.display = 'block';
        });
    });

    // Optionally, display the first content by default
    document.getElementById('content1').style.display = 'block';
});