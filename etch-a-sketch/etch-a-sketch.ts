function getRow(size: number){
    const row = document.createElement('div');

    for (let i = 0; i < size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        // cell.style.height = `${960/size}px`;
        // cell.style.width = `${960/size}px`;
        cell.addEventListener("mouseover", function(ev) {
            const element = ev.target as HTMLElement;
            element.classList.add('active');
        });
        row.appendChild(cell);
    }
    return row;
}

function createGrid(size: number){
    const container = document.querySelector('#container');
    container.innerHTML = "";

    for (let i = 0; i < size; i++) {
        const row = getRow(size);
        row.classList.add('row');
        container.appendChild(row);
    }
}

function changeGridSize(size: string) {
    const sizeInt = parseInt(size);
    if (isNaN(sizeInt)) {
        alert("please enter a number");
        return;
    }
    createGrid(sizeInt);
}
createGrid(16);

const clearButton = document.querySelector('.clearButton');

clearButton.addEventListener("click", function() {
    const cells = document.querySelectorAll('.cell.active');
    cells.forEach(function(cell) {
        cell.classList.remove('active');
    });
    const newSize = window.prompt('Choose a new grid size', '16');
    changeGridSize(newSize);
})