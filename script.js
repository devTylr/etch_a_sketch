const gridContainer = document.querySelector('.container');

const userInput = Number(prompt('Grid size?'));

gridContainer.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
gridContainer.style.gridTemplateRows = `(repeat${userInput}, 1fr)`;

for (let i = 0; i < userInput * userInput; i++) {
    const gridBox = document.createElement('div');
    gridBox.classList.add('box');
    gridContainer.appendChild(gridBox);
}

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
    })
})

// NOTES

// Get user input for grid size

// Repeat that number for grid column and grid row

// append that amount of grid boxes to grid container