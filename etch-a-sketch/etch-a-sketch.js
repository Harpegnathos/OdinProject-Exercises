function getRow(size) {
    var row = document.createElement('div');
    for (var i = 0; i < size; i++) {
        var cell = document.createElement('div');
        cell.classList.add('cell');
        // cell.style.height = `${960/size}px`;
        // cell.style.width = `${960/size}px`;
        cell.addEventListener("mouseover", function (ev) {
            var element = ev.target;
            element.classList.add('active');
        });
        row.appendChild(cell);
    }
    return row;
}
function createGrid(size) {
    var container = document.querySelector('#container');
    container.innerHTML = "";
    for (var i = 0; i < size; i++) {
        var row = getRow(size);
        row.classList.add('row');
        container.appendChild(row);
    }
}
function changeGridSize(size) {
    var sizeInt = parseInt(size);
    if (isNaN(sizeInt)) {
        alert("please enter a number");
        return;
    }
    createGrid(sizeInt);
}
createGrid(16);
var clearButton = document.querySelector('.clearButton');
clearButton.addEventListener("click", function () {
    var cells = document.querySelectorAll('.cell.active');
    cells.forEach(function (cell) {
        cell.classList.remove('active');
    });
    var newSize = window.prompt('Choose a new grid size', '16');
    changeGridSize(newSize);
});
