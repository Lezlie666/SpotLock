// Sidebar navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.onclick = function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.style.cssText = 'position:absolute;background:rgba(178,34,34,0.3);border-radius:50%;transform:scale(0);animation:ripple 0.6s ease-out;pointer-events:none;';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    };
});

// Book Now button functionality
document.querySelectorAll('.btn-book:not([disabled])').forEach(btn => {
    btn.onclick = function() {
        const row = this.closest('tr');
        const location = row.querySelector('td:first-child strong').textContent;
        const rate = row.querySelectorAll('td')[4].textContent;
        
        if (confirm(`Book parking at ${location}?\nRate: ${rate}`)) {
            alert('Booking confirmed! Check "My Bookings" for details.');
        }
    };
});

// Add Vehicle button
const addVehicleBtn = document.querySelector('.btn-add');
if (addVehicleBtn) {
    addVehicleBtn.onclick = function() {
        alert('Add Vehicle feature coming soon!');
    };
}

// Filter functionality
const vehicleFilter = document.getElementById('vehicle-filter');
const areaFilter = document.getElementById('area-filter');

if (vehicleFilter && areaFilter) {
    function filterTable() {
        const vehicleType = vehicleFilter.value.toLowerCase();
        const area = areaFilter.value.toLowerCase();
        const rows = document.querySelectorAll('.data-table tbody tr');
        
        rows.forEach(row => {
            const vehicleCell = row.querySelectorAll('td')[2].textContent.toLowerCase();
            const areaCell = row.querySelectorAll('td')[1].textContent.toLowerCase();
            
            const vehicleMatch = vehicleType === 'all' || vehicleCell.includes(vehicleType);
            const areaMatch = area === 'all' || areaCell.replace(' ', '-') === area;
            
            if (vehicleMatch && areaMatch) {
                row.style.display = '';
                row.style.animation = 'fadeIn 0.3s ease';
            } else {
                row.style.display = 'none';
            }
        });
    }
    
    vehicleFilter.addEventListener('change', filterTable);
    areaFilter.addEventListener('change', filterTable);
}

// Add animation keyframe for ripple
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Stats animation on load
window.addEventListener('load', () => {
    document.querySelectorAll('.stat-value').forEach((stat, index) => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            stat.style.transition = 'all 0.5s ease';
            stat.style.opacity = '1';
            stat.style.transform = 'translateY(0)';
        }, index * 100);
    });
});