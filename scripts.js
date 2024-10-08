function scrollLeft() {
    const iconRow = document.getElementById('icon-row');
    iconRow.scrollBy({
        top: 0,
        left: -200, // Change this value based on how much you want to scroll
        behavior: 'smooth' // Smooth scrolling
    });
}

function scrollRight() {
    const iconRow = document.getElementById('icon-row');
    iconRow.scrollBy({
        top: 0,
        left: 200, // Change this value based on how much you want to scroll
        behavior: 'smooth' // Smooth scrolling
    });
}
