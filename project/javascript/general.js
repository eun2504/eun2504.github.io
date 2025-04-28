document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenuToggle = document.querySelector('.hamburger-menu-toggle');
    const sections = document.querySelector('.sections');
    const barsIcon = hamburgerMenuToggle.querySelector('.fa-solid.fa-bars');
    const timesIcon = document.createElement('i');

    timesIcon.classList.add('fa-solid', 'fa-times');
    timesIcon.style.display = 'none';
    hamburgerMenuToggle.appendChild(timesIcon);

    hamburgerMenuToggle.addEventListener('click', function () {
        sections.classList.toggle('open');

        // Toggle the visibility of the icons
        if (sections.classList.contains('open')) {
            if (barsIcon) barsIcon.style.display = 'none';
            if (timesIcon) timesIcon.style.display = 'flex';
        } else {
            if (barsIcon) barsIcon.style.display = 'flex';
            if (timesIcon) timesIcon.style.display = 'none';
        }
    });

    const closeMenuIcon = sections.querySelector('.close');
    if (closeMenuIcon) {
        closeMenuIcon.addEventListener('click', function () {
            sections.classList.remove('open'); // This line removes the 'open' class
            if (barsIcon) barsIcon.style.display = 'flex';
            if (timesIcon) timesIcon.style.display = 'none';
        });
    }
});