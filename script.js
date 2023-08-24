function changeGridSize(num = 16) {
    const gridContainer = document.querySelector('.container');
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `(repeat${num}, 1fr)`;

    for (let i = 0; i < num * num; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('box');
        gridContainer.appendChild(gridBox);
    }
}
changeGridSize();

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
    })
});