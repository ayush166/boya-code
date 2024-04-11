document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearch = document.getElementById('closeSearch');
    const menuButton = document.getElementById('menuButton');
    const menuDropdown = document.getElementById('menuDropdown');
    const hamburger = document.getElementById('hamburger');
    const marketingAssetsItem = document.querySelector('#menuDropdown li:first-child'); // Assuming it's the first list item

    // Hover area for dropdown
    const menuHoverArea = document.createElement('div');
    menuHoverArea.id = 'menuHoverArea';
    document.body.appendChild(menuHoverArea); // Append the hover area to the body

    let hideDropdownTimeout;

    // Scroll Event for Navbar
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-visible', 'bg-blue-500', 'shadow-lg');
            navbar.classList.remove('nav-hidden');
            logo.src = './public/images/logo-2.webp';
        } else {
            navbar.classList.add('nav-hidden');
            navbar.classList.remove('nav-visible', 'bg-blue-500', 'shadow-lg');
            logo.src = './public/images/logo.webp';
        }
    });

    // Function to show the dropdown menu
    const showDropdown = () => {
        clearTimeout(hideDropdownTimeout);
        menuDropdown.classList.remove('hidden');
        menuHoverArea.style.display = 'block'; // Show hover area
    };

    // Function to schedule hiding of the dropdown menu
    const scheduleHideDropdown = () => {
        hideDropdownTimeout = setTimeout(() => {
            menuDropdown.classList.add('hidden');
            menuHoverArea.style.display = 'none'; // Hide hover area
        }, 300); // Delay to allow for mouse movement
    };

    // Event Listeners for Dropdowns
    menuButton.addEventListener('mouseenter', showDropdown);
    menuDropdown.addEventListener('mouseleave', scheduleHideDropdown);
    menuHoverArea.addEventListener('mouseenter', showDropdown);
    menuHoverArea.addEventListener('mouseleave', scheduleHideDropdown);

    marketingAssetsItem.addEventListener('mouseenter', showDropdown); // Apply hover logic to this item
    marketingAssetsItem.addEventListener('mouseleave', scheduleHideDropdown); // Apply hover logic to this item

    // Event Listeners for Search Overlay
    document.querySelector('.fa-search').addEventListener('click', function () {
        searchOverlay.classList.toggle('hidden');
        document.body.classList.toggle('blur-effect');
    });

    closeSearch.addEventListener('click', function () {
        searchOverlay.classList.add('hidden');
        document.body.classList.remove('blur-effect');
    });

    // Event Listener for Hamburger Menu on Mobile Screens
    hamburger.addEventListener('click', function () {
        document.getElementById('dropdown').classList.toggle('hidden');
    });
});
