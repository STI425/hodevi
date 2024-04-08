document.addEventListener('DOMContentLoaded', function () {
    const menuCheckbox = document.getElementById('menu');
    const ima = document.getElementById('ima');

    menuCheckbox.addEventListener('change', function () {
        if (ima.src.includes('menu.png')) {
            ima.src = 'icono.png';
        } else {
            ima.src = 'menu.png';
        }
    });
});