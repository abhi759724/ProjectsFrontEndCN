const box = document.getElementById("box");

// change box postion on mouse hovering over the element

function moveBox() {
  const movableWidth = window.innerWidth - parseFloat(box.style.width);
  const movableHeight = window.innerHeight - parseFloat(box.style.height);

  const randomX = Math.random() * movableWidth;
  const randomY = Math.random() * movableHeight;

  box.style.left = randomX + "px";
  box.style.top = randomY + "px";
}

box.addEventListener("mouseenter", () => {
  moveBox();
});

function changeBoxSize() {
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  box.style.width = Math.min(viewportWidth, viewportHeight) * 0.2 + "px";
  box.style.height = Math.min(viewportHeight, viewportWidth) * 0.2 + "px";
}
changeBoxSize();

window.addEventListener("resize", changeBoxSize);

// const box = document.getElementById("box");

// // Update box size based on viewport size
// function updateBoxSize() {
//   const viewportWidth = window.innerWidth;
//   const viewportHeight = window.innerHeight;

//   // Adjust box size based on viewport size
//   const boxSize = Math.min(viewportWidth, viewportHeight) * 0.2;
//   box.style.width = boxSize + "px";
//   box.style.height = boxSize + "px";
// }

// // Update box position randomly within the viewport
// function updateBoxPosition() {
//   const viewportWidth = window.innerWidth - parseFloat(box.style.width);
//   const viewportHeight = window.innerHeight - parseFloat(box.style.height);

//   const randomX = Math.random() * viewportWidth;
//   const randomY = Math.random() * viewportHeight;

//   box.style.left = randomX + "px";
//   box.style.top = randomY + "px";
// }

// // Update box size on initial load and when the window is resized
// updateBoxSize();
// window.addEventListener("resize", updateBoxSize);

// // Update box position when hovered over
// box.addEventListener("mouseenter", () => {
//   updateBoxPosition();
// });
