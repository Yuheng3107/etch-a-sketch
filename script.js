
const grid = document.querySelector('#grid');
// constructing the grid

function generateGrid(n) {
    for (let i = 0; i < n; i++) {
        let row = document.createElement('div');
        row.style.display = 'flex';
        row.classList.add('row');
        row.style.height = `${100/n}%`;
        for (let j = 0; j < n; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}
generateGrid(16);

// adding event listeners to the grid


const squares = document.querySelectorAll('.square');

// add color change when there is mouseenter event
squares.forEach(square => square.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = 'blue';
} )); 



