// Dark Mode Toggle with Smooth Transitions

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('driftora-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Initialize theme
    function initTheme() {
        if (savedTheme === 'dark' || (!savedTheme && prefersDark.matches)) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }
    
    // Enable dark mode with smooth transition
    function enableDarkMode() {
        html.classList.add('dark');
        localStorage.setItem('driftora-theme', 'dark');
        updateMetaThemeColor('#0f172a'); // gray-900
        
        // Add animation class for smooth transition
        document.body.classList.add('theme-transition');
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 300);
    }
    
    // Disable dark mode with smooth transition
    function disableDarkMode() {
        html.classList.remove('dark');
        localStorage.setItem('driftora-theme', 'light');
        updateMetaThemeColor('#ffffff');
        
        // Add animation class for smooth transition
        document.body.classList.add('theme-transition');
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 300);
    }
    
    // Update meta theme color for mobile browsers
    function updateMetaThemeColor(color) {
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }
        metaThemeColor.content = color;
    }
    
    // Toggle theme with animation
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Toggle theme
            if (html.classList.contains('dark')) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
    }
    
    // Listen for system theme changes
    prefersDark.addEventListener('change', function(e) {
        if (!localStorage.getItem('driftora-theme')) {
            if (e.matches) {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        }
    });
    
    // Initialize on load
    initTheme();
    
    // Add CSS for smooth transitions
    const style = document.createElement('style');
    style.textContent = `
        .theme-transition * {
            transition: background-color 0.3s ease, 
                        color 0.3s ease, 
                        border-color 0.3s ease,
                        box-shadow 0.3s ease !important;
        }
    `;
    document.head.appendChild(style);
});