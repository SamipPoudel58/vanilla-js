const pointer = document.getElementById("pointer");
const links = document.querySelectorAll(".link");
const body = document.querySelector("*");
// console.log(pointer.getBoundingClientRect().height);

body.addEventListener("mousemove", (e) => {
  if (
    e.pageX <
    document.body.clientWidth - pointer.getBoundingClientRect().width / 2
  ) {
    pointer.style.top = e.pageY + "px";
    pointer.style.left = e.pageX + "px";
    body.style.cursor = none;
  } else {
    body.style.cursor = "default";
  }
});

for (let link of links) {
  link.addEventListener("mouseleave", () => {
    pointer.classList.remove("grow");
  });
  link.addEventListener("mouseover", () => {
    pointer.classList.add("grow");
  });
}
