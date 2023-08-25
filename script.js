function changeGridSize(num = 16) {
    const gridContainer = document.querySelector('.container');

    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    for (let i = 0; i < num * num; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('box');
        gridContainer.appendChild(gridBox);
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

const changeButton = document.querySelector('.change-grid');
changeButton.addEventListener('click', () => {
    const userInput = Number(prompt('Prompt'));
    
    if(userInput > 120 || userInput === null) {
        alert('ERROR: Please select a number less than 120.');
    } else {
        cleanGrid();
        changeGridSize(userInput);
    };
});