const input = document.getElementById('miInput');

input.addEventListener('focus' , function() {
    input.style.borderColor = '#333';
});

input.addEventListener('blur', function() {
    input.style.borderColor = '#ccc';
});

