document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene que se envíe el formulario automáticamente
    alert('¡Tu mensaje fue recibido!');
});

console.log(document.getElementById('contactForm'))