
const btnModoOscuro = document.getElementById('btnModoOscuro');

if (btnModoOscuro) {
    
    const temaGuardado = localStorage.getItem('tema');

   
    if (temaGuardado === 'oscuro') {
        document.body.classList.add('modo-oscuro');
        btnModoOscuro.textContent = '☀️ Modo Claro';
    }

    btnModoOscuro.addEventListener('click', function() {
        if (document.body.classList.contains('modo-oscuro')) {
            document.body.classList.remove('modo-oscuro');
            btnModoOscuro.textContent = '🌙 Modo Oscuro';
            localStorage.setItem('tema', 'claro');
        } else {
            document.body.classList.add('modo-oscuro');
            btnModoOscuro.textContent = '☀️ Modo Claro';
            localStorage.setItem('tema', 'oscuro');
        }
    });
}
