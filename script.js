function changeGridSize(num = 16) {
    const grid = document.querySelector('.grid');

    grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    for (let i = 0; i < num * num; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('box');
        grid.appendChild(gridBox);
    }

    changeBackgroundColor();
}
changeGridSize();

function changeBackgroundColor() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = 'black';
            })
        });
}

function cleanGrid() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
            box.style.backgroundColor = 'white';
        });
}

function playMusic() {
    const music = document.getElementById('neo_mane');
    music.play();
}

function pauseMusic() {
    const music = document.getElementById('neo_mane');
    music.pause();
}

const changeButton = document.querySelector('.change-grid');
changeButton.addEventListener('click', () => {
    const userInput = Number(prompt('Prompt'));
    
    if(userInput > 120) {
        alert('ERROR: Please select a number less than 120.');
    } else {
        cleanGrid();
        changeGridSize(userInput);
    };
});

const refreshButton = document.querySelector('.refresh-grid');
refreshButton.addEventListener('click', cleanGrid);

const playMusicButton = document.querySelector('.play');
playMusicButton.addEventListener('click', playMusic);

const pauseMusicButton = document.querySelector('.pause');
pauseMusicButton.addEventListener('click', pauseMusic);