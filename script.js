

// constructing the grid

function generateGrid(n) {
    const grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    const container = document.querySelector('.container');
    container.appendChild(grid);
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
    // adding event listeners to the grid


    const squares = document.querySelectorAll('.square');

    // add color change when there is mouseenter event
    squares.forEach(square => square.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = 'blue';
    } )); 
}
generateGrid(16);



const btn = document.querySelector('button');
console.log(btn);
btn.addEventListener('click', (e) => {
    let n = -1;
    while (n < 0 || n > 100) {
        n = prompt("Number of squares per side for the new grid: ")
    }
    
    let grid = document.querySelector('#grid');
    const container = document.querySelector('.container');
    container.removeChild(grid);
    generateGrid(n);
});


