document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const projectTiles = document.querySelectorAll('.project-tile');
    const checkbox = document.querySelector('.hamburger input');
    const sidebar = document.querySelector('.sidebar');

    // Ensure the sidebar is initially hidden
    sidebar.style.right = '-300px';

    // Toggle sidebar functionality
    document.querySelector('.hamburger input').addEventListener('change', function () {
        if (this.checked) {
            document.querySelector('.sidebar').style.right = '0';
        } else {
            document.querySelector('.sidebar').style.right = '-300px';
        }
    }); 
    // Close sidebar when close button is clicked
    closeBtn.addEventListener('click', () => {
        sidebar.style.right = '-300px';
    });
});
