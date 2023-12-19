const closeImageEditor = document.querySelector("#closeImageEditor");
const closeTextEditor = document.querySelector("#closeTextEditor");
const asideImageEditor = document.querySelector("#asideImageEditor");
const asideTextEditor = document.querySelector("#asideTextEditor");

closeImageEditor.onclick = () => {
  asideImageEditor.classList.add("hidden");
  asideTextEditor.classList.remove("hidden");
};

closeTextEditor.onclick = () => {
  asideTextEditor.classList.add("hidden");
  asideImageEditor.classList.remove("hidden");
};
