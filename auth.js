document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
                this.classList.add('active');
        document.getElementById(this.dataset.tab + '-form').classList.add('active');
    };
});
document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault();
    alert('Login successful!');
    window.location.href = 'dashboard.html';
};

document.getElementById('signup-form').onsubmit = function(e) {
    e.preventDefault();
    
    var password = document.getElementById('signup-password').value;
    var confirm = document.getElementById('signup-confirm').value;
    
    if (password !== confirm) {
        alert('Passwords do not match!');
        return;
    }
    
    alert('Account created! Please login.');
    document.querySelector('[data-tab="login"]').click();
};