// Adds colors for color choice
let color_container = document.querySelector(".color-container");
let color_choices_names = ["Black", "Red", "Blue", "Purple", "Green"];
let current_color = "black"; // Current color, default: black

for (let i = 0; i < 5; i++) {
    let color_element = document.createElement("h1");

    color_element.textContent = color_choices_names[i];
    color_element.style.color = color_choices_names[i];

    color_container.appendChild(color_element);
}

// Creates 256 cells (16x16 grid)
let grid = document.querySelector(".grid");

for (let i = 0; i < 16 * 16; i++) {
    let grid_cell = document.createElement("div");
    grid_cell.classList.add("grid-cell");
    grid_cell.addEventListener("mouseover", (Event) => {
        console.log(Event.target);
        Event.target.style.background = current_color;
    });
    grid.appendChild(grid_cell);
}

