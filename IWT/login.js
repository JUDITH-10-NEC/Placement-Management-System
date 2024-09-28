document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('adminLoginForm') || document.getElementById('studentLoginForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if ((username === 'admin' && password === '1234' && form.id === 'adminLoginForm') ||
                (username === 'student' && password ==='1234' && form.id === 'studentLoginForm')) {
                alert('Login successful');
                if (form.id === 'adminLoginForm') {
                    window.location.href = 'admin-dashboard.html';
                } else {
                    window.location.href = 'student-dashboard.html';
                }
            } else {
                alert('Invalid credentials');
            }
        });
    }
});
