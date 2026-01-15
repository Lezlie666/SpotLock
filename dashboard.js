// Check if user is logged in
const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
if (!currentUser) {
    window.location.href = 'index.html';
}

// Display user name in navbar
document.addEventListener('DOMContentLoaded', function() {
    const userNameSpan = document.querySelector('.nav-user span');
    if (userNameSpan && currentUser) {
        userNameSpan.innerHTML = `Welcome, <strong>${currentUser.profile.name}</strong>`;
    }
});

// Function to show profile page
function showProfilePage() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `
        <div class="profile-container">
            <div class="profile-header">
                <div class="profile-avatar-wrapper">
                    <div class="profile-avatar">
                        <img id="profileImg" src="${currentUser.profile.profilePicture}" alt="${currentUser.profile.name}">
                        <div class="avatar-overlay" onclick="changeProfilePicture()">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                <circle cx="12" cy="13" r="4"></circle>
                            </svg>
                            <span>Change Photo</span>
                        </div>
                    </div>
                    <input type="file" id="profilePicInput" accept="image/*" style="display: none;">
                </div>
                <div class="profile-info">
                    <h1>${currentUser.profile.name}</h1>
                    <p class="profile-email">
                        <svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        ${currentUser.email}
                    </p>
                    <p class="profile-join-date">
                        <svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        Member since ${currentUser.profile.joinDate}
                    </p>
                </div>
            </div>
            
            <div class="profile-details" id="profileView">
                <div class="profile-card">
                    <h2>
                        <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        Personal Information
                    </h2>
                    <div class="info-grid">
                        <div class="info-item">
                            <span class="info-label">Full Name</span>
                            <span class="info-value">${currentUser.profile.name}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Age</span>
                            <span class="info-value">${currentUser.profile.age} years</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Gender</span>
                            <span class="info-value">${currentUser.profile.gender}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Phone</span>
                            <span class="info-value">${currentUser.profile.phone}</span>
                        </div>
                    </div>
                </div>
                
                <div class="profile-card">
                    <h2>
                        <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        Address
                    </h2>
                    <div class="info-grid">
                        <div class="info-item full-width">
                            <span class="info-label">Location</span>
                            <span class="info-value">${currentUser.profile.address}</span>
                        </div>
                    </div>
                </div>
                
                <div class="profile-card">
                    <h2>
                        <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        About
                    </h2>
                    <div class="info-grid">
                        <div class="info-item full-width">
                            <p class="profile-description">${currentUser.profile.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="profile-actions">
                <button class="btn-primary" onclick="showEditProfileForm()">
                    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                    Edit Profile
                </button>
                <button class="btn-secondary" onclick="if(confirm('Are you sure you want to logout?')) { sessionStorage.clear(); window.location.href='index.html'; }">
                    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    Logout
                </button>
            </div>
        </div>
    `;
}

// Change profile picture function
function changeProfilePicture() {
    const input = document.getElementById('profilePicInput');
    input.click();
    
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const img = document.getElementById('profileImg');
                img.src = event.target.result;
                
                // Update in session storage
                currentUser.profile.profilePicture = event.target.result;
                sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
                
                // Show success notification
                showNotification('Profile picture updated successfully!', 'success');
            };
            reader.readAsDataURL(file);
        }
    };
}

// Show edit profile form
function showEditProfileForm() {
    const profileView = document.getElementById('profileView');
    profileView.innerHTML = `
        <div class="edit-profile-form">
            <div class="profile-card">
                <h2>
                    <svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                    Edit Personal Information
                </h2>
                <form id="editProfileForm" class="edit-form">
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="editName">Full Name</label>
                            <input type="text" id="editName" value="${currentUser.profile.name}" required>
                        </div>
                        <div class="form-group">
                            <label for="editAge">Age</label>
                            <input type="number" id="editAge" value="${currentUser.profile.age}" min="18" max="100" required>
                        </div>
                        <div class="form-group">
                            <label for="editGender">Gender</label>
                            <select id="editGender" required>
                                <option value="Male" ${currentUser.profile.gender === 'Male' ? 'selected' : ''}>Male</option>
                                <option value="Female" ${currentUser.profile.gender === 'Female' ? 'selected' : ''}>Female</option>
                                <option value="Other" ${currentUser.profile.gender === 'Other' ? 'selected' : ''}>Other</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="editPhone">Phone</label>
                            <input type="tel" id="editPhone" value="${currentUser.profile.phone}" required>
                        </div>
                        <div class="form-group full-width">
                            <label for="editAddress">Address</label>
                            <input type="text" id="editAddress" value="${currentUser.profile.address}" required>
                        </div>
                        <div class="form-group full-width">
                            <label for="editDescription">About</label>
                            <textarea id="editDescription" rows="4" required>${currentUser.profile.description}</textarea>
                        </div>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn-primary">
                            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Save Changes
                        </button>
                        <button type="button" class="btn-secondary" onclick="showProfilePage()">
                            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    // Handle form submission
    document.getElementById('editProfileForm').addEventListener('submit', function(e) {
        e.preventDefault();
        saveProfileChanges();
    });
}

// Save profile changes
function saveProfileChanges() {
    const name = document.getElementById('editName').value;
    const age = document.getElementById('editAge').value;
    const gender = document.getElementById('editGender').value;
    const phone = document.getElementById('editPhone').value;
    const address = document.getElementById('editAddress').value;
    const description = document.getElementById('editDescription').value;
    
    // Update current user
    currentUser.profile.name = name;
    currentUser.profile.age = age;
    currentUser.profile.gender = gender;
    currentUser.profile.phone = phone;
    currentUser.profile.address = address;
    currentUser.profile.description = description;
    
    // Save to session storage
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Update navbar name
    const userNameSpan = document.querySelector('.nav-user span');
    if (userNameSpan) {
        userNameSpan.innerHTML = `Welcome, <strong>${name}</strong>`;
    }
    
    // Show success notification
    showNotification('Profile updated successfully!', 'success');
    
    // Reload profile page
    setTimeout(() => showProfilePage(), 800);
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <svg class="notification-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            ${type === 'success' ? 
                '<polyline points="20 6 9 17 4 12"></polyline>' : 
                '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'
            }
        </svg>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Function to show dashboard content
function showDashboardContent() {
    // Reload the page to show default dashboard
    window.location.reload();
}

// Sidebar navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.onclick = function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        
        const section = this.textContent.trim();
        
        // Handle Profile section
        if (section === 'Profile') {
            showProfilePage();
        } else {
            showDashboardContent();
        }
        
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.style.cssText = 'position:absolute;background:rgba(99,102,241,0.3);border-radius:50%;transform:scale(0);animation:ripple 0.6s ease-out;pointer-events:none;';
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