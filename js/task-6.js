function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#controls input");
  const createButton = document.querySelector("[data-create]");
  const destroyButton = document.querySelector("[data-destroy]");
  const boxesContainer = document.getElementById("boxes");

  createButton.addEventListener("click", () => {
    const amount = Number(input.value);
    if (amount < 1 || amount > 100) {
      alert("Please enter a number between 1 and 100");
      return;
    }
    createBoxes(amount);
    input.value = "";
  });

  destroyButton.addEventListener("click", destroyBoxes);

  function createBoxes(amount) {
    destroyBoxes(); // Очищуємо попередню колекцію
    const fragment = document.createDocumentFragment();
    let size = 30;
    for (let i = 0; i < amount; i++) {
      const div = document.createElement("div");
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      div.style.marginBottom = "10px";
      fragment.appendChild(div);
      size += 10;
    }
    boxesContainer.appendChild(fragment);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = "";
  }
});
