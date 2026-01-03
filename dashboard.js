document.querySelectorAll('.nav-item').forEach(item => {
    item.onclick = function() {
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    };
});
