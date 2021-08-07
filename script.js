let color_container = document.querySelector(".color-container");

let color_choices_names = ["Black", "Red", "Blue", "Purple", "Green"];

for (let i = 0; i < 5; i++) {
    let color_element = document.createElement("h1");

    color_element.textContent = color_choices_names[i];
    color_element.style.color = color_choices_names[i];

    color_container.appendChild(color_element);
}