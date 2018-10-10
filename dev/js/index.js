
let visible = false;
let menuIcono = document.getElementById('menuicono');
let navegacionPrincipal = document.getElementById('navegacion-principal');

menuIcono.addEventListener('click', () => {
    if (!visible) {
        navegacionPrincipal.style.display = 'block';
        visible = true;
    } else {
        navegacionPrincipal.style.display = 'none';
        visible = false;
    }
});

