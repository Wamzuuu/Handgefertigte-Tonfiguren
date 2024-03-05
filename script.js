// script.js
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert die tatsächliche Formularübermittlung
    alert('Vielen Dank für deine Nachricht. Wir melden uns bald bei dir!');
});
