// Main JavaScript with Enhanced Features

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle with Animation
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            
            if (mobileMenu.classList.contains('hidden')) {
                icon.className = 'fas fa-bars';
                mobileMenu.style.animation = 'slideUp 0.3s ease-out';
            } else {
                icon.className = 'fas fa-times';
                mobileMenu.style.animation = 'slideDown 0.3s ease-out';
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
            }
        });
    }
    
    // Booking Modal System
    const bookingModal = document.getElementById('bookingModal');
    const closeModal = document.getElementById('closeModal');
    const bookButtons = document.querySelectorAll('.book-btn');
    const selectedTourElement = document.getElementById('selectedTour');
    const bookingForm = document.getElementById('bookingForm');
    
    // Open Booking Modal
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tourName = this.getAttribute('data-tour');
            if (selectedTourElement) {
                selectedTourElement.textContent = tourName;
            }
            showModal(bookingModal);
        });
    });
    
    // Close Booking Modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            hideModal(bookingModal);
        });
    }
    
    // Close modal when clicking outside
    if (bookingModal) {
        bookingModal.addEventListener('click', function(e) {
            if (e.target === bookingModal) {
                hideModal(bookingModal);
            }
        });
    }
    
    // Booking Form Submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const tourName = selectedTourElement ? selectedTourElement.textContent : 'the tour';
            
            // Show beautiful success message
            showNotification(`✅ Booking Confirmed!`, `Your booking for "${tourName}" has been received. We'll contact you within 24 hours.`, 'success');
            
            // Reset form and close modal
            bookingForm.reset();
            hideModal(bookingModal);
        });
    }
    
    // Video Modal
    const videoBtn = document.getElementById('watchVideoBtn');
    const videoModal = document.getElementById('videoModal');
    const closeVideo = document.getElementById('closeVideo');
    const playButton = document.querySelector('.play-button');
    
    if (videoBtn) {
        videoBtn.addEventListener('click', function() {
            showModal(videoModal);
        });
    }
    
    if (closeVideo) {
        closeVideo.addEventListener('click', function() {
            hideModal(videoModal);
        });
    }
    
    if (videoModal) {
        videoModal.addEventListener('click', function(e) {
            if (e.target === videoModal) {
                hideModal(videoModal);
            }
        });
    }
    
    if (playButton) {
        playButton.addEventListener('click', function() {
            this.innerHTML = '<i class="fas fa-spinner fa-spin text-white text-6xl"></i>';
            setTimeout(() => {
                showNotification('🎬 Video Playing', 'Enjoy our travel story! (This is a demo)', 'info');
                this.innerHTML = '<i class="fas fa-play text-white text-6xl"></i>';
            }, 1000);
        });
    }
    
    // Newsletter Subscription
    const subscribeBtn = document.querySelector('.newsletter-button');
    const emailInput = document.querySelector('.newsletter-input');
    
    if (subscribeBtn && emailInput) {
        subscribeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (emailInput.value && validateEmail(emailInput.value)) {
                // Show loading state
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
                this.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    showNotification('📧 Subscribed Successfully!', `Thank you for subscribing with ${emailInput.value}! You'll receive our travel updates and exclusive deals.`, 'success');
                    emailInput.value = '';
                    
                    // Reset button
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 1500);
            } else {
                showNotification('⚠️ Invalid Email', 'Please enter a valid email address.', 'error');
                emailInput.focus();
            }
        });
        
        // Allow Enter key to submit
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                subscribeBtn.click();
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal page anchors
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Image Lazy Loading with Fade-in Effect
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Add loading class
        img.classList.add('opacity-0', 'transition-opacity', 'duration-500');
        
        img.addEventListener('load', function() {
            this.classList.remove('opacity-0');
            this.classList.add('opacity-100');
        });
        
        // Fallback for broken images
        img.addEventListener('error', function() {
            this.src = 'https://placehold.co/800x600/3b82f6/ffffff?text=Travel+Destination';
            this.alt = 'Beautiful travel destination';
            this.classList.remove('opacity-0');
            this.classList.add('opacity-100');
        });
    });
    
    // Scroll Animations with Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.tour-card-elegant, .feature-box, .stat-box').forEach(el => {
        observer.observe(el);
    });
    
    // Hover effects for cards
    document.querySelectorAll('.tour-card-elegant').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Helper Functions
    function showModal(modal) {
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Add fade-in animation
            setTimeout(() => {
                modal.style.opacity = '1';
            }, 10);
        }
    }
    
    function hideModal(modal) {
        if (modal) {
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }
    }
    
    function showNotification(title, message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `fixed top-6 right-6 z-50 max-w-sm rounded-xl p-4 shadow-2xl transform transition-all duration-300 translate-x-full`;
        
        // Set background based on type
        let bgColor = 'bg-blue-500';
        let icon = 'ℹ️';
        
        if (type === 'success') {
            bgColor = 'bg-emerald-500';
            icon = '✅';
        } else if (type === 'error') {
            bgColor = 'bg-rose-500';
            icon = '❌';
        } else if (type === 'warning') {
            bgColor = 'bg-amber-500';
            icon = '⚠️';
        }
        
        notification.innerHTML = `
            <div class="flex items-start">
                <div class="flex-shrink-0 text-2xl mr-3">${icon}</div>
                <div class="flex-1">
                    <h4 class="font-bold text-white mb-1">${title}</h4>
                    <p class="text-blue-50 text-sm">${message}</p>
                </div>
                <button class="ml-4 text-white hover:text-blue-100" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        notification.classList.add(bgColor);
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 10);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }, 5000);
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Initialize tooltips
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            const tooltipText = this.getAttribute('data-tooltip');
            const tooltip = document.createElement('div');
            tooltip.className = 'fixed z-50 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm shadow-xl pointer-events-none';
            tooltip.textContent = tooltipText;
            tooltip.id = 'dynamic-tooltip';
            
            const rect = this.getBoundingClientRect();
            tooltip.style.top = (rect.top - 40) + 'px';
            tooltip.style.left = (rect.left + rect.width/2) + 'px';
            tooltip.style.transform = 'translateX(-50%)';
            
            document.body.appendChild(tooltip);
        });
        
        el.addEventListener('mouseleave', function() {
            const tooltip = document.getElementById('dynamic-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
    
    // Add current year to footer
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('[data-current-year]');
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });
    
    // Add loading animation to page
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});