document.addEventListener('DOMContentLoaded', function () {
    const toggleModeButton = document.getElementById('toggle_mode');
    const body = document.body;

    toggleModeButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });

    const typedTextElement = document.getElementById('typed-text');
    const textToType = "Hi there, I am Amisha";

    const darkModeToggle = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkModeToggle.matches) {
        setDarkMode();
    }

    function setDarkMode() {
        console.log('Setting Dark Mode');
        body.classList.add('dark-mode');
    }

    function setLightMode() {
        console.log('Setting Light Mode');
        body.classList.remove('dark-mode');
    }

    function toggleTheme() {
        console.log('Toggling Theme');
        if (body.classList.contains('dark-mode')) {
            setLightMode();
        } else {
            setDarkMode();
        }
    }

    const showSidebarButton = document.querySelector('.navigation_bar ul.sidebar li.hide');
    if (showSidebarButton) {
        showSidebarButton.addEventListener('click', showsidebar);
    }

    const hideSidebarButtons = document.querySelectorAll('.navigation_bar ul.hide');
    hideSidebarButtons.forEach(function (button) {
        button.addEventListener('click', hide);
    });

    // Add a class to the body to trigger the transition once the content is loaded
    document.body.classList.add('loaded');

    // Start the continuous display and hide loop
    loopTextAnimation(textToType, typedTextElement);
});

function loopTextAnimation(text, element) {
    setInterval(function () {
        typeText(text, element);
        setTimeout(function () {
            eraseText(element);
        }, 5000); // Adjust the time between display and hide
    }, 7000); // Adjust the total time of the loop
}

function typeText(text, element) {
    let index = 0;
    const typingInterval = setInterval(function () {
        element.textContent = text.slice(0, index);
        index++;

        if (index > text.length) {
            clearInterval(typingInterval);
        }
    }, 100);
}

function eraseText(element) {
    let index = element.textContent.length;
    const erasingInterval = setInterval(function () {
        element.textContent = element.textContent.slice(0, index);
        index--;

        if (index < 0) {
            clearInterval(erasingInterval);
        }
    }, 50);
}

function showsidebar() {
    const sidebar = document.querySelector('.navigation_bar ul.sidebar');
    sidebar.style.display = 'flex';
}

function hide() {
    const sidebar = document.querySelector('.navigation_bar ul.sidebar');
    sidebar.style.display = 'none';
}
