
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    window.location.href = 'location.html'; 
});

document.getElementById('locationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const location = document.getElementById('location').value;
    const language = document.getElementById('language').value;

   
    localStorage.setItem('location', location);
    localStorage.setItem('language', language);

   
    window.location.href = 'weather.html'; 
});
