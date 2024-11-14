let pokemon;

let charmander = document.getElementById('charmander');
let bulbasaur = document.getElementById('bulbassaur');
let squirtle = document.getElementById('squirtle');

console.log(charmander, bulbasaur, squirtle);

function selectPokeball(id) {
    let pokeball = document.getElementById(id);
    pokeball.classList.add('spin');
    
    setTimeout(() => {
        pokeball.classList.remove('spin');
        
        switch (id) {
            case 'charmander':
                updatePokeball(pokeball, 'assets/images/4.png', 'Charmander');
                break;
            case 'bulbassaur':
                updatePokeball(pokeball, 'assets/images/1.png', 'Bulbassaur');
                break;
            case 'squirtle':
                updatePokeball(pokeball, 'assets/images/7.png', 'Squirtle');
                break;
        }
    }, 1000);
}

function updatePokeball(pokeball, src, alt) {
    pokeball.src = src;
    pokeball.alt = alt;
    pokeball.onclick = () => selectPokemon(pokeball.id);
}

function selectPokemon(id) {
    
    let text = document.getElementById('a');
    let pokeball = document.getElementById(id);

    text.innerHTML = `Você escolheu o ${pokeball.alt}!`;
    pokeball.style.position = 'absolute';
    pokeball.style.top = '-120px';
    pokeball.style.left = 'calc(50% - 150px)';
    pokeball.style.width = '300px';

    if (id !== 'charmander') charmander.style.display = 'none';
    if (id !== 'bulbassaur') bulbasaur.style.display = 'none';
    if (id !== 'squirtle') squirtle.style.display = 'none';

    pokemon = id;

    setTimeout(() => {
        window.location = 'game.html';
    }, 5000)
}
