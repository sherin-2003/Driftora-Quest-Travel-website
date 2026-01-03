// Enhanced Tour Filtering System

const toursData = [
    {
        id: 1,
        name: "Swiss Alpine Escape",
        destination: "europe",
        category: ["adventure", "mountain", "luxury"],
        price: 1299,
        duration: 5,
        rating: 4.9,
        reviews: 248,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Majestic Swiss Alps with guided hikes, luxury lodges, and panoramic train rides through breathtaking landscapes."
    },
    {
        id: 2,
        name: "Bali Tropical Retreat",
        destination: "asia",
        category: ["beach", "luxury", "relaxation"],
        price: 899,
        duration: 7,
        rating: 4.8,
        reviews: 312,
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Luxury villas, ancient temples, and serene beaches in Bali. Perfect blend of relaxation and cultural exploration."
    },
    {
        id: 3,
        name: "Japanese Cultural Journey",
        destination: "asia",
        category: ["culture", "luxury", "food"],
        price: 2199,
        duration: 10,
        rating: 4.9,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "From Tokyo's neon lights to Kyoto's ancient temples - immerse yourself in Japan's rich culture and traditions."
    },
    {
        id: 4,
        name: "Italian Dream Vacation",
        destination: "europe",
        category: ["culture", "food", "luxury"],
        price: 1899,
        duration: 8,
        rating: 4.7,
        reviews: 275,
        image: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Experience Rome's history, Florence's art, and Venice's romance in this luxurious Italian journey."
    },
    {
        id: 5,
        name: "Grand Canyon Adventure",
        destination: "america",
        category: ["adventure", "nature"],
        price: 799,
        duration: 4,
        rating: 4.6,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Hiking, rafting, and camping in America's natural wonder. An unforgettable adventure experience."
    },
    {
        id: 6,
        name: "Greek Island Hopping",
        destination: "europe",
        category: ["beach", "luxury", "culture"],
        price: 1499,
        duration: 7,
        rating: 4.8,
        reviews: 228,
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Discover Santorini's sunsets, Mykonos' beaches, and Crete's ancient history in this island paradise."
    },
    {
        id: 7,
        name: "Australian Outback Safari",
        destination: "australia",
        category: ["adventure", "nature", "wildlife"],
        price: 1599,
        duration: 6,
        rating: 4.7,
        reviews: 142,
        image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Wildlife encounters, desert landscapes, and unique Aboriginal culture in the Australian Outback."
    },
    {
        id: 8,
        name: "Thai Beach Paradise",
        destination: "asia",
        category: ["beach", "relaxation", "food"],
        price: 699,
        duration: 5,
        rating: 4.5,
        reviews: 198,
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "White sand beaches, turquoise waters, and vibrant culture in Thailand's tropical paradise."
    },
    {
        id: 9,
        name: "Canadian Rockies Tour",
        destination: "america",
        category: ["adventure", "mountain", "nature"],
        price: 2399,
        duration: 9,
        rating: 4.9,
        reviews: 176,
        image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Explore Banff, Jasper, and Lake Louise in all their glory. A mountain lover's dream come true."
    },
    {
        id: 10,
        name: "Paris & French Riviera",
        destination: "europe",
        category: ["culture", "luxury", "food"],
        price: 1799,
        duration: 6,
        rating: 4.8,
        reviews: 264,
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "From the Eiffel Tower to Mediterranean beaches, experience the best of France in style."
    },
    {
        id: 11,
        name: "Egyptian Pharaohs Tour",
        destination: "africa",
        category: ["culture", "history", "adventure"],
        price: 1699,
        duration: 8,
        rating: 4.7,
        reviews: 123,
        image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Pyramids, Nile cruise, and ancient history. Walk in the footsteps of pharaohs."
    },
    {
        id: 12,
        name: "New Zealand Expedition",
        destination: "australia",
        category: ["adventure", "nature", "luxury"],
        price: 2999,
        duration: 12,
        rating: 4.9,
        reviews: 187,
        image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Middle-earth adventure with fjords, glaciers, and mountains. The ultimate New Zealand experience."
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const toursContainer = document.getElementById('toursContainer');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const noResults = document.getElementById('noResults');
    const tourCount = document.getElementById('tourCount');
    
    const searchInput = document.getElementById('searchInput');
    const destinationFilter = document.getElementById('destinationFilter');
    const priceFilter = document.getElementById('priceFilter');
    const filterChips = document.querySelectorAll('.filter-chip');
    const resetFilters = document.getElementById('resetFilters');
    
    let activeCategoryFilter = 'all';
    let currentSort = 'featured';
    let debounceTimer;
    
    // Initial render with loading animation
    setTimeout(() => {
        renderTours(toursData);
        addSortingFunctionality();
    }, 1000);
    
    // Render tours function
    function renderTours(tours) {
        loadingIndicator.style.display = 'none';
        
        if (tours.length === 0) {
            toursContainer.innerHTML = '';
            noResults.classList.remove('hidden');
            tourCount.textContent = 'Showing 0 tours';
            return;
        }
        
        noResults.classList.add('hidden');
        tourCount.textContent = `Showing ${tours.length} tours`;
        
        toursContainer.innerHTML = tours.map(tour => `
            <div class="tour-card-elegant group animate-fade-in">
                <div class="tour-image-wrapper">
                    <img src="${tour.image}" alt="${tour.name}" class="tour-image-elegant">
                    <div class="tour-badge-elegant">${tour.duration} Days</div>
                    <div class="tour-overlay"></div>
                </div>
                <div class="tour-content-elegant">
                    <div class="tour-category">
                        ${tour.category.map(cat => `<span class="tour-category-tag">${cat}</span>`).join('')}
                    </div>
                    <h3 class="tour-title-elegant">${tour.name}</h3>
                    <div class="flex items-center mb-3">
                        <div class="flex text-yellow-400 mr-3">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <span class="text-gray-600 dark:text-gray-400 text-sm">
                            ${tour.rating} (${tour.reviews} reviews)
                        </span>
                    </div>
                    <p class="tour-description-elegant">${tour.description}</p>
                    <div class="tour-footer-elegant">
                        <div>
                            <span class="tour-price-elegant">$${tour.price}</span>
                            <span class="tour-price-label">per person</span>
                        </div>
                        <button class="tour-button-elegant book-btn" data-tour="${tour.name}">
                            <span>Book Now</span>
                            <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Re-attach event listeners to new buttons
        document.querySelectorAll('.book-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const tourName = this.getAttribute('data-tour');
                const selectedTourElement = document.getElementById('selectedTour');
                const bookingModal = document.getElementById('bookingModal');
                
                if (selectedTourElement && bookingModal) {
                    selectedTourElement.textContent = tourName;
                    bookingModal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                }
            });
        });
    }
    
    // Filter function with debouncing
    function filterTours() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const destination = destinationFilter.value;
        const maxPrice = priceFilter.value === 'all' ? Infinity : parseInt(priceFilter.value);
        
        let filtered = toursData.filter(tour => {
            // Search filter
            if (searchTerm && !tour.name.toLowerCase().includes(searchTerm) && 
                !tour.description.toLowerCase().includes(searchTerm) &&
                !tour.category.some(cat => cat.includes(searchTerm))) {
                return false;
            }
            
            // Destination filter
            if (destination !== 'all' && tour.destination !== destination) {
                return false;
            }
            
            // Price filter
            if (tour.price > maxPrice) {
                return false;
            }
            
            // Category filter
            if (activeCategoryFilter !== 'all' && !tour.category.includes(activeCategoryFilter)) {
                return false;
            }
            
            return true;
        });
        
        // Apply sorting
        filtered = sortTours(filtered, currentSort);
        
        renderTours(filtered);
    }
    
    // Sort tours function
    function sortTours(tours, sortBy) {
        const sorted = [...tours];
        
        switch(sortBy) {
            case 'price-low':
                return sorted.sort((a, b) => a.price - b.price);
            case 'price-high':
                return sorted.sort((a, b) => b.price - a.price);
            case 'rating':
                return sorted.sort((a, b) => b.rating - a.rating);
            case 'duration':
                return sorted.sort((a, b) => a.duration - b.duration);
            case 'featured':
            default:
                return sorted; // Keep original order for featured
        }
    }
    
    // Add sorting functionality
    function addSortingFunctionality() {
        const sortContainer = document.createElement('div');
        sortContainer.className = 'mb-8 flex items-center justify-between';
        sortContainer.innerHTML = `
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">Sort By:</h3>
            <div class="flex space-x-2">
                <button class="sort-btn ${currentSort === 'featured' ? 'active' : ''}" data-sort="featured">Featured</button>
                <button class="sort-btn" data-sort="price-low">Price: Low to High</button>
                <button class="sort-btn" data-sort="price-high">Price: High to Low</button>
                <button class="sort-btn" data-sort="rating">Highest Rated</button>
                <button class="sort-btn" data-sort="duration">Shortest Duration</button>
            </div>
        `;
        
        const toursSection = document.querySelector('#toursContainer').parentElement;
        toursSection.insertBefore(sortContainer, toursSection.firstChild);
        
        // Add sort button styles
        const style = document.createElement('style');
        style.textContent = `
            .sort-btn {
                padding: 0.5rem 1rem;
                background: #f3f4f6;
                color: #4b5563;
                border-radius: 0.5rem;
                font-size: 0.875rem;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.3s ease;
                border: none;
            }
            .dark .sort-btn {
                background: #374151;
                color: #d1d5db;
            }
            .sort-btn:hover {
                background: #e5e7eb;
                color: #1f2937;
            }
            .dark .sort-btn:hover {
                background: #4b5563;
                color: white;
            }
            .sort-btn.active {
                background: #3b82f6;
                color: white;
            }
            .dark .sort-btn.active {
                background: #2563eb;
            }
        `;
        document.head.appendChild(style);
        
        // Add event listeners to sort buttons
        document.querySelectorAll('.sort-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentSort = this.dataset.sort;
                filterTours();
            });
        });
    }
    
    // Event listeners with debouncing
    searchInput.addEventListener('input', function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(filterTours, 300);
    });
    
    destinationFilter.addEventListener('change', filterTours);
    priceFilter.addEventListener('change', filterTours);
    
    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            filterChips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            activeCategoryFilter = this.dataset.filter;
            filterTours();
        });
    });
    
    resetFilters.addEventListener('click', function() {
        searchInput.value = '';
        destinationFilter.value = 'all';
        priceFilter.value = 'all';
        filterChips.forEach(c => c.classList.remove('active'));
        filterChips[0].classList.add('active');
        activeCategoryFilter = 'all';
        currentSort = 'featured';
        
        // Reset sort buttons if they exist
        document.querySelectorAll('.sort-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.sort === 'featured') {
                btn.classList.add('active');
            }
        });
        
        renderTours(toursData);
        
        // Show reset notification
        const notification = document.createElement('div');
        notification.className = 'fixed bottom-4 right-4 bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg animate-slide-up';
        notification.textContent = 'Filters reset successfully!';
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    });
    
    // Initialize with all tours
    renderTours(toursData);
});