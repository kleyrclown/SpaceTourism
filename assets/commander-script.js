function showContent(contentId) {
    // Hide all content divs
    const contents = document.querySelectorAll('.content');
    contents.forEach(function(contents) {
        contents.style.display = 'none';
    });

    // Show the selected content
    const selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';
}