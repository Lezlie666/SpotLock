// User data
const validUser = {
    email: 'selva@gmail.com',
    password: '0666',
    profile: {
        name: 'Selva Kumar',
        age: 28,
        gender: 'Male',
        phone: '+91 98765 43210',
        address: 'No.45, Anna Nagar, Madurai, Tamil Nadu - 625020',
        joinDate: 'January 2024',
        description: 'Experienced parking user with a focus on convenience and safety. Regular commuter who values smart parking solutions.',
        profilePicture: 'https://ui-avatars.com/api/?name=Selva+Kumar&size=200&background=6366f1&color=fff&bold=true'
    }
};

// Tab switching with smooth transitions
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
        
        this.classList.add('active');
        const targetForm = document.getElementById(this.dataset.tab + '-form');
        
        // Add slight delay for smooth transition
        setTimeout(() => {
            targetForm.classList.add('active');
        }, 50);
    };
});

// Login form submission
document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Validate credentials
    if (email === validUser.email && password === validUser.password) {
        // Add loading state
        const submitBtn = this.querySelector('.btn-primary');
        submitBtn.textContent = 'Logging in...';
        submitBtn.disabled = true;
        
        // Store user data in session
        sessionStorage.setItem('currentUser', JSON.stringify(validUser));
        
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 800);
    } else {
        alert('Invalid credentials! Please check your email and password.');
        document.getElementById('login-password').value = '';
    }
};

// Signup form submission
document.getElementById('signup-form').onsubmit = function(e) {
    e.preventDefault();
    
    alert('Registration is currently limited to authorized users only. Please contact the administrator.');
};

// Add input focus effects
document.querySelectorAll('.form-group input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
        this.parentElement.style.transition = 'transform 0.2s ease';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});