const form = document.querySelector("#signup-form");

document.querySelectorAll(".textfield").forEach((field) => {
  field.addEventListener("change", (event) => {
    event.currentTarget.classList.add("dirty");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
