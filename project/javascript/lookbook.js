document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll(".categories button");
    const boxes = document.querySelectorAll(".lookbook-pics div");
    const dropdown = document.querySelector(".cat-mobile select");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const category = button.getAttribute("data-category");

            boxes.forEach(box => {
                const boxCategories = box.getAttribute("data-category").split(" ");
                if (category === "all" || boxCategories.includes(category)) {
                    box.classList.remove("hidden");
                } else {
                    box.classList.add("hidden");
                }
            });
        });
    });

    dropdown.addEventListener("change", (e) => {
        const category = e.target.value;
        boxes.forEach(box => {
            const boxCategories = box.getAttribute("data-category").split(" ");
            if (category === "all" || boxCategories.includes(category)) {
                box.classList.remove("hidden");
            } else {
                box.classList.add("hidden");
            }
        });
    });
});