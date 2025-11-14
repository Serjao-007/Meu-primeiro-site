const links = document.querySelectorAll('.menu a');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.getAttribute('href');
        const destino = document.querySelector(id);
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}
const botao = document.getElementById('tema');

botao.addEventListener('click', () => {
    document.body.classList.toggle('claro');

    const paragrafos = document.querySelectorAll('p');
    const titulo = document.getElementById('titulo-1');

    if (document.body.classList.contains('claro')) {
        paragrafos.forEach(p => p.style.color = 'black');
        titulo.style.color = 'black';
    } else {
        paragrafos.forEach(p => p.style.color = 'white');
        titulo.style.color = 'white';

    }
});



