document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('menu-toggle');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    menuIcon.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        var isClickInside = menuIcon.contains(event.target) || dropdownMenu.contains(event.target);
        if (!isClickInside) {
            dropdownMenu.classList.remove('show');
        }
    });
});
