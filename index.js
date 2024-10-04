var hamburgerBtn = document.querySelector('button.hamburger-btn');
var hamburgerMenu = document.querySelector('.hamburger-menu');
var menuItems = document.querySelectorAll('.hamburger-menu a'); // Assuming menu items are links
    // Function to toggle the menu open/close
var toggleMenu = () => {
var isMenuOpen = hamburgerMenu.classList.toggle('show-menu');
        hamburgerBtn.setAttribute('aria-expanded', isMenuOpen);
};

    // Function to close the menu and optionally refocus the button
var closeMenu = (focusButton = false) => {
    hamburgerMenu.classList.remove('show-menu');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    if (focusButton) {
            hamburgerBtn.focus();
    }
};

    // Event listener for the hamburger button
hamburgerBtn.addEventListener('click', (e) => {
    toggleMenu();
});

    // Event listener for clicks outside the menu
document.addEventListener('click', (e) => {
    if (!hamburgerMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        if (hamburgerMenu.classList.contains('show-menu')) {
               closeMenu();
        }
    }
});

    // Prevent closing the menu when clicking inside it
hamburgerMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});

    // Event listener for the Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hamburgerMenu.classList.contains('show-menu')) {
            // Check if any menu item is focused
        var isMenuItemFocused = Array.from(menuItems).includes(document.activeElement);

            // Close the menu and conditionally refocus the button
        closeMenu(isMenuItemFocused);
    }
});
