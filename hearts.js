const body = document.querySelector("body");

body.addEventListener("mousemove", (e) => {
  const xPosition = e.offsetX;

  const yPosition = e.offsetY;

  const spanElement = document.createElement("span");

  spanElement.style.left = xPosition + "px";

  spanElement.style.top = yPosition + "px";

  const size = Math.random() * 100;

  spanElement.style.width = size + "px";

  spanElement.style.height = size + "px";

  body.appendChild(spanElement);

  setTimeout(() => {
    spanElement.remove();
  }, 3000);
});

body.addEventListener("click", (e) => {
  const xPosition = e.offsetX;

  const yPosition = e.offsetY;

  const spanElement = document.createElement("span");

  spanElement.style.left = xPosition + "px";

  spanElement.style.top = yPosition + "px";

  const size = Math.random() * 100;

  spanElement.style.width = size + "px";

  spanElement.style.height = size + "px";

  body.appendChild(spanElement);

  setTimeout(() => {
    spanElement.remove();
  }, 3000);
});
