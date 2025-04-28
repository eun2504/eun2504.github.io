document.addEventListener('DOMContentLoaded', function () {
    const recreateButtons = document.querySelectorAll('.celebs .button');
    const closeButtons = document.querySelectorAll('.pop-out .close');
    const popOuts = document.querySelectorAll('.pop-out');

    recreateButtons.forEach(button => {
        button.addEventListener('click', function () {
            const popOut = this.parentElement.querySelector('.pop-out');
            if (popOut) {
                popOut.classList.add('show');
            }
        });
    });

    closeButtons.forEach(closeBtn => {
        closeBtn.addEventListener('click', function () {
            const popOut = this.closest('.pop-out');
            if (popOut) {
                popOut.classList.remove('show');
            }
        });
    });

});