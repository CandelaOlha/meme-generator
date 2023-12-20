const closeImageEditorButton = document.querySelector(
  "#closeImageEditorButton"
);
const closeTextEditorButton = document.querySelector("#closeTextEditorButton");
const editMemeImageButton = document.querySelector("#editMemeImageButton");
const editMemeTextButton = document.querySelector("#editMemeTextButton");
const asideImageEditor = document.querySelector("#asideImageEditor");
const asideTextEditor = document.querySelector("#asideTextEditor");
const imageForm = document.querySelector("#imageForm");
const textForm = document.querySelector("#textForm");
const memeImage = document.querySelector(".meme-image");
const urlInput = document.querySelector("#url");
const imageBackgroundColorInput = document.querySelector(
  "#imageBackgroundColor"
);
const topTextEditor = document.querySelector("#topTextEditor");
const bottomTextEditor = document.querySelector("#bottomTextEditor");
const memeTopText = document.querySelector(".meme-top-text");
const memeBottomText = document.querySelector(".meme-bottom-text");
const withoutTopTextCheckbox = document.querySelector("#withoutTopText");
const withoutBottomTextCheckbox = document.querySelector("#withoutBottomText");
const fontFamiliesSelect = document.querySelector("#fontFamilies");
const fontSizeInput = document.querySelector("#fontSize");
const alignLeftButton = document.querySelector("#alignLeft");
const alignCenterButton = document.querySelector("#alignCenter");
const alignRightButton = document.querySelector("#alignRight");
const textColorInput = document.querySelector("#textColor");
const textBackgroundColorInput = document.querySelector("#textBackgroundColor");

imageForm.onsubmit = (e) => {
  e.preventDefault();
};

textForm.onsubmit = (e) => {
  e.preventDefault();
};

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

// Image settings

urlInput.onchange = () => {
  const backgroundImage = urlInput.value;
  memeImage.style.backgroundImage = `url(${backgroundImage})`;
};

imageBackgroundColorInput.oninput = () => {
  const backgroundColor = imageBackgroundColorInput.value;
  memeImage.style.backgroundColor = backgroundColor;
};

// Text settings

topTextEditor.oninput = () => {
  memeTopText.textContent = topTextEditor.value;
};

withoutTopTextCheckbox.onchange = () => {
  if (withoutTopTextCheckbox.checked) {
    memeTopText.classList.add("hidden");
  } else {
    memeTopText.classList.remove("hidden");
  }
};

bottomTextEditor.oninput = () => {
  memeBottomText.textContent = bottomTextEditor.value;
};

withoutBottomTextCheckbox.onchange = () => {
  if (withoutBottomTextCheckbox.checked) {
    memeBottomText.classList.add("hidden");
  } else {
    memeBottomText.classList.remove("hidden");
  }
};

fontFamiliesSelect.onchange = () => {
  const fontFamily = fontFamiliesSelect.value;
  if (fontFamily === "arial") {
    memeTopText.style.fontFamily = "Arial";
    memeBottomText.style.fontFamily = "Arial";
  } else if (fontFamily === "montserrat") {
    memeTopText.style.fontFamily = "Montserrat";
    memeBottomText.style.fontFamily = "Montserrat";
  } else if (fontFamily === "american-typewriter") {
    memeTopText.style.fontFamily = "American Typewriter";
    memeBottomText.style.fontFamily = "American Typewriter";
  } else if (fontFamily === "monospace") {
    memeTopText.style.fontFamily = "Monospace";
    memeBottomText.style.fontFamily = "Monospace";
  } else if (fontFamily === "comic-sans") {
    memeTopText.style.fontFamily = "Comic Sans MS";
    memeBottomText.style.fontFamily = "Comic Sans MS";
  } else if (fontFamily === "impact") {
    memeTopText.style.fontFamily = "Impact";
    memeBottomText.style.fontFamily = "Impact";
  } else if (fontFamily === "verdana") {
    memeTopText.style.fontFamily = "Verdana";
    memeBottomText.style.fontFamily = "Verdana";
  }
};

fontSizeInput.oninput = () => {
  const fontSize = `${fontSizeInput.value}px`;
  memeTopText.style.fontSize = fontSize;
  memeBottomText.style.fontSize = fontSize;
};

alignLeftButton.onclick = () => {
  memeTopText.style.textAlign = "left";
  memeBottomText.style.textAlign = "left";
};

alignCenterButton.onclick = () => {
  memeTopText.style.textAlign = "center";
  memeBottomText.style.textAlign = "center";
};

alignRightButton.onclick = () => {
  memeTopText.style.textAlign = "right";
  memeBottomText.style.textAlign = "right";
};

textColorInput.oninput = () => {
  const textColor = textColorInput.value;
  memeTopText.style.color = textColor;
  memeBottomText.style.color = textColor;
};

textBackgroundColorInput.oninput = () => {
  const textBackgroundColor = textBackgroundColorInput.value;
  memeTopText.style.backgroundColor = textBackgroundColor;
  memeBottomText.style.backgroundColor = textBackgroundColor;
};
