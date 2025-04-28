document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById("menu-toggle");
    const menu = document.querySelector(".sections");
    const hamburgerIcon = toggleButton.querySelector(".hamburger-menu-icon");
    const closeButton = document.querySelector(".close");

    const toggleMenu = () => {
        menu.classList.toggle("open");
    };

    if (toggleButton) {
        toggleButton.addEventListener('click', toggleMenu);
    }

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            menu.classList.remove("open");
        });
    }

    const sectionsWithDropdown = document.querySelectorAll('.sections .sec:has(.dropdown)');

    sectionsWithDropdown.forEach(section => {
        const link = section.querySelector('a');
        const desktopChevron = section.querySelector('.dropdown > .desktop-chevron');
        const mobileChevron = section.querySelector('.mobile-only-chevron');
        const dropdownContent = section.querySelector('.dropdown > div');

        const toggleSubmenu = (event) => {
            if (desktopChevron) {
                desktopChevron.classList.toggle('rotate');
            }
            if (mobileChevron) {
                mobileChevron.classList.toggle('rotate');
            }
            dropdownContent.classList.toggle('show');
        };

        if (desktopChevron) {
            desktopChevron.addEventListener('click', toggleSubmenu);
        }
        if (mobileChevron) {
            mobileChevron.addEventListener('click', toggleSubmenu);
        }
    });
});
