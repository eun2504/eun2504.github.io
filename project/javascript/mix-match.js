// javascript/mix-match.js (or your preferred JS file)

document.addEventListener('DOMContentLoaded', function () {
    // ... (rest of your existing JavaScript for the mobile menu) ...

    const itemContainers = document.querySelectorAll('.list');

    itemContainers.forEach(container => {
        const items = container.querySelector('.items');
        if (items) {
            let isDragging = false;
            let startX;
            let scrollLeft;

            items.addEventListener('mousedown', (e) => {
                isDragging = true;
                startX = e.pageX - items.offsetLeft;
                scrollLeft = items.scrollLeft;
                items.classList.add('dragging');
            });

            items.addEventListener('mouseleave', () => {
                isDragging = false;
                items.classList.remove('dragging');
            });

            items.addEventListener('mouseup', () => {
                isDragging = false;
                items.classList.remove('dragging');
            });

            items.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                e.preventDefault();
                const x = e.pageX - items.offsetLeft;
                const walk = (x - startX) * 1; // Adjust scroll speed
                items.scrollLeft = scrollLeft - walk;
            });

            items.addEventListener('touchstart', (e) => {
                isDragging = true;
                startX = e.touches[0].pageX - items.offsetLeft;
                scrollLeft = items.scrollLeft;
                items.classList.add('dragging');
            });

            items.addEventListener('touchend', () => {
                isDragging = false;
                items.classList.remove('dragging');
            });

            items.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                if (!e.touches[0]) return; // Prevent error if touch object is null
                const x = e.touches[0].pageX - items.offsetLeft;
                const walk = (x - startX) * 1; // Adjust scroll speed
                items.scrollLeft = scrollLeft - walk;
            });
        }
    });
});