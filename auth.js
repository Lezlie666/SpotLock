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
    
    if (email && password) {
        // Add loading state
        const submitBtn = this.querySelector('.btn-primary');
        submitBtn.textContent = 'Logging in...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Login successful!');
            window.location.href = 'dashboard.html';
        }, 800);
    }
};

// Signup form submission
document.getElementById('signup-form').onsubmit = function(e) {
    e.preventDefault();
    
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    
    if (password !== confirm) {
        alert('Passwords do not match!');
        return;
    }
    
    // Add loading state
    const submitBtn = this.querySelector('.btn-primary');
    submitBtn.textContent = 'Creating Account...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.textContent = 'Sign Up';
        submitBtn.disabled = false;
        alert('Account created! Please login.');
        document.querySelector('[data-tab="login"]').click();
    }, 800);
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