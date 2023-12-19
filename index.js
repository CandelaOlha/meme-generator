const closeImageEditorButton = document.querySelector(
  "#closeImageEditorButton"
);
const closeTextEditorButton = document.querySelector("#closeTextEditorButton");
const editMemeImageButton = document.querySelector("#editMemeImageButton");
const editMemeTextButton = document.querySelector("#editMemeTextButton");
const asideImageEditor = document.querySelector("#asideImageEditor");
const asideTextEditor = document.querySelector("#asideTextEditor");
const imageForm = document.querySelector("#imageForm");
const memeImage = document.querySelector(".meme-image");
const urlInput = document.querySelector("#urlInput");
const imageBackgroundColorInput = document.querySelector(
  "#imageBackgroundColorInput"
);

// Open and close aside forms

const closeImageEditor = () => {
  asideImageEditor.classList.add("hidden");
  asideTextEditor.classList.remove("hidden");
};

closeImageEditorButton.addEventListener("click", closeImageEditor);
editMemeTextButton.addEventListener("click", closeImageEditor);

const closeTextEditor = () => {
  asideTextEditor.classList.add("hidden");
  asideImageEditor.classList.remove("hidden");
};

closeTextEditorButton.addEventListener("click", closeTextEditor);
editMemeImageButton.addEventListener("click", closeTextEditor);

imageForm.onsubmit = (e) => {
  e.preventDefault();
};

// Image settings

urlInput.onchange = () => {
  const backgroundImage = urlInput.value;
  memeImage.style.backgroundImage = `url(${backgroundImage})`;
};

imageBackgroundColorInput.oninput = () => {
  const backgroundColor = imageBackgroundColorInput.value;
  memeImage.style.backgroundColor = backgroundColor;
};
