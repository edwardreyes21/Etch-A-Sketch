// Adds colors for color choice

let color_container = document.querySelector(".color-container");

let color_choices_names = ["Black", "Red", "Blue", "Purple", "Green"];

for (let i = 0; i < 5; i++) {
    let color_element = document.createElement("h1");

    color_element.textContent = color_choices_names[i];
    color_element.style.color = color_choices_names[i];

    color_container.appendChild(color_element);
}

// Creates 16x16 grid for the game

let grid = document.querySelector(".grid");

// Creates 16 columns for the grid
/*for (let i = 0; i < 16; i++) {
    let grid_row = document.createElement("div");
    grid_row.classList.add(".grid-col");

    // For each column, creates 16 cells
    for (let j = 0; j < 16; j++) {
        let grid_cell = document.createElement("div");
        grid_cell.classList.add(".grid-cell");
        grid_cell.innerText = i;
        grid_row.appendChild(grid_cell);
    }

    grid.appendChild(grid_row);
}*/

for (let i = 0; i < 16 * 16; i++) {
    let grid_cell = document.createElement("div");
    grid_cell.classList.add(".grid-cell");
    grid.appendChild(grid_cell);
}