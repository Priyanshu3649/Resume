document.querySelectorAll('.dropdown-title').forEach(function(title) {
    title.addEventListener('click', function(event) {
        // Prevent the click event from propagating to document click listener
        event.stopPropagation();
        
        var section = this.closest('.dropdown-section');
        var content = section.querySelector('.dropdown-content');

        // Toggle 'active' class to manage visibility
        section.classList.toggle('active');

        // Ensure other dropdowns are hidden
        document.querySelectorAll('.dropdown-section').forEach(function(otherSection) {
            if (otherSection !== section) {
                otherSection.classList.remove('active');
            }
        });
    });
});

// Optional: Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    document.querySelectorAll('.dropdown-section.active').forEach(function(section) {
        if (!section.contains(event.target)) {
            section.classList.remove('active');
        }
    });
});
